import React from "react";

import CurrencyPane from "@/components/blocks/panel/CurrencyPane";
import RevereseRatesButton from "@/components/ReverseRatesButton";
import Settings from "@/components/blocks/settings";
import BasicLayout from "@/components/layouts/BasicLayout/component";

import { Wrapper, PaneContainer } from "./style";

export default function Landing() {
  return (
    <BasicLayout>
    <Wrapper>
      <Settings />
      <PaneContainer>
        <CurrencyPane name="left" />
        <RevereseRatesButton leftPanelName="left" rightPanelName="right" />
        <CurrencyPane name="right" />
      </PaneContainer>
    </Wrapper>
    </BasicLayout>
  );
}
