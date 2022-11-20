import React from "react";
import {
  Flex,
  Text,
  Box,
  Img,
  useDisclosure,
  Center,
  Circle,
} from "@chakra-ui/react";
import Image from "next/image";
import { APP_PADDING, APP_WIDTH, HERO_H_REM } from "../../utils/consts";

import {
  ButtonsBoxStyle,
  ScrollButtonStyle,
  SubtitleStyle,
  TitleStyle,
} from "./style";
import PrimaryButton from "../buttons/PrimaryButton";
import SecondaryButton from "../buttons/SecondaryButton";
import { getPath, getPrimaryColor } from "../../utils/helpers";
import { handleClickScroll } from "../NavBar";

const Hero = (heroData: any) => {
  const { isOpen, onToggle } = useDisclosure();
  const backgroundUrl = getPath("home-large.jpg", "jpg");
  const colorHue = 36;
  const primaryColor = getPrimaryColor(colorHue);
  //TODO!! edit bg image to darker
  //TODO!! change to custom color theme

  const handleClick = () => {
    handleClickScroll("form-section");
    onToggle();
  };
  return (
    <Flex
      px={APP_PADDING}
      h={`${HERO_H_REM}rem`}
      w={APP_WIDTH}
      position="relative"
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
      <Flex>
        <Box w="34.6rem">
          <Box pt="4rem">
            <Img src="/logo.svg" alt="logo" width="20rem" />
          </Box>
          <Text {...TitleStyle} mt="6.3rem">
            {heroData.data.content.hero.title}
          </Text>
          <Text {...SubtitleStyle}>{heroData.data.content.hero.subtitle}</Text>
          <Flex {...ButtonsBoxStyle}>
            {heroData.data.content.hero.links.map((btn: any) => {
              return btn.primary ? (
                <PrimaryButton
                  key={btn.label}
                  label={btn.label}
                  colorHue={colorHue}
                  width="13.5rem"
                />
              ) : (
                <SecondaryButton
                  key={btn.label}
                  label={btn.label}
                  color={primaryColor}
                  icon={btn.icon || ""}
                  width="13.3rem"
                />
              );
            })}
          </Flex>
          <Circle {...ScrollButtonStyle} onClick={handleClick}>
            <Center>
              {isOpen ? (
                <Image
                  alt="scrollButton"
                  src="/arrow-scroll-orange.svg"
                  width="16"
                  height="16"
                />
              ) : (
                <Image
                  alt="scrollButton"
                  src="/arrows-scroll.svg"
                  width="42"
                  height="40"
                />
              )}
            </Center>
          </Circle>
        </Box>
      </Flex>
    </Flex>
  );
};

export default Hero;
