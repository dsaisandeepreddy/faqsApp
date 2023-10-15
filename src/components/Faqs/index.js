// Write your code here.

import {Component} from 'react'

import FaqItem from '../FaqItem'

import './index.css'

class Faqs extends Component {
  render() {
    const {faqsList} = this.props
    return (
      <div className="Background-skycolor">
        <li className="mini-container">
          <h1 className="heading-part">FAQS</h1>
          {faqsList.map(eachUser => (
            <FaqItem key={eachUser.id} eachUser={eachUser} />
          ))}
        </li>
      </div>
    )
  }
}

export default Faqs
