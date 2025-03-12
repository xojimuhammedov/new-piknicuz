import {
    Flex,
    Link,
    Modal,
    ModalContent,
    useDisclosure,
    Text
} from '@chakra-ui/react';

import { Link as Alink } from 'react-router-dom'

function NavModal() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <>
            <button onClick={onOpen} className="modal-open-button">
                <svg xmlns="http://www.w3.org/2000/svg" width="27" height="25" viewBox="0 0 27 25"><path fill="#FFF" fill-rule="evenodd" d="M2.5 0h22a2.5 2.5 0 1 1 0 5h-22a2.5 2.5 0 1 1 0-5zm0 10h22a2.5 2.5 0 1 1 0 5h-22a2.5 2.5 0 1 1 0-5zm0 10h22a2.5 2.5 0 1 1 0 5h-22a2.5 2.5 0 1 1 0-5z"></path></svg>
            </button>

            <Modal {...css.list} isOpen={isOpen} onClose={onClose}>
                <ModalContent {...css.box}>
                    <button onClick={onClose} className="modal-close-button">
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 14 14">
                            <path
                                fill="none"
                                fill-rule="evenodd"
                                stroke="#FFFFFF"
                                stroke-width="2.8"
                                d="M7 7L1 1l6 6 6-6-6 6zm0 0l-6 6 6-6 6 6-6-6z"></path>
                        </svg>
                    </button>
                    <Flex mt="50px" gap="25px" flexDirection="column">
                        <Link onClick={onClose} {...css.link} href='/'>Bosh sahifa</Link>
                        <Alink onClick={onClose} to={'/products'}>
                            <Text {...css.link}>Mahsulotlar</Text>
                        </Alink>
                        {/* <Link onClick={onClose} {...css.link} href='#product'>Mahsulotlar</Link> */}
                        <Alink onClick={onClose} to={'/contact'}>
                            <Text {...css.link}>Aloqa</Text>
                        </Alink>
                        <Alink onClick={onClose} to={'/blog'}>
                            <Text {...css.link}>Blog</Text>
                        </Alink>
                    </Flex>
                </ModalContent>
            </Modal>
        </>
    );
}

export default NavModal;

const css = {
    link: {
        fontSize: '18px',
        lineHeight: '24px',
        textTransform: 'uppercase',
        fontWeight: '400',
        color: '#fff'
    },
    box: {
        background: '#245D30',
        height: '100vh !important',
        width: '100%',
        top: '-65px',
        right: 0,
        padding: '20px 0 0 40px',
        position: 'fixed'
    },
    list: {
        right: 0
    }
};