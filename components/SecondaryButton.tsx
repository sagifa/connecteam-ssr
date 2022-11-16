import { Button, IconProps, useBoolean } from "@chakra-ui/react";
import React from "react";
import { SecondaryButtonLinkStyle } from "../styles/style";
import { ArrowRight } from "./icons/ArrowRight";
import { Icon1 } from "./icons/Icon1";
import { PrimaryButtonProps } from "./PrimaryButton";

type SecondaryButtonProps = {
  label: string;
  color: string;
  Icon: (props: IconProps) => JSX.Element;
};
const SecondaryButton = ({ label, color, Icon }: SecondaryButtonProps) => {
  const [isHover, setHover] = useBoolean();

  return (
    <Button
      onMouseEnter={setHover.on}
      onMouseLeave={setHover.off}
      leftIcon={!isHover ? <Icon color={color} boxSize="3.5" /> : <></>}
      rightIcon={isHover ? <ArrowRight color={color} /> : <></>}
      {...SecondaryButtonLinkStyle}
    >
      {label}
    </Button>
  );
};

export default SecondaryButton;
