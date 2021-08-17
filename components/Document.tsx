import { Children, FunctionComponent } from "react";
import { ArticleInfo } from "./interfaces/article";
import { chakra,Image,Stack,Avatar,Center,Box,Heading, Table, Td, Text, Th, Tr, VStack,Link, useColorModeValue,Flex } from "@chakra-ui/react";
import { MDXProvider } from "@mdx-js/react";
import React, { useEffect, useState } from "react";
import ReactMarkdown from 'react-markdown';

interface IProps {
	article: ArticleInfo; 
}

interface IPropss {
	articles: ArticleInfo[]; 
}

export const Docnav: FunctionComponent<IProps> = ({ article }) => {
	return (
        <Link href={`/docs/article/${article.slug}`} color="gray.500" fontWeight="medium">
        {article.title}
      </Link>
	);
}

export const Docnavs: FunctionComponent<IPropss> = ({ articles }) => {
	return (<>
    {articles.sort((a, b) => {
            return (a.index-b.index)
          }).map((article, i) => (
      <Link key={i} href={`/docs/article/${article.slug}`} color="gray.500" fontWeight="medium">
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

export const Postnav: FunctionComponent<IProps> = ({ article }) => {
	return (
        <Link href={`/blog/posts/${article.slug}`} color="gray.500" fontWeight="medium">
        {article.title}
      </Link>
	);
}

export const Postnavs: FunctionComponent<IPropss> = ({ articles }) => {
	return (<>
    {articles.sort().map((article, i) => (
      <Link key={i} href={`/blog/posts/${article.meta.slug}`} color="gray.500" fontWeight="medium">
      {article.meta.title}
    </Link>
  ))}
  </>
	);
}

interface props {
  info: string;
}
export const Markdowndoc: FunctionComponent<props> = ({info}) => {
  return(
    <>
    <Box maxW="800px" className="markdown" px={{ base: 0, md: 10 }}>
    <ReactMarkdown children={info} />
    </Box>
  </>
	);
}

export const Postconent: FunctionComponent<IProps> = ({ article }) => {
  
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
    <Box
				maxW={'1000px'}
				w={'full'}
				// boxShadow={'xl'}
				rounded={'md'}
				p={6}
				overflow={'hidden'}
				>
      <Center>  <Heading>{article.meta.title}</Heading></Center>
      <br></br>
      <Center>
      <Stack direction={'row'} spacing={1} fontSize={'sm'}>
      <Avatar
        size="xs"
        src={article.meta.avatar}
        alt={'Author'}
      />
        <Text fontWeight={600}>{article.meta.author}</Text>
        <Text color={'gray.500'}>{article.meta.date}</Text>
      </Stack>
      </Center>
      <br></br>
    <Box maxW="800px" className="markdown" px={{ base: 0, md: 10 }}>
    <ReactMarkdown children={article.content} />
    </Box>
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

export const Postcard: FunctionComponent<IProps> = ({ article }) => {
  return (
    <Flex
      p={50}
      w="full"
      alignItems="center"
      justifyContent="center"
    >
      <Box
        mx="auto"
        rounded="lg"
        shadow="md"
        bg={useColorModeValue("white", "gray.800")}
        maxW="3xl"
      >
        <Image
          roundedTop="lg"
          w="full"
          h={64}
          fit="cover"
          src={article.thumbnail}
          alt={article.description}
        />

        <Box p={6}>
          <Box>
            <chakra.span
              fontSize="xs"
              textTransform="uppercase"
              // color={useColorModeValue("brand.600", "brand.400")}
            >
              
            </chakra.span>
            <Link
              display="block"
              color={useColorModeValue("gray.800", "white")}
              fontWeight="bold"
              fontSize="2xl"
              mt={2}
              _hover={{ color: "gray.600", textDecor: "underline" }}
              href={`/blog/posts/${article.slug}`} 
              
            >
              {article.title}
            </Link>
            <chakra.p
              mt={2}
              fontSize="sm"
              color={useColorModeValue("gray.600", "gray.400")}
            >
              {article.description}
            </chakra.p>
          </Box>

          <Box mt={4}>
            <Flex alignItems="center">
              <Flex alignItems="center">
                <Image
                  h={10}
                  fit="cover"
                  rounded="full"
                  src={article.avatar}
                  alt="Avatar"
                />
                <Link
                  mx={2}
                  fontWeight="bold"
                  color={useColorModeValue("gray.700", "gray.200")}
                  
                >
                  { article.author }
                </Link>
              </Flex>
              <chakra.span
                mx={1}
                fontSize="sm"
                color={useColorModeValue("gray.600", "gray.300")}
              >
                { article.date }
              </chakra.span>
            </Flex>
          </Box>
        </Box>
      </Box>
    </Flex>
  );
};
