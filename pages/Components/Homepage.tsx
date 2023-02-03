import React, { useState } from 'react'
import styles from '../../styles/home.module.css'
import Details from './sub_components/Details';
import ImageSlider from './sub_components/ImageSlider'

const Homepage = () => {

  const [current, setCurrent] = useState(0);

  return (
    <div id="home" className={styles.home_wrap} >

      {/* <div className={styles.spacebox}></div> */}
      <div className={styles.home_content}>
        <div className={styles.home_details} >
          <Details current={current} setCurrent={setCurrent} />
        </div>

        <div className={styles.home_images} >
          <ImageSlider current={current} setCurrent={setCurrent} />
        </div>
      </div>
    </div>
  )
}

export default Homepage