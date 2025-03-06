import { Box, Heading, SimpleGrid } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Card from '../components/Card';
import axios from 'axios';

const CategoryProduct = () => {
    const { categoryId } = useParams()
    const [product, setProduct] = useState([])
    useEffect(() => {
        axios.get("https://api.piknicuz.com/api/products")
            .then((res) => {
                if (categoryId) {
                    setProduct(res?.data?.data?.filter((item) => item.category_id === categoryId))
                }
                else {
                    setProduct(res?.data?.data)
                }
            })
            .catch((err) => console.log(err))
    }, [categoryId])
    console.log(product);

    return (
        <Box p={'48px 0'}>
            <Box className='container'>
                <Heading {...css.title}>{product[0]?.category?.name}</Heading>
                <SimpleGrid mt={'36px'} gap={{ base: "24px", lg: '70px 24px' }} columns={{ base: 1, md: 2, xl: 4 }}>
                    {
                        product?.map((item) => (<Card item={item} />))
                    }
                </SimpleGrid>
            </Box>
        </Box>
    );
}

export default CategoryProduct;

const css = {
    title: {
        margin: "0",
        textAlign: "center",
        fontSize: {
            base: "25px",
            lg: "50px"
        },
        fontWeight: "700",
        lineHeight: "normal",
    },
}