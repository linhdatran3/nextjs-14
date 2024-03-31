import { ROUTES } from "@/utils";
import NavLinkItem from "./navLink";

const Links = () => {
    const session = true;
    const isAdmin = false;

    return (
        <div>
            {ROUTES.map((link) => (
                <NavLinkItem item={link} key={link.title} />
            ))}
            {session ? (
                <>
                    {isAdmin && <NavLinkItem item={{ title: "Admin", path: "/admin" }} />}
                    <button>Logout</button>
                </>
            ) : (
                <NavLinkItem item={{ title: "Login", path: "/login" }} />
            )}
        </div>
    );
};
export default Links;
