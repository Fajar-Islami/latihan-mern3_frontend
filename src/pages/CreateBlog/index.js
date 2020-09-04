import React from "react";
import { Input, Button, Upload, Textarea, Gap } from "../../components";
import "./createBlog.scss";

const CreateBlog = () => {
	return (
		<div className="blog-post">
			<p className="title">Create New Blog Post</p>
			<Input label="Post Title" />
			<Upload />
			<Textarea />
			<Gap height={20} />
			<div className="button-action">
				<Button title="save" />
			</div>
		</div>
	);
};

export default CreateBlog;
