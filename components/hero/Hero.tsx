import React, { useState } from "react";
import { Flex, Text, Box, Img, Circle, Collapse } from "@chakra-ui/react";
import Image from "next/image";
import {
  APP_MAIN_COLOR_HUE,
  APP_PADDING,
  APP_WIDTH,
  HERO_H_REM,
} from "../../utils/consts";
import {
  ButtonsBoxStyle,
  ScrollButtonStyle,
  SubtitleStyle,
  TitleStyle,
} from "./style";
import PrimaryButton from "../buttons/PrimaryButton";
import SecondaryButton from "../buttons/SecondaryButton";
import { getHoverSecondaryColor, getPath } from "../../utils/helpers";
import { handleClickScroll } from "../NavBar";
import { ArrowDownAlt } from "../icons/ArrowDownAlt";

const Hero = (heroData: any) => {
  const [isHover, setIsHover] = useState(false);
  const backgroundUrl = getPath("home-large.jpg", "jpg");
  const color = getHoverSecondaryColor(APP_MAIN_COLOR_HUE);
  const handleClick = () => {
    handleClickScroll("form-section");
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
                  colorHue={APP_MAIN_COLOR_HUE}
                  width="13.5rem"
                  height="3.4rem"
                />
              ) : (
                <SecondaryButton
                  key={btn.label}
                  icon={btn.icon}
                  label={btn.label}
                  props={{ color: color, w: "13.3rem", h: "3.4rem" }}
                />
              );
            })}
          </Flex>
          <Circle
            {...ScrollButtonStyle}
            onClick={handleClick}
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
            position="relative"
          >
            <ArrowDownAlt
              top="20%"
              left="30%"
              position="absolute"
              color="white"
              cursor="pointer"
              _hover={{
                color: color,
                transform: "scale(1)",
              }}
            />
            <Collapse in={isHover}>
              <ArrowDownAlt
                top="35%"
                left="30%"
                position="absolute"
                color="white"
                cursor="pointer"
                _hover={{
                  color: color,
                  transform: "scale(1)",
                }}
              />
              <ArrowDownAlt
                top="50%"
                left="30%"
                position="absolute"
                color="white"
                cursor="pointer"
                _hover={{
                  color: color,
                  transform: "scale(1)",
                }}
              />
            </Collapse>
          </Circle>
        </Box>
      </Flex>
    </Flex>
  );
};

export default Hero;
