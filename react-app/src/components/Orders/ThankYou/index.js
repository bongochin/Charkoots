import React from 'react';
import { SocialIcon } from 'react-social-icons';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom'
import './ThankYou.css';

function ThankYou () {
  const history = useHistory();

  return (
    <div className="thank-you-wrapper">
      <h2>Thank you for your order!</h2>
      <p>This concludes our demo.</p>
      <p>Although your mouth-watering Charkoot board and Perfect Wine won't get delivered, I hope you had fun as much as I had making this app.</p>
      <p>Tell me about your experience! And, please, feel free to brag about your own Charkoot creations!</p>
      <br />
      <div className="thank-you_icons">
        <SocialIcon url="https://github.com/bongochin" />
				<SocialIcon url="mailto:danielmchin@outlook.com" />
				<SocialIcon url="https://www.linkedin.com/in/danielmchin/" />
      </div>
      <Button id="button" onClick={() => history.push('/')}>RETURN TO MAIN PAGE</Button>
    </div>
  )
}

export default ThankYou;
