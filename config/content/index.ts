import type { Language } from "@/config/preferences";
import { en } from "./en";
import { pt, type Content } from "./pt";

export type { Content };
export type Slide = Content["slides"][number];

export const content: Record<Language, Content> = { pt, en };
