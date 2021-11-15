import React,{useState} from 'react';
import { AiFillHome } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import styles from '../styles/NextBirthday.module.css';

export default function NextBirthday({calculateNextBirthday , timeLess}){
    const [data,setData]=useState({
        Day:'',
        Month: '',
    });
    
    //functions
    function creaArray(begin = 1940, end = (new Date()).getFullYear()){
        const numbers = []; 
        for(let i=end;i>=begin;i--){
            numbers.push(i);
        }
        return numbers;
    }

    function handleForm(e){
        e.preventDefault();
        setData({
            ...data,
            [e.target.name]:e.target.value
        })
    }

    function numberDays(){
        switch(data.Month){
            case 'February': return creaArray(1,28);

            case 'January': return creaArray(1,31);
            case 'March': return creaArray(1,31);
            case 'May': return creaArray(1,31);
            case 'July': return creaArray(1,31);
            case 'August': return creaArray(1,31);
            case 'October': return creaArray(1,31);
            case 'December': return creaArray(1,31);

            case 'April': return creaArray(1,30);
            case 'June': return creaArray(1,30);
            case 'September': return creaArray(1,30);
            case 'November': return creaArray(1,30);

            default: return creaArray(1,31);
        }
    }

    function handleSubmit(e){
        e.preventDefault();
        const bd = new Date(`${data.Month} ${data.Day}, ${(new Date()).getFullYear()}`)
        calculateNextBirthday(bd)
    }

    //return
    return(
        <div className={styles.all}>
        <div>
            <div className={styles.header}>
            <Link to='/'><button className={styles.homeButton}><AiFillHome/></button></Link> 
                <h1 className={styles.life}>Next Birthday</h1>
            </div>
            <form action="" onSubmit={handleSubmit} className={styles.form}>
                             
                <label htmlFor="" className={styles.formItems}>Month</label>
                <select name="Month" id="" onChange={handleForm} className={styles.formItems}>
                    {
                        ['January','February','March','April','May','June','July','August','September','October','November','December']
                        .map(m=>(
                            <option key={m}>{m}</option>
                        ))
                    }                   
                </select>
                <label htmlFor="" className={styles.formItems}>Day</label>
                <select name="Day" id="" onChange={handleForm} className={styles.formItems}>
                    {
                        numberDays().map(d=>(
                            <option key={d}>{d}</option>
                        ))            
                    }                   
                </select>
                <button type='submit' className={styles.formButton}>Calculate</button>
            </form>
            <h1> 
{                `${Math.floor((timeLess.TimeLess)/(1000*3600*24))} days for your next birthday!`
    }       </h1>       
</div>
        </div>
    )
}