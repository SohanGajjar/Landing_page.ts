import React from 'react'
import styles from '../../../styles/details.module.css'


const Details = ({ current }) => {

  const textData = [
    {
      heading: "Explore",
      content_text: "Unhide your data potentials with pre built data visualization templates. Use your imaginations to customize each story you want to convey using graphs."
    },
    {
      heading: "Analyse",
      content_text: "Now cleaning, processing and feature engineering with few clicks to make your data glow. Because, Your data knows it before it happens."
    },
    {
      heading: "Model",
      content_text: "Let your data influence your business decisions by training industry standard models using a few clicks. Let machines help you explore the unexplored"
    }
  ]

  return (
    <div className={styles.details_wrap} >

      {textData.map((text, index) => {
        return (
          <div
            className={index === current ? styles.heading_text_active : styles.heading_text}
            key={index}
          >
            {index === current && (
              <div>{text.heading}</div>
            )}
          </div>
        );
      })}

      <div className={styles.subheading_text1}>The Data</div>
      <div className={styles.subheading_text2}>At Your Browser!</div>

      {textData.map((text, index) => {
        return (
          <div
            className={index === current ? styles.content_text_active : styles.content_text}
            key={index}
          >
            {index === current && (
              <div>{text.content_text}</div>
            )}
          </div>
        );
      })}

      <a href='/#services' className={styles.explore_btn_wrap} >
        <button className={styles.explore_btn} >Explore</button>
      </a>

    </div>
  )
}

export default Details