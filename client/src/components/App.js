import { Fragment } from "react";

import '../styles/App.css';

import Header from './Header';
import Main from './Main';
import Footer from './Footer';

function App() {
  return (
    <Fragment>
      <Header />
      <Main />
      <Footer />
    </Fragment>
  );
}

export default App;
