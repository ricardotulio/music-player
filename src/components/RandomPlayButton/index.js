import React from 'react'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faRandom from '@fortawesome/fontawesome-free-solid/faRandom'

import styles from './styles.scss'

const RandomPlayButton = () => (
  <div className={styles.random}>
		<FontAwesomeIcon icon={faRandom} color="#fff" />
  </div>
)

export default RandomPlayButton
