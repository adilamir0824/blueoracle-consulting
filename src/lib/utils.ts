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
  cmmsDemoUrl: "http://localhost:3000",
};
