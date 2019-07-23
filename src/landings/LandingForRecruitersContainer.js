import React, { Component, Fragment } from 'react';
import LandingForRecruiters from "./LandingForRecruiters.js";

 class LandingForRecruitersContainer extends Component {

 	constructor(props) {
 		super(props)

 		this.state = {

 		}
 	}

	render() {
		return (
			<Fragment> 
				<LandingForRecruiters
					phone="+56946599356"
					address="Santiago - Chile"
					email="danielpaezsw66@gmail.com"
				/>
			</Fragment>
		);
	}
}

export default LandingForRecruitersContainer;
