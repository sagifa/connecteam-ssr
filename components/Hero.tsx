import React from "react";
import {
  Flex,
  Text,
  Box,
  Button,
  useBoolean,
  HStack,
  Img,
} from "@chakra-ui/react";
import {
  MainContainerStyle,
  ContentBoxStyle,
  TitleContentStyle,
  LogoStyle,
  ButtonsBoxStyle,
  PrimaryButtonLinkStyle,
  subtitleStyle,
  ButtonContentStyle,
  SecondaryButtonLinkStyle,
} from "../styles/style";
import headData from "../public/home.json";
import Image from "next/image";
import { BASE_URL } from "../utils/consts";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Icon1 } from "./icons/Icon1";
import { Icon3 } from "./icons/Icon3";
import { Icon5 } from "./icons/Icon5";
import { Icon4 } from "./icons/Icon4";
import { Icon2 } from "./icons/Icon2";
import SectionA from "./sections/Section";
import PrimaryButton from "./PrimaryButton";
import SecondaryButton from "./SecondaryButton";

const fetchData = () => {};
const Hero = () => {
  // const [isHoverA, setHoverA] = useBoolean();
  const [isHoverB, setHoverB] = useBoolean();

  const backgroundUrl = `${BASE_URL}/jpg/home-large.jpg`;

  const handleUIEvent = (e: React.UIEvent<HTMLDivElement>) => {
    // Do something
    const clientHeight = e.currentTarget.clientHeight;
    const scrollHeight = e.currentTarget.scrollHeight;
    const scrollTop = e.currentTarget.scrollTop;
  };
  //TODO!! change color config

  const colorHue = 36;
  const primaryColor = `hsl(${colorHue},100%,43%,1)`;
  const Footer = () => {
    return (
      <HStack
        mt="2rem"
        h="4rem"
        bgColor="white"
        w="100%"
        spacing="4rem"
        mx="auto"
        justifyContent="center"
      >
        <Flex
          alignItems="center"
          gap="0.2rem"
          cursor="pointer"
          onClick={() => {}}
        >
          <Icon3 color="#7A2DDB" boxSize="2rem" />
          <Text color="#7A2DDB">{headData.content.items[0].name}</Text>
        </Flex>
        <Flex alignItems="center" gap="0.2rem">
          <Icon5 color="#04CDDA" boxSize="2rem" />
          <Text color="#04CDDA">{headData.content.items[1].name}</Text>
        </Flex>
        <Flex alignItems="center" gap="0.2rem">
          <Icon4 color="#0090D0" boxSize="2rem" />
          <Text color="#0090D0">{headData.content.items[2].name}</Text>
        </Flex>
        <Flex alignItems="center" gap="0.2rem">
          <Icon2 color="#DA2469" boxSize="2rem" />
          <Text color="#DA2469">{headData.content.items[3].name}</Text>
        </Flex>
      </HStack>
    );
  };

  return (
    <>
      <Flex
        {...MainContainerStyle}
        position="relative"
        // onScroll={handleUIEvent}
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
          <Box {...ContentBoxStyle}>
            <Box {...LogoStyle}>
              <Img src="/logo.svg" alt="logo" width={["8rem", "16rem"]} />
            </Box>
            <Text {...TitleContentStyle}>{headData.content.hero.title}</Text>
            <Text {...subtitleStyle}>{headData.content.hero.subtitle}</Text>
            <Flex {...ButtonsBoxStyle}>
              {headData.content.hero.links.map((btn) => {
                return btn.primary ? (
                  <PrimaryButton label={btn.label} colorHue={colorHue} />
                ) : (
                  <SecondaryButton
                    label={btn.label}
                    color={primaryColor}
                    icon={btn.icon || ""}
                  />
                );
              })}
            </Flex>
            <Box bgColor="gray.600" borderRadius="50%" w="3rem" my="4rem">
              <Image
                alt="scrollButton"
                src="/arrows-scroll.svg"
                width="50"
                height="50"
              />
            </Box>
          </Box>
        </Flex>
      </Flex>
      <Box zIndex="10" position="sticky" top="0">
        <Footer />
      </Box>
    </>
  );
};

export default Hero;
