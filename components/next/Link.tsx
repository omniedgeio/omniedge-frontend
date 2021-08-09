import { Link as ChakraLink, LinkProps as ChakraLinkProps } from "@chakra-ui/react";
import NextLink, { LinkProps as NextLinkProps } from "next/link";
import React, { FC } from "react";

const Link: FC<NextLinkProps & ChakraLinkProps> = (props) => {
  const { children, href, replace, scroll, shallow, passHref, prefetch, locale, ...chakraLink } = props;

  return (
    <NextLink
      href={href}
      replace={replace}
      scroll={scroll}
      shallow={shallow}
      prefetch={prefetch}
      locale={locale}
      passHref
    >
      <ChakraLink
        _focus={{
          outline: 0,
        }}
        _hover={{
          textDecoration: "none",
          color: "brand.500",
        }}
        {...chakraLink}
      >
        {children}
      </ChakraLink>
    </NextLink>
  );
};

Link.defaultProps = {};

export default Link;
