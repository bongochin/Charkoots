import React, { Component } from 'react';
import { MuiThemeProvider } from '@material-ui/core/'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Button from '@material-ui/core/Button'
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import List from '@material-ui/core/List/';
import ListItem from '@material-ui/core/ListItem';
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
    const { values: {
      boardName, meat1, meat2, meat3, cheese1, cheese2, cheese3, cracker, fruit, nut, spread
    } } = this.props;

    return (
      <div className="items-wrapper">
        <MuiThemeProvider>
          <React.Fragment>
            <div className="items-contents">
              <h4>"{ boardName }", Now Starring...</h4>
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
                  NEXT <ArrowRightIcon />
                </Button>
              </div>
              <div className="items-radio">
                <FormControl component="fieldset">
                  <FormLabel id="radio-column-header" component="legend">First Meat</FormLabel>
                  <RadioGroup id="radio-column" aria-label="meats" name="meat1" value={values.meat1} onChange={handleChange('meat1')}>
                    <FormControlLabel value="Prosciutto di San Daniele" control={<Radio />} label="Prosciutto di San Daniele" />
                    <FormControlLabel value="Mortadella" control={<Radio />} label="Mortadella" />
                    <FormControlLabel value="Jamon Iberico" control={<Radio />} label="Jamon Iberico" />
                    <FormControlLabel value="Soppressata" control={<Radio />} label="Soppressata" />
                    <FormControlLabel value="Bresaola" control={<Radio />} label="Bresaola" />
                    <FormControlLabel value="Capocollo" control={<Radio />} label="Capocollo" />
                    <FormControlLabel value="Spanish Chorizo" control={<Radio />} label="Spanish Chorizo" />
                    <FormControlLabel value="Speck" control={<Radio />} label="Speck" />
                  </RadioGroup>
                </FormControl>
                <br />
                <FormControl component="fieldset">
                  <FormLabel id="radio-column-header" component="legend">Second Meat</FormLabel>
                  <RadioGroup id="radio-column" aria-label="meats" name="meat2" value={values.meat2} onChange={handleChange('meat2')}>
                    <FormControlLabel value="Prosciutto di San Daniele" control={<Radio />} label="Prosciutto di San Daniele" />
                    <FormControlLabel value="Mortadella" control={<Radio />} label="Mortadella" />
                    <FormControlLabel value="Jamon Iberico" control={<Radio />} label="Jamon Iberico" />
                    <FormControlLabel value="Soppressata" control={<Radio />} label="Soppressata" />
                    <FormControlLabel value="Bresaola" control={<Radio />} label="Bresaola" />
                    <FormControlLabel value="Capocollo" control={<Radio />} label="Capocollo" />
                    <FormControlLabel value="Spanish Chorizo" control={<Radio />} label="Spanish Chorizo" />
                    <FormControlLabel value="Speck" control={<Radio />} label="Speck" />
                  </RadioGroup>
                </FormControl>
                <br />
                <FormControl component="fieldset">
                  <FormLabel id="radio-column-header" component="legend">Third Meat</FormLabel>
                  <RadioGroup id="radio-column" aria-label="meats" name="meat3" value={values.meat3} onChange={handleChange('meat3')}>
                    <FormControlLabel value="Prosciutto di San Daniele" control={<Radio />} label="Prosciutto di San Daniele" />
                    <FormControlLabel value="Mortadella" control={<Radio />} label="Mortadella" />
                    <FormControlLabel value="Jamon Iberico" control={<Radio />} label="Jamon Iberico" />
                    <FormControlLabel value="Soppressata" control={<Radio />} label="Soppressata" />
                    <FormControlLabel value="Bresaola" control={<Radio />} label="Bresaola" />
                    <FormControlLabel value="Capocollo" control={<Radio />} label="Capocollo" />
                    <FormControlLabel value="Spanish Chorizo" control={<Radio />} label="Spanish Chorizo" />
                    <FormControlLabel value="Speck" control={<Radio />} label="Speck" />
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
