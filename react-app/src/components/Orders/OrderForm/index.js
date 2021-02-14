import React, { Component } from 'react'
import OrderingSequence from '../OrderingSequence';

import Meats from '../OrderingSequence/Meats'
import Cheeses from '../OrderingSequence/Cheeses'
import Items from '../OrderingSequence/Items'

import PerfectWine from '../PerfectWine';
import ReviewOrder from '../ReviewOrder';
import ThankYou from '../ThankYou';

export default class OrderForm extends Component {
  state = {
    step: 1,
    boardName: '',
    boardDescription: '',
    boardCost: 39.99,
    meat1: '',
    meat2: '',
    meat3: '',
    cheese1: '',
    cheese2: '',
    cheese3: '',
    cracker: '',
    fruit: '',
    nut: '',
    spread: '',
  }

  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  }

  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  }

  handleChange = input => e => {
    this.setState({[input]: e.target.value})
  }

  render() {
    const { step } = this.state;
    const { boardName, boardDescription, boardCost, meat1, meat2, meat3, cheese1, cheese2, cheese3, cracker, fruit, nut, spread } = this.state
    const values = { boardName, boardDescription, boardCost, meat1, meat2, meat3, cheese1, cheese2, cheese3, cracker, fruit, nut, spread }

    switch(step) {
      case 1:
        return (
          <OrderingSequence
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        )
      case 2:
        return (
          <Meats
            prevStep={this.prevStep}
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        )
      case 3:
        return (
          <Cheeses
            prevStep={this.prevStep}
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        )
      case 4:
        return (
          <Items
            prevStep={this.prevStep}
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        )
      case 5:
        return (
          <PerfectWine
            prevStep={this.prevStep}
            nextStep={this.nextStep}
            values={values}
          />
        )
      case 6:
        return (
          <ReviewOrder
            prevStep={this.prevStep}
            nextStep={this.nextStep}
            values={values}
          />
        )
      case 7:
        return (
          <ThankYou
            prevStep={this.prevStep}
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        )
    }
  }
}
