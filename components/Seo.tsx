import Head from "next/head";
import React from "react";
import { useLocation } from "react-router-dom";
const usePathname = () => {
  const location = useLocation();
  return location.pathname;
};

const favicon = "/favicon/apple-touch-icon.png";

interface Seoinfo {
  title?: string;
  description?: string;
  image?: string;
}

export const Seo: React.FC<Seoinfo> = ({ title, description, image }) => {
  return (
    <Head>
      {/* DEFAULT */}

      {title != undefined && <title key="title">OmniEdge | Bring intranet on the internet {title} </title>}
      {description != undefined && <meta name="description" key="description" content={description} />}
      <link rel="icon" type="image/x-icon" href={favicon} />
      <link rel="apple-touch-icon" href={favicon} />

      {/* OPEN GRAPH */}
      <meta property="og:type" key="og:type" content="website" />
      <meta property="og:url" key="og:url" content={`https://omniedge.io${usePathname}`} />
      {title != undefined && <meta property="og:title" content={title} key="og:title" />}
      {description != undefined && <meta property="og:description" key="og:description" content={description} />}
      {image != undefined && <meta property="og:image" key="og:image" content={`https://omniedge.io${image}`} />}

      {/* TWITTER */}
      <meta name="twitter:card" key="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" key="twitter:site" content="@omniedgeio" />
      <meta name="twitter:creator" key="twitter:creator" content="@omniedgeio" />
      {title != undefined && <meta name="twitter:title" key="twitter:title" content={title} />}
      {description != undefined && <meta name="twitter:description" key="twitter:description" content={description} />}
      {image != undefined && <meta name="twitter:image" key="twitter:image" content={`https://omniedge.io${image}`} />}
    </Head>
  );
};
