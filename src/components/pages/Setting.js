import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, RadioGroup, Stack, Radio, ModalFooter, useDisclosure, useColorMode, Text, Image } from '@chakra-ui/react'
import React from 'react'
import { useAllContext } from '../../context/AllContextes';
import styles from '../liste/styles.module.css'
import SettingsIconDark from './SettingsIconDark.svg'
import SettingsIcon from './SettingsIcon.png'

const Settings = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    const { lang, setLang } = useAllContext()

    const ColorMode=localStorage.getItem('chakra-ui-color-mode')

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

    const { toggleColorMode } = useColorMode()

    return (
        <>
            <Button onClick={onOpen}><Image w="20px"src={ColorMode === "dark" ? SettingsIconDark : SettingsIcon} /></Button>
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

