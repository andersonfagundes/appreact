import React from "react";
import styles from "./Contact.module.css";
import photo from "../images/contato.jpg";
import Head from "./Head";

const Contact = () => {
    return (
        <section className={styles.contact + ' animationComingFromTheLeft'}>
            <Head title="appReact | Contact" description="Contact" />
            <img src={photo} alt="Typewriter" />
            <div>
                <h1>Contact</h1>
                <ul className={styles.data}>
                    <li>myemail@contact.com</li>
                    <li>99999999</li>
                    <li>My Address</li>
                </ul>
            </div>
        </section>
    )
};

export default Contact;