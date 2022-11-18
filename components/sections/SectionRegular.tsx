import { Box, Flex, IconProps, Link, Text } from "@chakra-ui/react";
import React from "react";
import { ButtonContentStyle, MainContainerStyle } from "../../styles/style";
import CircleImage from "./CircleImage";
import {
  ContainerStyle,
  DescriptionStyle,
  LabelStyle,
  TitleStyle,
} from "./style";
import CustomIcon from "../CustomIcon";
import { ArrowRight } from "../icons/ArrowRight";

type SectionRegularProps = {
  isRtl: boolean;
  colorHue: number;
  icon: string;
  label: string;
  title: string;
  description: string;
  urlPhoto: string;
  linkLabel: string;
};

const SectionRegular = ({
  isRtl,
  colorHue,
  icon,
  label,
  title,
  description,
  linkLabel,
  urlPhoto,
}: SectionRegularProps) => {
  const primaryColor = `hsl(${colorHue},100%,43%,1)`;
  const secondaryColor = `hsl(${colorHue},100%,97%,1)`;

  return (
    <Flex
      {...MainContainerStyle}
      {...ContainerStyle}
      direction={isRtl ? "row-reverse" : "row"}
      h="40vh"
      id={title}
    >
      <Flex className="left-side" direction="column" w="40vw" h="20px">
        <Flex className="title">
          <Flex
            bgColor={secondaryColor}
            borderRadius="50%"
            w="3rem"
            h="3rem"
            justify="center"
            alignItems="center"
            mr="1rem"
          >
            <CustomIcon
              name={icon}
              props={{ color: primaryColor, boxSize: "2rem" }}
            />
          </Flex>
          <Box>
            <Text {...LabelStyle}>{label}</Text>
            <Text {...TitleStyle} color={primaryColor}>
              {title}
            </Text>
          </Box>
        </Flex>
        <Box className="content-box" mt="2rem">
          <Text {...DescriptionStyle}>{description}</Text>
          <Box mt="1rem">
            <Link href="#" color={primaryColor} flexDirection="row">
              <Flex alignItems="center">
                <Text {...ButtonContentStyle} color={primaryColor}>
                  {linkLabel}
                </Text>
                <ArrowRight ml="0.6rem" />
              </Flex>
            </Link>
          </Box>
        </Box>
      </Flex>
      <CircleImage
        color={primaryColor}
        url={urlPhoto}
        isRtl={isRtl}
        icon={icon}
      />
    </Flex>
  );
};

export default SectionRegular;
