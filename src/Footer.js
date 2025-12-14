import Nav from "./Nav";
import logo from "./logo.jpg"

export default function Footer() {
    return (
        <footer>
            <img
                src={logo}
                alt="Little Lemon Logo"
            />
            <Nav />
        </footer>
    )
}