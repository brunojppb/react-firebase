import React from 'react';

import FirebaseContext from './FirebaseContext';

const withFirebase = (CustomComponent) => {

	return class extends React.Component {
		render() {
			return (
				<FirebaseContext.Consumer>
					{ firebase => <CustomComponent firebase={firebase} {...this.props} /> }
				</FirebaseContext.Consumer>	
			);
		}
	}

};

export default withFirebase;