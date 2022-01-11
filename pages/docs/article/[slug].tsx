/* eslint-disable react/display-name */
import {Stack,Flex, Heading,VStack } from "@chakra-ui/react";
import {Docnavs,Docconent} from '../../../components/Document';
import matter from 'gray-matter';
import fs from 'fs';
import DefaultLayout from "../../../components/layout/Default";
import React,{FunctionComponent } from 'react'
import { ArticleInfo } from '../../../components/interfaces/article'
import {Seo} from '../../../components/Seo';
interface IProps {
    article: ArticleInfo;
    articles: ArticleInfo[];
}
const DocLayout: FunctionComponent<IProps> = ({ article,articles }) => {
  return (<>
  <Seo title={article.meta.title} description={article.meta.description} image={article.meta.thumbnail} />
    <DefaultLayout>
<VStack padding="4" spacing="4" alignItems="left">
<Stack spacing="8" direction={["column", "row"]} alignItems="flex-start">
<Flex
          display={["none", "flex"]}
          p="4"
          justifyContent="space-between"
          borderBottom="1px"
          borderBottomColor="gray.100"
        >
  <VStack maxW="md" spacing="4" alignItems="left">
  <Heading fontSize="md">DOCS</Heading>
  <Docnavs articles={articles} /> 
          </VStack>
          </Flex>
    <VStack maxW="1000" spacing="4">
          <Docconent article={article} />
  </VStack>
  <Flex
          display={["flex", "none"]}
          p="4"
          justifyContent="space-between"
          borderBottom="1px"
          borderBottomColor="gray.100"
        >
  <VStack maxW="md" spacing="4" alignItems="left">
  <Heading fontSize="md">DOCS</Heading>
  <Docnavs articles={articles} /> 
          </VStack>
          </Flex>
      </Stack>
    </VStack>
    </DefaultLayout>
    </>
  );
};
export async function getStaticProps({ ...ctx }) {
    
    const files = fs.readdirSync("markdowndocs/Docs");
    let articles = files.map(file => {
        const data = fs
            .readFileSync(`markdowndocs/Docs/${file}`)
            .toString();
        let info=matter(data);
        return {
            ...info.data,
            slug: file.split('.')[0],
            content: info.content
        };
    });
    
    const { slug } = ctx.params;

    const content = fs
        .readFileSync(`markdowndocs/Docs/${slug}.md`)
        .toString();

    const info = matter(content);

    const article = {
        meta: {
            ...info.data,
            slug
        },
        content: info.content
    }

    return {
        props: {
            article: article,
            articles: articles
        }
    }
}

export async function getStaticPaths() {
    const files = fs.readdirSync("markdowndocs/Docs");
    const paths = files.map(file => ({
        params: {
            slug: file.split('.')[0]
        }
    }))
    
    return {
        paths,
        fallback: false,
    }
}




export default DocLayout;
