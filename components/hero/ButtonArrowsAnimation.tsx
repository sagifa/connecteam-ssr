import { Circle, Collapse } from "@chakra-ui/react";
import React, { useState } from "react";
import { getHoverSecondaryColor } from "../../utils/helpers";
import { ArrowDownAlt } from "../icons/ArrowDownAlt";
import { handleClickScroll } from "../NavBar";
import { ScrollButtonStyle } from "./style";

const ButtonArrowsAnimation = ({ colorHue }: { colorHue: number }) => {
  const [isHover, setIsHover] = useState(false);
  const color = getHoverSecondaryColor(colorHue);
  const handleClick = () => {
    handleClickScroll("form-section");
  };
  return (
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
  );
};

export default ButtonArrowsAnimation;
