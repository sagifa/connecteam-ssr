import { Box, Flex, IconProps } from "@chakra-ui/react";
import React from "react";
import { Icon1 } from "../icons/Icon1";
import { Icon2 } from "../icons/Icon2";
import { Icon3 } from "../icons/Icon3";
import { Icon4 } from "../icons/Icon4";
import { Icon5 } from "../icons/Icon5";
import { Icon6 } from "../icons/Icon6";
import { Icon7 } from "../icons/Icon7";
import Image from "next/image";

type CircleImageProps = {
  IconElement: (props: IconProps) => JSX.Element;
  url: string;
  color: string;
  isRtl: boolean;
};
const CircleImage = ({ IconElement, url, color, isRtl }: CircleImageProps) => {
  const components: any = {
    icon1: Icon1,
    icon2: Icon2,
    icon3: Icon3,
    icon4: Icon4,
    icon5: Icon5,
    icon6: Icon6,
    icon7: Icon7,
  };

  return (
    <Box>
      <Flex
        overflow="hidden"
        borderRadius="full"
        position="relative"
        pl="1rem"
        w="20rem"
        h="20rem"
      >
        <Image
          alt="background"
          src={url}
          fill
          style={{
            objectFit: "cover",
          }}
        />
        <IconElement
          color={color}
          boxSize="6rem"
          position="absolute"
          bottom="0"
          right={!isRtl ? "0" : ""}
          left={isRtl ? "0" : ""}
          backdropFilter="blur(8px)"
          borderRadius="50%"
        />
      </Flex>
    </Box>
  );
};

export default CircleImage;
