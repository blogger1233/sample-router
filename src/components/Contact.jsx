import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

export default function Contact() {
    return (
        <div className="contact">
            <Navbar />
            <Outlet />
        </div>
    );
}
