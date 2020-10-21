import React from "react";
import { useSelector, useDispatch } from "react-redux";

import CompareArrowsIcon from "@material-ui/icons/CompareArrows";

import { setCurrencyAction, setCurrencyValueAction } from "@/actions";
import Button from "@/components/controls/ReverseButton"; 


export default function RevereseRatesButton({ leftPanelName, rightPanelName }) {
  const dispatch = useDispatch();
  const currencyValue = useSelector(state => state.panels.panels);
  const selectedCurrency = useSelector(state => state.panels.panels);

  const reversePanel = () => {
    dispatch(
      setCurrencyAction(leftPanelName, currencyValue[rightPanelName].code)
    );
    dispatch(
      setCurrencyValueAction(
        leftPanelName,
        selectedCurrency[rightPanelName].value
      )
    );
    dispatch(
      setCurrencyAction(rightPanelName, currencyValue[leftPanelName].code)
    );
    dispatch(
      setCurrencyValueAction(
        rightPanelName,
        selectedCurrency[leftPanelName].value
      )
    );
  };

  return (
    <Button className="reverse-rates-button" onClick={reversePanel}>
      <CompareArrowsIcon />
    </Button>
  );
}
