"use client";

import { ROUTES } from "@/utils";
import NavLinkItem from "./links";
import styles from "./navbar.module.css";
import { clsx } from "clsx";

const Navbar = () => {
  return (
    <div className={clsx(styles.navbar, "w-[50px] md:w-[200px] lg:w-[200px]")}>
      {ROUTES.map((link) => (
        <NavLinkItem item={link} key={link.title} />
      ))}
    </div>
  );
};
export default Navbar;
