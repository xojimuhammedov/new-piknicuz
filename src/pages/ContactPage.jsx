import { Box, Heading, Image } from '@chakra-ui/react';
import React from 'react';

import ContactBanner from '../assets/contact-banner.png'
import Form from '../components/Form';

const ContactPage = () => {
    return (
        <>
            <Box p={'30px 0'} position={'relative'}>
                <Image src={ContactBanner} {...css.image} />
                <Box className='container'>
                    <Heading {...css.title}>Biz bilan bog’laning </Heading>
                </Box>
            </Box>
            <Form />
        </>
    );
}

export default ContactPage;

const css = {
    image: {
        width: "100%",
        height: {
            base: "300px",
            lg: "auto"
        },
        objectFit:"cover"
    },
    title: {
        color: "#fff",
        fontSize: {
            base: "25px",
            lg: "50px"
        },
        lineHeight: "normal",
        fontWeight: "800",
        position: "absolute",
        top: "30%"
    }
}
