import { Box, Circle, Flex } from "@chakra-ui/react";
import React from "react";
import Image from "next/image";
import CustomIcon from "../CustomIcon";
import { getHoverSecondaryColor } from "../../utils/helpers";

type CircleImageProps = {
  icon: string;
  url: string;
  color: number;
  isRtl: boolean;
};
const CircleImage = ({ icon, url, color, isRtl }: CircleImageProps) => {
  const iconColor = getHoverSecondaryColor(color);
  return (
    <Box position="relative" h="28.3rem">
      <Flex
        overflow="hidden"
        borderRadius="full"
        position="relative"
        pl="1rem"
        w="28.3rem"
        h="28.3rem"
      >
        <Image
          alt="background"
          src={url}
          fill
          sizes="28.3rem"
          style={{
            objectFit: "cover",
          }}
        />
      </Flex>
      <Box>
        <Circle
          backgroundBlendMode="overlay"
          size="6.75rem"
          position="absolute"
          bottom="0.6rem"
          right={!isRtl ? "1.5rem" : ""}
          left={isRtl ? "1.5rem" : ""}
          backdropFilter="blur(8px)"
          border="4px solid #FFFFFF"
        >
          <CustomIcon
            name={icon}
            props={{
              color: iconColor,
              boxSize: "4rem",
            }}
          />
        </Circle>
      </Box>
    </Box>
  );
};

export default CircleImage;
