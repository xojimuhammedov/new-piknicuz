import { Box, Flex, Heading, Image } from '@chakra-ui/react';
import React from 'react';
import CardKorzinka from '../assets/CardKorzinka';
import { Link } from 'react-router-dom';

const Card = ({ item }) => {
    return (
        <Link to={`/product/${item?.id}`}>
            <Box key={item.id}>
                <Box {...css.item}>
                    <Image {...css.image} src={`https://picnic.propartnyor.uz/api/uploads/images/${item?.image_src}`} />
                </Box>
                <Heading {...css.name}>{item.title}</Heading>
                <Flex justify={'space-between'} align={'center'}>
                    <Heading {...css.price}>{item.price} so'm</Heading>
                    <CardKorzinka />
                </Flex>
            </Box>
        </Link>
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
        width: "220px",
        height: "220px",
        objectFit: "cover"
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
    }
}