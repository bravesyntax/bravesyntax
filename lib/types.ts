import { StaticImageData } from "next/image";

// Asset Types
export interface Assets {
  user_image: StaticImageData;
  code_icon: StaticImageData;
  code_icon_dark: StaticImageData;
  edu_icon: StaticImageData;
  edu_icon_dark: StaticImageData;
  project_icon: StaticImageData;
  project_icon_dark: StaticImageData;
  AboutImg: StaticImageData;
  vscode: StaticImageData;
  firebase: StaticImageData;
  figma: StaticImageData;
  git: StaticImageData;
  userImage: StaticImageData;
  userImg: StaticImageData;
  mongodb: StaticImageData;
  right_arrow_white: StaticImageData;
  shopifyDark: StaticImageData;
  logo: StaticImageData;
  dark_logo: StaticImageData;
  mail_icon: StaticImageData;
  mail_icon_dark: StaticImageData;
  profile_img: StaticImageData;
  download_icon: StaticImageData;
  hand_icon: StaticImageData;
  header_bg_color: StaticImageData;
  moon_icon: StaticImageData;
  sun_icon: StaticImageData;
  arrow_icon: StaticImageData;
  arrow_icon_dark: StaticImageData;
  menu_black: StaticImageData;
  menu_white: StaticImageData;
  close_black: StaticImageData;
  close_white: StaticImageData;
  web_icon: StaticImageData;
  mobile_icon: StaticImageData;
  ui_icon: StaticImageData;
  graphics_icon: StaticImageData;
  right_arrow: StaticImageData;
  send_icon: StaticImageData;
  right_arrow_bold: StaticImageData;
  right_arrow_bold_dark: StaticImageData;
  subhot: StaticImageData;
}

// Component Props
export interface NavbarProps {
  isDarkMode: boolean;
  setIsDarkMode: (value: boolean | ((prev: boolean) => boolean)) => void;
}

export interface AboutProps {
  isDarkMode: boolean;
}

// Data Types
export interface InfoItem {
  icon: StaticImageData;
  iconDark: StaticImageData;
  title: string;
  description: string;
}

export interface ToolItem {
  id: number;
  src: StaticImageData;
  link: string;
}

export interface ServiceItem {
  id: number;
  title: string;
  description: string;
  src: StaticImageData;
}

export interface ProjectItem {
  id: number;
  title: string;
  description: string;
  src: StaticImageData;
  link: string;
}

export interface WorkItem {
  title: string;
  description: string;
  bgImage: string;
}

export interface ServiceData {
  icon: StaticImageData;
  title: string;
  description: string;
  link: string;
}

export interface ProfessionalService {
  id: number;
  title: string;
  description: string;
  price?: string;
  priceNote: string;
  deliveryTime: string;
  icon: string;
  color: string;
}

export interface FeaturedProject {
  id: number;
  name: string;
  description: string;
  tech: string[];
  category: string;
  year: string;
  status: string;
  link: string;
}

// Form Types
export interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  mobile: string;
  message: string;
}

export interface FormSubmissionResponse {
  success: boolean;
  message?: string;
}

// Hook Types
export interface UseDarkModeReturn {
  isDarkMode: boolean;
  setIsDarkMode: (value: boolean | ((prev: boolean) => boolean)) => void;
}

export interface UseScrollReturn {
  isScroll: boolean;
  showNavbar: boolean;
}

// Error Boundary Types
export interface ErrorBoundaryProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

export interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}
