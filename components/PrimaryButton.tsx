import { Button, Text } from "@chakra-ui/react";
import React from "react";
import { ButtonContentStyle, PrimaryButtonLinkStyle } from "../styles/style";
import { ArrowRight } from "./icons/ArrowRight";

export type PrimaryButtonProps = {
  label: string;
  colorHue: number;
  width?: string;
};
const PrimaryButton = ({ label, colorHue, width }: PrimaryButtonProps) => {
  const backgroundColor = `hsl(${colorHue},100%,50%,1)`;
  const hoverColor = `hsl(${colorHue},100%,47%,1)`;

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
