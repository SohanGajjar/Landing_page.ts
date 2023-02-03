import React, { useState } from 'react';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import styles from '../../../styles/slider.module.css'

const ImageSlider = ({ current, setCurrent }) => {



    React.useEffect(() => {
        if (true) {
            const timer = setTimeout(() => {
                setCurrent(current + 1);
                console.log(current);
                if (current === 2) {
                    setCurrent(0);
                }
            }, 4000);

            return () => clearTimeout(timer);
        }
    }, [current]);


    const SliderData = [
        {
            image:
                '/assets/homepage/explore.png'
        },
        {
            image:
                '/assets/homepage/analyse.png'
        },
        {
            image:
                '/assets/homepage/model.png'
        }
    ];



    const btn1 = () => {
        setCurrent(0);
    };
    const btn2 = () => {
        setCurrent(1);
    };
    const btn3 = () => {
        setCurrent(2);
    };

    if (!Array.isArray(SliderData) || SliderData.length <= 0) {
        return null;
    }

    return (
        <section className={styles.slider_wrap}>

            <div className={styles.slide_btn_wrap} >
                <div className={current === 0 ? styles.slide_btn_active : styles.slide_btn} onClick={btn1}></div>
                <div className={current === 1 ? styles.slide_btn_active : styles.slide_btn} onClick={btn2}></div>
                <div className={current === 2 ? styles.slide_btn_active : styles.slide_btn} onClick={btn3}></div>
            </div>

            {SliderData.map((slide, index) => {
                return (
                    <div
                        className={index === current ? styles.slide_active : styles.slide}
                        key={index}
                    >
                        {index === current && (
                            <img src={slide.image} alt='travel image' className={styles.image} />
                        )}
                    </div>
                );
            })}
        </section>
    );
};

export default ImageSlider;