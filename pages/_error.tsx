import { NextPage } from "next";
import Error from "next/error";

interface ErrorPageProps {
  statusCode?: number;
}

const Page: NextPage<ErrorPageProps> = ({ statusCode }) => {
  return <Error statusCode={statusCode || 404}></Error>;
};

Page.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Page;
