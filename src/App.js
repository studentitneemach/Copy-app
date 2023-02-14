import React, { Fragment } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Respones } from './Haeder/Respones';
import {About, Contect, Help, Home} from './data'
import './Haeder/Respones.css';

function App() {
  return (
    <Fragment>
<BrowserRouter>

<Respones />
<Route path="/" component={Home} exact />
<Route path="/about" component={About} exact />
<Route path="/help" component={Help} exact />
<Route path="/contect" component={Contect} exact />

</BrowserRouter>

    </Fragment>
  );
}

export default App;
