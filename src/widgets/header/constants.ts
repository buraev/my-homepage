import type { Service } from "./model"

export const SERVICES_CARDS: Service[] = [
  {
    isVisible: true,
    href: "/market",
    title: "Рынки МО",
    icon: "/assets/services/market-building.png",
    description: "Все о рынках\nМосковской области",
  },
  {
    isVisible: true,
    href: "/borschevik",
    title: "Борьба с борщевиком",
    group: "Информационные страницы",
    description: "Борьба с борщевиком",
    icon: "/assets/services/borshevik.png",
  },
  {
    isVisible: false,
    title: "Субсидии МО",
    href: "http://10.111.126.218:8091/",
    icon: "/assets/services/subsidies.png",
    description: "Сервис по получению субсидий СХТП\nМосковской области",
  },
  {
    isVisible: false,
    title: "Ярмарки МО",
    icon: "/assets/services/fairs.png",
    href: "http://10.111.126.218:8091/",
    description: "Все о ярмарках\nМосковской области",
  },
  {
    isVisible: false,
    description: "",
    href: "/new-year-landing",
    title: `Карта елочных базаров МО`,
    icon: "/assets/services/tree-fairs.png",
  },
  {
    isVisible: false,
    description: "",
    href: "/new-year-yarmarki",
    title: "Карта новогодних ярмарок МО",
    icon: "/assets/services/ny-fairs.png",
  },
  {
    isVisible: false,
    href: "/zima-esh-v-podmoskovie",
    title: "Карта “Ешь в Подмосковье”",
    icon: "/assets/esh/service-icon.svg",
  },
  {
    title: "ЛК МСХ",
    isVisible: false,
    icon: "/lk-msh-icon.png",
    href: "http://10.111.126.218:8091/",
    description: "Сервис электронных услуг по\nполучению субсидий СХТП МО",
  },
  {
    isVisible: false,
    description: "",
    title: `Масленица МО`,
    icon: "/maslenitsa-services-logo.png",
    href: "/maslenitsa",
  },
]
