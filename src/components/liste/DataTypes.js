import React from "react";
import {
  Button,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  useDisclosure,
  Modal,
  Radio,
  Stack,
  RadioGroup,
  Box,
} from "@chakra-ui/react";
import styles from "./styles.module.css";
import { useAllContext } from "../../context/AllContextes";
import { WhatsappShareButton } from "react-share";

const DataTypes = ({ data, index }) => {
  const { lang, format, setFormat, setQuality, quality } = useAllContext();

  const Url = `https://youtube.com${data.contents?.twoColumnSearchResultsRenderer?.primaryContents?.sectionListRenderer?.contents[0].itemSectionRenderer?.contents[index].videoRenderer.navigationEndpoint.commandMetadata.webCommandMetadata.url}`;
  let title =
    data.contents?.twoColumnSearchResultsRenderer?.primaryContents
      ?.sectionListRenderer?.contents[0].itemSectionRenderer?.contents[index]
      .videoRenderer.title.runs[0].text;

  const Download = async () => {
    title = title
      .replace(/Ğ/gm, "g")
      .replace(/Ş/gm, "S")
      .replace(/İ/gm, "I")
      .replace(/ğ/gm, "g")
      .replace(/ş/gm, "s")
      .replace(/ı/gm, "i")
      .replace(/%C4%B1/gm, "s")
      .replace(/%C4%B0/gm, "S")
      .replace(/%C5%9E/gm, "I")
      .replace(/%C5%9F/gm, "i")
      .replace(/%C4%9E/gm, "G")
      .replace(/ /gm, "_")
      .replace(/—/gm, "-")
      .replace(/%C4%9E/gm, "G")
      .replace(/ə/gm, "e");

      const DownloadLink = `https://toolsapi.wattod.com/download?URL=${Url}&downloadFormat=${format}&quality=${quality}&title=${title}`;

    window.open(DownloadLink, "_blank");
  };
  const DownloadLink = `https://toolsapi.wattod.com/download?URL=${Url}&downloadFormat=${format}&quality=${quality}&title=${title}`;

  const { isOpen, onOpen, onClose } = useDisclosure();

  const message = {
    tr: {
      download: "Indir",
      datatype: "Format",
      quality: "Kalite",
      share: "Linki paylaş",
    },
    de: {
      download: "Herunterladen",
      datatype: "Format",
      quality: "Qualität",
      share: "Link teilen",
    },
    en: {
      download: "Download",
      datatype: "Format",
      quality: "Quality",
      share: "Share Downloadlink",
    },
    fr: {
      download: "Télécharger",
      datatype: "Format",
      quality: "Qualité",
      share: "lien de partage",
    },
    ar: {
      download: "تحميل",
      datatype: "شكل",
      quality: "جودة",
      share: "رابط المشاركة",
    },
  };

  const shareLink = () => {};

  return (
    <Box>
      <Button
        className={styles.download}
        bgGradient="linear(to-r, #f3360e, #fb4b18)"
        color="#fff"
        onClick={onOpen}
      >
        {message[lang].download}
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{message[lang].datatype}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <RadioGroup onChange={setFormat} value={format}>
              <Stack mb="13px" direction="column">
                <Radio value="audioandvideo">Video</Radio>
                <Radio value="audioonly">Audio</Radio>
              </Stack>
            </RadioGroup>
          </ModalBody>
          {format === "audioandvideo" && (
            <>
              <ModalHeader>{message[lang].quality}</ModalHeader>
              <ModalBody>
                <RadioGroup onChange={setQuality} value={quality}>
                  <Stack mb="13px" direction="column">
                    <Radio value={"lowest"}>Low Quality</Radio>
                    <Radio value={"highest"}>High Quality</Radio>
                  </Stack>
                </RadioGroup>
              </ModalBody>
            </>
          )}
          <ModalFooter>
            <Button
              onClick={() => Download()}
              color="#fff"
              mr="2%"
             
              w="100%"
              bgGradient="linear(to-r, #f3360e, #fb4b18)"
              variant="solid"
            >
              {message[lang].download}
            </Button>
            <WhatsappShareButton url={DownloadLink} className={styles.sharebutton}>
              <Button
                onClick={() => shareLink()}
                color="#000"
                ml="1%"
                w="100%"
                variant="solid"
              >
                {message[lang].share}
              </Button>
            </WhatsappShareButton>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default DataTypes;
