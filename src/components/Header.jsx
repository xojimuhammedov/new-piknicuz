import { Box, Flex, Heading, Image, Link, Text } from '@chakra-ui/react';
import React, { useEffect, useRef } from 'react';

import HeaderImage from '../assets/image.png'
import HeaderVideo from '../assets/video.mp4'

const Header = () => {
    const videoRef = useRef();

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.muted = true; // Autoplay ishlashi uchun ovozni o‘chirib qo‘yish
            videoRef.current.play().catch((error) => {
                console.error("Video autoplay failed:", error);
            });
        }
    }, [HeaderVideo]);
    return (
        <Box p={{ base: "0", lg: '60px 0' }}>
            <Box className='container'>
                <Flex gap={'24px'} display={{ base: "none", md: "flex" }} flexDirection={{ base: "column", lg: "row" }} justify={'space-between'}>
                    <Box>
                        <Heading {...css.title}>
                            Zo'r jihozlar bilan sarguzashtlarni kashf eting
                        </Heading>
                        <Text {...css.text}>Sarguzasht ishqibozlari uchun moʻljallangan ochiq havoda kerakli jihozlarimizni kashf eting. Yuqori sifatli chodirlardan qulay lager anjomlarigacha, hammasi sizning tajribangizni yuksaltirish uchun.</Text>
                        <Link href='#product' {...css.link}>Xarid qiling</Link>
                        <Flex mt={'48px'} gap={'24px'}>
                            <Flex flexDirection={'column'}>
                                <Heading {...css.name}>2+</Heading>
                                <Text {...css.subname}>Yillik tajriba</Text>
                            </Flex>
                            <Flex flexDirection={'column'}>
                                <Heading {...css.name}>1500+</Heading>
                                <Text {...css.subname}>Yuqori Sifatli Mahsulotlar</Text>
                            </Flex>
                            <Flex flexDirection={'column'}>
                                <Heading {...css.name}>500+</Heading>
                                <Text {...css.subname}>Baxtli mijozlar</Text>
                            </Flex>
                        </Flex>
                    </Box>
                    <video className="header-video" ref={videoRef} autoPlay loop controls>
                        <source
                            src={HeaderVideo}
                            type="video/mp4"
                        />
                    </video>
                </Flex>
            </Box>
        </Box>
    );
}

export default Header;

const css = {
    title: {
        fontSize: {
            base: "25px",
            lg: "60px"
        },
        lineHeight: {
            base: "normal",
            lg: "64px"
        },
        fontWeight: "700",
        color: "#000",
        width: {
            base: "100%",
            lg: "580px"
        },
        margin: "12px 0",
        textAlign: {
            base: "center",
            lg: "start"
        }
    },
    text: {
        color: "rgba(0, 0, 0, 0.60)",
        fontSize: {
            base: "14px",
            lg: "16px"
        },
        lineHeight: "22px",
        fontWeight: "400",
        width: {
            base: "100%",
            lg: "580px"
        },
        marginBottom: "24px"
    },
    link: {
        background: "#245D30",
        borderRadius: "62px",
        color: "#fff",
        fontSize: "16px",
        fontWeight: "500",
        width: {
            base: "100%",
            lg: "210px"
        },
        height: "52px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    image: {
        objectFit: "cover",
        height: {
            base: "280px",
            lg: "460px"
        },
        borderRadius: "10px"
    },
    name: {
        margin: "0",
        fontSize: {
            base: "24px",
            lg: "40px"
        },
        lineHeight: "normal",
        fontWeight: "700",
        color: "#000"
    },
    subname: {
        color: "rgba(0, 0, 0, 0.60)",
        fontSize: {
            base: "10px",
            lg: "16px"
        },
        lineHeight: "22px",
        margin: "0",
        fontWeight: "400",
    }
}