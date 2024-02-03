import React from "react";
import TopHeader from "./topheader";
import Navbar from "./navbarevo";
const Header = () => {
    return (
        <div>
            {/* Top header */}
            <TopHeader />
            {/* Main header (navbar) */}
            <Navbar />
        </div>
    );
};
export default Header;