import {useState} 'react'
import classes from './LikeButton.module.css'
export function DemoLikeButton(){
    return <fieldset><legend>LikeButton Demo</legend>
    <LikeButton/>
    <LikeButton start={999}/>
    <LikeButton step="10" color="red"/>
    <LikeButton big/>
    </fieldset>
}
function LikeButton({start=0,step,color,big}){
   const [like,setLike]=useState(start)
   //onClick={()=>setLike(like+ +step)}
    return <button onClick={prev=>setLike(+step +prev)} className={classes.like+(big?''+classes.big:'')}>Like:{100}style={{color}}</button>
}