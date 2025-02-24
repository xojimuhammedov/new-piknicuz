import { Box, Button, Flex, Heading, Image, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Textarea, useDisclosure } from '@chakra-ui/react';
import React, { useState } from 'react';
import DeleteIcon from '../assets/DeleteIcon';
import { useCart } from '../context/CardContext';
import axios from 'axios';
import { toast } from 'react-toastify';

const KorzinkaPage = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const { cart, removeFromCart, updateQuantity } = useCart();
    const totalPrice = cart?.reduce((total, item) => total + Number(item.price) * item.count, 0);

    const [formData, setFormData] = useState({
        full_name: "",
        phone: "",
        address: "",
        text: "",
        is_active: true
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const ids = cart?.map(product => product?.id);
        const submitData = { ...formData, products: ids }
        axios.post("https://api.piknicuz.com/api/carts", submitData)
            .then((response) => {
                console.log(response)
                if (response.status === 201) {
                    toast.success("Muvaffaqiyatli yuborildi!")
                    onClose()
                }
            })
            .catch((err) => {
                console.log(err)
            })
    };

    return (
        <Box p={'48px 0'}>
            <Box className='container'>
                <Heading {...css.title}>Sizning savatingiz {cart?.length > 0 ? "" : "bo'sh"} </Heading>
                {
                    cart?.length > 0 ? (
                        <Flex flexDirection={{ base: "column", lg: "row" }} mt={'45px'} gap={'20px'}>
                            <Flex flexDirection={'column'} gap={'12px'} {...css.box}>
                                {
                                    cart?.map((item, index) => (
                                        <Flex align={'center'} key={index} gap={'24px'} w={'100%'}>
                                            <Box {...css.card}>
                                                <Image {...css.image} src={`https://picnic.propartnyor.uz/api/uploads/images/${item?.image_src}`} />
                                            </Box>
                                            <Box w={'100%'}>
                                                <Flex align={'center'} justifyContent={'space-between'}>
                                                    <Heading {...css.name}>{item?.title}</Heading>
                                                    <Button onClick={() => removeFromCart(item.id)} {...css.button}>
                                                        <DeleteIcon />
                                                    </Button>
                                                </Flex>
                                                <Flex align={'center'} mt={'60px'} justifyContent={'space-between'}>
                                                    <Heading fontSize={'24px'} {...css.name}>{item.price} so'm</Heading>
                                                    <Flex align={'center'} {...css.bottom}>
                                                        <Button onClick={() => updateQuantity(item.id, -1)} {...css.click}>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                                <path d="M17.8125 10C17.8125 10.2486 17.7137 10.4871 17.5379 10.6629C17.3621 10.8387 17.1236 10.9375 16.875 10.9375H3.125C2.87636 10.9375 2.6379 10.8387 2.46209 10.6629C2.28627 10.4871 2.1875 10.2486 2.1875 10C2.1875 9.75136 2.28627 9.5129 2.46209 9.33709C2.6379 9.16127 2.87636 9.0625 3.125 9.0625H16.875C17.1236 9.0625 17.3621 9.16127 17.5379 9.33709C17.7137 9.5129 17.8125 9.75136 17.8125 10Z" fill="black" />
                                                            </svg>
                                                        </Button>
                                                        <Heading {...css.name}>{item.count}</Heading>
                                                        <Button onClick={() => updateQuantity(item.id, 1)} {...css.click}>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                                <path d="M17.8125 10C17.8125 10.2486 17.7137 10.4871 17.5379 10.6629C17.3621 10.8387 17.1236 10.9375 16.875 10.9375H10.9375V16.875C10.9375 17.1236 10.8387 17.3621 10.6629 17.5379C10.4871 17.7137 10.2486 17.8125 10 17.8125C9.75136 17.8125 9.5129 17.7137 9.33709 17.5379C9.16127 17.3621 9.0625 17.1236 9.0625 16.875V10.9375H3.125C2.87636 10.9375 2.6379 10.8387 2.46209 10.6629C2.28627 10.4871 2.1875 10.2486 2.1875 10C2.1875 9.75136 2.28627 9.5129 2.46209 9.33709C2.6379 9.16127 2.87636 9.0625 3.125 9.0625H9.0625V3.125C9.0625 2.87636 9.16127 2.6379 9.33709 2.46209C9.5129 2.28627 9.75136 2.1875 10 2.1875C10.2486 2.1875 10.4871 2.28627 10.6629 2.46209C10.8387 2.6379 10.9375 2.87636 10.9375 3.125V9.0625H16.875C17.1236 9.0625 17.3621 9.16127 17.5379 9.33709C17.7137 9.5129 17.8125 9.75136 17.8125 10Z" fill="black" />
                                                            </svg>
                                                        </Button>
                                                    </Flex>
                                                </Flex>
                                            </Box>
                                        </Flex>
                                    ))
                                }
                            </Flex>
                            <Box {...css.right}>
                                <Heading>Buyurtma xulosasi</Heading>
                                <Flex mt={'72px'} align={'center'} justifyContent={'space-between'}>
                                    <Heading {...css.subname}>Umumiy</Heading>
                                    <Heading {...css.price}>{totalPrice} so'm</Heading>
                                </Flex>
                                <Button mt={'60px'} onClick={onOpen} {...css.submit}>Buyurtma berish</Button>
                            </Box>
                        </Flex>
                    ) : null
                }
            </Box>
            <Modal isCentered isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalCloseButton />
                    <ModalBody>
                        <Heading textAlign={'center'} mb={'60px'} mt={'36px'} {...css.name}>Buyurtma Berish Ma'lumotlarini Kiriting</Heading>
                        <Input name='full_name' value={formData?.full_name} onChange={handleChange} type='text' {...css.input} placeholder='To‘liq ism va familiyangizni kiriting' />
                        <Input name='phone' value={formData?.phone} onChange={handleChange} type='tell' {...css.input} placeholder='Telefon raqam' />
                        <Input name='address' value={formData?.address} onChange={handleChange} type='text' {...css.input} placeholder='Manzilingizni kiriting' />
                        <Textarea name='text' value={formData?.text} onChange={handleChange} placeholder='Xabar' {...css.textarea} />
                    </ModalBody>

                    <ModalFooter>
                        <Button onClick={handleSubmit} mt={'12px'} height={'45px !important'} {...css.submit}>
                            Yuborish
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </Box>
    );
}

export default KorzinkaPage;


const css = {
    title: {
        fontSize: "36px",
        lineHeight: "normal",
        fontWeight: "700"
    },
    box: {
        borderRadius: '20px',
        border: '1px solid rgba(0, 0, 0, 0.10)',
        padding: "30px 24px",
        width: {
            base: "100%",
            lg: "715px"
        }
    },
    subname: {
        fontSize: "20px",
        lineHeight: "normal",
        fontWeight: "400"
    },
    right: {
        borderRadius: '20px',
        border: '1px solid rgba(0, 0, 0, 0.10)',
        padding: "30px 24px",
        width: {
            base: "100%",
            lg: `calc(100% - 790px)`
        },
        height: "340px"
    },
    button: {
        background: "transparent",
        border: "none",
        cursor: "pointer",

        _hover: {
            background: "transparent"
        }
    },
    name: {
        fontSize: "20px",
        lineHeight: "normal",
        fontWeight: "700"
    },
    image: {
        width: "90px",
        height: "90px",
        objectFit: "cover",
        borderRadius: "12px"
    },
    card: {
        background: "#E9F8EC",
        width: "150px",
        height: "130px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "12px"
    },
    submit: {
        background: "#245D30",
        borderRadius: "62px",
        border: "none",
        height: {
            base: "50px",
            lg: "60px"
        },
        width: "100%",
        color: "#fff",
        fontWeight: "500",
        fontSize: "16px",
        cursor: "pointer",

        _hover: {
            background: "#245D30"
        }
    },
    bottom: {
        background: "#F0F0F0",
        borderRadius: "62px",
        padding: "8px 16px",
        gap: "12px"
    },
    click: {
        background: "transparent",
        border: "none",
        cursor: "pointer",

        _hover: {
            background: "transparent"
        }
    },
    input: {
        borderRadius: '10px',
        border: '1px solid var(--Gray-3, #828282)',
        background: ' #F9F9F9',
        width: "100%",
        padding: "24px 12px",
        margin: "12px 0",
    },
    textarea: {
        borderRadius: '10px',
        border: '1px solid var(--Gray-3, #828282)',
        background: ' #F9F9F9',
        width: "100%",
        padding: "16px 12px",
        height: "120px",
        marginTop: "12px"
    },
}