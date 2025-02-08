import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const Env = import.meta.env
 
export function getBaseURL(url?: string): string {

  return Env.MODE === 'production'
    ? `${Env.VITE_API}`
    : `${Env.VITE_DEV_API}${url ?? ''}`;
}
 
 
export function getAssetURL(url: string = "", assets: boolean = false): string {
  const prodApiUrl = Env.VITE_API

  return Env.NODE_ENV === 'production' && prodApiUrl
    ? prodApiUrl
    : assets ? 
      `${Env.VITE_API}/${url}` 
      : `${Env.VITE_DEV_API}/${url}`;
}