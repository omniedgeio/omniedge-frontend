import { extendTheme, GlobalStyle } from "@chakra-ui/react";
import { StepsStyleConfig as Steps } from "chakra-ui-steps";
// import "../public/fonts/lxgw-wenkai";

const theme = extendTheme({
  colors: {
    brand: {
      50: "#E3E6FC",
      100: "#D1D5FA",
      200: "#BEC4F8",
      300: "#ACB4F6",
      400: "#8893F3",
      500: "#4859ED",
      600: "#162BE1",
      700: "#1325C4",
      800: "#0D1A8C",
      900: "#081054",
    },
  },
  fonts: {
    body: "'Poppins', sans-serif,LXGWWenKai-Regular",
    heading: "'Poppins', sans-serif,LXGWWenKai-Bold",
  },
  components: {
    Steps,
    Input: {
      variants: {
        outline: {
          field: {
            _focus: {
              borderColor: "brand.500",
            },
          },
        },
      },
    },
    Checkbox: {
      defaultProps: {
        colorScheme: "brand",
      },
    },
    Modal: {
      baseStyle: {
        dialog: {
          mx: 4,
        },
      },
    },
  },
});

export default theme;
