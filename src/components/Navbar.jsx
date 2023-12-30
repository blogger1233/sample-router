import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
    const [loading, setLoading] = useState(true);
    const [selectedLinkId, setSelectedLinkId] = useState("")
    const [data, setData] = useState("");

    const fetchData = async function () {
        try {
            const response = await fetch("http://localhost:8000/navbar");
            const data = await response.json();
            setData(data);
            setLoading(false);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="navbar">
            <div className="search">
                <input type="text" placeholder="Search" className="input-text" />
                <button className="search_button">New</button>
            </div>
            <div className="links">
                {loading ? (
                    <p>Loading...</p>
                ) : (
                    data.data.map((value) => (
                        <Link key={value.id} to={"/contact/" + value.id}
                            onClick={() => { setSelectedLinkId(value.id) }}
                            className={`link ${selectedLinkId == value.id ? "selected" : ""}`}
                        >
                            {value.name}
                        </Link>
                    ))
                )}
            </div>
            <div className="links">
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6wFmK2umkWNeyajvJ7Zl-V5VAX7m48ccltgrGwavtVw&s"
                    height={30}
                    alt="logo"
                />
                React Router DOM
            </div>
        </div>
    );
}
