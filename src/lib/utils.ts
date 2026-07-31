import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const siteConfig = {
  name: "Blue Oracle Consulting",
  domain: "blueoracleconsulting.com",
  url: "https://blueoracleconsulting.com",
  email: "hello@blueoracleconsulting.com",
  tagline: "Operations management consulting for planning, scheduling, and Blue MMS.",
  productName: "Blue MMS",
  productTagline: "AI-powered maintenance management",
  /** Live Blue MMS app — set NEXT_PUBLIC_BLUE_MMS_DEMO_URL in Vercel after you deploy the app */
  cmmsDemoUrl:
    process.env.NEXT_PUBLIC_BLUE_MMS_DEMO_URL?.replace(/\/$/, "") ||
    "http://localhost:3000",
};
