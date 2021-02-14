import React, { Component } from 'react';
import { MuiThemeProvider } from '@material-ui/core/'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Button from '@material-ui/core/Button'
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

  render () {
    const { values, handleChange } = this.props;
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <h4>With...</h4>
          <div className="order-navigation">
            <Button onClick={this.back}>
              PREVIOUS
            </Button>
            <Button onClick={this.continue}>
              REVIEW
            </Button>
          </div>
          <div className="items-wrapper">
            <FormControl component="fieldset">
              <FormLabel component="legend">Crackers</FormLabel>
              <RadioGroup aria-label="crackers" name="cracker" value={values.cracker} onChange={handleChange('cracker')}>
                <FormControlLabel value="17" control={<Radio />} label="Toasted Baguettes" />
                <FormControlLabel value="18" control={<Radio />} label="Multi-Seed" />
                <FormControlLabel value="19" control={<Radio />} label="Whole Wheat" />
                <FormControlLabel value="20" control={<Radio />} label="Sourdough Flatbreads" />
                <FormControlLabel value="21" control={<Radio />} label="Croccantinis" />
                <FormControlLabel value="22" control={<Radio />} label="Gluten-Free" />
                <FormControlLabel value="23" control={<Radio />} label="Raisin Pecan Crisps" />
                <FormControlLabel value="24" control={<Radio />} label="Ritz" />
              </RadioGroup>
            </FormControl>
            <br />
            <FormControl component="fieldset">
              <FormLabel component="legend">Fruits</FormLabel>
              <RadioGroup aria-label="fruits" name="fruit" value={values.fruit} onChange={handleChange('fruit')}>
                <FormControlLabel value="25" control={<Radio />} label="Mission Figs" />
                <FormControlLabel value="26" control={<Radio />} label="Champagne Grapes" />
                <FormControlLabel value="27" control={<Radio />} label="Wild Berries" />
                <FormControlLabel value="28" control={<Radio />} label="Luxardo Cherries" />
                <FormControlLabel value="29" control={<Radio />} label="Dried Apricots" />
                <FormControlLabel value="30" control={<Radio />} label="Mixed Olives" />
                <FormControlLabel value="31" control={<Radio />} label="Cornichons" />
                <FormControlLabel value="32" control={<Radio />} label="Artichoke Hearts" />
              </RadioGroup>
            </FormControl>
            <br />
            <FormControl component="fieldset">
              <FormLabel component="legend">Nuts</FormLabel>
              <RadioGroup aria-label="nuts" name="nut" value={values.nut} onChange={handleChange('nut')}>
                <FormControlLabel value="33" control={<Radio />} label="Marcona Almonds" />
                <FormControlLabel value="34" control={<Radio />} label="Praline Pecans" />
                <FormControlLabel value="35" control={<Radio />} label="Pistachios" />
                <FormControlLabel value="36" control={<Radio />} label="Hazelnuts" />
                <FormControlLabel value="37" control={<Radio />} label="Macadamia Nuts" />
                <FormControlLabel value="38" control={<Radio />} label="Cashews" />
                <FormControlLabel value="39" control={<Radio />} label="Chocolate Peanuts" />
                <FormControlLabel value="40" control={<Radio />} label="Yogurt Almonds" />
              </RadioGroup>
            </FormControl>
            <br />
            <FormControl component="fieldset">
              <FormLabel component="legend">Spreads</FormLabel>
              <RadioGroup aria-label="spreads" name="spread" value={values.spread} onChange={handleChange('spread')}>
                <FormControlLabel value="41" control={<Radio />} label="Spicy Honey" />
                <FormControlLabel value="42" control={<Radio />} label="Truffle Olive Oil" />
                <FormControlLabel value="43" control={<Radio />} label="Orange Marmalade" />
                <FormControlLabel value="44" control={<Radio />} label="Fig Jam" />
                <FormControlLabel value="45" control={<Radio />} label="Sun-dried Tomato Puree" />
                <FormControlLabel value="46" control={<Radio />} label="Dijon Mustard" />
                <FormControlLabel value="47" control={<Radio />} label="Caramelized Onion Jam" />
                <FormControlLabel value="48" control={<Radio />} label="Guacamole" />
              </RadioGroup>
            </FormControl>
          </div>
        </React.Fragment>
      </MuiThemeProvider>
    )
  }
}
