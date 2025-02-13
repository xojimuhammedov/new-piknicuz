import { background, Box, Heading, Image, Link, SimpleGrid } from '@chakra-ui/react';
import React from 'react';

import LogoIcon from '../assets/logo.svg'

const Footer = () => {
    return (
        <Box {...css.footer}>
            <Box className='container'>
                <SimpleGrid columns={3}>
                    <Box>
                        <Image {...css.image} src={LogoIcon} alt='LogoIcon' />
                    </Box>
                    <Box>
                        <Heading {...css.name}>Kompaniya</Heading>
                        <Link {...css.link} href='#'>Bosh sahifa</Link>
                        <Link {...css.link} href='#'>Mahsulotlar</Link>
                        <Link {...css.link} href='#'>Aloqa</Link>
                        <Link {...css.link} href='#'>Blog</Link>
                    </Box>
                    <Box>
                        <Heading {...css.name}>Aloqa</Heading>
                        <Link {...css.link} href='#'>+998 97 747 28 06</Link>
                        <Link {...css.link} href='#'>Uzbekistan, Tashkent, Yakkasaray district Shota Rustaveli street 43</Link>
                    </Box>
                </SimpleGrid>
            </Box>
        </Box>
    );
}

export default Footer;


const css = {
    footer: {
        background: "#245D30",
        padding: "78px 0"
    },
    link: {
        fontSize: "16px",
        lineHeight: "24px",
        fontWeight: "500",
        color: "rgba(255, 255, 255, 0.60)",
        display: "block",
        padding: "8px 0"
    },
    name: {
        color: "#fff",
        fontSize: "22px",
        lineHeight: "28px",
        fontWeight: "500",
        letterSpacing: "3px",
        marginBottom: "16px"
    },
    image:{
        width:"100px",
        height:"100px"
    }
}