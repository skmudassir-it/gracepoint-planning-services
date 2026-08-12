import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/** Stagger delay for staggered grids: index * 80ms cascade. */
export function staggerDelay(index: number, base = 0.08) {
  return index * base
}
