import Nav from "./Nav";
import logo from "./logo.jpg"

export default function Header() {
    return (
        <header>
            <img
                src={logo}
                alt="Little Lemon Logo"
            />
            <Nav />
        </header>
    )
}