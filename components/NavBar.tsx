import { HStack, Flex, Text, Box, FlexProps, Img } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { HERO_H_REM, REM_SIZE } from "../utils/consts";
import { getHslCode } from "../utils/helpers";
import CustomIcon from "./CustomIcon";
import {
  TransitionGroup,
  CSSTransition,
  Transition,
} from "react-transition-group";
import { Logo } from "./icons/Logo";
import { ButtonContentStyle } from "../styles/style";
//TODO!! might add listener to screen resolution change
type NavBarProps = {
  data: { title: string; icon: string; colorHue: number }[];
};
const navbarId = "nuvbar";

const handleClickScroll = (id: string) => {
  const navHight = document.getElementById(navbarId)?.offsetHeight || 0;
  const element = document.getElementById(id);
  if (element) {
    const y = element.getBoundingClientRect().top + window.scrollY - navHight;
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
    <Box zIndex="10" position="sticky" top="0" id="nuvbar">
      {showLogo && (
        <Flex
          h="4.8rem"
          style={StickyStyle}
          bgColor="white"
          py="1rem"
          pl="20%"
          alignItems="center"
        >
          <Logo h="2.6rem" width="14rem" />
        </Flex>
      )}
      <HStack
        h="4rem"
        spacing="4rem"
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
              <Text {...ButtonContentStyle} color={hslColor}>
                {item.title}
              </Text>
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
  backgroundColor: "white",
};
export default NavBar;
