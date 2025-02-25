import { Box, Flex, Image, Input, Link, Text } from '@chakra-ui/react';
import React from 'react';

import LogoIcon from '../assets/logo.svg'
import Korzinka from '../assets/Korzinka';

import { Link as Alink } from 'react-router-dom'
import { useCart } from '../context/CardContext';
import NavModal from './NavModal';

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
                        <Link {...css.link} href='/'>Bosh sahifa</Link>
                        <Link {...css.link} href='#product'>Mahsulotlar</Link>
                        <Alink to={'/contact'}>
                            <Text {...css.link}>Aloqa</Text>
                        </Alink>
                        <Alink to={'/blog'}>
                            <Text {...css.link}>Blog</Text>
                        </Alink>
                    </Flex>
                    <Flex align={'center'} gap={'24px'}>
                        <Input {...css.input} placeholder={"Search for products..."} />
                        <Alink to={'/korzinka'}>
                            <Korzinka />
                        </Alink>
                        <Box display={{ base: 'block', lg: 'none' }}>
                            <NavModal />
                        </Box>
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
        display: {
            base: "none",
            lg: "block"
        },

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
        display: {
            base: "none",
            lg: "block"
        },

        _focus: {
            border: "none",
            outline: "none"
        }
    }
}