import React from "react";
import "./footer.scss";
import { Logo, ICfacebook, ICtwitter, ICgithub, ICline } from "../../../assets";

const Icon = ({ img }) => {
	return (
		<div className="icon-wrapper">
			<img src={img} alt="icon" className="icon-medsos" />
		</div>
	);
};

const Footer = () => {
	return (
		<div>
			<div className="footer">
				<div>
					<img src={Logo} alt="logo" className="logo" />
				</div>
				<div className="social-wrapper">
					<Icon img={ICfacebook} />
					<Icon img={ICtwitter} />
					<Icon img={ICgithub} />
					<Icon img={ICline} />
				</div>
			</div>
			<div className="copyright">
				<p>Copyright</p>
			</div>
		</div>
	);
};

export default Footer;
