/* eslint-disable react/display-name */
import { Stack,VStack } from "@chakra-ui/react";
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
<VStack spacing="4" alignItems="center">
<Stack spacing="8" direction={["column", "row"]} alignItems="flex-start">
<VStack maxW="1000" spacing="4">
      {articles.sort((a:any, b:any) => {
            return (b.date - a.date)
          }).map((article, i) => (
            <Postcard key={i} article={article} />
        ))}
  </VStack>
  <VStack maxW="md" spacing="4" display={["none", "flex"]}>
          <Social />
          </VStack>
      </Stack>
    </VStack>
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
