import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import About from '../pages/About'
import {
    Button,
    IconButton,
    Image,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    useColorMode,
    Stack,
    RadioGroup
} from '@chakra-ui/react'
import './styles.css'
import Logo from './WattodLogo.png'
import { useState } from 'react'
import ChangeLang from '../pages/ChangeLang'
import { Language } from '../../context/Language';



const Navbar = (value) => {


    const { lang, setLang } = useContext(Language)


    const message = {
        'tr': {
            home: "Ana Sayfa",
            theme: "Temayi Degistir",
            info: "Hakkinda",
            close: "Kapat"
        },
        'de': {
            home: "Startseite",
            theme: "Ändere Thema",
            info: "Info",
            close: "Schließen"
        },
        'en': {
            home: "Home",
            theme: "Change Theme",
            info: "About",
            close: "Close"
        }
    }

    const { isOpen, onOpen, onClose } = useDisclosure()
    const { colorMode, toggleColorMode } = useColorMode()

    return (
        <div>
            <nav className="menu" >
                <div className="left">
                    <IconButton className="iconbutton" colorScheme='white' aria-label='Search database'><Link to="/"><Image src={Logo} alt='Wattod' /></Link></IconButton>
                </div>
                <div className="right">

                    <Button bgGradient="linear(to-r, #f3360e, #fb4b18)" color="#fff" variant='solid' className="button">
                        <Link to="/">{message[lang].home}</Link>
                    </Button>
                    <Button onClick={toggleColorMode} mr="5px">
                        {message[lang].theme}
                    </Button>

                    <ChangeLang />

                    <Button onClick={onOpen}>{message[lang].info}</Button>

                    <Modal isOpen={isOpen} onClose={onClose}>
                        <ModalOverlay />
                        <ModalContent>
                            <ModalHeader>{message[lang].info}</ModalHeader>
                            <ModalCloseButton />
                            <ModalBody>
                                <About count={2} />
                            </ModalBody>

                            <ModalFooter>
                                <Button colorScheme='blue' mr={40} onClick={onClose}>
                                    {message[lang].close}
                                </Button>
                            </ModalFooter>
                        </ModalContent>
                    </Modal>


                </div>
            </nav>
        </div>
    )
}

export default Navbar

// {colorMode === 'light' ? 'Dark' : 'Light'}

