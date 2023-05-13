import React from 'react'
import Logo from '../container/WattodLogo.png'
import { Image } from '@chakra-ui/react'
import { useAllContext } from '../../context/AllContextes';


const About = () => {
  const { lang } = useAllContext()

  const message = {
    'tr': {
      info: "Wattod Tools ile videoları ve sesleri indirebilirsiniz. Kullanımı kolaydır. İyi eğlenceler."
    },
    'de': {
      info: " Mit Wattod Tools können Sie Videos und Audios herunterladen. Es ist einfach zu bedienen. Habe Spaß."
    },
    'en': {
      info: "You can download videos and audios with Wattod Tools. It is easy to use. Have fun."
    },
    'fr':{
      info: "Vous pouvez télécharger des vidéos et des audios avec Wattod Tools. C'est facile a utiliser. S'amuser."
    },
    'ar':{
      info: "يمكنك تنزيل مقاطع الفيديو والتسجيلات الصوتية باستخدام Wattod Tools. سهلة الاستخدام. استمتع." 
    }
  }
  return (
    <div>
      {message[lang].info}
      <Image mt="10px" src={Logo} className="wattodlogo" />
    </div>
  )
}

export default About