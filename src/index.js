import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Clock from './Clock';


//start.js파일 내부 Hello 함수 실행 결과
const root = ReactDOM.createRoot(document.getElementById('root'));
const timer = ReactDOM.createRoot(document.getElementById('timer'));
root.render(
  <React.StrictMode>

    
    
    {/* <App />*/}
    {
    /* <Hello />
    <Hello2 />
    <Hello3 />
    <Hello4 />
    <Hello5 /> 
    <Card/>
    <Library/>
    <Greeting/>
    <GreetingAll/>
    */}
    <Clock/>
  </React.StrictMode>
);
setInterval(function(){
  timer.render(
    <React.StrictMode>
      <Clock/>
    </React.StrictMode>
  )
},1000);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
