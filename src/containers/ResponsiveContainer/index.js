import React from 'react'

import styles from './style.scss'

const ResponsiveContainer = (props) => (
  <div className={styles.responsiveContainer}>{props.children}</div>    
)

export default ResponsiveContainer
