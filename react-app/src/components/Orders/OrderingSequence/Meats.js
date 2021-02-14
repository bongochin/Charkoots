import React, { Component } from 'react';
import { MuiThemeProvider } from '@material-ui/core/'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Button from '@material-ui/core/Button'
import './Items.css'

export default class Meats extends Component {
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
          <h4>Starring...</h4>
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
              <FormLabel component="legend">First Meat</FormLabel>
              <RadioGroup aria-label="meats" name="meat1" value={values.meat1} onChange={handleChange('meat1')}>
                <FormControlLabel value="1" control={<Radio />} label="Prosciutto di San Daniele" />
                <FormControlLabel value="2" control={<Radio />} label="Mortadella" />
                <FormControlLabel value="3" control={<Radio />} label="Jamon Iberico" />
                <FormControlLabel value="4" control={<Radio />} label="Soppressata" />
                <FormControlLabel value="5" control={<Radio />} label="Bresaola" />
                <FormControlLabel value="6" control={<Radio />} label="Capocollo" />
                <FormControlLabel value="7" control={<Radio />} label="Spanish Chorizo" />
                <FormControlLabel value="8" control={<Radio />} label="Speck" />
              </RadioGroup>
            </FormControl>
            <br />
            <FormControl component="fieldset">
              <FormLabel component="legend">Second Meat</FormLabel>
              <RadioGroup aria-label="meats" name="meat2" value={values.meat2} onChange={handleChange('meat2')}>
                <FormControlLabel value="1" control={<Radio />} label="Prosciutto di San Daniele" />
                <FormControlLabel value="2" control={<Radio />} label="Mortadella" />
                <FormControlLabel value="3" control={<Radio />} label="Jamon Iberico" />
                <FormControlLabel value="4" control={<Radio />} label="Soppressata" />
                <FormControlLabel value="5" control={<Radio />} label="Bresaola" />
                <FormControlLabel value="6" control={<Radio />} label="Capocollo" />
                <FormControlLabel value="7" control={<Radio />} label="Spanish Chorizo" />
                <FormControlLabel value="8" control={<Radio />} label="Speck" />
              </RadioGroup>
            </FormControl>
            <br />
            <FormControl component="fieldset">
              <FormLabel component="legend">Third Meat</FormLabel>
              <RadioGroup aria-label="meats" name="meat3" value={values.meat3} onChange={handleChange('meat3')}>
                <FormControlLabel value="1" control={<Radio />} label="Prosciutto di San Daniele" />
                <FormControlLabel value="2" control={<Radio />} label="Mortadella" />
                <FormControlLabel value="3" control={<Radio />} label="Jamon Iberico" />
                <FormControlLabel value="4" control={<Radio />} label="Soppressata" />
                <FormControlLabel value="5" control={<Radio />} label="Bresaola" />
                <FormControlLabel value="6" control={<Radio />} label="Capocollo" />
                <FormControlLabel value="7" control={<Radio />} label="Spanish Chorizo" />
                <FormControlLabel value="8" control={<Radio />} label="Speck" />
              </RadioGroup>
            </FormControl>
          </div>
        </React.Fragment>
      </MuiThemeProvider>
    )
  }
}
