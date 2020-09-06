import React from "react";
import { RegisterBg } from "../../../assets";
import "./blogItem.scss";
import { Button, Gap } from "../../atoms";
import { useHistory } from "react-router-dom";

const BlogItem = () => {
	const history = useHistory();
	return (
		<div className="blog-item">
			<img src={RegisterBg} alt="post" className="image-thumb" />
			<div className="content-detail">
				<p className="title">Title Blog</p>
				<p className="author">Author - Date Post</p>
				<p className="body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi tenetur quae ipsum perferendis totam repudiandae, explicabo eligendi laborum quidem eaque officia beatae quibusdam animi asperiores? At debitis beatae repellat et?</p>
				<Gap height={20} />
				<Button title="View Detail" onClick={() => history.push("/detail-blog")} />
			</div>
		</div>
	);
};

export default BlogItem;
