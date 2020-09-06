import React from "react";
import { Input, Button, Upload, Textarea, Gap, Link } from "../../components";
import "./createBlog.scss";
import { useHistory } from "react-router-dom";

const CreateBlog = () => {
	const history = useHistory();
	return (
		<div className="blog-post">
			<Link title="kembali" onClick={() => history.push("/")} />
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
