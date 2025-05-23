import { Box, Button, Flex, Heading, Image, Link, SimpleGrid, Text } from '@chakra-ui/react';
import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import Card from '../components/Card';

import TopImage from '../assets/top.jpg'

import Slider from 'react-slick';


var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 5,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: false
            }
        },
        {
            breakpoint: 780,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 4,
                initialSlide: 4
            }
        },
    ]
};

const ProductsPage = () => {
    let sliderRef = useRef(null);
    const next = () => {
        sliderRef.slickNext();
    };
    const previous = () => {
        sliderRef.slickPrev();
    };
    const [categoryId, setCategoryId] = useState(null)
    const [product, setProduct] = useState([])
    const [category, setCategory] = useState([])
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
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
            .finally(() => setLoading(false))
    }, [categoryId])

    useEffect(() => {
        axios.get("https://api.piknicuz.com/api/categories")
            .then((res) => setCategory(res?.data?.data))
            .catch((err) => console.log(err))
    }, [])


    return (
        <>
            <Box id='product' position="relative" className='products' p={'60px 0'}>
                <Box className='container'>
                    <Heading {...css.title}>Kategoriya va Mahsulotlar</Heading>
                    <Slider
                        style={{ marginTop: "72px" }}
                        ref={slider => {
                            sliderRef = slider;
                        }}
                        {...settings}>
                        <Flex
                            display={'flex !important'}
                            onClick={() => {
                                setTop(true)
                                setCategoryId(null)
                            }}  {...css.items} align={'center'}>
                            <Image {...css.icons} src={TopImage} />
                            <Heading  {...css.names}>
                                Ommabop
                            </Heading>
                        </Flex>
                        {category
                            ?.map((category, index) => (
                                <Flex
                                    display={'flex !important'}
                                    onClick={() => setCategoryId(category?.id)} {...css.items} className={`product-title ${category?.id === categoryId ? "product-active" : ""}`} align={'center'}>
                                    <Image {...css.icons} src={`https://api.piknicuz.com/api/uploads/images/${category?.image_src}`} />
                                    <Heading key={index} {...css.names}>
                                        {category?.name}
                                    </Heading>
                                </Flex>
                            ))}
                    </Slider>
                    <div>
                        <Button
                            position="absolute"
                            top="45%"
                            left={
                                {
                                    base: "70%",
                                    lg: "93%"
                                }
                            }
                            transform="translateY(-50%)"
                            onClick={previous}
                            px={4}
                            py={2}
                            {...css.next}
                        >
                            ❮
                        </Button>
                        <Button
                            position="absolute"
                            top="45%"
                            right="10px"
                            transform="translateY(-50%)"
                            onClick={next}
                            px={4}
                            py={2}
                            {...css.next}
                        >
                            ❯
                        </Button>
                    </div>
                </Box>
            </Box>
            <Box className='container'>
                {
                    loading ? <Box {...css.loading}>Mahsulot yuklanmoqda...</Box> : <SimpleGrid mb={'60px'} gap={{ base: "24px", lg: '70px 24px' }} columns={{ base: 1, md: 2, xl: 4 }}>
                        {
                            product?.map((item) => (<Card item={item} />))
                        }
                    </SimpleGrid>
                }
            </Box>
        </>
    );
}

export default ProductsPage;

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
            lg: "20px"
        },
        fontWeight: "400",
        lineHeight: "36px",
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
        border: "1px solid #fff",
        margin: "0 5px",

        _hover: {
            border: "1px solid #000"
        }
    },
    icons: {
        width: "50px",
        height: "50px"
    },
    loading: {
        margin: "25px auto",
        textAlign: "center",
        fontSize: {
            base: "25px",

        },
        fontWeight: "700",
        lineHeight: "normal",
    }
}