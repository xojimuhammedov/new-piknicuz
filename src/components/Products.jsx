import { Box, Flex, Heading, Link, SimpleGrid, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import Card from './Card';
import axios from 'axios';


const Products = () => {
    const [product, setProduct] = useState([])
    const [category, setCategory] = useState([])
    useEffect(() => {
        axios.get("https://picnic.propartnyor.uz/api/products")
            .then((res) => setProduct(res?.data?.data))
            .catch((err) => console.log(err))
    }, [])

    // useEffect(() => {
    //     axios.get("https://picnic.propartnyor.uz/api/categories")
    //         .then((res) => setCategory(res?.data?.data))
    //         .catch((err) => console.log(err))
    // }, [])

    return (
        <Box p={'60px 0'}>
            <Box className='container'>
                <Heading {...css.title}>Kategoriya va Mahsulotlar</Heading>
                <SimpleGrid mb={'60px'} mt={{ base: "36px", lg: '70px' }} gap={{ base: "24px", lg: '70px 24px' }} columns={{ base: 1, md: 2, xl: 4 }}>
                    {
                        product?.slice(0, 32)?.map((item) => (<Card item={item} />))
                    }
                </SimpleGrid>
                <Link href='#' {...css.link}>Hammasini ko'rish</Link>
            </Box>
        </Box>
    );
}

export default Products;

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
    link: {
        fontSize: "16px",
        fontWeight: "500",
        color: "#245D30",
        lineHeight: "normal",
        border: "1px solid #245D30",
        borderRadius: "62px",
        padding: "16px 54px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: {
            base: "100%",
            lg: "152px"
        },
        margin: "auto"
    },
    name: {
        fontSize: "20px",
        fontWeight: "400",
        color: "#000",
        lineHeight: "normal",
    }
}