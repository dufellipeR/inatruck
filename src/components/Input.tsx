import { FormControl, FormLabel, Input as ChakraInput, InputProps as ChakraInputProps } from '@chakra-ui/react';

interface InputProps extends ChakraInputProps {
  name: string;
  placeholder: string;
}

export default function Input({ name, placeholder, ...rest }: InputProps) {
  return (
    <FormControl>

      <ChakraInput 
        name={name}
        id={name}
        placeholder={placeholder}
        focusBorderColor="red.500"
        bgColor="gray.200"
        {...rest}
      />
    </FormControl>
  );
}