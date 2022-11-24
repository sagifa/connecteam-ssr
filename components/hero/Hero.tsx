import React from "react";
import { Flex, Text, Box, Img, useMediaQuery } from "@chakra-ui/react";
import Image from "next/image";
import {
  APP_MAIN_COLOR_HUE,
  APP_PADDING,
  HERO_H_REM,
} from "../../utils/consts";
import { ButtonsBoxStyle, SubtitleStyle, TitleStyle } from "./style";
import PrimaryButton from "../buttons/PrimaryButton";
import SecondaryButton from "../buttons/SecondaryButton";
import { getHoverSecondaryColor, getPath } from "../../utils/helpers";
import ButtonArrowsAnimation from "./ButtonArrowsAnimation";

const Hero = (heroData: any) => {
  const [isMobile] = useMediaQuery("(max-width: 768px)");

  const backgroundUrl = getPath(
    `home-${isMobile ? "small" : "large"}.jpg`,
    "jpg"
  );
  const color = getHoverSecondaryColor(APP_MAIN_COLOR_HUE);

  return (
    <Flex
      h={`${HERO_H_REM}rem`}
      position="relative"
      w="100%"
      px={["1rem", "", "13%", APP_PADDING]}
      background={{
        base: "linear-gradient(180deg, rgba(37, 22, 0, 0) 0%, #251600 100%)",
        md: "100%",
      }}
    >
      <Image
        alt="background"
        src={backgroundUrl}
        fill
        style={{
          objectFit: "cover",
          zIndex: "-1",
        }}
      />
      <Flex
        direction="column"
        alignItems="flex-start"
        w={{ base: "352px", md: "34.6rem" }}
      >
        <Box pt={{ sm: "1.5rem", md: "4rem" }}>
          <Img
            src="/logo.svg"
            alt="logo"
            width={{ base: "15rem", md: "20rem" }}
          />
        </Box>
        <Text {...TitleStyle} mt="6.3rem">
          {heroData.data.content.hero.title}
        </Text>
        <Text {...SubtitleStyle}>{heroData.data.content.hero.subtitle}</Text>
        <Flex
          {...ButtonsBoxStyle}
          direction={{ base: "column", md: "row" }}
          w="100%"
          alignItems="center"
        >
          {heroData.data.content.hero.links.map((btn: any) => {
            return btn.primary ? (
              <PrimaryButton
                key={btn.label}
                label={btn.label}
                colorHue={APP_MAIN_COLOR_HUE}
                width={isMobile ? "100%" : "13.5rem"}
                height="3.4rem"
              />
            ) : (
              <SecondaryButton
                key={btn.label}
                icon={btn.icon}
                label={btn.label}
                props={{
                  color: color,
                  w: isMobile ? "100%" : "13.3rem",
                  h: "3.4rem",
                }}
              />
            );
          })}
        </Flex>
        <Flex justifyContent={{ base: "center", md: "start" }} w="100%">
          <ButtonArrowsAnimation colorHue={APP_MAIN_COLOR_HUE} />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Hero;
