import React from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import MailIcon from '@material-ui/icons/Mail';
import './Footer.css'

function Footer() {
	return (
		<footer className="footer">
			<div className="footer_name">Developed by Daniel Chin</div>
			<div className="footer_icons">
				{/* <SocialIcon url="https://github.com/bongochin" />
				<SocialIcon url="https://www.linkedin.com/in/danielmchin/" />
				<SocialIcon url="mailto:danielmchin@outlook.com" />
				<SocialIcon url="https://angel.co/u/bongochin" /> */}
				<a href="https://github.com/bongochin">
					<GitHubIcon />
				</a>
				<a href="mailto:danielmchin@outlook.com">
					<MailIcon />
				</a>
				<a href="https://www.linkedin.com/in/danielmchin/">
					<LinkedInIcon />
				</a>
			</div>
		</footer>
	);
}

export default Footer;
