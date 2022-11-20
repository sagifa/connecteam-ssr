import {
  Box,
  Flex,
  Text,
  Input,
  SimpleGrid,
  FormControl,
  FormLabel,
  FormLabelProps,
  Select,
  useRadioGroup,
  HStack,
  TextProps,
  Textarea,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { MainContainerStyle } from "../../styles/style";
import { APP_PADDING, MAIN_COLOR } from "../../utils/consts";
import { parseHtml } from "../sections/Section";
import { ArrowSelect } from "../icons/ArrowSelect";
import RadioInput from "../RadioButton";
import { TitleStyle } from "../hero/style";
import {
  FormIntroTitleStyle,
  FormTitleStyle,
  RadioButtonTitleStyle,
} from "./style";
import CustomLink from "../CustomLink";
import RadioButton from "../RadioButton";
import PrimaryButton from "../buttons/PrimaryButton";
const Form = (footerData: any) => {
  const [selected, setSelected] = useState("");
  const options = ["react", "vue", "svelte"];

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "framework",
    onChange: setSelected,
  });

  const group = getRootProps();

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
            color: "#6A6A6A",
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
            <FormControl variant="floating" id="first-name">
              <Input
                color="#6A6A6A"
                placeholder=" "
                w="21.3rem"
                h="3rem"
                border="1px solid #EAEAEA"
                borderRadius="1.5rem"
                focusBorderColor={MAIN_COLOR}
                bgColor="white"
              />
              <FormLabel {...PlaceholderStyle}>Facere ipsa quod</FormLabel>
            </FormControl>
            <FormControl variant="floating" id="first-name">
              <Input
                color="#6A6A6A"
                placeholder=" "
                w="21.3rem"
                h="3rem"
                border="1px solid #EAEAEA"
                borderRadius="1.5rem"
                focusBorderColor={MAIN_COLOR}
              />
              <FormLabel {...PlaceholderStyle}>Neque sed quisquam</FormLabel>
            </FormControl>
            <FormControl variant="floating" id="first-name">
              <Input
                color="#6A6A6A"
                placeholder=" "
                w="21.3rem"
                h="3rem"
                border="1px solid #EAEAEA"
                borderRadius="1.5rem"
                focusBorderColor={MAIN_COLOR}
              />
              <FormLabel {...PlaceholderStyle}>Quod sunt enim optio</FormLabel>
            </FormControl>
            <Select
              icon={<ArrowSelect mr="1.4rem" />}
              placeholder="Eius distinctio nobis"
              w="21.3rem"
              h="3rem"
              border="1px solid #EAEAEA"
              borderRadius="1.5rem"
              focusBorderColor={MAIN_COLOR}
              fontFamily="Inter"
              fontWeight="600"
              fontSize="1rem"
              lineHeight="1.4rem"
            />
          </SimpleGrid>

          <Text {...RadioButtonTitleStyle} pl="1.5rem">
            Dolores nostrum neque quas
          </Text>
          <Box
            background="#FFFFFF"
            border="1px solid #EAEAEA"
            borderRadius="24px"
            overflow="hide"
            w="44.3rem"
            p="0.25rem"
            mt="0.5rem"
          >
            <HStack {...group}>
              {options.map((value) => {
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
              color="#6A6A6A"
              placeholder=" "
              h="10rem"
              p="1.5rem"
              border="1px solid #EAEAEA"
              borderRadius="1.5rem"
              focusBorderColor={MAIN_COLOR}
              bgColor="white"
              resize="none"
            />
            <FormLabel {...PlaceholderStyle}>Facere ipsa quod</FormLabel>
          </FormControl>

          <PrimaryButton
            label="dasda"
            colorHue={36}
            width="15rem"
            mt="1.1rem"
          />
        </Flex>
      </Box>
    </Flex>
  );
};

export default Form;
export const PlaceholderStyle: FormLabelProps = {
  fontFamily: "Inter",
  fontWeight: "600",
  fontSize: "1rem",
  lineHeight: "1.4rem",
  color: "#242424",
  alignContent: "center",
  justifyContent: "center",
};
