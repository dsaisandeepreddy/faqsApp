// Write your code here.

import {Component} from 'react'

import './index.css'

class FaqItem extends Component {
  state = {starImage: false}

  constructor(props) {
    super(props)
    this.state = {eachUser: props.eachUser}
  }

  addMinusCount = () => {
    this.setState(prevState => {
      const {starImage} = prevState
      return {starImage: !starImage}
    })
  }

  render() {
    const {eachUser, starImage} = this.state
    const addIcon = starImage
      ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'

    const altTextData = starImage ? 'minus' : 'plus'

    return (
      <div>
        <li className="border-data">
          <h1 className="heading-partsize">{eachUser.questionText}</h1>
          <button type="button" onClick={this.addMinusCount}>
            <img src={addIcon} alt={altTextData} />
            <p>{starImage && eachUser.answerText}</p>
          </button>
        </li>
      </div>
    )
  }
}

export default FaqItem
