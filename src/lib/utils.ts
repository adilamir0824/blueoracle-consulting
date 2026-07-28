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
  tagline: "Operations management consulting for planning, scheduling, and smarter maintenance.",
  cmmsDemoUrl: "http://localhost:3000",
};
