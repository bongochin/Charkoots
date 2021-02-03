import React from 'react';
import { SocialIcon } from 'react-social-icons';
import './Footer.css'

function Footer() {
	return (
		<div className="footer">
			<div className="footer_name">Developed by Dan Chin</div>
			<div className="footer_icons">
				<SocialIcon url="https://github.com/bongochin" />
				<SocialIcon url="https://www.linkedin.com/in/danielmchin/" />
				<SocialIcon url="mailto:danielmchin@outlook.com" />
			</div>
		</div>
	);
}

export default Footer;
