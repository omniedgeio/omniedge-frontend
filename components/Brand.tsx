import { Heading, HStack } from "@chakra-ui/react";
import Logo from "./Logo";

const Brand: React.FC = function (props) {
  return (
    <HStack>
      <Logo h={[6, 8]}></Logo>
      <Heading fontWeight="semibold" fontSize={["md", "1.2rem"]} as="h5">
        OmniEdge
      </Heading>
    </HStack>
  );
};

export default Brand;
