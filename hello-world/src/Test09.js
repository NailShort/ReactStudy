import React, { useState, useEffect } from 'react';
const Tset09=(props)=>{
    /* 把state變成useState */
    const [isGetData,setGetData]=useState(false);
    const [Mom,setMom]=useState("");
    const [isRightDad,setRightDad]=useState(false);

    /* 把class 的 member function改成function中的function */
    const ajaxSimulator=()=>{
        setTimeout(()=>{
            setGetData(true);
            setMom("小美");
        },3000)
    }
    const checgeDad=()=>{
        if(props.dad==="Chang")
            setRightDad(true)
        else
            setRightDad(false)
    }

    useEffect(() => {
      ajaxSimulator();
      document.getElementById("talk").append('爸!')
      
      return(()=>{
          /* 下面是 componentWillUnmount */
  
          document.getElementById("talk").innerHTML="";
          
          /* 上面是 componentWillUnmount */
      })
  }, []);

    if(isRightDad===false)
        return(
            <div>他的媽媽，是誰，干你X事</div>
        );
    else if(isGetData===false)
        return(
            <div id="msg">讀取中</div>
        );
    else
        return(
            <div id="msg">他的媽媽是{Mom}</div>
    );  
}
export default Tset09;