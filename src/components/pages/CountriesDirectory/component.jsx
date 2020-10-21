import React from "react";

import BasicLayout from "@/components/layouts/BasicLayout/component";

import CountryList from "./List/component";
import WorldMap from "./Map/component";

import { Wrapper } from "./style";
import CountryDetails from "./Details/component";

export default function CountriesDirectory() {
  return (
    <BasicLayout>
      <Wrapper>
        <CountryList />
        <WorldMap />
        <CountryDetails />
      </Wrapper>
    </BasicLayout>
  );
}
