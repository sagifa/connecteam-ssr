import { Button, IconProps, useBoolean } from "@chakra-ui/react";
import React from "react";
import { SecondaryButtonLinkStyle } from "../styles/style";
import CustomIcon from "./CustomIcon";
import { ArrowRight } from "./icons/ArrowRight";
import { Icon1 } from "./icons/Icon1";
import { PrimaryButtonProps } from "./PrimaryButton";

type SecondaryButtonProps = {
  label: string;
  color: string;
  icon: string;
};
const SecondaryButton = ({ label, color, icon }: SecondaryButtonProps) => {
  const [isHover, setHover] = useBoolean();

  return (
    <Button
      onMouseEnter={setHover.on}
      onMouseLeave={setHover.off}
      leftIcon={
        !isHover ? (
          <CustomIcon
            name={icon}
            props={{
              color: color,
              boxSize: "3.5",
            }}
          />
        ) : (
          <></>
        )
      }
      rightIcon={isHover ? <ArrowRight color={color} /> : <></>}
      {...SecondaryButtonLinkStyle}
      color={color}
      borderColor={color}
    >
      {label}
    </Button>
  );
};

export default SecondaryButton;
