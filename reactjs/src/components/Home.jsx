import React from "react"; 
import {Link} from 'react-router-dom';
import styles from "../styles/Home.module.css"
import {FaBirthdayCake, FaUserClock} from 'react-icons/fa';

export default function Home(){
    //functions

    // return
    return (
        <div className={styles.all}>
            <h1 className={styles.title}>Choose an option</h1>
            <p className={styles.press}>We'll calculate your time life or days to your next birthday.</p>
            <div className={styles.buttons}>
                <div className={styles.space}>
                    <Link to='/lifeTime'><button className={styles.button}>{`Life time`}<FaUserClock/></button></Link>
                </div>
                <div className={styles.space}>
                    <Link to='nextBirthday'><button className={styles.button}>{`Next Birthday \n`}<FaBirthdayCake/></button></Link>
                </div>
            </div>
            <Link to='/aboutMe' className={styles.aboutMe}><p className={styles.aboutMe}>About me</p></Link>
        </div>
    )
}