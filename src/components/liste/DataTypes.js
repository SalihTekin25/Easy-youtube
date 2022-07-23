import React, { useContext } from 'react'
import {
    Input, Grid, StatLabel, Stat, Image, StatHelpText, Button, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, useDisclosure, Modal, FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Select,
} from '@chakra-ui/react'
import styles from './styles.module.css'
import { Language } from '../../context/Language';



const DataTypes = (mp3, mp4) => {

    const { lang, setLang } = useContext(Language)


    const { isOpen, onOpen, onClose } = useDisclosure()

    const message = {
        'tr': {
            download: "Indir",
            datatype:"Format"
        },
        'de': {
            download: "Herunterladen",
            datatype:"Format"
        },
        'en': {
            download: "Download",
            datatype:"Format"
        }
    }

    return (
        <div>
            <Button className={styles.download} bgGradient="linear(to-r, #f3360e, #fb4b18)" color="#fff" onClick={onOpen}>{message[lang].download}</Button>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>{message[lang].datatype}</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Select>
                            <option value='mp4' onSelect={() => mp3 = false}>mp4</option>
                            <option onSelect={() => mp4 = false} value='mp3'>mp3</option>
                        </Select>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="#fff" bgGradient="linear(to-r, #f3360e, #fb4b18)" mr="77%" variant='solid'>{message[lang].download}</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal></div>
    )
}

export default DataTypes