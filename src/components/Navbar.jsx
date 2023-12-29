import { Link } from "react-router-dom";

export default function Navbar() {
    return (<div className="navbar">
        <div className="search">
            <input
                type="text"
                placeholder="Search"
                className="input-text"
            />
            <button className="search_button">
                New
            </button>
        </div>
        <div className="links">
            <Link className="link" to="/name">
                Your Name
            </Link>
            <Link className="link" to="/friend">
                Your friend
            </Link>
        </div>
        <div className="links">
            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6wFmK2umkWNeyajvJ7Zl-V5VAX7m48ccltgrGwavtVw&s"
                height={30}
            />
            react router dom

        </div>
    </div>)
}