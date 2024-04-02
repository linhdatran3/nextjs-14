"use client";
import Link from "next/link";
import { type IRoute } from "@/utils";
import { usePathname } from "next/navigation";
import styles from "./navLink.module.css";
import { FaFaceDizzy } from "react-icons/fa6";
import { clsx } from "clsx";

const NavLinkItem = ({ item }: { item: IRoute }) => {
  const pathName = usePathname();
  const Icon = item.icon ?? FaFaceDizzy;
  return (
    <Link
      href={item.path}
      className={clsx(
        "flex items-center align-middle lg:pl-3 sm:px-3 m-1",
        pathName === item.title ? styles.active : ""
      )}
    >
      <Icon className="text-xl lg:text-3xl" />

      <div className="hidden md:flex mx-2 justify-center w-full">
        {item.title}
      </div>
    </Link>
  );
};

export default NavLinkItem;
