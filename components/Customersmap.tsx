import { Image,Box,chakra,BoxProps, Divider} from "@chakra-ui/react";
import React from "react";

export const Customersmap: React.FC<BoxProps> = (props) => {
  return (<>
    <Box padding="4" textAlign={{ lg: "center" }}>
            <chakra.h2
            mt={2}
            fontSize={{ base: "3xl", sm: "4xl" }}
            lineHeight="8"
            fontWeight="extrabold"
            letterSpacing="tight"
            color="gray.900"
            >
              Our Customers are from worldwide.
            </chakra.h2>
            <chakra.p
              mt={2}
              lineHeight="2"
              letterSpacing="tight"
              color="gray.900"
            >
              We served customers from more than 26 countries & regions.
            </chakra.p>
            </Box>
            <br></br>
            <Image
        width="100%"
        fit="cover"
        src="/assets/MAP.png"
        alt="OmniEdge's Cusotmer"
      /> 
      </>
  );
};