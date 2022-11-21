import {
  Text,
  Button,
  useBoolean,
  SlideFade,
  ButtonProps,
} from "@chakra-ui/react";
import React from "react";
import { APP_MAIN_COLOR } from "../../utils/consts";
import CustomIcon from "../CustomIcon";
import { ArrowRight } from "../icons/ArrowRight";
import { SecondaryButtonLinkStyle } from "./style";

const ButtonEffect = ({
  icon,
  label,
  props,
}: {
  icon: string;
  label: string;
  props?: ButtonProps;
}) => {
  const [isHover, setHover] = useBoolean();
  const themeColor = props?.color || APP_MAIN_COLOR;

  return (
    <Button
      {...SecondaryButtonLinkStyle}
      {...props}
      gap="1rem"
      borderColor={themeColor}
      onMouseEnter={setHover.on}
      onMouseLeave={setHover.off}
    >
      <SlideFade in={isHover}>
        <CustomIcon
          name={icon}
          props={{
            color: themeColor,
            boxSize: "3.5",
            transform: "translateY(-0.1rem)",
          }}
        />
      </SlideFade>
      <Text color={themeColor}>{label}</Text>
      <SlideFade in={!isHover}>
        <ArrowRight color={themeColor} transform="translateY(-0.1rem)" />
      </SlideFade>
    </Button>
  );
};

export default ButtonEffect;
