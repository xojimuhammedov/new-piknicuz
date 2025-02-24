import { Box, Button, Flex, Heading, Input, Link, Text, Textarea } from '@chakra-ui/react';
import React, { useState } from 'react';
import Location from '../assets/Location';
import { toast } from 'react-toastify';

const Form = () => {
    const [nameValue, setNameValue] = useState("");
    const [numberValue, setNumberValue] = useState("");
    const [textValue, setTextValue] = useState("");
    const [email, setEmail] = useState("");

    function changeNumber(item) {
        setNumberValue(item);
    }

    function changeName(item) {
        setNameValue(item);
    }
    function changeText(item) {
        setTextValue(item);
    }
    function changeEmail(item) {
        setEmail(item);
    }
    const handleClear = () => {
        setNameValue("");
        setNumberValue("");
        setTextValue("");
        setEmail("");
    };
    let bot = {
        TOKEN: "8015684576:AAEgmJv1Fp4XDcbHnoh2fYCvNdDEeL2rwB4",
        chatID: "-1002337598384",
        message: `
              Assalomu alaykum sizga yangi habar bor!
              Ism Familya 👤: ${nameValue}; 
              Telefon raqami ☎: ${numberValue};
              Xabari: ${textValue};
              `,
    };

    const encodedMessage = encodeURIComponent(bot.message);

    function sendMessage(e) {
        e.preventDefault();

        fetch(
            `https://api.telegram.org/bot${bot.TOKEN}/sendMessage?chat_id=${bot.chatID}&text=${encodedMessage} `,
            {
                method: "GET",
            }
        ).then(
            () => {
                handleClear();
                toast.success("Sizning habaringiz yuborildi!");
            },
            (error) => {
                console.log(error);
            }
        );
    }
    return (
        <Box p={'48px 0'}>
            <Box className='container'>
                <Flex flexDirection={{ base: "column", lg: "row" }} justifyContent={'space-between'}>
                    <Box>
                        <Heading {...css.title}>Keling, biz bilan gaplashaylik</Heading>
                        <Text {...css.text}>Savollar, sharhlar yoki takliflar? Shaklni to'ldiring va biz tez orada bog'lanamiz.</Text>
                        <Link target='_blank' href='https://maps.app.goo.gl/F4jnY5K9GA2jiwBa6'>
                            <Flex m={'12px 0'} gap={'12px'}>
                                <Location />
                                <Heading {...css.subname}>
                                    Toshkent shaxar Shayxontoxur tumani Qoʻrgʻoncha koʻchasi 48 uy
                                </Heading>
                            </Flex>
                        </Link>
                    </Box>
                    <Box {...css.item}>
                        <Input value={nameValue}
                            onChange={(e) => changeName(e.target.value)} {...css.input} placeholder='Ism va familya' />
                        <Input value={email}
                            onChange={(e) => changeEmail(e.target.value)} type='email' {...css.input} placeholder='Pochta' />
                        <Input value={numberValue}
                            onChange={(e) => changeNumber(e.target.value)} type='tell' {...css.input} placeholder='Telefon raqam' />
                        <Textarea value={textValue}
                            onChange={(e) => changeText(e.target.value)} placeholder='Xabar' {...css.textarea} />
                        <Button onClick={sendMessage} type='submit' {...css.button}>Yuborish</Button>
                    </Box>
                </Flex>
            </Box>
        </Box>
    );
}

export default Form;

const css = {
    subname: {
        color: "#011334",
        fontSize: {
            base: "14px",
            lg: "16px"
        },
        lineHeight: "26px",
        fontWeight: "600",
        width: {
            base: "100%",
            lg: "300px"
        }
    },
    title: {
        fontSize: {
            base: "25px",
            lg: "50px"
        },
        lineHeight: "normal",
        fontWeight: "700",
        color: "#011334",
        width: {
            base: "100%",
            lg: "500px"
        },
        margin: "12px 0"
    },
    text: {
        color: "#011334",
        fontSize: {
            base: "14px",
            lg: "16px"
        },
        lineHeight: "26px",
        fontWeight: "400",
        width: {
            base: "100%",
            lg: "390px"
        }
    },
    item: {
        borderRadius: {
            base: "10px",
            lg: "30px"
        },
        border: "1px solid var(--Gray-4, #BDBDBD)",
        background: 'var(--white, #FFF)',
        padding: {
            base: "12px",
            lg: "50px"
        },
        paddingRight: {
            base: "12px",
            lg: "62px"
        }
    },
    input: {
        borderRadius: '10px',
        border: '1px solid var(--Gray-3, #828282)',
        background: ' #F9F9F9',
        width: "100%",
        padding: "24px 12px",
        margin: {
            base: "6px 0",
            lg: "12px 0"
        },
    },
    textarea: {
        borderRadius: '10px',
        border: '1px solid var(--Gray-3, #828282)',
        background: ' #F9F9F9',
        width: "100%",
        padding: "16px 12px",
        height: "120px",
        marginTop: {
            base: "6px",
            lg: 0
        }
    },
    button: {
        borderRadius: '20px',
        border: '1px solid #245D30',
        background: '#245D30',
        width: "100%",
        height: "50px",
        margin: {
            base: "10px 0px",
            lg: "10px 6px"
        },
        color: "#fff",
        fontSize: {
            base: "16px",
            lg: "18px"
        },
        fontWeight: "600",
        cursor: "pointer",
        marginTop: "24px",

        _hover: {
            background: '#245D30',
        }
    }
}