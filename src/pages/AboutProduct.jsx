import { Box, Button, Flex, Heading, Image, Text } from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';

import { FreeMode, Navigation, Thumbs } from 'swiper/modules';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

const AboutProduct = () => {
    const { id } = useParams()
    const [product, setProduct] = useState([])
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    useEffect(() => {
        axios.get(`https://picnic.propartnyor.uz/api/products/${id}`)
            .then((res) => setProduct(res?.data?.data))
            .catch((err) => console.log(err))
    }, [id])
    return (
        <Box p={'24px 0'}>
            <Box className='container about-list'>
                {/* <Flex gap={'72px'}> */}
                <Flex width={'60%'} gap={'24px'}>
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
                                        <Image src={`https://picnic.propartnyor.uz/api/uploads/images/${item?.images_src}`} />
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
                                        <Image {...css.image} src={`https://picnic.propartnyor.uz/api/uploads/images/${item?.images_src}`} />
                                    </Box>
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </Flex>
                <Box {...css.right}>
                    <Heading {...css.title}>{product?.title}</Heading>
                    <Heading {...css.price}>{product?.price} so'm</Heading>
                    <Text {...css.text}
                        dangerouslySetInnerHTML={{
                            __html: product?.description
                        }}
                    />
                    <Button {...css.button}>Savatga qo'shish</Button>
                </Box>
                {/* </Flex> */}
            </Box>
        </Box>
    );
}

export default AboutProduct;

const css = {
    item: {
        background: "#E9F8EC",
        width: "85%",
        height: "530px",
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
        fontSize: "36px",
        lineHeight: "normal",
        fontWeight: "700",
        marginBottom: "24px"
    },
    price: {
        fontSize: "32px",
        lineHeight: "normal",
        fontWeight: "700"
    },
    text: {
        fontSize: "16px",
        lineHeight: "24px",
        fontWeight: "500",
        color: "#727272",
        marginBottom: "43px"
    },
    button: {
        background: "#245D30",
        borderRadius: "62px",
        height: "45px",
        border: "none",
        width: "300px",
        cursor: "pointer",
        fontSize: "16px",
        lineHeight: "24px",
        fontWeight: "500",
        color: "#fff"
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
        position: "relative",
        left: "65%",
        bottom: "550px"
    }
}