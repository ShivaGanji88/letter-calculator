// Write your code here.
import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {isTyping: ''}

  onChangeTextLetter = event => {
    const {value} = event.target
    this.setState({isTyping: value})
  }

  render() {
    const {isTyping} = this.state

    return (
      <div className="first-container">
        <div className="second-container">
          <div className="calsi-container">
            <h1 className="heading">
              Calculate the <br /> Letters you <br />
              enter
            </h1>
            <div className="input-container">
              <label className="label" htmlFor="phrasetext">
                Enter the phrase
              </label>
              <input
                id="phrasetext"
                type="text"
                placeholder="Enter the phrase"
                className="input-text"
                onChange={this.onChangeTextLetter}
                value={isTyping}
              />
            </div>
            <p className="letter-count">No.of Letters: {isTyping.length}</p>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="letters calculator"
            className="imag-size"
          />
        </div>
      </div>
    )
  }
}
export default LettersCalculator
