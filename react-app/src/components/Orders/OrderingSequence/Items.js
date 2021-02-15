import React, { Component } from 'react';
import { MuiThemeProvider } from '@material-ui/core/'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Button from '@material-ui/core/Button';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import List from '@material-ui/core/List/';
import ListItem from '@material-ui/core/ListItem';
import './Items.css'

export default class Items extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  }

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  }

  meats = e => {
    e.preventDefault();
    this.props.stepTwo();
  }

  cheeses = e => {
    e.preventDefault();
    this.props.stepThree();
  }

  items = e => {
    e.preventDefault();
    this.props.stepFour()
  }

  render () {
    const { values, handleChange } = this.props;
    const { values: {
      boardName, meat1, meat2, meat3, cheese1, cheese2, cheese3, cracker, fruit, nut, spread
    } } = this.props;

    return (
      <div className="items-wrapper">
        <MuiThemeProvider>
          <React.Fragment>
            <div className="items-contents">
              <h4>"{ boardName }", With...</h4>
              <div className="perfect-wine_boards">
                <List className="perfect-wine_board-rendering" onClick={this.meats}>
                    <ListItem>{ meat1 }</ListItem>
                    <ListItem>{ meat2 }</ListItem>
                    <ListItem>{ meat3 }</ListItem>
                </List>
                <List className="perfect-wine_board-rendering" onClick={this.cheeses}>
                    <ListItem>{ cheese1 }</ListItem>
                    <ListItem>{ cheese2 }</ListItem>
                    <ListItem>{ cheese3 }</ListItem>
                </List>
                <List className="perfect-wine_board-rendering" onClick={this.items}>
                  <ListItem>{ cracker }</ListItem>
                  <ListItem>{ fruit }</ListItem>
                  <ListItem>{ nut }</ListItem>
                  <ListItem>{ spread }</ListItem>
                </List>
              </div>
              <div className="order-navigation">
                <Button id="buttons" onClick={this.back}>
                <ArrowLeftIcon /> PREVIOUS
                </Button>
                <Button id="buttons" onClick={this.continue}>
                  REVIEW <ArrowRightIcon />
                </Button>
              </div>
              <div className="items-radio">
                <FormControl component="fieldset">
                  <FormLabel id="radio-column-header" component="legend">Crackers</FormLabel>
                  <RadioGroup id="radio-column" aria-label="crackers" name="cracker" value={values.cracker} onChange={handleChange('cracker')}>
                    <FormControlLabel value="Toasted Baguettes" control={<Radio />} label="Toasted Baguettes" />
                    <FormControlLabel value="Multi-Seed" control={<Radio />} label="Multi-Seed" />
                    <FormControlLabel value="Whole Wheat" control={<Radio />} label="Whole Wheat" />
                    <FormControlLabel value="Sourdough Flatbreads" control={<Radio />} label="Sourdough Flatbreads" />
                    <FormControlLabel value="Croccantinis" control={<Radio />} label="Croccantinis" />
                    <FormControlLabel value="Gluten-Free" control={<Radio />} label="Gluten-Free" />
                    <FormControlLabel value="Raisin Pecan Crisps" control={<Radio />} label="Raisin Pecan Crisps" />
                    <FormControlLabel value="Ritz" control={<Radio />} label="Ritz" />
                  </RadioGroup>
                </FormControl>
                <br />
                <FormControl component="fieldset">
                  <FormLabel id="radio-column-header" component="legend">Fruits</FormLabel>
                  <RadioGroup id="radio-column" aria-label="fruits" name="fruit" value={values.fruit} onChange={handleChange('fruit')}>
                    <FormControlLabel value="Mission Figs" control={<Radio />} label="Mission Figs" />
                    <FormControlLabel value="Champagne Grapes" control={<Radio />} label="Champagne Grapes" />
                    <FormControlLabel value="Wild Berries" control={<Radio />} label="Wild Berries" />
                    <FormControlLabel value="Luxardo Cherries" control={<Radio />} label="Luxardo Cherries" />
                    <FormControlLabel value="Dried Apricots" control={<Radio />} label="Dried Apricots" />
                    <FormControlLabel value="Mixed Olives" control={<Radio />} label="Mixed Olives" />
                    <FormControlLabel value="Cornichons" control={<Radio />} label="Cornichons" />
                    <FormControlLabel value="Artichoke Hearts" control={<Radio />} label="Artichoke Hearts" />
                  </RadioGroup>
                </FormControl>
                <br />
                <FormControl component="fieldset">
                  <FormLabel id="radio-column-header" component="legend">Nuts</FormLabel>
                  <RadioGroup id="radio-column" aria-label="nuts" name="nut" value={values.nut} onChange={handleChange('nut')}>
                    <FormControlLabel value="Marcona Almonds" control={<Radio />} label="Marcona Almonds" />
                    <FormControlLabel value="Praline Pecans" control={<Radio />} label="Praline Pecans" />
                    <FormControlLabel value="Pistachios" control={<Radio />} label="Pistachios" />
                    <FormControlLabel value="Hazelnuts" control={<Radio />} label="Hazelnuts" />
                    <FormControlLabel value="Macadamia Nuts" control={<Radio />} label="Macadamia Nuts" />
                    <FormControlLabel value="Cashews" control={<Radio />} label="Cashews" />
                    <FormControlLabel value="Chocolate Peanuts" control={<Radio />} label="Chocolate Peanuts" />
                    <FormControlLabel value="Yogurt Almonds" control={<Radio />} label="Yogurt Almonds" />
                  </RadioGroup>
                </FormControl>
                <br />
                <FormControl component="fieldset">
                  <FormLabel id="radio-column-header" component="legend">Spreads</FormLabel>
                  <RadioGroup id="radio-column" aria-label="spreads" name="spread" value={values.spread} onChange={handleChange('spread')}>
                    <FormControlLabel value="Spicy Honey" control={<Radio />} label="Spicy Honey" />
                    <FormControlLabel value="Truffle Olive Oil" control={<Radio />} label="Truffle Olive Oil" />
                    <FormControlLabel value="Orange Marmalade" control={<Radio />} label="Orange Marmalade" />
                    <FormControlLabel value="Fig Jam" control={<Radio />} label="Fig Jam" />
                    <FormControlLabel value="Sun-dried Tomato Puree" control={<Radio />} label="Sun-dried Tomato Puree" />
                    <FormControlLabel value="Dijon Mustard" control={<Radio />} label="Dijon Mustard" />
                    <FormControlLabel value="Caramelized Onion Jam" control={<Radio />} label="Caramelized Onion Jam" />
                    <FormControlLabel value="Guacamole" control={<Radio />} label="Guacamole" />
                  </RadioGroup>
                </FormControl>
              </div>
            </div>
          </React.Fragment>
        </MuiThemeProvider>
      </div>
    )
  }
}
