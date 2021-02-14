import React, { Component } from 'react'
import OrderingSequence from '../OrderingSequence';
import PerfectWine from '../PerfectWine';
import ReviewOrder from '../ReviewOrder';
import ThankYou from '../ThankYou';

export default class OrderForm extends Component {
  state = {
    step: 1,
    boardName: '',
    boardDescription: '',
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
    const { boardName, boardDescription } = this.state
    const values = { boardName, boardDescription }

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
          <PerfectWine
            prevStep={this.prevStep}
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        )
      case 3:
        return (
          <ReviewOrder
            prevStep={this.prevStep}
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        )
      case 4:
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
