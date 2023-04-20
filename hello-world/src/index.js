import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Test01 from './Test01';
import Test02 from './Test02';
import Test03 from './Test03';
import Test04 from './Test04';
import Test05 from './Test05';
import Test06 from './Test06';
import Test07 from './Test07';

const root = ReactDOM.createRoot(document.getElementById('root'));

const printMessage=()=>{
  document.getElementById('show-area').innerHTML="我被按到了";
}

const changeName=(newName)=>{ 
  name=newName;
  console.log("hey")//加入此行
}

var name="舊的名字";

root.render(
  <React.StrictMode>
    <App name="我的名子" handleClick={printMessage} />
    <div id='show-area'></div>

    <Test01> 在 index.js 中輸入文字 </Test01>
    <Test02 name={name} handleClick={changeName}></Test02>
    <Test03></Test03>
    <Test04></Test04>
    <Test05></Test05>
    <Test06 dad='Chang'></Test06>
    <Test07/>
    <div id='talk'></div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
