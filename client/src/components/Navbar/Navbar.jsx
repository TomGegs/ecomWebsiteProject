import React, { useState } from "react";

import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import beforeScrollNavLogo from "../../images/beforeScrollNavLogo.svg";
import "./Navbar.scss";
import Cart from "../Cart/Cart";

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [close, setClose] = useState(true);

    const selectedProducts = useSelector((state) => state.cart.products);

    // Calculate the total quantity of items in the cart
    const totalQuantity = selectedProducts.reduce(
        (total, item) => total + item.quantity,
        0
    );

    //menu toggle
    const toggleMenu = () => {
        setOpen(!open);
        setClose(!close);
    };

    return (
        <div className="navbar">
            <div className="wrapper">
                <div className="item hamburger" onClick={toggleMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                <div className="left">
                    <div className="item">
                        <Link className="link" to="/products/1">
                            Woman
                        </Link>
                    </div>
                    <div className="item">
                        <Link className="link" to="/products/2">
                            Men
                        </Link>
                    </div>
                </div>
                <div className="center">
                    <Link className="link" to="/">
                        <img
                            src={beforeScrollNavLogo}
                            alt="logo"
                            className="logo"
                        />
                    </Link>
                </div>
                <div className="right">
                    <div className="item">
                        <Link className="link" to="/">
                            About
                        </Link>
                    </div>
                    <div className="item">
                        <Link className="link" to="/">
                            Contact
                        </Link>
                    </div>
                    <div className="item">
                        <Link className="link" to="/">
                            Stores
                        </Link>
                    </div>
                    <div className="icons">
                        <PersonOutlineIcon />
                        <div
                            className="cartIcon"
                            onClick={() => setOpen(!open)}>
                            <ShoppingCartOutlinedIcon />
                            <span>{totalQuantity}</span>
                        </div>
                    </div>
                </div>
            </div>
            {open && (
                <div className="mobileMenu">
                    {/* Mobile menu content goes here */}
                </div>
            )}
            {open && <Cart />}
        </div>
    );
};

export default Navbar;
