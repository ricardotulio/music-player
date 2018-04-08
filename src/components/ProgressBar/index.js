import React from 'react'
import {
  curry,
  subtract,
} from 'ramda'

import styles from './styles.scss'

const ProgressBar = (props) => {
  const padSeconds = (seconds) =>
      seconds.toString().padStart(2, '0')

  const displayTime = (seconds) => 
    `${Math.floor(seconds / 60)}:${padSeconds(seconds % 60)}`

  const progress = curry((duration, played) =>
    Math.round(played / props.duration * 100))(props.duration)

  const remainingProgress = curry((duration, played) =>
    subtract(100, progress(played)))(props.duration)

  return (
    <div className={styles.progressBar}>
      <div className={styles.timeSpent}>{displayTime(props.played)}</div>
      <div className={styles.currentProgress}>
        <div className={styles.progress}
          style={ { width: `${progress(props.played)}%` } }>
        </div>
        <div className={styles.cursor}></div>
        <div className={styles.remaining}
          style={ { width: `${remainingProgress(props.played)}%` } }></div>
      </div>
      <div className={styles.timeRemaining}>
        {displayTime(props.duration - props.played)}
      </div>
    </div>
  )
}

export default ProgressBar
