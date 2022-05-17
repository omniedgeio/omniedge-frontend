/* eslint-disable react/display-name */
import {Stack, Flex, Heading, VStack} from "@chakra-ui/react";
import {Docnavs, Docconent} from '../../../components/Document';
import matter from 'gray-matter';
import fs from 'fs';
import DefaultLayout from "../../../components/layout/Default";
import React, {FunctionComponent} from 'react'
import {ArticleInfo} from '../../../components/interfaces/article'
import {Seo} from '../../../components/Seo';
import {getManifestConfig, PageMapItem, pageMapItemToMap} from "../../../lib/helpers/docs";

interface IProps {
  rootPage: PageMapItem
  article: ArticleInfo;
}

const DocLayout: FunctionComponent<IProps> = ({rootPage, article}) => {
  return (<>
      <Seo title={article.meta.title} description={article.meta.description} image={article.meta.thumbnail}/>
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
                <Docnavs root={rootPage}/>
              </VStack>
            </Flex>
            <VStack maxW="1000" spacing="4">
              <Docconent article={article}/>
            </VStack>
            <Flex
              display={["flex", "none"]}
              p="4"
              justifyContent="space-between"
              borderBottom="1px"
              borderBottomColor="gray.100">
              <VStack maxW="md" spacing="4" alignItems="left">
                <Heading fontSize="md">DOCS</Heading>
                <Docnavs root={rootPage}/>
              </VStack>
            </Flex>
          </Stack>
        </VStack>
      </DefaultLayout>
    </>
  );
};

export async function getStaticProps({...ctx}) {
  const manifest = fs.readFileSync("markdowndocs/Docs/manifest.json").toString()
  const rootPage = getManifestConfig(manifest)
  const map: Map<string, PageMapItem> = new Map<string, PageMapItem>()
  pageMapItemToMap(rootPage, map)
  const {slug} = ctx.params;
  const realSlug = "/" + slug.join("/")
  const currentPage = map.get(realSlug);
  if (!currentPage) {
    return
  }
  const content = fs
    .readFileSync(`markdowndocs/${currentPage.path}`)
    .toString();
  const info = matter(content);

  const article = {
    meta: {
      ...info.data,
      ...slug
    },
    content: info.content
  }

  return {
    props: {
      rootPage: rootPage,
      article: article,
    }
  }
}

export async function getStaticPaths() {
  const manifest = fs.readFileSync("markdowndocs/Docs/manifest.json").toString()
  const rootPage = getManifestConfig(manifest)
  const map: Map<string, PageMapItem> = new Map<string, PageMapItem>()
  pageMapItemToMap(rootPage, map)
  const paths: any[] = []

  map.forEach((value: PageMapItem, key: string) => {
      if (key.startsWith("/")) {
        paths.push({
          params: {
            slug: key.substr(1).split("/")
          }
        })
      } else if (key != "") {
        paths.push({
          params: {
            slug: key.split("/")
          }
        })
      }
    }
  );
  return {
    paths: paths,
    fallback: false,
  }
}


export default DocLayout;
