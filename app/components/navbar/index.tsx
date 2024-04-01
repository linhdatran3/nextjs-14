import { ROUTES } from "@/utils";
import NavLinkItem from "./links";
import styles from './navbar.module.css';


const Navbar = () => {

    return (
        <div className={styles.navbar}>
            {ROUTES.map((link) => (
                <NavLinkItem item={link} key={link.title} />
            ))}
        </div>
    );
}
export default Navbar