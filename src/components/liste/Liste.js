import React, { useContext } from 'react'
import { Input, Grid, StatLabel, Stat, Image, StatHelpText, Button, useDisclosure, Spinner, } from '@chakra-ui/react'
import { useState, useEffect } from 'react'
import styles from './styles.module.css'
import DataTypes from './DataTypes'
import { Language } from '../../context/Language';






const Liste = (index) => {

    const message = {
        'tr': {
            share: "Indirimi Paylas",
            search: "Ara",
            videos: "tr"
        },
        'de': {
            share: "DownloadTeilen",
            search: "Suchen",
            videos: "de"
        },
        'en': {
            share: "Share Download",
            search: "Search",
            videos: "en"
        }
    }

    const { lang, setLang } = useContext(Language)


    const [data, setData] = useState(undefined);
    const [query, setQuery] = useState("");
    const [isLoading, setIsLoading] = useState(false)
    let nothing;

    let mp3 = true
    let mp4 = false

    if (mp3 === true) {
        mp4 = false
    }
    if (mp4 === true) {
        mp3 = false
    }


    const payload = {
        context: {
            client: {
                hl: lang,
                gl: "TR",
                remoteHost: "5.176.84.155",
                deviceMake: "Apple",
                deviceModel: "",
                visitorData: "CgtURlU1OFpEcm1uSSiF2YGWBg%3D%3D",
                userAgent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36,gzip(gfe)",
                clientName: "WEB",
                clientVersion: "2.20220701.01.00",
                osName: "Macintosh",
                osVersion: "10_15_7",
                originalUrl: "https://www.youtube.com/results?search_query=halil+ibrahim+g%C3%B6ker",
                screenPixelDensity: 2,
                platform: "DESKTOP",
                clientFormFactor: "UNKNOWN_FORM_FACTOR",
                configInfo: {
                    appInstallData: "CIXZgZYGELfLrQUQuIuuBRDK7P0SEJje_RIQ1IOuBRDP8v0SEK6ergUQ_6muBRDV8f0SEJH4_BIQ2L6tBQ%3D%3D"
                },
                screenDensityFloat: 2,
                timeZone: "Europe/Istanbul",
                browserName: "Chrome",
                browserVersion: "103.0.0.0",
                screenWidthPoints: 1047,
                screenHeightPoints: 824,
                utcOffsetMinutes: 180,
                userInterfaceTheme: "USER_INTERFACE_THEME_LIGHT",
                memoryTotalKbytes: "8000000",
                mainAppWebInfo: {
                    graftUrl: "/results?search_query=halil+ibrahim+g%C3%B6ker",
                    pwaInstallabilityStatus: "PWA_INSTALLABILITY_STATUS_CAN_BE_INSTALLED",
                    webDisplayMode: "WEB_DISPLAY_MODE_BROWSER",
                    isWebNativeShareAvailable: false
                }
            },
            user: {
                lockedSafetyMode: false
            },
            request: {
                useSsl: true,
                internalExperimentFlags: [],
                consistencyTokenJars: []
            },
            clickTracking: {
                clickTrackingParams: "CB4Q7VAiEwieyd-rzNr4AhUJyxEIHdXVAzc="
            },
            adSignalsInfo: {
                params: [
                    {
                        key: "dt",
                        value: "1656777861522"
                    },
                    {
                        key: "flash",
                        value: "0"
                    },
                    {
                        key: "frm",
                        value: "0"
                    },
                    {
                        key: "u_tz",
                        value: "180"
                    },
                    {
                        key: "u_his",
                        value: "4"
                    },
                    {
                        key: "u_h",
                        value: "1050"
                    },
                    {
                        key: "u_w",
                        value: "1680"
                    },
                    {
                        key: "u_ah",
                        value: "940"
                    },
                    {
                        key: "u_aw",
                        value: "1680"
                    },
                    {
                        key: "u_cd",
                        value: "30"
                    },
                    {
                        key: "bc",
                        value: "31"
                    },
                    {
                        key: "bih",
                        value: "824"
                    },
                    {
                        key: "biw",
                        value: "1031"
                    },
                    {
                        key: "brdim",
                        value: "0,25,0,25,1680,25,1695,935,1047,824"
                    },
                    {
                        key: "vis",
                        value: "1"
                    },
                    {
                        key: "wgl",
                        value: "true"
                    },
                    {
                        key: "ca_type",
                        value: "image"
                    }
                ],
                bid: "ANyPxKqPl9hE_EFhqYFyXkFTsyGxNzPJ3zmZHYk5oPMRScurkXA0sUGIBXgLlNzSF64Eyyo1E87B"
            }
        },
        query: "halil ibrahim göker",
        webSearchboxStatsUrl: "/search?oq=halil ibrahim göker&gs_l=youtube.3..0i71k1l6.0.0.1.498002.0.0.0.0.0.0.0.0..0.0.uqaswc2,ytpso-bo-me=0,ytpsoso-bo-me=0,ytpso-rzp=0,ytpso-bo-bro-mi=24212243,ytpsoso-bo-bro-mi=24212243,cfro=1,ytpso-bo-me=1,ytpsoso-bo-me=1,ytpso-rzp=0,ytpso-bo-bro-mi=24237494,ytpsoso-bo-bro-mi=24237494...0...1ac..64.youtube..0.0.0....0.ndfBkFdQXUg"
    };

    const getSearchList = async (value) => {
        setIsLoading(true)
        setData(undefined);
        payload.query = value;
        const searchResponse = await fetch("https://www.youtube.com/youtubei/v1/search?prettyPrint=false", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload)
        });
        const searchData = await searchResponse.json();

        setData(searchData);
        console.log(searchData)
        setIsLoading(false)
    };


    useEffect(() => { if (data) console.log(data.contents?.twoColumnSearchResultsRenderer?.primaryContents?.sectionListRenderer?.contents[0]?.itemSectionRenderer?.contents); }, [data]);
    useEffect(() => {
        console.log(mp3, mp4)
    }, [mp3, mp4])


    return (



        <div className={styles.div}>



            <div className={styles.searchContainer}>
                <Input height="2.5rem" className={styles.input} variant='unstyled' onChange={(e) => { setQuery(e.target.value); }} placeholder={message[lang].search} value={query} />
                <Button ml="4px" mr="5px" onClick={() => getSearchList(query)} bgGradient="linear(to-r, #f3360e, #fb4b18)" color="#fff" variant='solid'>{message[lang].search}</Button>
            </div>

            {isLoading ? <Spinner className={styles.spinner}
                thickness='10px'
                speed='0.65s'
                emptyColor='gray.200'
                color='#f3360e'
                width="2cm"
                height="2cm"

            />
                : nothing}

            <Grid className={styles.grid} templateColumns={{ sm: 'repeat(1, 5fr)', md: 'repeat(2, 5fr)', lg: 'repeat(2, 5fr)', xl: 'repeat(4, 5fr)', "2xl": 'repeat(4, 5fr)' }} gap={0}>

                {data && data.contents?.twoColumnSearchResultsRenderer?.primaryContents?.sectionListRenderer?.contents[0].itemSectionRenderer?.contents.map((item, index) => {
                    if (item.videoRenderer) return (
                        <Stat mt="20px" mb="20px" className={styles.stat}>
                            <Image src={(item.videoRenderer.thumbnail.thumbnails[0].url)} className={styles.image} onClick={() => window.open(`https://youtube.com${item.videoRenderer.navigationEndpoint.commandMetadata.webCommandMetadata.url}`, '_blank').focus()} />
                            <StatLabel >{(item.videoRenderer.title.runs[0].text)}</StatLabel>
                            <StatLabel fontFamily="candal" color="grey">{(item.videoRenderer.ownerText.runs[0].text)}</StatLabel>
                            <StatHelpText>{(item.videoRenderer.viewCountText.simpleText)}</StatHelpText>

                            <DataTypes mp3={mp3} mp4={mp4} />

                            <Button className={styles.share} mt="5px" colorScheme='gray'>{message[lang].share}</Button>
                        </Stat>

                    )
                })}

            </Grid>


        </div >
    )


}





export default Liste


