import React ,{useState}from "react";
import Modal from "./Modal.jsx";

export default function Navbar(){
    const [isOpen, setIsOpen] = useState(false);
    const checkLogin = () =>{
        setIsOpen(true);
    }
    return (
        <>
            <header>
                <h2>Food Blog</h2>
                <ul>
                    <li>Home</li>
                    <li>My Recipe</li>
                    <li>Favourites</li>
                    <li onClick={checkLogin}>Login</li>
                    <li>Logout</li>
                </ul>
            </header>
            {isOpen &&<Modal onClose={() => setIsOpen(false)}/>}
        </>
    )
}