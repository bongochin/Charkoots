import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import { useHistory } from 'react-router-dom';
import './Orders.css';
import BoardCard from '../Card/BoardCard'

const images = [
	{
		url: 'https://cdn.shopify.com/s/files/1/0308/1777/9849/products/op_1152x1152.jpg?v=1602209998',
		title: 'Build Your Own Charkoot Board',
		width: '100%',
		direct: '/orders/new'
	}
]

const curated = [
	{
		name: 'Rat Pack',
		url: 'https://cdn.shopify.com/s/files/1/0308/1777/9849/products/WebsiteM_C8.262_1080x1080.jpg?v=1602388225',
		description: "It's what this generation calls it a GOAT. Best consumed with your grandapa to discuss how 'grand' things were back then.",
		ingredients: "Prosciutto di San Daniele, Jamon Iberico, Capocollo, Triple Creme Brie, Manchego, Gouda, Croccatini, Champagne Grapes, Marcona Almonds, Truffle Olive Oil"
	},
	{
		name: 'Mama Maglione',
		url: 'https://cdn.shopify.com/s/files/1/0308/1777/9849/products/IMG_2095_1080x1080.jpg?v=1602445399',
		description: "We don't know who she is, but wouldn't someone named like her know some good eats?",
		ingredients: "Bresaola, Speck, Prosciutto di San Daniele, Robioa, Blueberry Goat Cheese, Gorgonzola Dolce, Sourdough Flatbreads, Mission Figs, Hazelnuts, Orange Marmalade"
	},
	{
		name: 'I Need a Doctor',
		url: 'https://cdn.shopify.com/s/files/1/0308/1777/9849/products/Meat-Only-Board_1050x1050.jpg?v=1599857692',
		description: "Please consult with your primary care if your heart can handle this. Just kidding, it (probably) won't kill ya.",
		ingredients: "Jamon Iberico, Soppressata, Chorizo, Medium Vermont Cheddar, Parmigiano Reggiano, Gouda, Ritz, Artichoke Hearts, Chocolate Peanuts, Caramelized Onion Jam"
	},
	{
		name: 'The Number 4',
		url: 'https://cdn.shopify.com/s/files/1/0308/1777/9849/products/IMG_2093_1080x1080.jpg?v=1602444573',
		description: "Time-tested, fail-proof combination that always seems to be the best seller at every deli.",
		ingredients: "Mortadella, Soppressata, Capocollo, Manchego, Gouda, Triple creme Brie, Toasted Baguettes, Cornichons, Yogurt Almonds, Sun-dried Tomato Puree"
	},
	{
		name: 'The Magnum',
		url: 'https://cdn.shopify.com/s/files/1/0308/1777/9849/products/cheeseonly_1080x1080.jpg?v=1602386457',
		description: "This board is so good that you might as well go for a magnum bottle, just for yourself. Disclaimer: We only pair you with one regular-size bottles",
		ingredients: "Speck, Chorizo, Jamon Iberico, Parmigiano Reggiano, Robiola, Triple Creme Brie, Rosemary Raisin Pecan Crisps, Maraschino Cherries, Hazelnuts, Dijon Mustard"
	},
	{
		name: 'I Warned Ya!',
		url: 'https://cdn.shopify.com/s/files/1/0308/1777/9849/products/IMG_2092_1080x1080.jpg?v=1602443864',
		description: "It's packed with flavor, heat and spices that I doubt you'd able to handle it. Wait, are you sure? Well, don't tell me I didn't warned ya!",
		ingredients: "Chorizo, Capocollo, Soppressata, Robiola, Gouda, Manchego, Sourdough Flatbread, Mixed Olives, Pistachios, Spicy Honey"
	},
]

const useStyles = makeStyles((theme) => ({
	image: {
		position: 'relative',
		height: 150,
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

function Orders() {
	const classes = useStyles();
	const history = useHistory();

	return (
		<div className="orders-wrapper">
			<h4>Let's get you started!</h4>
			<div className="orders_images">
      {images.map((image) => (
        <ButtonBase
          focusRipple
          key={image.title}
          className={classes.image}
          focusVisibleClassName={classes.focusVisible}
          style={{
            width: image.width,
          }}
					onClick={() => history.push(image.direct)}
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
			<br />
			<h4>Select or Customize from our curated specialties</h4>
			<div id="orders_cards">
				{curated.map(board => {
					return <BoardCard board={board}/>
				})}
			</div>
		</div>
	);
}

export default Orders;
