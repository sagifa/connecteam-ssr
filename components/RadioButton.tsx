import { Box, Flex, useRadio, Text } from "@chakra-ui/react";
import React from "react";
import { DEFAULT_FONT_COLOR } from "../utils/consts";
import { RadioButtonOptionStyle } from "./form/style";

const RadioButton = (props: any) => {
  const { getInputProps, getCheckboxProps } = useRadio(props);

  const input = getInputProps();
  const checkbox = getCheckboxProps();
  console.log(input.checked);

  return (
    <Box as="label">
      <input {...input} />
      <Flex
        {...checkbox}
        cursor="pointer"
        // borderWidth="1px"
        // borderRadius="md"
        // boxShadow="md"
        w="14.4rem"
        h="2.5rem"
        p="0.75rem"
        alignItems="center"
        justifyContent="center"
        _checked={{
          background: "#FFFFFF",
          border: "2px solid #FF9900",
          borderRadius: "20px",
        }}
        // _focus={
        //   {
        //     boxShadow: "outline",
        //   }
        // }
        // px={5}
        // py={3}
      >
        <Text
          {...RadioButtonOptionStyle}
          color={input.checked == true ? "#ED8E00" : DEFAULT_FONT_COLOR}
        >
          {props.children}
        </Text>
      </Flex>
    </Box>
  );
};

export default RadioButton;

{
  /* <Box as="label">
<input {...input} />
<Box
  {...checkbox}
  cursor="pointer"
  borderWidth="1px"
  borderRadius="md"
  boxShadow="md"
  _checked={{
    bg: "teal.600",
    color: "white",
    borderColor: "teal.600",
  }}
  _focus={{
    boxShadow: "outline",
  }}
  px={5}
  py={3}
>
  {props.children}
</Box>
</Box> */
}
