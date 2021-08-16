import { NextPage } from "next";
import Error from "next/error";
import DefaultLayout from "../components/layout/Default";

interface ErrorPageProps {
  statusCode?: number;
}

const Page: NextPage<ErrorPageProps> = ({ statusCode }) => {
  return (
    <DefaultLayout>
  <Error statusCode={statusCode || 404}></Error>
  </DefaultLayout>
  );
};

Page.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Page;
