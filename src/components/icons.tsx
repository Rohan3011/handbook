import {
  CreditCard,
  CurlyBraces,
  FileText,
  Laptop,
  Loader,
  Moon,
  Settings,
  SunMedium,
  User,
  X,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type Icon = LucideIcon;

export const Icons = {
  sun: SunMedium,
  moon: Moon,
  laptop: Laptop,
  settings: Settings,
  post: FileText,
  billing: CreditCard,
  logo: CurlyBraces,
  spinner: Loader,
  user: User,
  close: X,
};
