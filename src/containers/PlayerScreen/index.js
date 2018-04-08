import React from 'react'
import {
  AlbumCover,
  ProgressBar,
  Track,
} from '../../components'

import styles from './styles.scss'

const PlayerScreen = (props) => (
  <div className={styles.playerScreen}>
    <AlbumCover cover={props.playing.album.cover} />
    <Track title={props.playing.title} band={props.playing.band} />
    <ProgressBar duration={props.playing.duration} played={props.playing.played} />
  </div>
)

export default PlayerScreen
