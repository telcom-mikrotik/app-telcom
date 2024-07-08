import { IconType } from "react-icons";

export interface ConfiurationState {
  isOpen: boolean;

  setOpen: (isOpen: boolean) => void;
}

export interface SliderContent {
  img:          string;
  name:         string;
  description:  string;
}

export interface PropsItemService {
  title: string;
  image: string;
}

export interface PropsItemCliente {
  image:        string;
  name:         string;
  description?: string;
  facebook?:    string;
  instagram?:   string;
  email?:       string;
}

export interface ThemeState {
  theme: boolean;
  setTheme: (theme: boolean) => void;
}

export interface PropsItemTheam {
  image:      string;
  name:       string;
  booth:      string;
  phone:      string;
  email?:     string;
  facebook?:  string;
  instagram?: string;
  linkedin?:  string;
}

export interface PropsItemCount {
  Icon: IconType;
  counter: string,
  title: string;
}