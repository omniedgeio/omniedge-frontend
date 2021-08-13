/* eslint-disable react/display-name */
import { Flex, Heading,VStack,Divider } from "@chakra-ui/react";
import {Postnavs,Postconent} from '../../../components/Document';
import matter from 'gray-matter';
import fs from 'fs';
import DefaultLayout from "../../../components/layout/Default";
import React,{FunctionComponent } from 'react'
import { ArticleMeta } from '../../../components/interfaces/article'

interface IProps {
    article: ArticleMeta;
    articles: ArticleMeta[];
}

const DocLayout: FunctionComponent<IProps> = ({ article,articles }) => {
  return (
    <DefaultLayout>
      <Flex mt={5} flexDirection={{ base: "column", md: "row" }}>
        <VStack mb={{ base: 10, md: 0 }} flexShrink={0} spacing={4} w="175px" pr={2} alignItems="start">
          <Heading fontSize="md">BLOG > {article.meta.title}</Heading>
          <Divider />
          <Postnavs articles={articles} /> 
        </VStack>
            <Postconent article={article} />
      </Flex>
    </DefaultLayout>
  );
};
export async function getStaticProps({ ...ctx }) {
    
    const files = fs.readdirSync("markdowndocs/Posts");
    let articles = files.map(file => {
        const data = fs
            .readFileSync(`markdowndocs/Posts/${file}`)
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
        .readFileSync(`markdowndocs/Posts/${slug}.md`)
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
    const files = fs.readdirSync("markdowndocs/Posts");
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
