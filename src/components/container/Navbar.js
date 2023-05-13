import React from 'react'
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
} from '@chakra-ui/react'
import './styles.css'
import Logo from './WattodLogo.png'
import ChangeLang from '../pages/Setting'
import { useAllContext } from '../../context/AllContextes';



const Navbar = () => {


    const { lang } = useAllContext()


    const message = {
        'tr': {
            home: "Ana Sayfa",
            info: "Bilgi",
            close: "Kapat"
        },
        'de': {
            home: "Startseite",
            info: "Info",
            close: "Schließen"
        },
        'en': {
            home: "Home",
            info: "Info",
            close: "Close"
        },
        'fr': {
            home: "Page d'accueilme",
            info: "Info",
            close: "Proche"
        },
        'ar': {
            home: "الصفحة الرئيسية",
            info: "معلومات",
            close: "قريب"
        }
    }

    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <div>
            <nav className="menu" >
                <div >
                    <IconButton className="iconbutton" colorScheme='white' aria-label='Search database'><Link to="/"><Image src={Logo} alt='Wattod' /></Link></IconButton>
                </div>
                <div>

                    <Button bgGradient="linear(to-r, #f3360e, #fb4b18)" color="#fff" variant='solid' className="button">
                        <Link to="/">{message[lang].home}</Link>
                    </Button>



                    <Button  mr="5px" bgGradient="linear(to-r, #f3360e, #fb4b18)" color="white" onClick={onOpen}>{message[lang].info}</Button>

                    <Modal isOpen={isOpen} onClose={onClose}>
                        <ModalOverlay />
                        <ModalContent>
                            <ModalHeader>{message[lang].info}</ModalHeader>
                            <ModalCloseButton />
                            <ModalBody>
                                <About count={2} />
                            </ModalBody>

                            <ModalFooter>
                                <Button mr={40} onClick={onClose}>
                                    {message[lang].close}
                                </Button>
                            </ModalFooter>
                        </ModalContent>
                    </Modal>

                    <ChangeLang />

                </div>
            </nav>
        </div>
    )
}

export default Navbar


