// @ts-nocheck

import React from "react";
import { FormControl, FormLabel, Input, Select } from "@chakra-ui/react";
import { DEFAULT_FONT_COLOR, MAIN_COLOR } from "../../utils/consts";
import { ArrowSelect } from "../icons/ArrowSelect";
import { PlaceholderStyle } from "./Form";

const InputField = ({
  name,
  type,
  size,
  layout,
  options,
}: {
  name: string;
  type: string;
  size: string;
  layout: string;
  options?: {
    value: string;
    label: string;
  }[];
}) => {
  return (
    <>
      {type == "text" && (
        <FormControl variant="floating" id={name}>
          <Input
            color={DEFAULT_FONT_COLOR}
            placeholder=" "
            w="21.3rem"
            h="3rem"
            border="1px solid #EAEAEA"
            borderRadius="1.5rem"
            focusBorderColor={MAIN_COLOR}
            bgColor="white"
            cursor="pointer"
          />
          <FormLabel {...PlaceholderStyle}>{name}</FormLabel>
        </FormControl>
      )}

      {layout == "select" && (
        <FormControl>
          <Select
            icon={<ArrowSelect mr="1.4rem" />}
            placeholder={name}
            w="21.3rem"
            h="3rem"
            border="1px solid #EAEAEA"
            borderRadius="1.5rem"
            focusBorderColor={MAIN_COLOR}
            fontFamily="Inter"
            fontWeight="600"
            fontSize="1rem"
            lineHeight="1.4rem"
            bgColor="white"
          >
            {options?.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </Select>
        </FormControl>
      )}
    </>
  );
};

export default InputField;
