import {
    Box, Heading, Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
} from '@chakra-ui/react';
import React from 'react';

const Question = () => {
    return (
        <Box p={'48px 0'}>
            <Box className='container'>
                <Heading {...css.title}>Tez-tez beriladigan savollar</Heading>
                <Accordion mt={'60px'} defaultIndex={[0]} allowMultiple>
                    <AccordionItem {...css.items}>
                        <AccordionButton p={"20px"}>
                            <Box as="h2" {...css.name} flex="1" textAlign="left">
                                Mahsulotlarni qanday buyurtma qilsa bo‘ladi?
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                        <AccordionPanel {...css.text} pb={4}>
                            Siz tanlagan mahsulotni savatchaga qo‘shib, to‘lov jarayonini davom ettirish orqali buyurtma qilishingiz mumkin. Buyurtma jarayoni oddiy va qulay.
                        </AccordionPanel>
                    </AccordionItem>
                </Accordion>
            </Box>
        </Box>
    );
}

export default Question;

const css = {
    title: {
        margin: "0",
        textAlign: "center",
        fontSize: "50px",
        fontWeight: "700",
        lineHeight: "normal"
    },
    items: {
        background: "#F5F5F5",
        borderRadius: "16px !important",
        width: "792px",
        margin:"16px auto"
    },
    name: {
        fontSize: "22px",
        fontWeight: "600",
        lineHeight: "28px",
        color: "#151515"
    },
    text: {
        color: "#747474",
        fontSize: "16px",
        fontWeight: "400",
        lineHeight: "24px",
        paddingLeft:"20px"
    }
}