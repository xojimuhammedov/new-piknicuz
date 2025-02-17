import { Box, Flex, Image } from '@chakra-ui/react';
import React from 'react';

const AboutProduct = () => {
    return (
        <Box p={'24px 0'}>
            <Box className='container'>
                <Flex>
                    <Box {...css.item}>
                        <Image />
                    </Box>
                </Flex>
            </Box>
        </Box>
    );
}

export default AboutProduct;

const css = {
    item: {
        background: "#E9F8EC",
        width: "100%",
        height: "300px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "20px"
    },
}