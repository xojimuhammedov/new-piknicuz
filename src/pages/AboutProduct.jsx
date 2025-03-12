import { Box, Button, Flex, Heading, Image, Spinner, Text } from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';

import { FreeMode, Navigation, Thumbs } from 'swiper/modules';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { useCart } from '../context/CardContext';
import Categories from '../components/Categories';

const AboutProduct = () => {
    const { id } = useParams()
    const [product, setProduct] = useState([])
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [loading, setLoading] = useState(true);
    const videoRef = useRef();
     const { addToCart } = useCart();

    useEffect(() => {
        if (videoRef.current && product?.video_src) {
            videoRef.current.load();
            videoRef.current.play().catch((error) => {
                console.error("Video cannot be played:", error);
            });
        }
    }, [product?.video_src]);

    useEffect(() => {
        axios.get(`https://api.piknicuz.com/api/products/${id}`)
            .then((res) => setProduct(res?.data?.data))
            .catch((err) => console.log(err))
            .finally(() => {
                setLoading(false);
            })
    }, [id])

    if (loading) {
        <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="#245E2E"
            size="xl"
        />;
    }
    return (
        <Box position={'relative'} p={'24px 0'}>
            <Box className='container about-list'>
                <Categories />
                <Flex mt={'84px'} width={{ base: "100%", lg: '60%' }} gap={'24px'}>
                    <Swiper
                        onSwiper={setThumbsSwiper}
                        spaceBetween={20}
                        slidesPerView={4}
                        freeMode={true}
                        watchSlidesProgress={false}
                        modules={[FreeMode, Navigation, Thumbs]}
                        className="mySwiper mySwiper-list"
                    >
                        {
                            product?.product_images?.map((item, index) => (
                                <SwiperSlide key={index}>
                                    <Box {...css.box}>
                                        <Image src={`https://api.piknicuz.com/api/uploads/images/${item?.images_src}`} />
                                    </Box>
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                    <Swiper
                        style={{
                            '--swiper-navigation-color': '#fff',
                            '--swiper-pagination-color': '#fff',
                        }}
                        spaceBetween={10}
                        navigation={true}
                        thumbs={{ swiper: thumbsSwiper }}
                        modules={[FreeMode, Navigation, Thumbs]}
                        className="mySwiper2"
                    >

                        {
                            product?.product_images?.map((item, index) => (
                                <SwiperSlide key={index}>
                                    <Box {...css.item}>
                                        <Image {...css.image} src={`https://api.piknicuz.com/api/uploads/images/${item?.images_src}`} />
                                    </Box>
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </Flex>
                <Box {...css.right}>
                    <Heading {...css.title}>{product?.title}</Heading>
                    <Heading {...css.price}>Narxi: {product?.price} so'm</Heading>
                    <Text {...css.text}
                        dangerouslySetInnerHTML={{
                            __html: product?.description
                        }}
                    />
                    <Button onClick={() => addToCart(product)} {...css.button}>Savatga qo'shish</Button>
                </Box>

                <Box {...css.rights}>
                    <Heading {...css.title}>{product?.title}</Heading>
                    <Heading {...css.price}>Narxi: {product?.price} so'm</Heading>
                    <Text {...css.text}
                        dangerouslySetInnerHTML={{
                            __html: product?.description
                        }}
                    />
                    <Button onClick={() => addToCart(item)} {...css.button}>Savatga qo'shish</Button>
                </Box>

                <Heading textAlign={'center'} {...css.title}>Mahsulot Videosi va Xususiyatlari</Heading>
                {product?.video_src && (
                    <video className="course-video" ref={videoRef} autoPlay loop controls>
                        <source
                            src={`https://api.piknicuz.com/api/uploads/images/${product?.video_src}`}
                            type="video/mp4"
                        />
                    </video>
                )}
            </Box>
        </Box>
    );
}

export default AboutProduct;

const css = {
    item: {
        background: "#E9F8EC",
        width: {
            base: "100%",
            lg: "85%"
        },
        height: {
            base: "330px",
            lg: "570px"
        },
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "20px",
        padding: "30px"
    },
    image: {
        width: "100%",
        height: "100%",
        objectFit: "cover",
        borderRadius: "20px",
    },
    title: {
        fontSize: {
            base: "24px",
            lg: "32px"
        },
        lineHeight: "normal",
        fontWeight: "700",
        marginBottom: "24px",
        marginTop:"30px"
    },
    price: {
        fontSize: "28px",
        lineHeight: "normal",
        fontWeight: "700"
    },
    text: {
        fontSize: "14px",
        lineHeight: "20px",
        fontWeight: "500",
        color: "#727272",
        marginBottom: "15px",
        width: "100%"
    },
    button: {
        background: "#245D30",
        borderRadius: "62px",
        height: "45px",
        border: "none",
        width: {
            base: "100%",
            lg: "300px"
        },
        cursor: "pointer",
        fontSize: "16px",
        lineHeight: "24px",
        fontWeight: "500",
        color: "#fff",
        transition: "0.3s",

        _hover: {
            background: "#245D30",
        }
    },
    box: {
        background: "#E9F8EC",
        borderRadius: "20px",
        padding: "16px",
        height: "100px",
        margin: "8px 0",
        cursor: "pointer"
    },
    right: {
        position: "absolute",
        left: "65%",
        bottom: "50%",
        display: {
            base: "none",
            lg: "block"
        }
    },
    rights: {
        marginTop: "24px",
        display: {
            base: "block",
            lg: "none"
        }
    }
}