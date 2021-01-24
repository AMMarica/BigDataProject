import React from 'react';
import './App.css';
import { Switch, Route, Link, BrowserRouter } from 'react-router-dom';
import Register from './components/register'
import Login from './components/login'
import Googlemaps from './components/googlemaps'

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
	return (
		<BrowserRouter>
			{/* <Navbar /> */}
			<Switch>
				<Route exact path="/" component={Googlemaps} />
				{/* <Route exact path="/" component={Login} /> */}
				<Route path="/register" component={Register} />
				<Route path="/map" component={Googlemaps} />
				{/* <Route path="/login" component={Login} /> */}
			</Switch>
		</BrowserRouter>
	);
}

export default App;
