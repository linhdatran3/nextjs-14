"use client";
import Link from "next/link";
import { type IRoute } from "@/utils";
import { usePathname } from "next/navigation";

const NavLinkItem = ({ item }: { item: IRoute }) => {
    const pathName = usePathname();
    return (
        <Link href={item.path} className={pathName === item.title ? "active" : ""}>
            {item.title}
        </Link>
    );
};

export default NavLinkItem;
