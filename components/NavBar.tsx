import { HStack, Flex, Text, Box, FlexProps } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { HERO_H_REM, REM_SIZE } from "../utils/consts";
import { getHslCode } from "../utils/helpers";
import CustomIcon from "./CustomIcon";
import { TransitionGroup, CSSTransition } from "react-transition-group";

type NavBarProps = {
  data: { title: string; icon: string; colorHue: number }[];
};
const navHinRem = 4;

const handleClickScroll = (id: string) => {
  const element = document.getElementById(id);

  if (element) {
    const y =
      element.getBoundingClientRect().top +
      window.scrollY -
      navHinRem * REM_SIZE;
    window.scrollTo({ top: y, behavior: "smooth" });
  }
};
const NavBar = ({ data }: NavBarProps) => {
  console.log({ data });
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
  console.log({ showLogo });

  return (
    <Box zIndex="10" position="sticky" top="0">
      {showLogo && (
        <TransitionGroup>
          <CSSTransition timeout={{ enter: 8000, exit: 8000 }}>
            <Box h="4.8rem" style={StickyStyle} bgColor="white">
              .
            </Box>
          </CSSTransition>
        </TransitionGroup>
      )}
      <HStack
        h={`${navHinRem}rem`}
        bgColor="white"
        w="100%"
        spacing="4rem"
        mx="auto"
        justifyContent="center"
        style={showLogo ? StickyStyle : {}}
      >
        {data.map((item) => {
          const hslColor = getHslCode(item.colorHue);
          return (
            <Flex
              key={item.title}
              alignItems="center"
              gap="0.2rem"
              cursor="pointer"
              onClick={() => handleClickScroll(item.title)}
            >
              <CustomIcon name={item.icon} props={{ color: hslColor }} />
              <Text color={hslColor}>{item.title}</Text>
            </Flex>
          );
        })}
      </HStack>
    </Box>
  );
};

const StickyStyle: React.CSSProperties = {
  opacity: "0.92",
  boxShadow:
    "0px 3px 32px rgba(0, 0, 0, 0.07), 0px 1px 4px rgba(0, 0, 0, 0.07)",
  backdropFilter: "blur(12px)",
};
export default NavBar;
