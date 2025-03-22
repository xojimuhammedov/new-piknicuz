import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { Box, Button, Flex, Heading, Image } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

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


const Categories = () => {
    let sliderRef = useRef(null);
    const next = () => {
        sliderRef.slickNext();
    };
    const previous = () => {
        sliderRef.slickPrev();
    };
    const [category, setCategory] = useState([])
    useEffect(() => {
        axios.get("https://api.piknicuz.com/api/categories")
            .then((res) => setCategory(res?.data?.data))
            .catch((err) => console.log(err))
    }, [])
    return (
        <Box position={'relative'}>
            <Slider
                style={{ marginTop: "48px" }}
                ref={slider => {
                    sliderRef = slider;
                }}
                {...settings}>
                {category
                    ?.map((category, index) => (
                        <Link to={`/category/${category?.id}`}>
                            <Flex scrollSnapAlign="start" {...css.items} align={'center'}>
                                <Image {...css.icons} src={`https://api.piknicuz.com/api/uploads/images/${category?.image_src}`} />
                                <Heading key={index} {...css.names}>
                                    {category?.name}
                                </Heading>
                            </Flex>
                        </Link>
                    ))}
            </Slider>
            <div>
                <Button
                    position="absolute"
                    top={
                        {
                            base: "-80%",
                            lg: "-20%"
                        }
                    }
                    left={
                        {
                            base: "70%",
                            lg: "90%"
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
                    top={
                        {
                            base: "-80%",
                            lg: "-20%"
                        }
                    }
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
    );
}

export default Categories;


const css = {
    names: {
        fontSize: {
            base: "12px",
            lg: "18px"
        },
        fontWeight: "400",
        lineHeight: "26px",
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
        gap: "8px",

        _hover: {
            border: "1px solid #000"
        }
    },
    icons: {
        width: {
            base: "100%",
            lg: "50px"
        },
        height: "50px",
        objectFit: "contain"
    }
}