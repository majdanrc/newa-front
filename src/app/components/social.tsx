import React, { CSSProperties } from 'react';
import Link from 'next/link';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Header = () => {
    const style: CSSProperties = {
        position: 'fixed',
        top: 0,
        width: '100%',
        backgroundColor: '#333',
        color: '#fff',
        padding: '10px',
        display: 'flex',
        justifyContent: 'space-between'
    };

    const navStyle: CSSProperties = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
    };

    const links = [
        { name: <FaFacebook />, url: 'https://www.facebook.com' },
        { name: <FaTwitter />, url: 'https://www.twitter.com' },
        { name: <FaLinkedin />, url: 'https://www.linkedin.com' },
    ];
    return (
        <header style={style}>
            <h1>My Website</h1>
            <nav style={navStyle}>
                {links.map((link, index) => (
                    <Link key={index} href={link.url} passHref>
                        <span style={{ color: '#fff', marginLeft: '10px' }}>
                            {link.name}
                        </span>
                    </Link>
                ))}
            </nav>
        </header>
    );
};

export default Header;