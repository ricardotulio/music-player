import React from 'react'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faPause from '@fortawesome/fontawesome-free-solid/faPause'

import styles from './styles.scss'

const PauseButton = (props) => (
  <div onClick={props.onClick} className={styles.pause}>
    <FontAwesomeIcon icon={faPause} color="#fff" />
  </div>
)

export default PauseButton
