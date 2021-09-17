import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  fonts: {
    heading: 'Roboto Condensed',
    body: 'Roboto Condensed'
  },
  breakpoints: {
    null:  "0em",
    "2sm": "10em",
    sm: "30em",
    md: "48em",
    lg: "62em",
    xl: "80em",
    "2xl": "96em",
  }
})