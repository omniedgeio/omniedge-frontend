import dynamic from "next/dynamic";
import React from "react";

const NoSsr: React.FC = (props) => <React.Fragment>{props.children}</React.Fragment>;

export default dynamic(() => Promise.resolve(NoSsr), {
  ssr: false,
});
