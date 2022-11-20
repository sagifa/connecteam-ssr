import React from "react";
import { Box, chakra, ChakraProps, useRadio } from "@chakra-ui/react";

const RadioInput = (props: any) => {
  const { ...radioProps } = props;
  const { state, getInputProps, getCheckboxProps, htmlProps, getLabelProps } =
    useRadio(radioProps);

  return (
    <chakra.label {...htmlProps} cursor="pointer">
      <input {...getInputProps({})} hidden />
      <Box
        {...getCheckboxProps()}
        bg={state.isChecked ? "green.200" : "transparent"}
        w={12}
        h={12}
        p={1}
        rounded="full"
      >
        <Box {...RadioInputStyles} rounded="full" {...getLabelProps()} />
      </Box>
    </chakra.label>
  );
};

export default RadioInput;

// function Example() {
//     const CustomRadio = (props) => {
//       const { image, ...radioProps } = props
//       const { state, getInputProps, getCheckboxProps, htmlProps, getLabelProps } =
//         useRadio(radioProps)

//       return (
//         <chakra.label {...htmlProps} cursor='pointer'>
//           <input {...getInputProps({})} hidden />
//           <Box
//             {...getCheckboxProps()}
//             bg={state.isChecked ? 'green.200' : 'transparent'}
//             w={12}
//             p={1}
//             rounded='full'
//           >
//             <Image src={image} rounded='full' {...getLabelProps()} />
//           </Box>
//         </chakra.label>
//       )
//     }

//     return (
//       <div>
//         <CustomRadio image={'https://randomuser.me/api/portraits/men/86.jpg'} />
//       </div>
//     )
//   }

export const RadioInputStyles: ChakraProps = {
  w: "50",
  h: "5",
  border: "1px",
  bgColor: "white",
  display: "flex",
  cursor: "pointer",
  borderRadius: "full",
  alignItems: "center",
  justifyContent: "center",
  borderColor: "red",
  _checked: {
    borderColor: "yellow",
    ".inbox": {
      w: "2.5",
      h: "2.5",
      bg: "green",
      borderRadius: "full",
    },
  },
};
