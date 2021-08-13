import { FunctionComponent } from "react";
import { ArticleMeta } from "./interfaces/article";
import { Box,Heading, Table, Td, Text, Th, Tr, VStack,Link } from "@chakra-ui/react";
import { MDXProvider } from "@mdx-js/react";
import React, { useEffect, useState } from "react";
import ReactMarkdown from 'react-markdown';

interface IProps {
	article: ArticleMeta; 
	articles: ArticleMeta[];
}

export const Docnav: FunctionComponent<IProps> = ({ article }) => {
	return (
        <Link href={`/docs/article/${article.slug}`} color="gray.500" fontWeight="medium">
        {article.title}
      </Link>
	);
}

export const Docnavs: FunctionComponent<IProps> = ({ articles }) => {
	return (<>
    {articles.sort().map((article, i) => (
      <Link href={`/docs/article/${article.slug}`} color="gray.500" fontWeight="medium">
      {article.title}
    </Link>
  ))}
  </>
	);
}

const getHrefFromText = (text: string) => text.toLowerCase().replace(/[^a-z]+/gi, "-");

export const Docconent: FunctionComponent<IProps> = ({ article }) => {
  
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
    <ReactMarkdown children={article.content} />
    </Box>
  </MDXProvider>
  <VStack flexShrink={0} w="250px" display={{ base: "none", lg: "flex" }} alignItems="start" pl={2}>
    <Text color="gray.500" fontSize="md">
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