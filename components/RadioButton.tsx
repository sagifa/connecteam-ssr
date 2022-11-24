import { Flex, useRadio, Text } from "@chakra-ui/react";
import React from "react";
import { DEFAULT_FONT_COLOR } from "../utils/consts";
import { RadioButtonOptionStyle } from "./form/style";

const RadioButton = (props: any) => {
  const { getInputProps, getCheckboxProps } = useRadio(props);
  const input = getInputProps();
  const checkbox = getCheckboxProps();

  return (
    <Flex as="label" order="1" flexGrow="0">
      <input {...input} />
      <Flex
        {...checkbox}
        cursor="pointer"
        w={["100%", "", "", "14rem"]}
        h="2.5rem"
        p="0.75rem"
        alignItems="center"
        justifyContent="center"
        order="0"
        flexGrow="0"
        _checked={{
          background: "#FFFFFF",
          border: "2px solid #FF9900",
          borderRadius: "20px",
        }}
      >
        <Text
          {...RadioButtonOptionStyle}
          color={input.checked == true ? "#ED8E00" : DEFAULT_FONT_COLOR}
        >
          {props.children}
        </Text>
      </Flex>
    </Flex>
  );
};

export default RadioButton;
