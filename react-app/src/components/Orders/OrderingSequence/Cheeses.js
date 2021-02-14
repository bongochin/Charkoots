import React, { Component } from 'react';
import { MuiThemeProvider } from '@material-ui/core/'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Button from '@material-ui/core/Button'
import './Items.css'

export default class Cheeses extends Component {
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
          <h4>Featuring...</h4>
          <div className="order-navigation">
            <Button onClick={this.back}>
              PREVIOUS
            </Button>
            <Button onClick={this.continue}>
              NEXT
            </Button>
          </div>
          <div className="items-wrapper">
            <FormControl component="fieldset">
              <FormLabel component="legend">First Cheese</FormLabel>
              <RadioGroup aria-label="cheeses" name="cheese1" value={values.cheese1} onChange={handleChange('cheese1')}>
                <FormControlLabel value="9" control={<Radio />} label="Parmigiano Reggiano" />
                <FormControlLabel value="10" control={<Radio />} label="Manchego" />
                <FormControlLabel value="11" control={<Radio />} label="Robiola" />
                <FormControlLabel value="12" control={<Radio />} label="Gouda" />
                <FormControlLabel value="13" control={<Radio />} label="Vermont Cheddar" />
                <FormControlLabel value="14" control={<Radio />} label="Blueberry Goat Cheese" />
                <FormControlLabel value="15" control={<Radio />} label="Triple Creme Brie" />
                <FormControlLabel value="16" control={<Radio />} label="Gorgonzola Dolce" />
              </RadioGroup>
            </FormControl>
            <br />
            <FormControl component="fieldset">
              <FormLabel component="legend">Second Cheese</FormLabel>
              <RadioGroup aria-label="cheeses" name="cheese2" value={values.cheese2} onChange={handleChange('cheese2')}>
                <FormControlLabel value="9" control={<Radio />} label="Parmigiano Reggiano" />
                <FormControlLabel value="10" control={<Radio />} label="Manchego" />
                <FormControlLabel value="11" control={<Radio />} label="Robiola" />
                <FormControlLabel value="12" control={<Radio />} label="Gouda" />
                <FormControlLabel value="13" control={<Radio />} label="Vermont Cheddar" />
                <FormControlLabel value="14" control={<Radio />} label="Blueberry Goat Cheese" />
                <FormControlLabel value="15" control={<Radio />} label="Triple Creme Brie" />
                <FormControlLabel value="16" control={<Radio />} label="Gorgonzola Dolce" />
              </RadioGroup>
            </FormControl>
            <br />
            <FormControl component="fieldset">
              <FormLabel component="legend">Third Cheese</FormLabel>
              <RadioGroup aria-label="cheeses" name="cheese3" value={values.cheese3} onChange={handleChange('cheese3')}>
                <FormControlLabel value="9" control={<Radio />} label="Parmigiano Reggiano" />
                <FormControlLabel value="10" control={<Radio />} label="Manchego" />
                <FormControlLabel value="11" control={<Radio />} label="Robiola" />
                <FormControlLabel value="12" control={<Radio />} label="Gouda" />
                <FormControlLabel value="13" control={<Radio />} label="Vermont Cheddar" />
                <FormControlLabel value="14" control={<Radio />} label="Blueberry Goat Cheese" />
                <FormControlLabel value="15" control={<Radio />} label="Triple Creme Brie" />
                <FormControlLabel value="16" control={<Radio />} label="Gorgonzola Dolce" />
              </RadioGroup>
            </FormControl>
          </div>
        </React.Fragment>
      </MuiThemeProvider>
    )
  }
}
