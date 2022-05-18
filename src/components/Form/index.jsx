import React from "react";
import StyledForm from "./styles";

function StyledFormComponent() {
	return (
		<StyledForm method="POST">
			<input type="text" placeholder="Full name" />
			<input type="email" placeholder="Email" />
			<input type="password" placeholder="Password" />
			<button>Sign In</button>
		</StyledForm>
	);
}

export default StyledFormComponent;
