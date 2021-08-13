/* eslint-disable react/display-name */
import { Flex, Heading,VStack } from "@chakra-ui/react";
import {Postnavs,Postcard} from '../../components/Document';
import matter from 'gray-matter';
import fs from 'fs';
import DefaultLayout from "../../components/layout/Default";
import React,{FunctionComponent } from 'react'
import { ArticleInfo } from '../../components/interfaces/article'

interface IProps {
    articles: ArticleInfo[];
}

const BlogLayout: FunctionComponent<IProps> = ({ articles }) => {
  return (
    <DefaultLayout>
      <Flex mt={5} flexDirection={{ base: "row", md: "column" }}>
      <Heading fontSize="md">BLOG</Heading>
      {articles.sort().map((article, i) => (
            <Postcard article={article} />
        ))}
      </Flex>
    </DefaultLayout>
  );
};
export async function getStaticProps() {
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

    return {
        props: {
            articles: articles
        }
    };
}



export default BlogLayout;
