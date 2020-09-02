import React from "react";
import { RegisterBg } from "../../../assets";
import "./blogItem.scss";

const BlogItem = () => {
	return (
		<div className="blog-item">
			<img src={RegisterBg} alt="post" className="image-thumb" />
			<div className="content-detail">
				<p className="title">Title Blog</p>
				<p className="author">Author - Date Post</p>
				<p className="body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi tenetur quae ipsum perferendis totam repudiandae, explicabo eligendi laborum quidem eaque officia beatae quibusdam animi asperiores? At debitis beatae repellat et?</p>
			</div>
		</div>
	);
};

export default BlogItem;
