import { Box, Button, Flex, Heading, Input, Link, SimpleGrid, Text, Textarea } from '@chakra-ui/react';
import React from 'react';
import Location from '../assets/Location';
import Phone from '../assets/Phone';
import Mail from '../assets/Mail';

const Form = () => {
    return (
        <Box p={'48px 0'}>
            <Box className='container'>
                <Flex justifyContent={'space-between'}>
                    <Box>
                        <Heading {...css.title}>Keling, biz bilan gaplashaylik</Heading>
                        <Text {...css.text}>Savollar, sharhlar yoki takliflar? Shaklni to'ldiring va biz tez orada bog'lanamiz.</Text>
                        <Link href='#'>
                            <Flex m={'12px 0'} gap={'12px'}>
                                <Location />
                                <Heading {...css.subname}>
                                    1055 Arthur ave Elk Groot, 67.
                                    New Palmas South Carolina.
                                </Heading>
                            </Flex>
                        </Link>
                        <Link href='#'>
                            <Flex m={'12px 0'} align={'center'} gap={'12px'}>
                                <Phone />
                                <Heading {...css.subname}>
                                    +1 234 678 9108 99
                                </Heading>
                            </Flex>
                        </Link>
                        <Link href='#'>
                            <Flex m={'12px 0'} align={'center'} gap={'12px'}>
                                <Mail />
                                <Heading {...css.subname}>
                                    Contact@moralizer.com
                                </Heading>
                            </Flex>
                        </Link>
                    </Box>
                    <Box {...css.item}>
                        <SimpleGrid columns={2} gap={'20px'}>
                            <Input {...css.input} placeholder='Ism' />
                            <Input {...css.input} placeholder='Familya' />
                        </SimpleGrid>
                        <Input type='email' {...css.input} placeholder='Pochta' />
                        <Input type='tell' {...css.input} placeholder='Telefon raqam' />
                        <Textarea placeholder='Xabar' {...css.textarea} />
                        <Button {...css.button}>Yuborish</Button>
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
        fontSize: "16px",
        lineHeight: "26px",
        fontWeight: "600",
        width: "300px"
    },
    title: {
        fontSize: "50px",
        lineHeight: "normal",
        fontWeight: "700",
        color: "#011334",
        width: "500px"
    },
    text: {
        color: "#011334",
        fontSize: "16px",
        lineHeight: "26px",
        fontWeight: "400",
        width: "390px"
    },
    item: {
        borderRadius: "30px",
        border: "1px solid var(--Gray-4, #BDBDBD)",
        background: 'var(--white, #FFF)',
        padding: "50px",
        paddingRight: "62px"
    },
    input: {
        borderRadius: '10px',
        border: '1px solid var(--Gray-3, #828282)',
        background: ' #F9F9F9',
        width: "100%",
        padding: "16px 0",
        paddingLeft: "12px",
        margin: "12px 0",

        _focus: {
            outline: '1px solid var(--Gray-3, #245D30)',
        }
    },
    textarea: {
        borderRadius: '10px',
        border: '1px solid var(--Gray-3, #828282)',
        background: ' #F9F9F9',
        width: "100%",
        padding: "16px 0",
        paddingLeft: "12px",
        height: "70px",

        _focus: {
            outline: '1px solid var(--Gray-3, #245D30)',
        }
    },
    button: {
        borderRadius: '20px',
        border: '1px solid #245D30',
        background: '#245D30',
        width: "100%",
        height: "45px",
        margin: "10px 6px",
        color: "#fff",
        fontSize: "18px",
        fontWeight: "600"
    }
}