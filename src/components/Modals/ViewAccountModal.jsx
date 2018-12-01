// react:
import React, { PureComponent } from "react";

// material ui:


// import "./LogInArea.css";

import Button from "@material-ui/core/Button";


export default class ViewAccountModal extends PureComponent {

	constructor(props) {
		super(props);
	}

	render() {

		return (
			<Modal handleClose={this.props.handleClose}>
				<Paper elevation={4} className="paper">

					<div className="registerContainer">
						<div className="createAnAccount">
							<h2><ListItemText>Create an Account</ListItemText></h2>
							<TextField id="registerUsername" className="" label="Username" type="name" margin="normal" variant="outlined"/>
							<TextField id="registerEmail" className="" label="Email" type="email" autoComplete="email" margin="normal" variant="outlined"/>
							<TextField id="registerPassword" className="" label="Password" type="password" autoComplete="current-password" margin="normal" variant="outlined"/>
							<TextField id="registerPassword2" className="" label="Password" type="password" autoComplete="current-password" margin="normal" variant="outlined"/>
							<MyCheckbox text={"I am over 13 years old"} handleChange={() => {}} checked={false}/>
							<Button id="registerSubmit" className="" variant="contained" color="primary" onClick={() => {alert("Coming soon™")}}>Create Account</Button>
						</div>

						<div className="connectAnAccount">
							<h2><ListItemText>Connect an Account</ListItemText></h2>
							<ConnectAccounts/>
						</div>
					</div>
				</Paper>
			</Modal>
		);
	}

}