import { useCallback, useEffect, useRef, useState } from "react"
import * as THREE from "three"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js"

import { loadGLTFModel } from "./model"
import { Container, Spinner } from "./voxel-loader"

function easeOutCirc(x: any) {
  return Math.sqrt(1 - Math.pow(x - 1, 4))
}

export const VoxelMain = () => {
  const refContainer = useRef(null)
  const [loading, setLoading] = useState(true)
  const refRenderer = useRef(null)

  const handleWindowResize = useCallback(() => {
    const { current: renderer } = refRenderer as any
    const { current: container } = refContainer as any
    if (container && renderer) {
      const scW = container?.clientWidth
      const scH = container?.clientHeight

      renderer?.setSize(scW, scH)
    }
  }, [])

  useEffect(() => {
    const { current: container } = refContainer as any
    if (container) {
      const scW = container.clientWidth
      const scH = container.clientHeight

      const renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
      }) as any
      renderer.setPixelRatio(window.devicePixelRatio)
      renderer.setSize(scW, scH)
      renderer.outputEncoding = THREE.SRGBToLinear
      container.appendChild(renderer.domElement)
      refRenderer.current = renderer
      const scene = new THREE.Scene()

      const target = new THREE.Vector3(0, -0.1, 0)
      const initialCameraPosition = new THREE.Vector3(
        20 * Math.sin(0.2 * Math.PI),
        10,
        20 * Math.cos(0.2 * Math.PI),
      )

      // 640 -> 240
      // 8   -> 6
      const scale = scH * 0.003 + 1
      const camera = new THREE.OrthographicCamera(
        -scale,
        scale,
        scale,
        -scale,
        0.01,
        50000,
      )
      camera.position.copy(initialCameraPosition)
      camera.lookAt(target)

      const ambientLight = new THREE.AmbientLight(0xcccccc, Math.PI)
      scene.add(ambientLight)

      const controls = new OrbitControls(camera, renderer.domElement)
      controls.autoRotate = true
      controls.target = target

      loadGLTFModel(scene, "/moon.glb", {
        receiveShadow: false,
        castShadow: false,
      }).then(() => {
        animate()
        setLoading(false)
      })

      let req = null as any
      let frame = 0
      const animate = () => {
        req = requestAnimationFrame(animate)

        frame = frame <= 100 ? frame + 1 : frame

        if (frame <= 100) {
          const p = initialCameraPosition
          const rotSpeed = -easeOutCirc(frame / 120) * Math.PI * 20

          camera.position.y = 10
          camera.position.x =
            p.x * Math.cos(rotSpeed) + p.z * Math.sin(rotSpeed)
          camera.position.z =
            p.z * Math.cos(rotSpeed) - p.x * Math.sin(rotSpeed)
          camera.lookAt(target)
        } else {
          controls.update()
        }

        renderer.render(scene, camera)
      }

      return () => {
        cancelAnimationFrame(req)
        renderer.domElement.remove()
        renderer.dispose()
      }
    }
  }, [loading])

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize, false)
    return () => {
      window.removeEventListener("resize", handleWindowResize, false)
    }
  }, [handleWindowResize])

  return <Container ref={refContainer}>{loading && <Spinner />}</Container>
}
