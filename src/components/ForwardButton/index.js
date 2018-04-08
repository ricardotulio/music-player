import React from 'react'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faStepForward from '@fortawesome/fontawesome-free-solid/faStepForward'

import styles from './styles.scss'

const ForwardButton = () => (
  <div className={styles.forward}>
		<FontAwesomeIcon icon={faStepForward} color="#fff" />
	</div>
)

export default ForwardButton
