import React, { useEffect } from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas";
import logger from "redux-logger";
import reducer from "@/redux/reducer";
import { loadState, saveState } from "./redux/localstorage/localstorage";
import moment from "moment";

import { getCurrencyListRequest, setChartsRequest, getCountryRequest } from "@/actions";
import Landing from "@/components/pages/Landing";
import ThemeWrapper from "@/components/wrappers/ThemeWrapper";
import IntlProviderWrapper from "@/components/wrappers/IntlProviderWrapper";
import Caches from "@/components/pages/Caches";
import Charts from "@/components/pages/Charts";
import SuccessSnackbar from "@/components/blocks/SnackBar";
import { database, getLastItemFireBaseDB } from "@/utils/fireBase";
import SignINPage from "@/components/pages/SingIn";
import UnauthorizedUser from "@/components/pages/UnauthorizedUser";
import PrivateRout from "@/components/wrappers/SingInWrapper";

import './App.css';
import CountriesDirectory from "@/components/pages/CountriesDirectory/component";

function App() {
  const sagaMiddleware = createSagaMiddleware();
  const persistedState = loadState();

  const middlewares = [sagaMiddleware];

  if (process.env.NODE_ENV === "development") {
    middlewares.unshift(logger);
  }
  const store = createStore(
    reducer,
    persistedState,
    applyMiddleware(...middlewares)
  );

  sagaMiddleware.run(rootSaga);

  store.subscribe(() => {
    saveState(store.getState());
  });

  useEffect(() => {
    // store.dispatch(getCurrencyListRequest(true));
    store.dispatch(setChartsRequest());
    store.dispatch(getCountryRequest());

    getLastItemFireBaseDB().then(time => {
      if (moment().format("x") - time >= 24*60*60*1000) {
        database.ref("/history").push({
          date: `${moment().format("x")}`,
          rates: store.getState().currency.rates,
        });
      }
    });

  }, [store]);

  return (
    <Provider store={store}>
      <IntlProviderWrapper>
        <ThemeWrapper>
          <Router>
            <SuccessSnackbar />
            <Switch>
              <Redirect path="/" to="/converter" exact/>
              <PrivateRout path="/cache" component={Caches} />
              <PrivateRout path="/charts" component={Charts} />
              <PrivateRout path="/directory" component={CountriesDirectory} />
              <Route path="/singIn" component={SignINPage} />
              <Route path="/unauthorized" component={UnauthorizedUser} />
              <PrivateRout path="/converter" component={Landing} />
            </Switch>
          </Router>
        </ThemeWrapper>
      </IntlProviderWrapper>
    </Provider>
  );
}

export default App;
