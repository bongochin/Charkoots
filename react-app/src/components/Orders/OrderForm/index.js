import React, { Component } from 'react'
import OrderingSequence from '../OrderingSequence';

import Meats from '../OrderingSequence/Meats'
import Cheeses from '../OrderingSequence/Cheeses'
import Crackers from '../OrderingSequence/Crackers'
import Fruits from '../OrderingSequence/Fruits'
import Nuts from '../OrderingSequence/Nuts'
import Spreads from '../OrderingSequence/Spreads'

import PerfectWine from '../PerfectWine';
import ReviewOrder from '../ReviewOrder';
import ThankYou from '../ThankYou';

export default class OrderForm extends Component {
  state = {
    step: 1,
    boardName: '',
    boardDescription: '',
    boardCost:'',
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
          <Crackers
            prevStep={this.prevStep}
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        )
      case 5:
        return (
          <Fruits
            prevStep={this.prevStep}
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        )
      case 6:
        return (
          <Nuts
            prevStep={this.prevStep}
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        )
      case 7:
        return (
          <Spreads
            prevStep={this.prevStep}
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        )
      case 8:
        return (
          <PerfectWine
            prevStep={this.prevStep}
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        )
      case 9:
        return (
          <ReviewOrder
            prevStep={this.prevStep}
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        )
      case 10:
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
