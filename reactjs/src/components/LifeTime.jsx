import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/LifeTime.module.css';
import {AiFillHome} from 'react-icons/ai';



export default function LifeTime({lifeTime,time}){
    const [data,setData]=useState({
        Day:'',
        Month: '',
        Year: ''
    });
    const [datavis,setDatavis]=useState('Years');

//    <Link to={`/lifeTime/result`}><button type='submit' onSubmit={handleSubmit}>Calculate</button></Link>

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
        const b = new Date(`${data.Month} ${data.Day},${data.Year}`);
        lifeTime(b);
    }
// -------------------------------
    function handleChange(e){
        e.preventDefault();
        setDatavis(e.target.value);
    }

    function showResults(){
        switch(datavis){
            case 'Years':
                return <h1>{`${Math.floor(Math.abs(time.TimeLife/(1000*3600*24*365)))} years.`}</h1>
            case 'Month':
                return <h1>{`${Math.floor(Math.abs(time.TimeLife/(1000*3600*24*12)))} months.`}</h1>
            case 'Days':
                return <h1>{`${Math.floor(Math.abs(time.TimeLife/(1000*3600*24)))} days.`}</h1>
            case 'Hours':
                return <h1>{`${Math.floor(Math.abs(time.TimeLife/(1000*3600)))} hours.`}</h1>
            case 'Minutes':
                return <h1>{`${Math.floor(Math.abs(time.TimeLife/(1000*60)))} minutes.`}</h1>
            case 'Seconds':
                return<h1>{`${Math.floor(Math.abs(time.TimeLife/(1000)))} seconds.`}</h1>
            default : 
                return <p> </p>
        }
    }

    //return
    return(
        <>
        <div className={styles.all}>
            <div className={styles.header}>
                <Link to='/'><button className={styles.homeButton}><AiFillHome/></button></Link> 
                <h1 className={styles.life}>Life Time</h1>
            </div>
            <form action="" onSubmit={handleSubmit}>
                <p className={styles.press}>Ingress your date of birth.</p>
                <label htmlFor="" className={styles.formItems}>Year</label>
                <select name="Year" id="" onChange={handleForm}  className={styles.formItems}>
                    {
                        creaArray().map(y=>(
                            <option key={y}>{y}</option>
                        ))
                    }                   
                </select>                
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
        </div>

        <div>
            <div>
                <div className={styles.centering}>
                    <div className={styles.showResults}>
                        <h1>Result:</h1>
                        <div className={styles.results}>
                            <label htmlFor="" className={styles.resultItems}>Show result as</label>
                            <select name="Result" id="" onChange={handleChange} className={styles.resultSelect}>
                                <option value="Years">Years</option>
                                <option value="Days">Days</option>
                                <option value="Hours">Hours</option>
                                <option value="Minutes">Minutes</option>
                                <option value="Seconds">Seconds</option>
                            </select>
                        </div>
                    </div>
                </div> 
                <div>
                    {showResults()}
                </div>
            </div>

            <div>
                <p className={styles.press}>Calculate time to your next Birthday</p>
                <Link to='/nextBirthday'><button className={styles.button}>Calculate</button></Link>
            </div>
        </div>
        </>
    )
}