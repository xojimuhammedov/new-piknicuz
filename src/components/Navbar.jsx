import { Box, Flex, Image, Input, Link } from '@chakra-ui/react';
import React from 'react';

import LogoIcon from '../assets/logo.svg'
import Korzinka from '../assets/Korzinka';

import { Link as Alink } from 'react-router-dom'
import { useCart } from '../context/CardContext';

const Navbar = () => {
    const { cart, removeFromCart } = useCart();

    return (
        <Box p={'15px 0'}>
            <Box className='container'>
                <Flex align={'center'} justify={'space-between'}>
                    <Alink to={'/'}>
                        <Image src={LogoIcon} alt='LogoIcon' />
                    </Alink>
                    <Flex align={'center'} gap={'24px'}>
                        <Link {...css.link} href='#'>Bosh sahifa</Link>
                        <Link {...css.link} href='#'>Mahsulotlar</Link>
                        <Link {...css.link} href='#'>Aloqa</Link>
                        <Link {...css.link} href='#'>Blog</Link>
                    </Flex>
                    <Flex align={'center'} gap={'24px'}>
                        <Input {...css.input} placeholder={"Search for products..."} />
                        <Alink to={'/korzinka'}>
                            <Korzinka />
                        </Alink>
                    </Flex>
                </Flex>
            </Box>
        </Box>
    );
}

export default Navbar;


const css = {
    link: {
        fontSize: "16px",
        lineHeight: "normal",
        fontWeight: "500",
        color: "#000",
        transition: "0.3s",

        _hover: {
            color: "#245D30",
            fontWeight: "500"
        }
    },
    input: {
        borderRadius: "62px",
        background: "#F0F0F0",
        padding: "10px 16px",
        width: "278px",
        border: "none",

        _focus: {
            border: "none",
            outline: "none"
        }
    }
}