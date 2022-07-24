import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, RadioGroup, Stack, Radio, ModalFooter, useDisclosure, useColorMode } from '@chakra-ui/react'
import React from 'react'
import { useState, createContext, useContext } from 'react'
import { Language } from '../../context/Language';
import styles from '../liste/styles.module.css'






const Settings = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    const { lang, setLang } = useContext(Language)


    const message = {
        'tr': {
            title: "Ayarlar",
            title2: "Ayarlar",
            close: "Kapat",
            theme: "Temayi Degistir",
            language: "Dil Degistir"
        },
        'de': {
            title: "Einstellungen",
            title2: "Einstellungen",
            close: "Schließen",
            theme: "Ändere Thema",
            language: "Sprache ändern"
        },
        'en': {
            title: "Settings",
            title2: "Settings",
            close: "Close",
            theme: "Change Theme",
            language: "Change Language"
        }
    }

    const { colorMode, toggleColorMode } = useColorMode()

    return (

        <>
            <Button bgGradient="linear(to-r, #f3360e, #fb4b18)" color='#fff'  mr="5px" onClick={onOpen}>{message[lang].title}</Button>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>{message[lang].title2}</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <p className={styles.header}>{message[lang].theme}</p>
                        <Button onClick={toggleColorMode} mr="5px">
                            {message[lang].theme}
                        </Button>
                    </ModalBody>
                    <ModalBody>
                        <p className={styles.header}>{message[lang].language}</p>
                        <RadioGroup onChange={setLang} value={lang}>
                            <Stack direction="column">
                                <Radio value='tr'>Turkish</Radio>
                                <Radio value='en'>English</Radio>
                                <Radio value='de'>German</Radio>
                            </Stack>
                        </RadioGroup>
                    </ModalBody>

                    <ModalFooter>
                        <Button  mr={40} onClick={onClose}>
                            {message[lang].close}
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}


export default Settings

