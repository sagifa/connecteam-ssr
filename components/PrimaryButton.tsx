import { Button, Text } from "@chakra-ui/react";
import React from "react";
import { ButtonContentStyle, PrimaryButtonLinkStyle } from "../styles/style";
import { ArrowRight } from "./icons/ArrowRight";

export type PrimaryButtonProps = {
  label: string;
  color: string;
};
const PrimaryButton = ({ label, color }: PrimaryButtonProps) => {
  const hueColorFormat = color.replace("hsl(", "").split(",")[0];
  const backgroundColor = `hsl(${hueColorFormat},100%,50%,1)`;
  const hoverColor = `hsl(${hueColorFormat},100%,47%,1)`;

  return (
    <Button
      {...PrimaryButtonLinkStyle}
      bgColor={backgroundColor}
      rightIcon={<ArrowRight color="white" />}
      sx={{ _hover: hoverColor }}
    >
      <Text {...ButtonContentStyle}>{label}</Text>
    </Button>
  );
};

export default PrimaryButton;
