/* eslint-disable react/display-name */
import { Flex,VStack } from "@chakra-ui/react";
import {Postcard} from '../../components/Document';
import matter from 'gray-matter';
import fs from 'fs';
import DefaultLayout from "../../components/layout/Default";
import React,{FunctionComponent } from 'react'
import { ArticleInfo } from '../../components/interfaces/article'
import {Social} from "../../components/Brand";

interface IProps {
    articles: ArticleInfo[];
}

const BlogLayout: FunctionComponent<IProps> = ({ articles }) => {
  return (

<DefaultLayout>
<Flex mt={5} flexDirection={{ base: "column", md: "row" }}>
      <Flex mt={5} flexDirection={{ base: "row", md: "column" }}>
      {articles.sort((a, b) => {
            return (
              Date.parse(b.date) - Date.parse(a.date)
            )
          }).map((article, i) => (
            <Postcard article={article} />
        ))}
      </Flex>
      <VStack mb={{ base: 10, md: 0 }} flexShrink={0} spacing={4} w="175px" pr={2} alignItems="start">
          <Social />
        </VStack>
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
