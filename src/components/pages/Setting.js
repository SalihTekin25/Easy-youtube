import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, RadioGroup, Stack, Radio, ModalFooter, useDisclosure, useColorMode, Text } from '@chakra-ui/react'
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
            theme: "Temayı değiştir",
            language: "Dil"
        },
        'de': {
            title: "Einstellungen",
            title2: "Einstellungen",
            close: "Schließen",
            theme: "Thema ändern",
            language: "Sprache"
        },
        'en': {
            title: "Settings",
            title2: "Settings",
            close: "Close",
            theme: "Change Theme",
            language: "Language"
        },
        'fr': {
            title: "Réglages",
            title2: "Réglages",
            close: "Proche",
            theme: "Change le thème",
            language: "Langue"
        },
        'ar': {
            title: "إعدادات",
            title2: "إعدادات",
            close: "قريب",
            theme: "غير الخلفية",
            language: "لغة"
        }
    }

    const { colorMode, toggleColorMode } = useColorMode()

    return (

        <>
            <Button bgGradient="linear(to-r, #f3360e, #fb4b18)" color='#fff' mr="5px" onClick={onOpen}>{message[lang].title}</Button>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>{message[lang].title2}</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Text mb="9px" className={styles.header}>{message[lang].theme}</Text>
                        <Button mb="9px" onClick={toggleColorMode} mr="5px">
                            {message[lang].theme}
                        </Button>
                    </ModalBody>
                    <ModalBody>
                        <Text mb="9px" className={styles.header}>{message[lang].language}</Text>
                        <RadioGroup onChange={setLang} value={lang}>
                            <Stack mb="13px" direction="column">
                                <Radio value='tr'>Turkish</Radio>
                                <Radio value='en'>English</Radio>
                                <Radio value='de'>German</Radio>
                                <Radio value='fr'>France</Radio>
                                <Radio value='ar'>Arabic</Radio>
                            </Stack>
                        </RadioGroup>
                    </ModalBody>
                    <ModalFooter>
                        <Button mr={40} onClick={onClose}>
                            {message[lang].close}
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}


export default Settings

