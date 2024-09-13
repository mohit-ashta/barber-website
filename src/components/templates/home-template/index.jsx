import { Layout } from "@/components/organisms/layout";
import React from "react";
import { About } from "@/components/organisms/home/about";
import { Service } from "@/components/organisms/home/service";
import { Prices } from "@/components/organisms/home/prices";
import { Banner } from "@/components/organisms/home/banner";
export const HomeTemplate = () => {
  return (
    <Layout>
      <Banner/>
      <About />
      <Service />
      <Prices />
    </Layout>
  );
};
