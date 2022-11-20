import { Button, Text } from "@chakra-ui/react";
import React from "react";
import { getHoverSecondaryColor, getHoverColor } from "../../utils/helpers";
import { ArrowRight } from "../icons/ArrowRight";

import { ButtonContentStyle, PrimaryButtonLinkStyle } from "./style";

export type PrimaryButtonProps = {
  label: string;
  colorHue: number;
  width?: string;
  mt?: string;
};
const PrimaryButton = ({ label, colorHue, width, mt }: PrimaryButtonProps) => {
  const backgroundColor = getHoverSecondaryColor(colorHue);
  const hoverColor = getHoverColor(colorHue);

  return (
    <Button
      {...PrimaryButtonLinkStyle}
      width={width}
      mt={mt}
      bgColor={backgroundColor}
      rightIcon={<ArrowRight color="white" ml="0.5rem" />}
      _hover={{ bgColor: hoverColor }}
    >
      <Text {...ButtonContentStyle}>{label}</Text>
    </Button>
  );
};

export default PrimaryButton;
