import React, { useContext } from 'react'
import {
    Input, Grid, StatLabel, Stat, Image, StatHelpText, Button, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, useDisclosure, Modal, FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Select,
    Radio,
    Stack,
    RadioGroup,
} from '@chakra-ui/react'
import styles from './styles.module.css'
import { Language } from '../../context/Language';



const DataTypes = () => {

    const { lang, format, setFormat } = useContext(Language)


    const { isOpen, onOpen, onClose } = useDisclosure()

    const message = {
        'tr': {
            download: "Indir",
            datatype: "Format"
        },
        'de': {
            download: "Herunterladen",
            datatype: "Format"
        },
        'en': {
            download: "Download",
            datatype: "Format"
        },
        'fr': {
            download: "Télécharger",
            datatype: "Format"
        },
        'ar':{
            download: "تحميل",
            datatype: "شكل"
        }
    }

    return (
        <>
            <Button className={styles.download} bgGradient="linear(to-r, #f3360e, #fb4b18)" color="#fff" onClick={onOpen}>{message[lang].download}</Button>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>{message[lang].datatype}</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                    <RadioGroup onChange={setFormat} value={format}>
                            <Stack mb="13px" direction="column">
                                <Radio value='mp4'>Video</Radio>
                                <Radio value='mp3'>Audio</Radio>
                            </Stack>
                        </RadioGroup>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="#fff" bgGradient="linear(to-r, #f3360e, #fb4b18)" mr="77%" variant='solid'>{message[lang].download}</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
            </>
    )
}

export default DataTypes