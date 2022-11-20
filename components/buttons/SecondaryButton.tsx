import { Button, Text, useBoolean } from "@chakra-ui/react";
import React from "react";
import CustomIcon from "../CustomIcon";
import { ArrowRight } from "../icons/ArrowRight";
import { SecondaryButtonLinkStyle, ButtonContentStyle } from "./style";

type SecondaryButtonProps = {
  label: string;
  color: string;
  icon: string;
  width?: string;
};
const SecondaryButton = ({
  label,
  color,
  icon,
  width,
}: SecondaryButtonProps) => {
  const [isHover, setHover] = useBoolean();

  return (
    <Button
      {...SecondaryButtonLinkStyle}
      width={width}
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
      borderColor={color}
    >
      <Text {...ButtonContentStyle} color={color}>
        {label}
      </Text>{" "}
    </Button>
  );
};

export default SecondaryButton;
