import React from 'react'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faPlay from '@fortawesome/fontawesome-free-solid/faPlay'

import styles from './style.scss'

const PlayButton = (props) => (
  <div onClick={props.onClick} className={styles.play} style={props.style}>
    <FontAwesomeIcon icon={faPlay} color="#fff" />
  </div>
)

export default PlayButton
