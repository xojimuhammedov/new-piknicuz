import { Box, Heading, Image, SimpleGrid, Text } from '@chakra-ui/react';
import React from 'react';

import HeaderImage from '../assets/image.png'

const BlogPage = () => {
    return (
        <Box p={'60px 0'}>
            <Box className='container'>
                <Heading {...css.title}>Sayohat va Lager Blogi</Heading>
                <Text {...css.text}>Sayohatni sevuvchilar uchun qiziqarli hikoyalar, foydali maslahatlar va lager hayoti haqida ko‘rsatmalar. Tabiatga yaqin bo‘lish va sayohatlaringizni unutilmas qilish uchun o‘z bilimlaringizni boyiting!</Text>
                <SimpleGrid gap={'48px'} columns={3}>
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
        fontSize: "50px",
        fontWeight: "700",
        lineHeight: "normal"
    },
    text: {
        fontSize: "18px",
        color: "#626262",
        lineHeight: "25px",
        fontWeight: "400",
        textAlign: "center",
        width: "732px",
        margin: "16px auto"
    },
    image: {
        borderRadius: "10px",
        width: "100%",
        height: "250px",
        objectFit: "cover"
    },
    name: {
        fontSize: "18px",
        fontWeight: "600",
        lineHeight: "26px"
    }
}
