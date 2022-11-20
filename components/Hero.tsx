import React from "react";
import {
  Flex,
  Text,
  Box,
  Img,
  Collapse,
  useDisclosure,
  Circle,
  Icon,
  VStack,
  Center,
} from "@chakra-ui/react";
import {
  MainContainerStyle,
  ContentBoxStyle,
  TitleContentStyle,
  LogoStyle,
  ButtonsBoxStyle,
  subtitleStyle,
} from "../styles/style";
import headData from "../public/home.json";
import Image from "next/image";
import { BASE_URL, HERO_H_REM } from "../utils/consts";
import PrimaryButton from "./PrimaryButton";
import SecondaryButton from "./SecondaryButton";
import { ArrowDown } from "./icons/ArrowDown";

const Hero = () => {
  const { isOpen, onToggle } = useDisclosure();
  const backgroundUrl = `${BASE_URL}/jpg/home-large.jpg`;
  const colorHue = 36;
  const primaryColor = `hsl(${colorHue},100%,43%,1)`;
  //TODO!! edit bg image to darker
  //TODO!! change to custom color theme

  return (
    <>
      <Flex {...MainContainerStyle} h={`${HERO_H_REM}rem`} position="relative">
        <Image
          alt="background"
          src={backgroundUrl}
          fill
          // sizes={`${HERO_H_REM}rem`}
          style={{
            objectFit: "cover",
            zIndex: "-1",
          }}
        />
        <Flex>
          <Box {...ContentBoxStyle}>
            <Box {...LogoStyle}>
              <Img src="/logo.svg" alt="logo" width="20rem" />
            </Box>
            <Text {...TitleContentStyle}>{headData.content.hero.title}</Text>
            <Text {...subtitleStyle}>{headData.content.hero.subtitle}</Text>
            <Flex {...ButtonsBoxStyle}>
              {headData.content.hero.links.map((btn) => {
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
                  />
                );
              })}
            </Flex>
            <Flex
              mt="8rem"
              // size="2.7rem"
              w="40px"
              h="42px"
              onClick={onToggle}
              cursor="pointer"
              bgColor="rgba(255, 255, 255, 0.01)"
              backdropFilter="blur(8px)"
              position="relative"
              justifyContent="center"
              alignItems="center"
            >
              <Collapse in={isOpen} animateOpacity unmountOnExit>
                <Center>
                  <Image
                    alt="scrollButton"
                    src="/arrow-scroll-orange.svg"
                    width="42"
                    height="40"
                  />
                </Center>
              </Collapse>
              <Center>
                <Collapse in={!isOpen} animateOpacity unmountOnExit>
                  <Image
                    alt="scrollButton"
                    src="/arrows-scroll.svg"
                    width="42"
                    height="40"
                  />
                </Collapse>
              </Center>
            </Flex>
          </Box>
        </Flex>
      </Flex>
      <Box zIndex="10" position="sticky" top="0"></Box>
    </>
  );
};

export default Hero;
