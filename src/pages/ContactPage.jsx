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
        width: "100%"
    },
    title: {
        color: "#fff",
        fontSize: "50px",
        lineHeight: "normal",
        fontWeight: "800",
        position: "absolute",
        top: "30%"
    }
}
