import type { ClassValue } from "clsx"
import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * Объединяет несколько значений классов в одну строку.
 *
 * @param {ClassValue[]} inputs - Массив значений классов для объединения.
 * @return {string} - Объединенная строка с классами.
 */
export function cx(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs))
}
