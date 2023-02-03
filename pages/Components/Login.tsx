import Image from "next/image";
import lab from "../public/assets/lab.png";
import React, { useState } from "react";
import styles from "../styles/login.module.css";
import {firebase} from './Firebase'

const Login = () => {
  const [coupon, setcoupon] = useState(false);

  const checkboxFunction = () => {
    setcoupon(!coupon);
  };

  const SignInWithFirebase = () => {
    var google_provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(google_provider)
      .then((res) => {
        console.log(res);
        console.log("success");
      })
      .catch((err) => {
        console.log(err);
      });
  };


  return (
    <div className="h-screen w-full flex flex-col pl-16  justify-left items-left relative">
      <img
        className="h-screen z-[1] absolute top-0 right-0"
        src="/assets/login/mainbg.png"
        alt="bg"
      />

      <div className="flex justify-left items-center p-4 z-[100]">
        <Image src={lab} alt="/" height="40" className="cursor-pointer" />
        <h3 className="text-lg px-[10px]">DARWIN LAB</h3>
      </div>

      <div className="mt-16 h-[35%] w-[90%] flex justify-center items-center z-[100]">
        <div className="flex flex-col justify-between items-center w-[5%] h-full">
          <div className="h-[37%] w-[2px] bg-[#f6f6f4]"></div>
          <img className="h-[35px]" src="/assets/login/comma.png" alt="comma" />
          <div className="h-[37%] w-[2px] bg-[#f6f6f4]"></div>
        </div>

        <div className="flex flex-col justify-center items-left w-[95%] h-full ml-[25px]">
          <img
            className="h-[100px] w-[150px] "
            src="/assets/login/yes.png"
            alt="yes"
          />
          <div className="flex flex-col text-[35px] italic">
            <div>Data Science is an Art, </div>
            <div>Let’s Craft it togther.</div>
          </div>
        </div>
      </div>
      <div className="h-[35%] w-[90%] flex justify-center items-center z-[100]">
        <div className="w-[5%] h-full"></div>
        <div className="flex flex-col justify-left items-left w-[95%] h-[150px] ml-[25px]">
          {/* <div className="py-2 flex justify-left items-center">
            <div>
              <img
                className="h-[35px] p-1 hover:border-[var(--primary)] hover:border-[1.5px] rounded-sm hover:cursor-pointer"
                src="/assets/login/google.png"
                alt="google"
              />
            </div>
            <input
              onClick={checkboxFunction}
              checked={coupon}
              className="h-[50px] ml-[10px] bg-black"
              type="checkbox"
            />
            <div className="pl-4">I have a coupon</div>
          </div> */}
          <div onClick={SignInWithFirebase} className={styles.gsigninbutton}>
            <div className={styles.contentwrapper}>
              <div className={styles.logowrapper}>
                <img className={styles.gimg} src="https://developers.google.com/identity/images/g-logo.png" />
              </div>
              <span className={styles.textcontainer}>
                <span>Sign in with Google</span>
              </span>
            </div>
          </div>
          <input
            type="text"
            placeholder="Enter your coupon"
            className={
              true
                ? "z-[100] w-[180px] h-[40px] border-dashed text-xs uppercase bg-black text-[var(--primary)] border-[#616161] border-2 rounded-md"
                : "hidden"
            }
          ></input>
        </div>
      </div>
    </div>
  );
};

export default Login;
