import React, { Component } from 'react'
import Promise from 'bluebird'
import {
  assoc,
  assocPath,
  path,
  prop,
} from 'ramda'
import {
  ControlButtons,
  NavBar,
  PlayerScreen,
  ResponsiveContainer,
} from './containers'

import './App.scss'

const state = {
  playing: {
    title: "Time",
    band: "Pink Floyd",
    duration: 408,
    played: 0,
    album: {
      cover: "https://cdn-images-1.medium.com/max/1240/1*8FkvzbSdSJ4HNxtuZo5kLg.jpeg",
    },
    file: "media/4e8091a06264-4f5cb72740deb04f66f3.mp3",
  },
  state: "paused",
}

class App extends Component {
  constructor(props) {
    super(props)

    this.state = state
    this.play = this.play.bind(this)
    this.pause = this.pause.bind(this)
  }

  componentWillMount() {
    const buildAudioObject = () => {
      this.setState((prevState) => assocPath(
        ['playing', 'audioObject'],
        new Audio(path(['playing', 'file'], prevState)),
        prevState,
      ))
    }

    const resetProgress = () =>
      this.setState(assocPath(['playing', 'played'], '0'))

    Promise.resolve()
      .then(buildAudioObject)
      .then(resetProgress)
  }

  play() {
    const updatePlayerState = () => {
      this.setState(assoc('state', 'playing'))
    }

    const playMusic = () => {
      this.setState((prevState) => path(['playing', 'audioObject'], prevState).play())
    }

    const startProgress = () => {
      clearInterval(this.interval)

      this.interval = setInterval(() => {
        this.setState((prevState) =>
            assocPath(
              ['playing', 'played'],
              Math.round(path(['playing', 'audioObject', 'played'], prevState).end(0)),
              prevState
            )
          )
      }, 500)
    }

    Promise.resolve()
      .then(updatePlayerState)
      .then(playMusic)
      .then(startProgress)
  }

  pause() {
    const updatePlayerState = () => {
      this.setState(assoc('state', 'paused'))
    }

    const pauseMusic = () => {
      this.setState((prevState) => path(['playing', 'audioObject'], prevState).pause())
    }

    const stopProgress = () => clearInterval(this.interval)

    Promise.resolve()
      .then(updatePlayerState)
      .then(pauseMusic)
      .then(stopProgress)
  }

  render() {
    return (
      <ResponsiveContainer>
        <NavBar />
        <PlayerScreen playing={this.state.playing} />
        <ControlButtons onPlay={this.play}
          onPause={this.pause}
          playing={this.state.playing}
          state={this.state.state} />
      </ResponsiveContainer>
    )
  }
}

export default App
