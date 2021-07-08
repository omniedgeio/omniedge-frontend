import { Link as ChakraLink, LinkProps as ChakraLinkProps } from "@chakra-ui/react";
import NextLink, { LinkProps as NextLinkProps } from "next/link";
import React, { FC } from "react";

interface IProps extends NextLinkProps {
  chackraLink?: ChakraLinkProps;
}

const Link: FC<IProps> = (props) => {
  const { chackraLink, children } = props;
  const nextLinkProps = {
    ...props,
    chackraLink: undefined,
    children: undefined,
  };
  return (
    <NextLink {...nextLinkProps} passHref>
      <ChakraLink {...chackraLink}>{children}</ChakraLink>
    </NextLink>
  );
};

Link.defaultProps = {
  chackraLink: {},
};

export default Link;
