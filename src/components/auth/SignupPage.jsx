import React from 'react';
import {Link, withRouter} from 'react-router-dom';

import * as ROUTES from '../../constants/routes';
import withFirebase from '../firebase/withFirebase';

const SignupPage = () => {
	return (
		<div>
			Signup page
			<SignupForm />
		</div>
	)
}

const INITIAL_STATE = {
	username: '',
	email: '',
	password: '',
	passwordConfirmation: '',
	isLoading: false,
	error: null,
};

class SignupForm extends React.Component {

	state = { ...INITIAL_STATE };

	onSubmit = (e) => {
		e.preventDefault();

		const {firebase} = this.props;
		const {email, password} = this.state;
		const {history} = this.props;
		this.setState({...this.state, isLoading: true});
		firebase.signup(email, password)
		.then(user => {
			this.setState({...INITIAL_STATE});
			history.push(ROUTES.HOME);
		})
		.catch(error => {
			console.log("signup error", {error});
			this.setState({ ...this.state, isLoading: false, error });
		});

	}

	onChange = (e) => {
		const {target} = e;
		this.setState({ ...this.state, [target.name]: target.value });
	}

	render() {
		const {isLoading, username, email, password, passwordConfirmation, error} = this.state;
		const isValid = 
			password === passwordConfirmation &&
			password !== '' &&
			passwordConfirmation !== '' &&
			password.length >= 6 &&
			email !== '' &&
			username !== '';

		const submitInput = isLoading
		? <span>processing...</span>
		: <button type="submit" disabled={!isValid}>Sign up</button>;

		return (
			<form onSubmit={this.onSubmit}>
				<input type="text" name="username" value={username} onChange={this.onChange} placeholder="username"/>
				<br/>
				<input type="email" name="email" value={email} onChange={this.onChange} placeholder="email"/>
				<br/>
				<input type="password" name="password" value={password} onChange={this.onChange} placeholder="password"/>
				<br/>
				<input type="password" name="passwordConfirmation" value={passwordConfirmation} onChange={this.onChange} placeholder="password confirmation"/>
				<br/>
				{ submitInput }
				{ error && <p>{error.message}</p> }
			</form>
		);
	}

}

SignupForm = withRouter(withFirebase(SignupForm));

const SignupLink = () => {
	return (
		<p>New around here? <Link to={ROUTES.SIGN_UP}>Signup here</Link></p>
	);
}

export default SignupPage;

export { SignupForm, SignupLink };