import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';
import './Home.css';

const images = [
	{
		url: 'https://cdn.shopify.com/s/files/1/0308/1777/9849/products/bayleaf_1152x1152.jpg?v=1602211437',
		title: 'Start Your Order',
		width: '400px',
	},
	{
		url: 'https://cdn.shopify.com/s/files/1/0308/1777/9849/products/865A5656_1152x1152.jpg?v=1602208390',
		title: 'Browse our Selection',
		width: '400px',
	},
	{
		url: 'https://cdn.shopify.com/s/files/1/0308/1777/9849/products/865A5099_8fc53134-1e9f-463e-ad31-492dbf9b1305_1152x1152.jpg?v=1601253491',
		title: 'Get Inspired',
		width: '400px',
	},
];

const useStyles = makeStyles((theme) => ({
	image: {
		position: 'relative',
		height: 500,
		[theme.breakpoints.down('xs')]: {
			width: '100% !important', // Overrides inline-style
			height: 100,
		},
		'&:hover, &$focusVisible': {
			zIndex: 1,
			'& $imageBackdrop': {
				opacity: 0.15,
			},
			'& $imageMarked': {
				opacity: 0,
			},
			'& $imageTitle': {
				border: '4px solid currentColor',
			},
		},
	},
	focusVisible: {},
	imageButton: {
		position: 'absolute',
		left: 0,
		right: 0,
		top: 0,
		bottom: 0,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		color: theme.palette.common.white,
	},
	imageSrc: {
		position: 'absolute',
		left: 0,
		right: 0,
		top: 0,
		bottom: 0,
		backgroundSize: 'cover',
		backgroundPosition: 'center 40%',
	},
	imageBackdrop: {
		position: 'absolute',
		left: 0,
		right: 0,
		top: 0,
		bottom: 0,
		backgroundColor: theme.palette.common.black,
		opacity: 0.4,
		transition: theme.transitions.create('opacity'),
	},
	imageTitle: {
		position: 'relative',
		padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${
			theme.spacing(1) + 6
		}px`,
	},
	imageMarked: {
		height: 3,
		width: 18,
		backgroundColor: theme.palette.common.white,
		position: 'absolute',
		bottom: -2,
		left: 'calc(50% - 9px)',
		transition: theme.transitions.create('opacity'),
	},
}));

export default function Home() {
	const classes = useStyles();
	const history = useHistory();

  return (
    <div className="homepage-wrapper">
      <div className="homepage-images">
      {images.map((image) => (
        <ButtonBase
          focusRipple
          key={image.title}
          className={classes.image}
          focusVisibleClassName={classes.focusVisible}
          style={{
            width: image.width,
          }}
        >
          <span
            className={classes.imageSrc}
            style={{
              backgroundImage: `url(${image.url})`,
            }}
          />
          <span className={classes.imageBackdrop} />
          <span className={classes.imageButton}>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              className={classes.imageTitle}
            >
              {image.title}
              <span className={classes.imageMarked} />
            </Typography>
          </span>
        </ButtonBase>
      ))}
      </div>
      <div className="homepage-paragraph">
        <h4>Here's how it works...</h4>
        <p id="subheading">Welcome to Charkoots!</p>
        <p>
          It's your perfect romantic weekend getaway, and you really want to
          make it special this time. Candles, check. Luther Vandross, check.
          You nailed it all but there's one problem; what about food and
          wine? Let us take care of that for you.
        </p>
        <p>
          Charkoots is a place where you can create and customize a
          delicious charcuterie board with our finest selection of cured
          meats, artisanal cheeses, crackers and more to keep your cravings
          satisfied. Not only that, we'll take a deeper dive into what you
          have created, and pair you with the perfect wine to complement the
          experience. Too good to be true? I know, and you're welcome!
        </p>
        <p>
          Click on the button below to start building your very own Charkoot
          board!
        </p>
      </div>
      <Button onClick={() => history.push('/orders')}>
        START YOUR ORDER
      </Button>
    </div>
  )
}
