import { Box, Button, Flex, Heading, Image } from '@chakra-ui/react';
import React from 'react';
import CardKorzinka from '../assets/CardKorzinka';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CardContext';

const Card = ({ item }) => {
    const { addToCart } = useCart();
    return (
        <Box key={item.id}>
            <Link to={`/product/${item?.id}`}>
                <Box {...css.item}>
                    <Image {...css.image} src={`https://api.piknicuz.com/uploads/images/${item?.image_src}`} />
                </Box>
            </Link>
            <Heading {...css.name}>{item.title}</Heading>
            <Flex justify={'space-between'} align={'center'}>
                <Heading {...css.price}>{item.price} so'm</Heading>
                <Button {...css.button} onClick={() => addToCart(item)}>
                    <CardKorzinka />
                </Button>
            </Flex>
        </Box>
    );
}

export default Card;

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
    image: {
        width: {
            base: "270px",
            lg: "220px"
        },
        height: {
            base: "270px",
            lg: "220px"
        },
        objectFit: "cover",
        borderRadius: "20px"
    },
    name: {
        fontSize: "20px",
        fontWeight: "700",
        lineHeight: "normal",
        color: "#000",
        margin: "10px 0"
    },
    price: {
        fontSize: "22px",
        fontWeight: "700",
        lineHeight: "normal",
        color: "#000",
        margin: "0"
    },
    button: {
        background: "transparent",
        border: "none",
        cursor: "pointer"
    }
}