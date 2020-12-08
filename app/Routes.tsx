/* eslint react/jsx-props-no-spreading: off */
import { Typography } from '@material-ui/core';
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import routes from './constants/routes';
import App from './containers/App/App';
import HomePage from './screens/HomeScreen';
import ManagedWindow from './screens/Window/ManagedWindow';
import NewBorderlessWindow from './screens/Window/NewFramelessWindow';
import NewWindow from './screens/Window/NewWindow';
import UsingEventsWindow from './screens/Window/UsingEventsWindow';

// Lazily load routes and code split with webpack
const LazyWindowScreen = React.lazy(() =>
  import(/* webpackChunkName: "WindowScreen" */ './screens/WindowScreen')
);
const LazyMenuScreen = React.lazy(() =>
  import(/* webpackChunkName: "MenuScreen" */ './screens/MenuScreen')
);

const HomeScreen = (props: Record<string, unknown>) => <HomePage {...props} />;

const LazyWindow = (props: Record<string, unknown>) => (
  <React.Suspense fallback={<Typography>Loading...</Typography>}>
    <LazyWindowScreen {...props} />
  </React.Suspense>
);

const LazyMenu = (props: Record<string, unknown>) => (
  <React.Suspense fallback={<Typography>Loading...</Typography>}>
    <LazyMenuScreen {...props} />
  </React.Suspense>
);

const AppSwitch = () => (
  <Switch>
    <Route exact path={routes().home()} component={HomeScreen} />
    <Route exact path={routes().window().main()} component={LazyWindow} />
    <Route exact path={routes().menu()} component={LazyMenu} />
  </Switch>
);

export default function Routes() {
  return (
    <>
      <Switch>
        <Route exact path={routes().window().new()} component={NewWindow} />
        <Route
          exact
          path={routes().window().frameless()}
          component={NewBorderlessWindow}
        />
        <Route
          exact
          path={routes().window().managed()}
          component={ManagedWindow}
        />
        <Route
          exact
          path={routes().window().events()}
          component={UsingEventsWindow}
        />
        <Route path="*">
          <App>
            <AppSwitch />
          </App>
        </Route>
      </Switch>
    </>
  );
}
