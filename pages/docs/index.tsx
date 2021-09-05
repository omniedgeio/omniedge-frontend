/* eslint-disable react/display-name */
import { Stack,Flex, Heading,VStack } from "@chakra-ui/react";
import {Docnavs,Docconent} from '../../components/Document';
import matter from 'gray-matter';
import fs from 'fs';
import DefaultLayout from "../../components/layout/Default";
import React,{FunctionComponent } from 'react'
import { ArticleInfo } from '../../components/interfaces/article'
import {Seo} from "../../components/Seo";
interface IProps {
    articles: ArticleInfo[];
}

const DocLayout: FunctionComponent<IProps> = ({ articles }) => {
  return (<>
    <Seo title="Learn how to use omniedge with documentations" description="Learn how to use admin dashboard to create virtual networks,share virtual networks, active devices, use sub routers and create security keys. Learn how to install
    Omniedge clients, know how omniedge works, and more" image="/assets/OmniEdgeall0.5.png" />
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
<Docconent key={0} article={articles[0]} />
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
export async function getStaticProps() {
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

    return {
        props: {
            articles: articles
        }
    };
}



export default DocLayout;
