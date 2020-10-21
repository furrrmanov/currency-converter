import React from "react";
import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import Button from "@/components/controls/CachesButton";
import { singIn } from "@/utils/fireBase";
import { Wrapper } from "./style";
import { setUserInfo } from "@/actions";

export default function SignINPage() {
  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector(state => state.user);

  const onClick = () => {
    singIn().then(data =>
      dispatch(
        setUserInfo({
          isLogged: true,
          name: `${data.displayName}`,
          photoUrl: `${data.providerData[0].photoURL}`,
        })
      ),
    );
  };

  useEffect(() => {
    if (user.isLogged) {
      history.push("/converter");
    }
  }, [user.isLogged, history]);

  
  if(user.isLogged) {
    return null;
  } 

  return (
    <Wrapper>
      <Button variant="outlined" onClick={onClick}>
        Sing-in
      </Button>
    </Wrapper>
  );
}
