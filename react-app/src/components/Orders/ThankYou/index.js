import React from 'react';
import { SocialIcon } from 'react-social-icons';
import './ThankYou.css';

function ThankYou () {
  return (
    <div className="thank-you-wrapper">
      <h2>Thank you for your order!</h2>
      <p>This concludes our demo.</p>
      <p>Although your mouth-watering Charkoot board and Perfect Wine won't get delivered, I hope you had fun as much as I had making this app.</p>
      <p>Tell me about your experience! And, please, feel free to brag about your own Charkoot creations!</p>
      <br />
      <div className="thank-you_icons">
        <SocialIcon url="https://github.com/bongochin" />
				<SocialIcon url="https://www.linkedin.com/in/danielmchin/" />
				<SocialIcon url="mailto:danielmchin@outlook.com" />
      </div>
    </div>
  )
}

export default ThankYou;
