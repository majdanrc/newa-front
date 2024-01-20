import React, { CSSProperties } from 'react';
import Link from 'next/link';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { monoton } from '@/app/ui/fonts';

const Header = () => {
    const style: CSSProperties = {
        position: 'sticky',
        top: 0,
        width: '100%',
        backgroundColor: '#333',
        color: '#fff',
        padding: '1px 10px', // Change this line
        display: 'flex',
        justifyContent: 'space-between'
    };

    const navStyle: CSSProperties = {
        display: 'flex',
        alignItems: `center`
    };

    const linkStyle: CSSProperties = {
        color: '#3c4f3a',
        marginLeft: '10px',
        marginRight: '10px',
    };

    const links = [
        { name: <FaFacebook />, url: 'https://www.facebook.com' },
        { name: <FaTwitter />, url: 'https://www.twitter.com' },
        { name: <FaLinkedin />, url: 'https://www.linkedin.com' },
    ];
    return (
        <header style={style}>
            <h1 className={`${monoton.className}`}>nie rób kina</h1>
            <nav style={navStyle}>
                {links.map((link, index) => (
                    <Link key={index} href={link.url} passHref>
                        <span style={linkStyle}>
                            {link.name}
                        </span>
                    </Link>
                ))}
            </nav>
        </header>
    );
};

export default Header;