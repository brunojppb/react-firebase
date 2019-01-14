import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Navigation from './Navigation';
import LandingPage from './LandingPage';
import SignupPage from './auth/SignupPage';
import SigninPage from './auth/SigninPage';
import ForgotPasswordPage from './auth/ForgotPasswordPage';
import HomePage from './profile/HomePage';
import AccountPage from './profile/AccountPage';
import AdminPage from './profile/AdminPage';

import * as ROUTES from '../constants/routes';

const App = () => (
	<Router>
		<div>
		<Navigation/>
		<hr/>

		<Route exact path={ROUTES.LANDING} component={LandingPage} />
		<Route path={ROUTES.SIGN_UP} component={SignupPage} />
		<Route path={ROUTES.SIGN_IN} component={SigninPage} />
		<Route path={ROUTES.FORGOT_PASSWORD} component={ForgotPasswordPage} />
		<Route path={ROUTES.HOME} component={HomePage} />
		<Route path={ROUTES.ACCOUNT} component={AccountPage} />
		<Route path={ROUTES.ADMIN} component={AdminPage} />

		</div>
	</Router>
);

export default App;