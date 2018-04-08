import React from 'react'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faStepBackward from '@fortawesome/fontawesome-free-solid/faStepBackward'

import styles from './styles.scss'

const BackwardButton = () => (
  <div className={styles.backward}>
    <FontAwesomeIcon icon={faStepBackward} color="#fff" />
  </div>    
)

export default BackwardButton
