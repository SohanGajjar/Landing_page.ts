import React from 'react'
import styles from '../../styles/aboutus.module.css'

const Aboutus = () => {
  return (
    <div id="aboutus" className={styles.aboutus_wrap} >
      <div className={styles.aboutus_box} >
        <img className={styles.cylinder_database} src="/assets/aboutus/cylinder_database.png" alt="cylinder_database" />
        <img className={styles.comma} src="/assets/aboutus/comma.png" alt="Comma" />
        <img className={styles.graph_chart} src="/assets/aboutus/graph_chart.png" alt="Graph_chart" />
        <div className={styles.main_text_box} >Evolution is ultimate, and we are committed to empowering people to
          adapt the changing technology landscapes. We help people and
          businesses to Evolve in the Data era.</div>
        <div className={styles.sub_text_box} >
          <div>&quot;it not the stronger or the most intelligent who will
            survive but those who can best manage change&quot;</div>
          <div className={styles.charles_darwin} >-Charles Darwin</div>
        </div>

      </div>
      <a className={styles.arrow} href="/#contactus">
          <img  src="/assets/downarrow.png" alt="arrow" />
        </a>
    </div>
  )
}

export default Aboutus