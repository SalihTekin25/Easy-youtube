import React, { useContext } from 'react'
import Logo from '../container/WattodLogo.png'
import { Image } from '@chakra-ui/react'
import styles from '../container/styles.css'
import { Language } from '../../context/Language';


const About = () => {
  const { lang, setLang } = useContext(Language)

  const message = {
    'tr': {
      info: "Merhaba ve Wattod tools larina hoş geldiniz, buradan video ve ses indirebilirsiniz İyi eğlenceler"
    },
    'de': {
      info: "Hallo und Willkommen zu den Wattod tools du kannst hier videos und audios herunterladen Viel Spaß"
    },
    'en': {
      info: "Hello and welcome to the Wattod tools you can download videos and audios here Have fun"
    },
    'fr':{
      info: "Bonjour et bienvenue sur les outils Wattod vous pouvez télécharger des vidéos et des audios ici Amusez-vous"
    },
    'ar':{
      info: "مرحبًا ومرحبًا بكم في أدوات Wattod ، يمكنك تنزيل مقاطع الفيديو والتسجيلات الصوتية هنا واستمتع"
    }
  }
  return (
    <div>
      {message[lang].info}
      <Image src={Logo} className="wattodlogo" />
    </div>
  )
}

export default About