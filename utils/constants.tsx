import { IconType } from "react-icons";
import { FaBlog, FaHome } from "react-icons/fa";
import { RiContactsLine } from "react-icons/ri";
import { SiAboutdotme } from "react-icons/si";

export interface IRoute {
  title: string;
  path: string;
  icon?: IconType;
}

export const ROUTES: IRoute[] = [
  {
    title: "Home",
    path: "/",
    icon: FaHome,
  },
  {
    title: "About",
    path: "/about",
    icon: SiAboutdotme,
  },
  {
    title: "Blog",
    path: "/blog",
    icon: FaBlog,
  },
  {
    title: "Contact",
    path: "/contact",
    icon: RiContactsLine,
  },
];
