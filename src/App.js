import React, { Component } from 'react'
import axios from 'axios'

import './App.css'
import ValidResponse from './ValidResponse'

const API_URI = process.env.API_URI || 'http://localhost:3001'
const CHALLENGE = 'tree'

class App extends Component {
  componentDidMount () {
    this.fetchQuestion()
  }

  async fetchQuestion () {
    let response
    try {
      response = await axios.get(`${API_URI}/challenge/${CHALLENGE}`)
    } catch (err) {
      console.error(err)
    }

    this.setState({ challenge: response.data })
  }

  onChangeAnswer (value) {
    this.setState({ answer: value })
  }

  async submitAnswer () {
    let response
    try {
      response = await axios.post(`${API_URI}/challenge/${CHALLENGE}`, {
        response: this.state.answer
      })
    } catch (err) {
      return this.setState({ valid: false })
    }

    this.setState({ valid: true, answer: response.data })
  }

  render () {
    if (!this.state || !this.state.challenge) return 'Loading...'

    if (this.state.valid) {
      return <ValidResponse data={this.state.answer} />
    }

    return (
      <div className="App">
        {this.state.valid === false && (
          <div className="feedback-danger">Invalid response</div>
        )}

        <header className="question-section">
          <img src={this.state.challenge.image} className="question-image" alt="logo" />
        </header>

        <content className="answer-section">
          <input
            type="text"
            className="answer-input"
            autoFocus="1"
            placeholder="?"
            value={this.state.answer || ''}
            onChange={(e) => this.onChangeAnswer(e.target.value)}
          />

          <input
            type="button"
            className="answer-button"
            value="avanzar"
            onClick={this.submitAnswer.bind(this)}
          />
        </content>
      </div>
    )
  }
}

export default App
