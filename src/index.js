import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './components/App';
import Firebase from './components/firebase/Firebase';
import FirebaseContext from './components/firebase/FirebaseContext';

const rootNode = (
	<FirebaseContext.Provider value={ new Firebase() }>
		<App/>
	</FirebaseContext.Provider>
);

ReactDOM.render(rootNode, document.getElementById('root'));
