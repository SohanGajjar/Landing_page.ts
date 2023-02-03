import React from 'react'
import styles from '../../styles/service.module.css'

const Service = () => {
  return (
    <div id="services" className={styles.service_wrap} >
      <div className={styles.details_wrap} >

        <div className={styles.details_maintext}>Let's</div>
        <div className={styles.details_maintext}>Put Technology</div>
        <div className={styles.details_maintext}>At Work!</div>

        <div className={styles.details_uce}>
          <div className={styles.uce} >
            <img className={styles.uce_img} src="/assets/service/upload.png" alt="Upload" />
            <div>Upload</div>
          </div>
          <div className={styles.uce} >
            <img className={styles.uce_img} src="/assets/service/click.png" alt="Click" />
            <div>Click</div>
          </div>
          <div className={styles.uce} >
            <img className={styles.uce_img} src="/assets/service/explore.png" alt="Explore" />
            <div>Explore</div>
          </div>
        </div>

      </div>
      <div className={styles.image_wrap} >

        <div className={styles.service_box_wrap} >
        <div className={styles.service_box} > 
        <div>Comming</div>
        <div>Soon</div>
        </div>
        <img className={styles.barchart} src="/assets/Service/barchart.png" alt="" />
        <img className={styles.piechart} src="/assets/Service/piechart.png" alt="" />
        <img className={styles.linechart} src="/assets/Service/linechart.png" alt="" />
        <img className={styles.hirarchicalchart} src="/assets/Service/hirarchicalchart.png" alt="" />
        </div>
      </div>
      <a className={styles.arrow} href="/#aboutus">
          <img  src="/assets/downarrow.png" alt="arrow" />
        </a>
    </div>
  )
}

export default Service