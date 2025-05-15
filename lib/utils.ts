import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * A utility function that combines clsx and tailwind-merge
 * It allows for conditional class names and properly merges Tailwind CSS classes
 * without style conflicts
 */
export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}
