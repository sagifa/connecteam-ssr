import { Button, Text } from "@chakra-ui/react";
import React from "react";
import { ButtonContentStyle, PrimaryButtonLinkStyle } from "../styles/style";
import {
  getBackgroundColor,
  getHoverColor,
  getHoverSecondaryColor,
} from "../utils/helpers";
import { ArrowRight } from "./icons/ArrowRight";

export type PrimaryButtonProps = {
  label: string;
  colorHue: number;
  width?: string;
};
const PrimaryButton = ({ label, colorHue, width }: PrimaryButtonProps) => {
  const backgroundColor = getHoverSecondaryColor(colorHue);
  const hoverColor = getHoverColor(colorHue);

  return (
    <Button
      {...PrimaryButtonLinkStyle}
      width={width}
      bgColor={backgroundColor}
      rightIcon={<ArrowRight color="white" ml="0.5rem" />}
      _hover={{ bgColor: hoverColor }}
    >
      <Text {...ButtonContentStyle}>{label}</Text>
    </Button>
  );
};

export default PrimaryButton;
