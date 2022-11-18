import { Box, Circle, Flex, IconProps, Link, Text } from "@chakra-ui/react";
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
      {...ContainerStyle}
      mx="18vw"
      direction={isRtl ? "row-reverse" : "row"}
      id={title}
      h="28rem"
    >
      <Flex
        className="left-side"
        direction="column"
        // w="40vw"
        w="43rem"
        h="3.75rem"
        px="2rem"
      >
        <Flex className="title">
          <Flex
            bgColor={secondaryColor}
            borderRadius="full"
            w="3.75rem"
            h="3.75rem"
            justify="center"
            alignItems="center"
            mr="1rem"
          >
            <CustomIcon
              name={icon}
              props={{ color: primaryColor, boxSize: "2.25rem" }}
            />
          </Flex>
          <Box>
            <Text {...LabelStyle}>{label}</Text>
            <Text {...TitleStyle} color={primaryColor}>
              {title}
            </Text>
          </Box>
        </Flex>
        <Box className="content-box" mt="1.5rem">
          <Text {...DescriptionStyle}>{description}</Text>
          <Box mt="1.1rem">
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
