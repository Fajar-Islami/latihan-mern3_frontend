import React from "react";
import { RegisterBg } from "../../assets";
import "./detailBlog.scss";

const DetailBlog = () => {
	return (
		<div className="detail-blog-wrapper">
			<img src={RegisterBg} alt="thumb" className="img-cover" />
			<p className="blog-title">Title Blog</p>
			<p className="blog-author">Author - Date Post</p>
			<p className="blog-body">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas adipisci tenetur quis praesentium commodi amet tempore hic, quidem, nostrum tempora facere, minus vitae eveniet sequi? Eveniet ad nobis consequatur. Sequi!</p>
		</div>
	);
};

export default DetailBlog;
