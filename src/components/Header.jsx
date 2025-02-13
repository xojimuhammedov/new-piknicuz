import { Box, Flex, Heading, Image, Link, Text } from '@chakra-ui/react';
import React from 'react';

import HeaderImage from '../assets/image.png'

const Header = () => {
    return (
        <Box p={'60px 0'}>
            <Box className='container'>
                <Flex justify={'space-between'}>
                    <Box>
                        <Heading {...css.title}>
                            Zo'r jihozlar bilan sarguzashtlarni kashf eting
                        </Heading>
                        <Text {...css.text}>Sarguzasht ishqibozlari uchun moʻljallangan ochiq havoda kerakli jihozlarimizni kashf eting. Yuqori sifatli chodirlardan qulay lager anjomlarigacha, hammasi sizning tajribangizni yuksaltirish uchun.</Text>
                        <Link {...css.link}>Xarid qiling</Link>
                        <Flex mt={'48px'} gap={'24px'}>
                            <Flex flexDirection={'column'}>
                                <Heading {...css.name}>200+</Heading>
                                <Text {...css.subname}>Xalqaro brendlar</Text>
                            </Flex>
                            <Flex flexDirection={'column'}>
                                <Heading {...css.name}>2000+</Heading>
                                <Text {...css.subname}>Yuqori Sifatli Mahsulotlar</Text>
                            </Flex>
                            <Flex flexDirection={'column'}>
                                <Heading {...css.name}>30000+</Heading>
                                <Text {...css.subname}>Baxtli mijozlar</Text>
                            </Flex>
                        </Flex>
                    </Box>
                    <Image {...css.image} src={HeaderImage} />
                </Flex>
            </Box>
        </Box>
    );
}

export default Header;

const css = {
    title: {
        fontSize: "60px",
        lineHeight: "64px",
        fontWeight: "700",
        color: "#000",
        width: "600px",
        margin: "0"
    },
    text: {
        color: "rgba(0, 0, 0, 0.60)",
        fontSize: "16px",
        lineHeight: "22px",
        fontWeight: "400",
        width: "600px"
    },
    link: {
        background: "#245D30",
        borderRadius: "62px",
        color: "#fff",
        fontSize: "16px",
        fontWeight: "500",
        width: "210px",
        height: "52px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    image: {
        objectFit: "cover",
        height: "460px"
    },
    name: {
        margin: "0",
        fontSize: "40px",
        lineHeight: "normal",
        fontWeight: "700",
        color: "#000"
    },
    subname: {
        color: "rgba(0, 0, 0, 0.60)",
        fontSize: "16px",
        lineHeight: "22px",
        margin: "0",
        fontWeight: "400",
    }
}