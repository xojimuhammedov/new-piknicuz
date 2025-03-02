import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Box, Button, Flex, Heading, SimpleGrid, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';


const Categories = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentIndexTwo, setCurrentIndexTwo] = useState(0);
    const [category, setCategory] = useState([])
    useEffect(() => {
        axios.get("https://api.piknicuz.com/api/categories")
            .then((res) => setCategory(res?.data?.data))
            .catch((err) => console.log(err))
    }, [])

    const ITEMS_PER_PAGE = 5;

    const ITEMS_PER_PAGE_Two = 2;

    const totalSlides = Math.ceil(category.length / ITEMS_PER_PAGE);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev < totalSlides - 1 ? prev + 1 : 0));
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev > 0 ? prev - 1 : totalSlides - 1));
    };

    const totalSlidesTwo = Math.ceil(category.length / ITEMS_PER_PAGE_Two);

    const nextSlideTwo = () => {
        setCurrentIndexTwo((prev) => (prev < totalSlidesTwo - 1 ? prev + 1 : 0));
    };

    const prevSlideTwo = () => {
        setCurrentIndexTwo((prev) => (prev > 0 ? prev - 1 : totalSlidesTwo - 1));
    };
    return (
        <Box  position={'relative'}>
            <Flex mb={'36px'} display={{ base: "none", lg: "flex" }} wrap={'nowrap'} justify="space-between" maxW="100%">
                {category
                    ?.slice(currentIndex * ITEMS_PER_PAGE, (currentIndex + 1) * ITEMS_PER_PAGE)
                    ?.map((category, index) => (
                        <Link to={'/'}>
                            <Heading key={index} {...css.names}>
                                {category?.name}
                            </Heading>
                        </Link>
                    ))}
            </Flex>


            <Flex mb={'36px'} display={{ base: "flex", lg: "none" }} gap={'12px'} wrap={'nowrap'} justify="space-between" maxW="100%">
                {category
                    ?.slice(currentIndexTwo * ITEMS_PER_PAGE_Two, (currentIndexTwo + 1) * ITEMS_PER_PAGE_Two)
                    ?.map((category, index) => (
                        <Link to={'/'}>
                            <Heading key={index} {...css.names}>
                                {category?.name}
                            </Heading>
                        </Link>
                    ))}
            </Flex>

            {
                category.length > 0 ? (
                    <>
                        <Button
                            position="absolute"
                            top="20%"
                            left={
                                {
                                    base: "70%",
                                    lg: "93%"
                                }
                            }
                            transform="translateY(-50%)"
                            onClick={() => {
                                prevSlide()
                                prevSlideTwo()
                            }}
                            px={4}
                            py={2}
                            {...css.next}
                        >
                            ❮
                        </Button>

                        <Button
                            position="absolute"
                            top="20%"
                            right="10px"
                            transform="translateY(-50%)"
                            onClick={() => {
                                nextSlide()
                                nextSlideTwo()
                            }}
                            px={4}
                            py={2}
                            {...css.next}
                        >
                            ❯
                        </Button>
                    </>
                ) : null
            }
        </Box>
    );
}

export default Categories;


const css = {
    names: {
        fontSize: {
            base: "12px",
            lg: "20px"
        },
        fontWeight: "400",
        lineHeight: "36px",
        cursor: "pointer",
        padding: {
            base: "5px 15px",
            lg: "10px 20px"
        },
        borderRadius: "30px",
        border: "1px solid #fff",
        margin: "0 5px",

        _hover: {
            border: "1px solid #000"
        }
    },
    next: {
        color: "#fff",
        background: "#245D30",
        borderRadius: "full",
        cursor: "pointer",

        _hover: {
            background: "#245D30",
        }
    }
}