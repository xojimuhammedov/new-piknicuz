import { Box, Button, Flex, Heading, Image, Link, SimpleGrid, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import Card from './Card';
import axios from 'axios';

import TopImage from '../assets/top.jpg'

const Products = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentIndexTwo, setCurrentIndexTwo] = useState(0);
    const [categoryId, setCategoryId] = useState(null)
    const [product, setProduct] = useState([])
    const [category, setCategory] = useState([])
    const [top, setTop] = useState(false)
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        axios.get("https://api.piknicuz.com/api/products")
            .then((res) => {
                if (categoryId) {
                    setProduct(res?.data?.data?.filter((item) => item?.category_id === categoryId))
                    // setProduct(res?.data?.data?.filter((item) => item?.is_active === true))
                }
                else if (top) {
                    setProduct(res?.data?.data?.filter((item) => item?.is_active === true))
                }
                else {
                    setProduct(res?.data?.data)
                }
            })
            .catch((err) => console.log(err))
            .finally(() => setLoading(false))
    }, [categoryId, top])

    // console.log(product)

    useEffect(() => {
        axios.get("https://api.piknicuz.com/api/categories")
            .then((res) => setCategory(res?.data?.data))
            .catch((err) => console.log(err))
    }, [])

    const ITEMS_PER_PAGE = 4;

    const ITEMS_PER_PAGE_Two = 3;

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
        <>
            <Box id='product' position="relative" className='products' p={'60px 0'}>
                <Box className='container'>
                    <Heading {...css.title}>Kategoriya va Mahsulotlar</Heading>
                    <Flex display={{ base: "none", lg: "flex" }} mt={'84px'} wrap={'nowrap'} justify="space-between" maxW="100%">
                        <Flex onClick={() => {
                            setTop(true)
                            setCategoryId(null)
                        }}  {...css.items} align={'center'}>
                            <Image {...css.icons} src={TopImage} />
                            <Heading  {...css.names}>
                                Ommabop
                            </Heading>
                        </Flex>
                        {category
                            ?.slice(currentIndex * ITEMS_PER_PAGE, (currentIndex + 1) * ITEMS_PER_PAGE)
                            ?.map((category, index) => (
                                <Flex onClick={() => setCategoryId(category?.id)} {...css.items} className={`product-title ${category?.id === categoryId ? "product-active" : ""}`} align={'center'}>
                                    <Image {...css.icons} src={`https://api.piknicuz.com/api/uploads/images/${category?.image_src}`} />
                                    <Heading key={index} {...css.names}>
                                        {category?.name}
                                    </Heading>
                                </Flex>

                            ))}
                    </Flex>

                    <Flex display={{ base: "flex", lg: "none" }} mt={'84px'} gap={'12px'} wrap={'nowrap'} justify="space-between" maxW="100%">
                        <Flex onClick={() => {
                            setTop(true)
                            setCategoryId(null)
                        }}  {...css.items} align={'center'}>
                            <Image {...css.icons} src={TopImage} />
                            <Heading  {...css.names}>
                                Ommabop
                            </Heading>
                        </Flex>
                        {category
                            ?.slice(currentIndexTwo * ITEMS_PER_PAGE_Two, (currentIndexTwo + 1) * ITEMS_PER_PAGE_Two)
                            ?.map((category, index) => (
                                <Flex onClick={() => setCategoryId(category?.id)} {...css.items} className={`product-title ${category?.id === categoryId ? "product-active" : ""}`} align={'center'}>
                                    <Image {...css.icons} src={`https://api.piknicuz.com/api/uploads/images/${category?.image_src}`} />
                                    <Heading key={index} {...css.names}>
                                        {category?.name}
                                    </Heading>
                                </Flex>
                            ))}
                    </Flex>
                    {
                        category.length > 0 ? (
                            <>
                                <Button
                                    position="absolute"
                                    top="50%"
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
                                    top="50%"
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
            </Box>
            <Box className='container'>
                {loading ? (
                    <Box {...css.loading}>Mahsulot yuklanmoqda...</Box>
                ) : (
                    <SimpleGrid mb={'60px'} gap={{ base: "24px", lg: '70px 24px' }} columns={{ base: 1, md: 2, xl: 4 }}>
                        {
                            product
                                ?.slice(0, 32) // Birinchi 32 tasini olish
                                ?.map((item) => (<Card key={item.id} item={item} />)) // Mapping qilish
                        }
                    </SimpleGrid>
                )}
            </Box>
        </>
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
        lineHeight: "normal",
    },
    link: {
        fontSize: {
            base: "14px",
            lg: "16px"
        },
        fontWeight: "500",
        color: "#245D30",
        lineHeight: "normal",
        border: "1px solid #245D30",
        borderRadius: "62px",
        padding: {
            base: "15px 48px",
            lg: "16px 54px"
        },
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: {
            base: "65%",
            lg: "265px"
        },
        margin: "auto"
    },
    name: {
        fontSize: "20px",
        fontWeight: "400",
        color: "#000",
        lineHeight: "normal",
    },
    names: {
        fontSize: {
            base: "12px",
            lg: "18px"
        },
        fontWeight: "400",
        lineHeight: "24px",
        display: {
            base: "none",
            lg: "block"
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
    },
    items: {
        cursor: "pointer",
        padding: {
            base: "5px 15px",
            lg: "10px 20px"
        },
        borderRadius: "30px",
        gap: "8px",
        border: "1px solid #fff",
        margin: "0 5px",

        _hover: {
            border: "1px solid #000"
        }
    },
    icons: {
        width: "50px",
        height: "50px",
        objectFit: "contain"
    },
    loading: {
        margin: "25px auto",
        textAlign: "center",
        fontSize: {
            base: "25px",

        },
        fontWeight: "700",
        lineHeight: "normal",
        color: "#245D30",
    }
}