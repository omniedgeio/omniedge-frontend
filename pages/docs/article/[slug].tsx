/* eslint-disable react/display-name */
import { chakra,Flex, Heading,VStack,Divider,useColorModeValue } from "@chakra-ui/react";
import {Docnavs,Docconent} from '../../../components/Document';
import matter from 'gray-matter';
import fs from 'fs';
import DefaultLayout from "../../../components/layout/Default";
import React,{FunctionComponent } from 'react'
import { DocInfo } from '../../../components/interfaces/article'

interface IProps {
    article: DocInfo;
    articles: DocInfo[];
}
const DocLayout: FunctionComponent<IProps> = ({ article,articles }) => {
  return (
    <DefaultLayout>
      <Flex mt={5} flexDirection={{ base: "column", md: "row" }}>
        <VStack mb={{ base: 10, md: 0 }} flexShrink={0} spacing={4} w="175px" pr={2} alignItems="start">
          <Heading fontSize="md">DOCS > {article.meta.title}</Heading>
          <Divider />
          <Docnavs articles={articles} /> 
        </VStack>
            <Docconent article={article} />
      </Flex>
    </DefaultLayout>
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
