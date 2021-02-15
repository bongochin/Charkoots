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

export default class Cheeses extends Component {
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
              <h4>"{ boardName }", Featuring...</h4>
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
                <ArrowLeftIcon />PREVIOUS
                </Button>
                <Button id="buttons" onClick={this.continue}>
                  NEXT <ArrowRightIcon />
                </Button>
              </div>
              <div className="items-radio">
                <FormControl component="fieldset">
                  <FormLabel id="radio-column-header" component="legend">First Cheese</FormLabel>
                  <RadioGroup id="radio-column" aria-label="cheeses" name="cheese1" value={values.cheese1} onChange={handleChange('cheese1')}>
                    <FormControlLabel value="Parmigiano Reggiano" control={<Radio />} label="Parmigiano Reggiano" />
                    <FormControlLabel value="Manchego" control={<Radio />} label="Manchego" />
                    <FormControlLabel value="Robiola" control={<Radio />} label="Robiola" />
                    <FormControlLabel value="Gouda" control={<Radio />} label="Gouda" />
                    <FormControlLabel value="Vermont Cheddar" control={<Radio />} label="Vermont Cheddar" />
                    <FormControlLabel value="Blueberry Goat Cheese" control={<Radio />} label="Blueberry Goat Cheese" />
                    <FormControlLabel value="Triple Creme Brie" control={<Radio />} label="Triple Creme Brie" />
                    <FormControlLabel value="Gorgonzola Dolce" control={<Radio />} label="Gorgonzola Dolce" />
                  </RadioGroup>
                </FormControl>
                <br />
                <FormControl component="fieldset">
                  <FormLabel id="radio-column-header" component="legend">Second Cheese</FormLabel>
                  <RadioGroup id="radio-column" aria-label="cheeses" name="cheese2" value={values.cheese2} onChange={handleChange('cheese2')}>
                    <FormControlLabel value="Parmigiano Reggiano" control={<Radio />} label="Parmigiano Reggiano" />
                    <FormControlLabel value="Manchego" control={<Radio />} label="Manchego" />
                    <FormControlLabel value="Robiola" control={<Radio />} label="Robiola" />
                    <FormControlLabel value="Gouda" control={<Radio />} label="Gouda" />
                    <FormControlLabel value="Vermont Cheddar" control={<Radio />} label="Vermont Cheddar" />
                    <FormControlLabel value="Blueberry Goat Cheese" control={<Radio />} label="Blueberry Goat Cheese" />
                    <FormControlLabel value="Triple Creme Brie" control={<Radio />} label="Triple Creme Brie" />
                    <FormControlLabel value="Gorgonzola Dolce" control={<Radio />} label="Gorgonzola Dolce" />
                  </RadioGroup>
                </FormControl>
                <br />
                <FormControl component="fieldset">
                  <FormLabel id="radio-column-header" component="legend">Third Cheese</FormLabel>
                  <RadioGroup id="radio-column" aria-label="cheeses" name="cheese3" value={values.cheese3} onChange={handleChange('cheese3')}>
                    <FormControlLabel value="Parmigiano Reggiano" control={<Radio />} label="Parmigiano Reggiano" />
                    <FormControlLabel value="Manchego" control={<Radio />} label="Manchego" />
                    <FormControlLabel value="Robiola" control={<Radio />} label="Robiola" />
                    <FormControlLabel value="Gouda" control={<Radio />} label="Gouda" />
                    <FormControlLabel value="Vermont Cheddar" control={<Radio />} label="Vermont Cheddar" />
                    <FormControlLabel value="Blueberry Goat Cheese" control={<Radio />} label="Blueberry Goat Cheese" />
                    <FormControlLabel value="Triple Creme Brie" control={<Radio />} label="Triple Creme Brie" />
                    <FormControlLabel value="Gorgonzola Dolce" control={<Radio />} label="Gorgonzola Dolce" />
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
