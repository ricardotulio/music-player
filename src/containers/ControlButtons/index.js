import React from 'react'
import {
  BackwardButton,
  ForwardButton,
  LoopButton,
	PauseButton,
  PlayButton,
  RandomPlayButton,
} from '../../components'

import styles from './style.scss'

const ControlButtons = (props) => (
  <div className={styles.controlButtonsContainer}>
    <div className={styles.controlButtons}>
      <RandomPlayButton />
      <BackwardButton />
      { props.state === "paused"
        ? <PlayButton onClick={props.onPlay}  />
        : <PauseButton onClick={props.onPause} /> }
      <ForwardButton />
      <LoopButton />
    </div>
  </div>
)

export default ControlButtons
