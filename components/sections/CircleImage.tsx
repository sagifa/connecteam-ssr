import {
  Box,
  Circle,
  Flex,
  FlexProps,
  Img,
  useMediaQuery,
} from "@chakra-ui/react";
import React from "react";
import Image from "next/image";
import CustomIcon from "../CustomIcon";
import { getHoverSecondaryColor } from "../../utils/helpers";

const boxImageStyle: FlexProps = {
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: "23.1429px",
  position: "absolute",
  width: "108px",
  height: "108px",
  right: "12px",
  bottom: "12px",
  background: "#EDD6FF",
  backgroundBlendMode: "overlay",
  border: "4px solid #FFFFFF",
  backdropFilter: "blur(8px)",
  borderRadius: "141.429px",
};
type CircleImageProps = {
  icon: string;
  url: string;
  color: number;
  isRtl: boolean;
};
const CircleImage = ({ icon, url, color, isRtl }: CircleImageProps) => {
  const [isMobile] = useMediaQuery("(max-width: 768px)", {
    ssr: true,
    fallback: false, // return false on the server, and re-evaluate on the client side
  });
  const iconColor = getHoverSecondaryColor(color);
  const height = isMobile ? "25rem" : "28.3rem";
  return (
    <Box position="relative" h={height}>
      <Flex
        overflow="hidden"
        borderRadius={isMobile ? "" : "full"}
        position="relative"
        pl={isMobile ? "" : "1rem"}
        w={height}
        h={height}
      >
        <Image
          alt="background"
          src={url}
          fill
          // sizes="28.3rem"
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
