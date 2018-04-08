import React from 'react'

import styles from './styles.scss'

const Track = (props) => (
  <div className={styles.track}>
    <div className={styles.title}>{props.title}</div>
    <div className={styles.band}>{props.band}</div>
  </div>
)

export default Track
