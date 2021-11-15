import React from 'react';
import styles from '../styles/AboutMe.module.css';
import {AiFillGithub, AiFillHome, AiFillLinkedin} from 'react-icons/ai'
import {Link} from 'react-router-dom';

export default function About(){
    return(
        <div className={styles.all}>
        <div className={styles.about}>
            <div className={styles.things}>
                <div className={styles.hb}>
                    <Link to='/'><button className={styles.homeButton}><AiFillHome/></button></Link>         
                </div>
                <h1 className={styles.name}>Martín Aramayo</h1>
            </div>
            <div className={styles.presentation}>
                <div className={styles.text}>
                <p name="description"  className={styles.description}>
                    Hello, currently I'm a student at <a className={styles.link} href="https://www.soyhenry.com/">Henry's bootcamp</a>.
                    I want to become in a full stack developer who will
                    be able to have a correct understanding of back and frontend.
                    <br />This is my second proyect, a SPA which be able to tell you how many days until your birthday and how many days have passed since your birth. This proyect was realized to practice handle dates and presentation of results. 
                    <br />To build it I used React JS and CSS modules. 
                </p>
                </div>
                <img src="https://media-exp1.licdn.com/dms/image/C4D03AQEkR2qsoE41kw/profile-displayphoto-shrink_800_800/0/1626475719895?e=1640217600&v=beta&t=WYuVR1U6_4aKFA8WcwVMuKw8iUUlCEt72yH-6F0T6lU" alt="" className={styles.photo}/>
            </div>
            <div className={styles.contactBox}>
                <ul className={styles.contact}>
                <a href='https://www.linkedin.com/in/raul-martin-aramayo-marca/'><li className={styles.item}><AiFillLinkedin/></li></a>
                <a href="https://github.com/aramayomartin/"><li className={styles.item}><AiFillGithub/></li></a>        
                </ul>
            </div>
        </div>
        </div>
    )
}