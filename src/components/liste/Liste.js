/* eslint-disable jsx-a11y/no-access-key */
import React from "react";
import {
  Input,
  Grid,
  StatLabel,
  Stat,
  Image,
  StatHelpText,
  Button,
  Spinner,
  Box,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import styles from "./styles.module.css";
import DataTypes from "./DataTypes";
import { useAllContext } from "../../context/AllContextes";

const Liste = () => {
  const message = {
    tr: {
      search: "Ara",
      videos: "tr",
    },
    de: {
      search: "Suchen",
      videos: "de",
    },
    en: {
      search: "Search",
      videos: "en",
    },
    fr: {
      search: "Chercher",
      videos: "fr",
    },
    ar: {
      search: "يبحث",
      videos: "ar",
    },
  };

  const { lang } = useAllContext();

  var [data, setData] = useState(undefined);
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const getSearchList = async () => {
    setIsLoading(true);
    setData(undefined);
    const searchResponse = await fetch(
      `https://toolsapi.wattod.com/search?query=${query}`,
      {
        method: "GET",
        headers: {
          "Access-Control-Allow-Origin" :"no-cors"
        }
      }
    );
    const searchData = await searchResponse.json();

    setData(searchData);
    console.log(searchData);
    setIsLoading(false);
  };

  const handleSubmit = (e) => {
    setQuery(e.target.value);
  };

  useEffect(() => {
    if (data)
      console.log(
        data.contents?.twoColumnSearchResultsRenderer?.primaryContents
          ?.sectionListRenderer?.contents[0]?.itemSectionRenderer?.contents
      );
  }, [data]);

  return (

    

    <div className={styles.div}>
      <div className={styles.searchContainer}>
        <Input
          onKeyDown={(e) => {
            if (e.keyCode === 13) {
              getSearchList(query);
            }
          }}
          height="2.5rem"
          type="search"
          className={styles.input}
          variant="unstyled"
          onChange={handleSubmit}
          placeholder={message[lang].search}
          value={query}
          pl="6px"
        />
        <Button
          ml="6px"
          mr="5px"
          type="submit"
          accessKey="13"
          onClick={() => getSearchList(query)}
          bgGradient="linear(to-r, #f3360e, #fb4b18)"
          color="#fff"
          variant="solid"
        >
          {message[lang].search}
        </Button>
      </div>
      {isLoading && (
        <Spinner
          className={styles.spinner}
          thickness="10px"
          speed="0.65s"
          emptyColor="gray.200"
          color="#f3360e"
          width="2cm"
          height="2cm"
        />
      )}
      <Grid
        className={styles.grid}
        templateColumns={{
          sm: "repeat(1, 5fr)",
          md: "repeat(2, 5fr)",
          lg: "repeat(2, 5fr)",
          xl: "repeat(4, 5fr)",
          "2xl": "repeat(4, 5fr)",
        }}
        gap={0}
      >
        {data &&
          data.contents?.twoColumnSearchResultsRenderer?.primaryContents?.sectionListRenderer?.contents[0].itemSectionRenderer?.contents.map(
            (item, index) => {
              if (item.videoRenderer)
                return (
                  <Stat mt="20px" mb="20px" className={styles.stat}>
                    <Image
                      src={item.videoRenderer.thumbnail.thumbnails[0].url}
                      className={styles.image}
                      onClick={() =>
                        window
                          .open(
                            `https://youtube.com${item.videoRenderer.navigationEndpoint.commandMetadata.webCommandMetadata.url}`,
                            "_blank"
                          )
                          .focus()
                      }
                    />
                    <StatLabel>
                      {item.videoRenderer.title.runs[0].text}
                    </StatLabel>
                    <StatLabel fontFamily="candal" color="grey">
                      {item.videoRenderer.ownerText.runs[0].text}
                    </StatLabel>
                    <StatHelpText>
                      {item.videoRenderer.viewCountText.simpleText}
                    </StatHelpText>
                    <Box className={styles.download}>
                      <DataTypes data={data} index={index} />
                    </Box>
                  </Stat>
                );
            }
          )}
      </Grid>
    </div>
  );
};
export default Liste;
