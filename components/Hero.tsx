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
  HeadContainerStyle,
  ContentBoxStyle,
  TitleContentStyle,
  LogoStyle,
  ButtonsBoxStyle,
  PrimaryButtonLinkStyle,
  subtitleStyle,
  ButtonContentStyle,
  SecondaryButtonLinkStyle,
} from "../styles/style";
import headData from "../public/homeData.json";
import Image from "next/image";
import { baseUrl } from "../utils/config";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Icon_1 } from "./noNeed/LogoSvg";
import { Icon_3 } from "./icons/Icon_3";
import { Icon_5 } from "./icons/Icon_5";
import { Icon_4 } from "./icons/Icon_4";
import { Icon_2 } from "./icons/Icon_2";
import SectionA from "./sections/SectionA";

const fetchData = () => {};
const Hero = () => {
  // const [isHoverA, setHoverA] = useBoolean();
  const [isHoverB, setHoverB] = useBoolean();

  const backgroundUrl = `${baseUrl}/jpg/home-large.jpg
  `;
  return (
    <>
      <Flex {...HeadContainerStyle}>
        <Image
          alt="background"
          src={backgroundUrl}
          fill
          sizes="100vw"
          style={{
            objectFit: "cover",
            zIndex: "-1",
          }}
        />
        <Flex>
          <Box {...ContentBoxStyle}>
            <Box {...LogoStyle}>
              <Img
                src="/logo.svg"
                alt="logo"
                width={["8rem", "16rem"]}
                color="red"
              />
            </Box>
            <Text {...TitleContentStyle}>{headData.content.hero.title}</Text>
            <Text {...subtitleStyle}>{headData.content.hero.subtitle}</Text>
            <Flex {...ButtonsBoxStyle}>
              <Button
                {...PrimaryButtonLinkStyle}
                rightIcon={<ArrowForwardIcon color="white" />}
              >
                <Text {...ButtonContentStyle}>
                  {headData.content.hero.links[0].label}
                </Text>
              </Button>
              <Button
                onMouseEnter={setHoverB.on}
                onMouseLeave={setHoverB.off}
                leftIcon={
                  !isHoverB ? <Icon_1 color="#FF9900" boxSize="3.5" /> : <></>
                }
                rightIcon={
                  isHoverB ? <ArrowForwardIcon color="FF9900" /> : <></>
                }
                {...SecondaryButtonLinkStyle}
              >
                {" "}
                {headData.content.hero.links[1].label}
              </Button>
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
      <HStack
        mt="2rem"
        h="4rem"
        bgColor="white"
        w="100%"
        spacing="4rem"
        mx="auto"
        justifyContent="center"
      >
        <Flex alignItems="center" gap="0.2rem">
          <Icon_3 color="#7A2DDB" boxSize="2rem" />
          <Text color="#7A2DDB">{headData.content.items[0].name}</Text>
        </Flex>
        <Flex alignItems="center" gap="0.2rem">
          <Icon_5 color="#04CDDA" boxSize="2rem" />
          <Text color="#04CDDA">{headData.content.items[1].name}</Text>
        </Flex>
        <Flex alignItems="center" gap="0.2rem">
          <Icon_4 color="#0090D0" boxSize="2rem" />
          <Text color="#0090D0">{headData.content.items[2].name}</Text>
        </Flex>
        <Flex alignItems="center" gap="0.2rem">
          <Icon_2 color="#DA2469" boxSize="2rem" />
          <Text color="#DA2469">{headData.content.items[3].name}</Text>
        </Flex>
      </HStack>
    </>
  );
};

export default Hero;
