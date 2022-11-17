import { Button, Text } from "@chakra-ui/react";
import React from "react";
import { ButtonContentStyle, PrimaryButtonLinkStyle } from "../styles/style";
import { ArrowRight } from "./icons/ArrowRight";

export type PrimaryButtonProps = {
  label: string;
  colorHue: number;
};
const PrimaryButton = ({ label, colorHue }: PrimaryButtonProps) => {
  const backgroundColor = `hsl(${colorHue},100%,50%,1)`;
  const hoverColor = `hsl(${colorHue},100%,47%,1)`;

  return (
    <Button
      {...PrimaryButtonLinkStyle}
      bgColor={backgroundColor}
      rightIcon={<ArrowRight color="white" />}
      _hover={{ bgColor: hoverColor }}
    >
      <Text {...ButtonContentStyle}>{label}</Text>
    </Button>
  );
};

export default PrimaryButton;
