import NavLinkItem from '../navbar/links';
import styles from './header.module.css';

const Header = () => {
    const session = true;
    const isAdmin = false;
    return <div className={styles.header}>
        <div>Logo</div>
        <div>Search</div>
        <div>
            {session ? (
                <>
                    {isAdmin && <NavLinkItem item={{ title: "Admin", path: "/admin" }} />}
                    <button>Logout</button>
                </>
            ) : (
                <NavLinkItem item={{ title: "Login", path: "/login" }} />
            )}
        </div>
    </div>
}
export default Header