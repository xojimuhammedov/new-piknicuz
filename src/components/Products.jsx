import { Box, Heading, Link, SimpleGrid } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import Card from './Card';
import axios from 'axios';

const Products = () => {
    const [product, setProduct] = useState([])
    useEffect(() => {
        axios.get("https://picnic.propartnyor.uz/api/products")
            .then((res) => setProduct(res?.data?.data))
            .catch((err) => console.log(err))
    }, [])
    return (
        <Box p={'60px 0'}>
            <Box className='container'>
                <Heading {...css.title}>Kategoriya va Mahsulotlar</Heading>
                <SimpleGrid mb={'60px'} mt={'70px'} gap={'70px 24px'} columns={4}>
                    {
                        product?.slice(0, 32)?.map((item, index) => (<Card item={item} />))
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
        fontSize: "50px",
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
        width: "152px",
        margin: "auto"
    }
}