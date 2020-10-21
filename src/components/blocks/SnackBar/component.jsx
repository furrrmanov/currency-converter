import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { Snackbar } from "./style";
import Alert from "@material-ui/lab/Alert";
import { clearSnackbar } from "@/actions";

import "./style.js";

export default function SuccessSnackbar() {
  const dispatch = useDispatch();

  const { successSnackbarMessage, successSnackbarOpen } = useSelector(
    state => state.global
  );

  function handleClose() {
    dispatch(clearSnackbar());
  }

  return (
    <Snackbar
      open={successSnackbarOpen}
      autoHideDuration={2500}
      onClose={handleClose}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
    >
      <Alert onClose={handleClose} severity="success">
        {successSnackbarMessage}
      </Alert>
    </Snackbar>
  );
}
