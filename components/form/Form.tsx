// @ts-nocheck

import {
  Box,
  Flex,
  Text,
  SimpleGrid,
  FormControl,
  FormLabel,
  useRadioGroup,
  HStack,
  Textarea,
} from "@chakra-ui/react";
import React, { useState } from "react";
import {
  APP_PADDING,
  DEFAULT_FONT_COLOR,
  MAIN_COLOR,
} from "../../utils/consts";
import { parseHtml } from "../sections/Section";

import {
  FormIntroTitleStyle,
  FormTitleStyle,
  RadioButtonTitleStyle,
  PlaceholderStyle,
} from "./style";
import CustomLink from "../CustomLink";
import RadioButton from "../RadioButton";
import PrimaryButton from "../buttons/PrimaryButton";
import InputField from "./InputField";
import { useToast } from "@chakra-ui/react";

const Form = (footerData: any) => {
  const [selected, setSelected] = useState("");
  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "framework",
    onChange: setSelected,
  });
  const group = getRootProps();
  const toast = useToast();

  //TODO!!  must improve this func, create page object
  const halfArray = [];
  let radioTitle;
  const radioArray = [];
  const textAreaArray = [];

  footerData.data.form.fields.map((field: any) => {
    if (field.size == "half") {
      halfArray.push(field);
      return;
    }
    if (field.type == "options" && field.layout == "buttons") {
      radioTitle = field.name;
      radioArray.push(field.options);
      return;
    }
    if (field.type == "textarea") {
      textAreaArray.push(field);
      return;
    }
  });

  return (
    <Flex px={APP_PADDING} mt="4rem" pt="4rem" h="41.5rem" bgColor="#F8F8F8">
      <Flex
        className="left-side"
        w="25.25rem"
        gap="2rem"
        direction="column"
        mr="2.5rem"
      >
        <Text {...FormIntroTitleStyle} color={MAIN_COLOR}>
          {footerData.data.intro.title}
        </Text>
        <div
          dangerouslySetInnerHTML={{
            __html: parseHtml(footerData.data.intro.text),
          }}
          style={{
            fontFamily: "Inter",
            fontWeight: "500",
            fontSize: "19px",
            lineHeight: "23px",
            color: DEFAULT_FONT_COLOR,
          }}
        />

        <CustomLink
          content={footerData.data.intro.link.label}
          color={MAIN_COLOR}
        />
      </Flex>
      <Box>
        <Flex
          className="right-side"
          w="43.75rem"
          justifyContent="space-between"
          direction="column"
        >
          <Text {...FormTitleStyle}>{footerData.data.form.title}</Text>
          <SimpleGrid
            columns={2}
            spacingX="1.1rem"
            spacingY="1.5rem"
            mt="1.1rem"
          >
            {halfArray.map((field: any) => {
              return <InputField key={field.name} {...field} />;
            })}
          </SimpleGrid>
          <Text {...RadioButtonTitleStyle} pl="1.5rem">
            {radioTitle}
          </Text>
          <Box
            background="#FFFFFF"
            border="1px solid #EAEAEA"
            borderRadius="24px"
            overflow="hide"
            w="44.9rem"
            p="0.25rem"
            mt="0.5rem"
          >
            <HStack {...group}>
              {radioArray[0].map((option: any) => {
                const value = option.label;
                if (!value) return;
                const radio = getRadioProps({ value });
                return (
                  <RadioButton key={value} {...radio}>
                    {value}
                  </RadioButton>
                );
              })}
            </HStack>
          </Box>

          <FormControl variant="floating" id="first-name" mt="1.5rem">
            <Textarea
              color={DEFAULT_FONT_COLOR}
              placeholder=" "
              h="10rem"
              p="1.5rem"
              border="1px solid #EAEAEA"
              borderRadius="1.5rem"
              focusBorderColor={MAIN_COLOR}
              bgColor="white"
              resize="none"
            />
            <FormLabel {...PlaceholderStyle}>{textAreaArray[0].name}</FormLabel>
          </FormControl>
          <Box
            onClick={() =>
              toast({
                title: "Hope you enjoyed my project.",
                description: "crossing fingers",
                status: "success",
                duration: 9000,
                isClosable: true,
              })
            }
          >
            <PrimaryButton
              label={footerData.data.form.submitLabel}
              colorHue={36}
              width="15rem"
              mt="1.1rem"
              type="submit"
            />
          </Box>
        </Flex>
      </Box>
    </Flex>
  );
};

export default Form;
