import React, { Component } from 'react';
import { MuiThemeProvider } from '@material-ui/core/'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import './ReviewOrder.css'

function createData(name, index) {
  return { name, index };
}

const board_rows = [
  createData('Boldness', 4.0),
  createData('Sharpness', 4.3),
  createData('Saltiness', 3.7),
  createData('Spiciness', 1.3),
  createData('Sweetness', 2.7),
];

const wine_rows = [
  createData('Boldness', 4.7),
  createData('Sharpness', 2.6),
  createData('Saltiness', 3.4),
  createData('Spiciness', 1.6),
  createData('Sweetness', 3.7),
];

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
    const { values: {
      boardName, boardDescription, boardCost, meat1, meat2, meat3, cheese1, cheese2, cheese3, cracker, fruit, nut, spread
    } } = this.props;

    return (
      <div className="review-order-wrapper">
        <MuiThemeProvider>
          <React.Fragment>
            <h3>Review Your Order</h3>
            <div className="review-order-display">
              <h4>Your Charkoot Board</h4>
              <div className="review-order_board">
                <img id="board-img" src="https://cdn.shopify.com/s/files/1/0308/1777/9849/products/WebsiteM_C8.262_1080x1080.jpg?v=1602388225"/>
                <div className="board_details">
                  <h5>{ boardName }</h5>
                  <h6>${ boardCost }</h6>
                  <br />
                  <p>" { boardDescription } "</p>
                  <br />
                  <p>
                    SELECTIONS :
                    { meat1 }, { meat2 }, { meat3 },
                    { cheese1 }, { cheese2 }, { cheese3 },
                    { cracker }, { fruit }, { nut }, { spread }
                  </p>
                </div>
                <div className="display_stats">
                    <TableContainer component={Paper}>
                      <Table aria-label="simple table">
                        <TableHead>
                          <TableRow>
                            <TableCell>Characteristics (avg)</TableCell>
                            <TableCell align="right">Index</TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {board_rows.map((row) => (
                            <TableRow key={row.name}>
                              <TableCell component="th" scope="row">
                                {row.name}
                              </TableCell>
                              <TableCell align="right">{row.index}</TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </TableContainer>
                  </div>
              </div>
              <h4>Your Perfect Wine</h4>
                <div className="review-order_wine">
                  <img id="wine-img" src="https://images.vivino.com/thumbs/QRQm5yweS1Sh3GNd1zriog_pb_x600.png"/>
                  <div className="wine_details">
                    <h5>Château Prieurs de la Commanderie Pomerol 2014</h5>
                    <h6>Red; Berdeaux Blend</h6>
                    <h6>$34.99</h6>
                    <br />
                    <p>" A small-production treasure with a brilliant taste. It's your favorite indie band that you don't want them to get famous. Earthy > Oak > Red Fruit "</p>
                  </div>
                  <div className="display_stats">
                    <TableContainer component={Paper}>
                      <Table aria-label="simple table">
                        <TableHead>
                          <TableRow>
                            <TableCell>Characteristics (avg)</TableCell>
                            <TableCell align="right">Index</TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {wine_rows.map((row) => (
                            <TableRow key={row.name}>
                              <TableCell component="th" scope="row">
                                {row.name}
                              </TableCell>
                              <TableCell align="right">{row.index}</TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </TableContainer>
                  </div>
              </div>
              <h4>Order Summary</h4>
              <div className="review-order_shipping-address">
                <FormControl component="fieldset">
                  <RadioGroup className="shipping-address_forms" aria-label="address" name="address" value={values.address} onChange={handleChange('address')}>
                    <div className="form-wrapper">
                      <div className="shipping-address_form">
                        <FormControlLabel control={<Radio />} label="Use my address"/>
                          <div className="address-column">
                            <TextField
                              placeholder="Street Address"
                              defaultValue="1600 Temple Rd"
                            />
                            <TextField
                              placeholder="Suite/Apt #"
                              defaultValue="Suite 16"
                            />
                            <TextField
                              placeholder="City"
                              defaultValue="Coruscant"
                            />
                            <TextField
                              placeholder="State"
                              defaultValue="NJ"
                            />
                            <TextField
                              placeholder="Zipcode"
                              defaultValue="07913"
                            />
                          </div>
                      </div>
                      <div className="shipping-address_form">
                        <FormControlLabel control={<Radio />} label="Use different address"/>
                          <div className="address-column">
                            <TextField
                              placeholder="Street Address"
                            />
                            <TextField
                              placeholder="Suite/Apt #"
                            />
                            <TextField
                              placeholder="City"
                            />
                            <TextField
                              placeholder="State"
                            />
                            <TextField
                              placeholder="Zipcode"
                            />
                          </div>
                      </div>
                    </div>

                  </RadioGroup>
                </FormControl>
              </div>
            </div>
            <Button id="button" onClick={this.continue}>
              CHECKOUT
            </Button>
          </React.Fragment>
        </MuiThemeProvider>
      </div>
    )
  }
}

const styles = {
  button: {
    margin: 15
  }
}
