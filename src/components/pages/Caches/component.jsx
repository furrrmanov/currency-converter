import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

import { FormattedMessage } from "react-intl";

import { showSuccessSnackbar } from "@/actions";
import Button from "@/components/controls/CachesButton";

import { Wrapper } from "./style";
import BasicLayout from "@/components/layouts/BasicLayout/component";

export default function Caches() {
  const history = useHistory();
  const dispatch = useDispatch();

  const clearStorage = () => {
    localStorage.clear();
    dispatch(showSuccessSnackbar("Cache cleared !"));
    history.push("/");
  };

  return (
    <BasicLayout>
    <Wrapper>
      <Button variant="outlined" onClick={clearStorage}>
      <FormattedMessage id="clearCachesButton" defaultMessage="Clear caches" />
      </Button>
    </Wrapper>
    </BasicLayout>
  );
}
