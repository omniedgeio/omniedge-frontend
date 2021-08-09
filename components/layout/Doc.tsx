/* eslint-disable react/display-name */
import { Box, Flex, Heading, Table, Td, Text, Th, Tr, VStack } from "@chakra-ui/react";
import { MDXProvider } from "@mdx-js/react";
import React, { useEffect, useState } from "react";
import { Page } from "../../types";
import Link from "../next/Link";
import DefaultLayout from "./Default";

const getHrefFromText = (text: string) => text.toLowerCase().replace(/[^a-z]+/gi, "-");

const DocLayout: Page = ({ children }) => {
  let [content, setContent] = useState<Element[]>([]);

  useEffect(() => {
    let content = [];
    const hs = document.querySelectorAll(".markdown h1, .markdown h2");
    for (let i = 0; i < hs.length; i++) {
      const h = hs[i];
      content.push(h);
    }
    setContent(content);
  }, []);

  return (
    <DefaultLayout>
      <Flex mt={5} flexDirection={{ base: "column", md: "row" }}>
        <VStack mb={{ base: 10, md: 0 }} flexShrink={0} spacing={4} w="175px" pr={2} alignItems="start">
          <Heading fontSize="md">DOCS</Heading>
          <Link color="gray.500" fontWeight="medium" href="/docs/admin">
            Admin
          </Link>
        </VStack>
        <MDXProvider
          components={{
            h1: ({ children }) => (
              <Heading as="h1" id={getHrefFromText(children)}>
                {children}
              </Heading>
            ),
            h2: ({ children }) => (
              <Heading as="h2" id={getHrefFromText(children)}>
                {children}
              </Heading>
            ),
            a: Link,
            table: Table,
            tr: Tr,
            th: Th,
            td: Td,
          }}
        >
          <Box maxW="800px" className="markdown" px={{ base: 0, md: 10 }}>
            {children}
          </Box>
        </MDXProvider>
        <VStack flexShrink={0} w="250px" display={{ base: "none", lg: "flex" }} alignItems="start" pl={2}>
          <Text color="gray.500" fontSize="sm">
            On This Page
          </Text>
          {content.map((x) => (
            <Link href={"#" + x.id} key={x.id}>
              {x.textContent}
            </Link>
          ))}
        </VStack>
      </Flex>
    </DefaultLayout>
  );
};

export default DocLayout;
