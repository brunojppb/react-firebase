import app from 'firebase/app';
import 'firebase/auth';

const config = {
	apiKey: process.env.REACT_APP_API_KEY,
  	authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  	databaseURL: process.env.REACT_APP_DATABASE_URL,
  	projectId: process.env.REACT_APP_PROJECT_ID,
  	storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  	messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
};

class Firebase {

	constructor() {
		app.initializeApp(config);
		this.auth = app.auth();
	}

	/** Auth API */
	signup = (email, password) => {
		return this.auth.createUserWithEmailAndPassword(email, password);
	}

	signin = (email, password) => {
		return this.auth.signInWithEmailAndPassword(email, password);
	}

	signout = () => {
		return this.auth.signOut();
	}

	resetPassword = (email) => {
		return this.auth.sendPasswordResetEmail(email);
	}

	updatePassword = (newPassword) => {
		return this.auth.currentUser.updatePassword(newPassword);
	}
}

export default Firebase;