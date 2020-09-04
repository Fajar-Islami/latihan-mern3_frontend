import React from "react";
import "./upload.scss";
import { LoginBg } from "../../../assets";

const Upload = () => {
	return (
		<div className="upload">
			{/* Preview File Upload */}
			<img src={LoginBg} alt="preview" className="preview" />
			<input type="file" />
		</div>
	);
};

export default Upload;
