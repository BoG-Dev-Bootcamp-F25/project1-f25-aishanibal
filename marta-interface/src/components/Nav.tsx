import { NavLink } from "react-router-dom";

export default function Nav(){
    return (
        <nav className="bg-gray shadow-lg border-b">
            <div className = "flex p-5 justify-center space-x-8 ">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/lines">Lines</NavLink>
                <NavLink to="/about">About</NavLink>
            </div>
        </nav>
    )
}