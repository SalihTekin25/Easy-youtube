import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, RadioGroup, Stack, Radio, ModalFooter, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import { useState, createContext, useContext } from 'react'
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import Navbar from '../container/Navbar';
import Liste from '../liste/Liste';
import About from './About';
import { Language } from '../../context/Language';





const ChangeLang = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    const {lang, setLang} = useContext(Language)


    const message = {
        'tr': {
            title: "Dil",
            title2: "Dil",
            close: "Kapat"
        },
        'de': {
            title: "Sprache",
            title2: "Sprache",
            close: "Schließen"
        },
        'en': {
            title: "Language",
            title2: "Language",
            close: "Close"
        }
    }



   



    return (
        <div>
            <Button onClick={onOpen}>{message[lang].title}</Button>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>{message[lang].title2}</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <RadioGroup onChange={setLang} value={lang}>
                            <Stack direction="column">
                                <Radio value='tr'>Turkish</Radio>
                                <Radio value='en'>English</Radio>
                                <Radio value='de'>German</Radio>
                            </Stack>
                        </RadioGroup>
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='blue' mr={40} onClick={onClose}>
                            {message[lang].close}
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>



        </div>
    )
}


export default  ChangeLang

