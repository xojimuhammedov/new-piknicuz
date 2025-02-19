import { Box, Heading, Image, SimpleGrid, Text } from '@chakra-ui/react';
import React from 'react';

import HeaderImage from '../assets/image.png'

const BlogPage = () => {
    return (
        <Box p={{ base: "36px 0", lg: '60px 0' }}>
            <Box className='container'>
                <Heading {...css.title}>Sayohat va Lager Blogi</Heading>
                <Text {...css.text}>Sayohatni sevuvchilar uchun qiziqarli hikoyalar, foydali maslahatlar va lager hayoti haqida ko‘rsatmalar. Tabiatga yaqin bo‘lish va sayohatlaringizni unutilmas qilish uchun o‘z bilimlaringizni boyiting!</Text>
                <SimpleGrid mt={'36px'} gap={{ base: "24px", lg: '48px' }} columns={{ base: 1, lg: 3 }}>
                    <Box>
                        <Image  {...css.image} src={HeaderImage} alt='BlogImage' />
                        <Heading {...css.name}>Tabiatning Qiziqarli Jihatlari: Sarg‘aygan Amazon O‘rmonlari Haqida Qiziqarli Faktlar</Heading>
                    </Box>
                    <Box>
                        <Image {...css.image} src={HeaderImage} alt='BlogImage' />
                        <Heading {...css.name}>Tabiatning Qiziqarli Jihatlari: Sarg‘aygan Amazon O‘rmonlari Haqida Qiziqarli Faktlar</Heading>
                    </Box>
                    <Box>
                        <Image {...css.image} src={HeaderImage} alt='BlogImage' />
                        <Heading {...css.name}>Tabiatning Qiziqarli Jihatlari: Sarg‘aygan Amazon O‘rmonlari Haqida Qiziqarli Faktlar</Heading>
                    </Box>
                </SimpleGrid>
            </Box>
        </Box>
    );
}

export default BlogPage;

const css = {
    title: {
        margin: "0",
        textAlign: "center",
        fontSize: {
            base: "25px",
            lg: "50px"
        },
        fontWeight: "700",
        lineHeight: "normal"
    },
    text: {
        fontSize: {
            base: "14px",
            lg: "18px"
        },
        color: "#626262",
        lineHeight: {
            base: "20px",
            lg: "25px"
        },
        fontWeight: "400",
        textAlign: "center",
        width: {
            base: "100%",
            lg: "732px"
        },
        margin: "16px auto"
    },
    image: {
        borderRadius: "10px",
        width: "100%",
        height: "250px",
        objectFit: "cover"
    },
    name: {
        fontSize: {
            base: "16px",
            lg: "18px"
        },
        fontWeight: "600",
        lineHeight: "26px"
    }
}
