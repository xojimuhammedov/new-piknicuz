import { Box, Flex, Heading, Image, Link, SimpleGrid, Text } from '@chakra-ui/react';
import React from 'react';
import LogoIcon from '../assets/logo.svg'
import InstagramIcon from '../assets/InstagramIcon';

import { Link as ALink } from 'react-router-dom'
import TelegramIcon from '../assets/TelegramIcon';

const Footer = () => {
    return (
        <Box {...css.footer}>
            <Box className='container'>
                <SimpleGrid gap={'24px'} columns={{ base: 1, lg: 3 }}>
                    <Box>
                        <Image {...css.image} src={LogoIcon} alt='LogoIcon' />
                        <Flex gap={'16px'} align={'center'}>
                            <Link target='_blank' href='https://www.instagram.com/Piknic_uz'>
                                <InstagramIcon />
                            </Link>
                            <Link target='_blank' href='https://t.me/Piknicuzz'>
                                <TelegramIcon />
                            </Link>
                        </Flex>
                    </Box>
                    <Box>
                        <Heading {...css.name}>Kompaniya</Heading>
                        <Link {...css.link} href='#'>Bosh sahifa</Link>
                        <Link {...css.link} href='#'>Mahsulotlar</Link>
                        <ALink to={'/contact'}>
                            <Text {...css.link}>Aloqa</Text>
                        </ALink>
                        <ALink to={'/blog'}>
                            <Text {...css.link}>Blog</Text>
                        </ALink>
                    </Box>
                    <Box>
                        <Heading {...css.name}>Aloqa</Heading>
                        <Link target='_blank' {...css.link} href='https://maps.app.goo.gl/F4jnY5K9GA2jiwBa6'>Toshkent shaxar Shayxontoxur tumani Qoʻrgʻoncha koʻchasi 48 uy</Link>
                        <Link target='_blank' {...css.link} href='tel:+998990691991'>
                            +998 99 069 19 91
                        </Link>
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
        padding: {
            base: "36px 0",
            lg: "78px 0"
        }
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
    image: {
        width: "100px",
        height: "100px",
        marginBottom: "24px"
    }
}