import React, { Component } from 'react';
import { MuiThemeProvider } from '@material-ui/core/'
import { List } from '@material-ui/core/List/'
import { ListItem } from '@material-ui/core/ListItem'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import './ReviewOrder.css'

export default class ReviewOrder extends Component {
  continue = e => {
    e.preventDefault();
    // Process form to API...
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
          <h4>Let's give it a name.</h4>
          <TextField
            hintText="Enter your Board's Name"
            placeholder="Board Name"
            onChange={handleChange('boardName')}
            defaultValue={values.boardName}
          />
          <br />
          <TextField
            hintText="Enter your Board's Description"
            placeholder="Board Description"
            onChange={handleChange('boardDescription')}
            defaultValue={values.boardDescription}
          />
          <br />
          <Button onClick={this.continue}>
            NEXT
          </Button>
        </React.Fragment>
      </MuiThemeProvider>
    )
  }
}

const styles = {
  button: {
    margin: 15
  }
}
