import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

 
export function getBaseURL(url?: string): string {

  return process.env.NODE_ENV === 'production'
    ? `${process.env.NEXT_PUBLIC_API}`
    : `http://localhost:3333/api/v1${url ?? ''}`;
}
 
 
export function getAssetURL(url: string = "", assets: boolean = false): string {
  const prodApiUrl = process.env.NEXT_PUBLIC_API

  return process.env.NODE_ENV === 'production' && prodApiUrl
    ? prodApiUrl
    : assets ? 
      `http://localhost:3333/${url}` 
      : `http://localhost:3333/${url}`;
}