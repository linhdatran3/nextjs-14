import Link from "next/link"
import Links from "./links"

const Navbar = () => {
    return <div>
        <Link href="/" className="logo">Logo</Link>
        <Links />
    </div>
}
export default Navbar