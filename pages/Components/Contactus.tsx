import React from 'react'
import styles from '../../styles/contactus.module.css'

const Contactus = () => {
  return (
    <div id="contactus" className={styles.contactus_wrap} >

      <div className={styles.main_text_wrap} >
        <div className={styles.main_text} >Your curiosity</div>
        <div className={styles.main_text} >worth a coffee,</div>
      </div>
      <div className={styles.sub_text} >Lets catch up!</div>
      <div className={styles.contact_box_wrap} >
        <div className={styles.contact_box}>
          <img className={styles.darwinsheet} src="/assets/contactus/darwin_sheet.png" alt="sheet" />
          <div className={styles.innermail_wrap}>
            <img className={styles.inner_icons} src="/assets/contactus/innermail.png" alt="mail" />
            <div className={styles.innermail}>
              <div>You can drop a mail at,</div>
              <div> jaydeepdedaniya@gmail.com</div>
            </div>
          </div>
          <div className={styles.innerphone_wrap}>
            <img className={styles.inner_icons} src="/assets/contactus/innerphone.png" alt="mail" />
            <div className={styles.innerphone}>
              <div>For the fox who loves informal Networking!</div>
              <div>+91 7359345474</div>
            </div>
          </div>
        </div>
        <img className={styles.coffee_icon} src="assets/contactus/coffee.png" alt="coffee" />
        <img className={styles.mail_icon} src="assets/contactus/mail.png" alt="mail" />
        <img className={styles.phone_icon} src="assets/contactus/phone.png" alt="phone" />
        <img className={styles.sms_icon} src="assets/contactus/sms.png" alt="sms" />

      </div>
      <a className={styles.arrow} href="/#home">
          <img  src="/assets/uparrow.png" alt="arrow" />
        </a>
    </div>
  )
}

export default Contactus