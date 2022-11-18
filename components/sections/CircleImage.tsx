import { Box, Circle, Flex } from "@chakra-ui/react";
import React from "react";

import Image from "next/image";
import CustomIcon from "../CustomIcon";

type CircleImageProps = {
  icon: string;
  url: string;
  color: string;
  isRtl: boolean;
};
const CircleImage = ({ icon, url, color, isRtl }: CircleImageProps) => {
  return (
    <Box position="relative">
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
          sizes="27.6rem"
          style={{
            objectFit: "cover",
          }}
        />
      </Flex>
      <CustomIcon
        name={icon}
        props={{
          border: "white solid 2px",
          color: color,
          boxSize: "6rem",
          position: "absolute",
          bottom: "0",
          right: !isRtl ? "0" : "",
          left: isRtl ? "0" : "",
          backdropFilter: "blur(8px)",
          borderRadius: "50%",
        }}
      />
    </Box>
  );
};

export default CircleImage;
