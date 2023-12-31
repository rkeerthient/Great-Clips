import * as React from "react";
import Header from "./header";
import Footer from "./footer";
import {
  SearchHeadlessProvider,
  provideHeadless,
} from "@yext/search-headless-react";
import searchConfig from "./searchConfig";
import Ce_site from "../types/site";

type Props = {
  _site?: Ce_site;
  children?: React.ReactNode;
};
const searcher = provideHeadless({ ...searchConfig });

const PageLayout = ({ _site, children }: Props) => {
  return (
    <SearchHeadlessProvider searcher={searcher}>
      <div className="min-h-screen">
        <div className="bg-[#083b3a] ">
          <Header _site={_site}></Header>
        </div>
        {children}
        <Footer _site={_site}></Footer>
      </div>
    </SearchHeadlessProvider>
  );
};

export default PageLayout;
