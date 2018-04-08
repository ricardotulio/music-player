import React from 'react'

import styles from './styles.scss'

const AlbumCover = (props) => (
  <div className={styles.albumCover}>
    <img alt="Album Cover" src={props.cover} />
  </div>
)

export default AlbumCover
