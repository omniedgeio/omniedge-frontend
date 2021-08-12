import { FunctionComponent } from "react";
import { Box, Flex, Heading, Table, Td, Text, Th, Tr, VStack } from "@chakra-ui/react";
import { ArticleMeta } from "./interfaces/article";
import { MDXProvider } from "@mdx-js/react";
import React, { useEffect, useState } from "react";
import { Link} from "@chakra-ui/react"
import Markdown from "./markdown"
interface IProps {
	article: ArticleMeta;
}


const getHrefFromText = (text: string) => text.toLowerCase().replace(/[^a-z]+/gi, "-");

const Docconent: FunctionComponent<IProps> = ({ article }) => {
  
  let [data, setContent] = useState<Element[]>([]);
  useEffect(() => {
    let data = [];
    const hs = document.querySelectorAll(".markdown h1, .markdown h2");
    for (let i = 0; i < hs.length; i++) {
      const h = hs[i];
      data.push(h);
    }
    setContent(data);
  }, []);
  
	return (<>
  <MDXProvider
    components={{
      h1: ({ children }) => (
        <Heading as="h1" id={getHrefFromText(article.content)}>
          {children}
        </Heading>
      ),
      h2: ({ children }) => (
        <Heading as="h2" id={getHrefFromText(article.content)}>
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
    <Markdown content={article.content} />
    </Box>
  </MDXProvider>
  <VStack flexShrink={0} w="250px" display={{ base: "none", lg: "flex" }} alignItems="start" pl={2}>
    <Text color="gray.500" fontSize="sm">
      On This Page
    </Text>
    {data.map((x) => (
      <Link href={"#" + x.id} key={x.id}>
        {x.textContent}
      </Link>
    ))}
  </VStack>
  </>
	);
}

export default Docconent;