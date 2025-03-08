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
                    <AccordionItem {...css.items}>
                        <AccordionButton p={"20px"}>
                            <Box as="h2" {...css.name} flex="1" textAlign="left">
                                To‘lov usullari qanday?
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                        <AccordionPanel {...css.text} pb={4}>
                            To‘lov naqd yoki plastik karta orqali amalga oshiriladi. Do‘konimizdan xarid qilish qulay va oson!
                        </AccordionPanel>
                    </AccordionItem>
                    {/* <AccordionItem {...css.items}>
                        <AccordionButton p={"20px"}>
                            <Box as="h2" {...css.name} flex="1" textAlign="left">
                                Mahsulotlarni qaytarish mumkinmi?
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                        <AccordionPanel {...css.text} pb={4}>
                            Siz tanlagan mahsulotni savatchaga qo‘shib, to‘lov jarayonini davom ettirish orqali buyurtma qilishingiz mumkin. Buyurtma jarayoni oddiy va qulay.
                        </AccordionPanel>
                    </AccordionItem> */}
                    <AccordionItem {...css.items}>
                        <AccordionButton p={"20px"}>
                            <Box as="h2" {...css.name} flex="1" textAlign="left">
                                Mahsulotlar kafolatlanganmi?
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                        <AccordionPanel {...css.text} pb={4}>
                            Ha, barcha mahsulotlarimiz sifat kafolati bilan ta’minlangan.
                        </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem {...css.items}>
                        <AccordionButton p={"20px"}>
                            <Box as="h2" {...css.name} flex="1" textAlign="left">
                                Sayohat mahsulotlarini tanlashda yordam bera olasizmi?
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                        <AccordionPanel {...css.text} pb={4}>
                            Albatta! Sizga mos sayohat mahsulotlarini tanlashda yordam beramiz. Mahsulotlar bo'limimiz orqali sayohat uchun kerak bo'ladigan mahsulotlarni ko'rishingiz mumkin!
                        </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem {...css.items}>
                        <AccordionButton p={"20px"}>
                            <Box as="h2" {...css.name} flex="1" textAlign="left">
                                Yetkazib berish xizmati bormi?
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                        <AccordionPanel {...css.text} pb={4}>
                            Afsuski bizda yetkazib berish xizmati mavjud emas. Mijozlarga qulaylik yaratish maqsadida viloyatlarga BTS yoki EMU pochtalari orqali joʻnata olamiz. Toshkent shaxriga yandex orqali yuborishimiz mumkin.
                            Yetkazib berish xizmati sotib oluvchi tomonidan toʻlanadi.
                        </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem {...css.items}>
                        <AccordionButton p={"20px"}>
                            <Box as="h2" {...css.name} flex="1" textAlign="left">
                                Mahsulotlarni ko‘rish uchun oflayn do‘koningiz bormi?
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                        <AccordionPanel {...css.text} pb={4}>
                            Albatta! Bizning mahsulotlarimizni kelib ko'rishingiz mumkin. Aloqa bo'limi orqali manzilimizni ko'rishingiz mumkin!
                        </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem {...css.items}>
                        <AccordionButton p={"20px"}>
                            <Box as="h2" {...css.name} flex="1" textAlign="left">
                                Maxsulotga toʻlovni qachon qilaman.
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                        <AccordionPanel {...css.text} pb={4}>
                            Bizda xamma maxsulotlarga oldindan toʻlov qilish kerak.                        </AccordionPanel>
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
        fontSize: {
            base: "25px",
            lg: "50px"
        },
        fontWeight: "700",
        lineHeight: "normal"
    },
    items: {
        background: "#F5F5F5",
        borderRadius: "16px !important",
        width: {
            base: "100%",
            lg: "792px"
        },
        margin: "16px auto"
    },
    name: {
        fontSize: {
            base: "16px",
            lg: "22px"
        },
        fontWeight: "600",
        lineHeight: "28px",
        color: "#151515"
    },
    text: {
        color: "#747474",
        fontSize: {
            base: "12px",
            lg: "16px"
        },
        fontWeight: "400",
        lineHeight: {
            base: "20px",
            lg: "24px"
        },
        paddingLeft: "20px"
    }
}