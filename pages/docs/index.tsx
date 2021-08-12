/* eslint-disable react/display-name */
import { Flex, Heading,VStack } from "@chakra-ui/react";
import {Docnavs} from '../../components/Docnav';
import Docconent from '../../components/Docconent';
import matter from 'gray-matter';
import fs from 'fs';
import DefaultLayout from "../../components/layout/Default";
import React,{FunctionComponent } from 'react'
import { ArticleMeta } from '../../components/interfaces/article'

interface IProps {
    articles: ArticleMeta[];
}

const DocLayout: FunctionComponent<IProps> = ({ articles }) => {
  return (
    <DefaultLayout>
      <Flex mt={5} flexDirection={{ base: "column", md: "row" }}>
        <VStack mb={{ base: 10, md: 0 }} flexShrink={0} spacing={4} w="175px" pr={2} alignItems="start">
          <Heading fontSize="md">DOCS</Heading>
            <Docnavs articles={articles} /> 
        </VStack>
            <Docconent key={0} article={articles[0]} />
      </Flex>
    </DefaultLayout>
  );
};
export async function getStaticProps() {
    const files = fs.readdirSync("docs");
    
    let articles = files.map(file => {
        const data = fs
            .readFileSync(`docs/${file}`)
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



export default DocLayout;
