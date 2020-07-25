/* eslint-disable import/no-cycle */
import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Switch, Route, IndexRedirect } from 'react-router-dom';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { BASE_FONT_SIZE } from './config/const';
import themes from './themes';
import Header from './components/Header';
import Nav from './components/Nav';
import ErrorBoundary from './components/ErrorBoundary';
/* Pages */
// import Login from './pages/Login';
// import Movies from './pages/Movies';
const Products = lazy(() => import('./pages/Products'));
const ShoppingCart = lazy(() => import('./pages/ShoppingCart'));
const Checkout = lazy(() => import('./pages/Checkout'));
const Success = lazy(() => import('./pages/Success'));

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@400;700&display=swap');
  @import url("https://fonts.googleapis.com/icon?family=Material+Icons");
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .App {
    align-items: center;
    font-size: ${props => props.fontSize};
    font-family: 'Roboto', sans-serif;
    width: 100%;
    height: auto;
  }

  hr {
    border-top: 1px solid rgba(255, 255, 255, 0.12);
    border-bottom: 0;
    border-left: 0;
    border-right: 0;
    margin: -8px;
    width: calc(100% + 16px);
    z-index: 1;
    height: 10px;
  }

  body {
    background: #f5f6f7 !important;
    line-height: 1.5;
    font-family: "Caveat", cursive;
  }

  a {
    text-decoration: none;
  }

  .material-icons {
    font-family: 'Material Icons';
    font-weight: normal;
    font-style: normal;
    font-size: 24px;
    line-height: 1;
    letter-spacing: normal;
    text-transform: none;
    display: inline-block;
    white-space: nowrap;
    word-wrap: normal;
    direction: ltr;
    -webkit-font-feature-settings: 'liga';
    -webkit-font-smoothing: antialiased;
  }

  i {
    cursor: pointer;
  }
`;

const themeContext = {
  theme: themes.light,
  toogleTheme: () => {}
};

export const ThemeContext = React.createContext(themeContext);

const App = () => {
  return (
    <ThemeProvider theme={themeContext.theme}>
      <GlobalStyle fontSize={BASE_FONT_SIZE} />
      <BrowserRouter>
        <div className="App">
          <ErrorBoundary>
            <Suspense fallback={<div>Loading...</div>}>
              <Header />
              <hr />
              <Nav />
              <Switch>
                <Route path="/">
                  <IndexRedirect to="/products" />
                  <Route path="products" component={Products} />
                </Route>
                <Route exact path="/cart" component={ShoppingCart} />
                <Route exact path="/checkout" component={Checkout} />
                <Route exact path="/thanks" component={Success} />
              </Switch>
            </Suspense>
          </ErrorBoundary>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
