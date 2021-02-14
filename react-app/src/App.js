import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import LoginForm from './components/auth/LoginForm';
import SignUpForm from './components/auth/SignUpForm';
import ProtectedRoute from './components/auth/ProtectedRoute';

import NavBar from './components/NavBar';
import UsersList from './components/UserList';
import User from './components/User';
import Home from './components/Home';

import Orders from './components/Orders';
import OrderingSequence from './components/Orders/OrderingSequence';
import PerfectWine from './components/Orders/PerfectWine';
import ReviewOrder from './components/Orders/ReviewOrder';
import ThankYou from './components/Orders/ThankYou';

import Menus from './components/Menus';

import { authenticate } from './services/auth';
import Footer from './components/Footer';

function App() {
	const [authenticated, setAuthenticated] = useState(false);
	const [loaded, setLoaded] = useState(false);

	useEffect(() => {
		(async () => {
			const user = await authenticate();
			if (!user.errors) {
				setAuthenticated(true);
			}
			setLoaded(true);
		})();
	}, []);

	if (!loaded) {
		return null;
	}

	return (
		<BrowserRouter>
			<NavBar setAuthenticated={setAuthenticated} />
			<Switch>
				<Route path="/" exact={true}>
					<Home />
				</Route>
				<Route path="/orders" exact={true}>
					<Orders />
				</Route>
				<Route path="/orders/new" exact={true}>
					<OrderingSequence authenticated={authenticated} setAuthenticated={setAuthenticated}/>
				</Route>
				<Route path="/orders/new/wine" exact={true}>
					<PerfectWine authenticated={authenticated} setAuthenticated={setAuthenticated}/>
				</Route>
				<Route path="/orders/new/review" exact={true}>
					<ReviewOrder authenticated={authenticated} setAuthenticated={setAuthenticated}/>
				</Route>
				<Route path="/orders/new/thank-you" exact={true}>
					<ThankYou authenticated={authenticated} setAuthenticated={setAuthenticated}/>
				</Route>
				<Route path="/menus" exact={true}>
					<Menus />
				</Route>
				<Route path="/login" exact={true}>
					<LoginForm
						authenticated={authenticated} setAuthenticated={setAuthenticated}
					/>
				</Route>
				<Route path="/sign-up" exact={true}>
					<SignUpForm
						authenticated={authenticated}
						setAuthenticated={setAuthenticated}
					/>
				</Route>
				<ProtectedRoute
					path="/users"
					exact={true}
					authenticated={authenticated}
				>
					<UsersList />
				</ProtectedRoute>
				<ProtectedRoute
					path="/users/:userId"
					exact={true}
					authenticated={authenticated}
				>
					<User />
				</ProtectedRoute>
			</Switch>
			<Footer />
		</BrowserRouter>
	);
}

export default App;
