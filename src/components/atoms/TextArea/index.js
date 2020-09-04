import React from "react";
import "./textArea.scss";

const TextArea = ({ ...rest }) => {
	return (
		<div>
			<textarea name="" className="text-area" {...rest}></textarea>
		</div>
	);
};

export default TextArea;
