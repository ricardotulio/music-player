import React from 'react'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faRedo from '@fortawesome/fontawesome-free-solid/faRedo'

import styles from './styles.scss'

const LoopButton = () => (
  <div className={styles.loop}>
		<FontAwesomeIcon icon={faRedo} color="#fff" />
	</div>
)

export default LoopButton
