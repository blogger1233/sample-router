import { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";

export default function Name() {
    const { userId } = useParams();
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const image = useRef(null);

    async function fetchData() {
        try {
            const response = await fetch(
                `http://localhost:8000/user/${userId}` // Include the protocol (http/https)
            );
            const info = await response.json();

            setData(info.data);
            setLoading(false);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        setLoading(true)
        fetchData();
    }, [userId]);

    useEffect(() => {
        console.log(data);
    }, [data]);

    return (
        <div className="right">
            {loading ? (
                <div className="center">Loading...</div>
            ) : (
                <div className="first-row">
                    <div className="container">

                        <img
                            src={data[0].image_dest}
                            key={data[0].id}
                            ref={image}
                            className="image"
                            alt="Your friend"
                            loading="lazy"
                            onLoad={() => {
                                image.current.style.opacity = 1;
                            }}
                        />
                    </div>
                    <div className="row-inside">
                        <h3>
                            {data[0].name}
                            <img
                                src={data[0].icon}
                                className="logo"
                                alt="Star"
                            />
                        </h3>
                        <p>
                            <button className="search_button blue">Edit</button>
                            <button className="search_button red">Delete</button>
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
}
