// @ts-nocheck

import {
  HStack,
  Flex,
  Text,
  Box,
  Slide,
  FlexProps,
  SimpleGrid,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { HERO_H_REM, REM_SIZE } from "../utils/consts";
import { getPrimaryColor } from "../utils/helpers";
import { ButtonContentStyle } from "./buttons/style";
import CustomIcon from "./CustomIcon";
import { Logo } from "./icons/Logo";

type NavBarProps = {
  data: { title: string; icon: string; colorHue: number }[];
};
const navbarId = "nuvbar";

export const handleClickScroll = (id: string) => {
  const navHight = document.getElementById(navbarId)?.offsetHeight || 0;
  const element = document.getElementById(id);
  if (element) {
    const y =
      element.getBoundingClientRect().top +
      window.scrollY -
      navHight -
      navHight * 1.1;
    window.scrollTo({ top: y, behavior: "smooth" });
  }
};

const NavBar = ({ data }: NavBarProps) => {
  const [showLogo, setShowLogo] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.onscroll = () => {
        if (window.pageYOffset < HERO_H_REM * REM_SIZE) {
          setShowLogo(false);
        } else {
          setShowLogo(true);
        }
      };
    }
  }, []);

  return (
    <Flex zIndex="10" position="sticky" top="4.8rem" id={navbarId}>
      <Slide direction="top" in={showLogo} style={{ zIndex: 10 }}>
        <Flex
          w={{ base: "768px", md: "100%" }}
          h="4.8rem"
          bgColor="white"
          py="1rem"
          pl={{ base: "5%", md: "15%" }}
          alignItems="center"
          {...StickyStyle}
          opacity={{ base: "1", md: "0.92" }}
        >
          <Logo h="2.6rem" width="14rem" />
        </Flex>
      </Slide>
      <HStack
        boxSizing="content-box"
        w={{ base: "400px", md: "100vw" }}
        h={{ base: "41px", md: "4.1rem" }}
        spacing={{ base: "0rem", md: "5.37rem" }}
        justifyContent="center"
        mt={showLogo ? "0" : "1rem"}
        style={showLogo ? StickyStyle : {}}
      >
        {data.map((item) => {
          const hslColor = getPrimaryColor(item.colorHue);
          return (
            <Flex
              onClick={() => handleClickScroll(item.title)}
              key={item.title}
              alignItems="center"
              // gap="0.37rem"
              cursor="pointer"
              transition="all .2s ease-in-out"
              _hover={{
                transform: "scale(1.3)",
                background: "rgba(0, 152, 218, 0.07)",
                borderRadius: "12px",
                transition: "all .2s ease-in-out",
              }}
            >
              <Flex {...BoxStyle}>
                <CustomIcon name={item.icon} props={{ color: hslColor }} />
                <Text
                  {...ButtonContentStyle}
                  fontSize={{ base: "17px", md: "19px" }}
                  color={hslColor}
                >
                  {item.title}
                </Text>
              </Flex>
            </Flex>
          );
        })}
      </HStack>
    </Flex>
  );
};

const StickyStyle: React.CSSProperties = {
  opacity: "0.92",
  boxShadow:
    "0px 3px 32px rgba(0, 0, 0, 0.07), 0px 1px 4px rgba(0, 0, 0, 0.07)",
  backdropFilter: "blur(12px)",
  backgroundColor: "white",
};

const BoxStyle: FlexProps = {
  h: "2.43rem",
  justify: "center",
  alignItems: "center",
  gap: { base: "0", md: "0.5rem" },
  px: { base: "0rem", md: "1rem" },
};
export default NavBar;
