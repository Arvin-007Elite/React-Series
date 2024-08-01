/* eslint-disable no-unused-vars */
import React, { useState, useEffect , useRef, useMemo } from "react";
import User from "./components/User";

const App = () => {
  // object define
  const userData = {
    name: "Kevin",
    age: "23",
    num: "96543567",
  };




  // Declaring State Variable
  // for  useState
  let [num, setNum] = useState(1);
  // for useEffect
  let [eft, setEft] = useState(100);
  let [eft1, setEft1] = useState(1000);
  // for useRef
  let [input, setInput] = useState("");
  //for useMemo
  let [number, setNumber] = useState(0);
  let [dark , setDark] = useState(false)


  console.log("getting rendered");

  const inputRef = useRef();
  //  holds all references of input tag 
// now component will not rerender , but op shown in console , whenevr chnage happens 
  const display = () => {
    console.log(inputRef.current.value)
  }

  // let X = 1;

  // Function define
  const handleDataPlus = () => {
    // X = X + 1;
    console.log(num);
    // setNum(2)    // for setting direct value

    // old version of call back
    //     setNum((num) => {
    //       return num + 1;
    // })

    //call back function to display
    setNum((num) => num + 1);
  };
  const handleDataMinus = () => {
    console.log(num);
    setNum((num) => num - 1);
  };

  // useEffect needs , a call back function , and an array
  useEffect(() => {
    console.log("From useEffect");
    setEft(200);
    // when eft value changes , the cleanup begins as sets agin to 100
    // then comes to 200 ,from use effect
    return () => {
      setEft(100);
      console.log("Memory Cleaned");
    };
  }, [eft]);

  // till the time , array is empty only useeffect will work , if component rerenders , it will not work
  // when u give the value in array , evnthough value changes in console , main value will not change , becuase u again set same value in array , so useffect will not load everytime

  console.log("eft", "eft1", eft, eft1);

  // if state value is true , gblack , if false bg white 
  

  // const themeStyles = {
  //   backgroundColor: dark ? "black" : "white",
  //   color: dark ? "white" : "black",
  // }



  const themeStyles = useMemo(() => {
    return {
     
   
      backgroundColor: dark ? "black" : "white",
      color: dark ? "white" : "black",
    };
  }, [dark]);





  // displayed below in themestyles in tag
  
  // const doubleNumber = slowFunction(number)

  const doubleNumber = useMemo(() => {
    return slowFunction(number)
  }, [number])
// if number var value changed only slow function will call , otherise not !















  return (
    <div>
      {/* props learning */}
      <User
        // name={userData.name}
        // Age={userData.age}
        // Num={userData.num}
        {...userData}
      />

      {/* useState hook learning */}

      <h1> {num} </h1>
      <button onClick={handleDataPlus}> Add </button>
      <button onClick={handleDataMinus}>Subtract</button>

      {/* useEffect hook learning */}
      {/* <h1> {eft} </h1>
      <button onClick={() => setEft((curr) => curr + 1)}> Add </button>
      <h1> {eft1} </h1>
      <button onClick={() => setEft1((curr) => curr + 1)}> Add1 </button> */}

      {/* useRef hook learning */}
      <h2>Input</h2>
      <input
        ref = {inputRef}
        type="text"
        // value={input}
        // onChange={(event) => setInput(event.target.value)}
      />
      {/* <p> My name is {input}</p> */}
      <p> My name is {inputRef.current?.value}</p>
      {/* while using this error comes , cause before using ref above we used this , so we use optional chaining
       */}
{/* , means , we can check the prop is there or not , before using it  */}
{/* in current prop , value prop is there only it uses value */}
{/* so only if we use show input only value prints , not everytime in console  */}

      {/* whenever i type the input , whole component is rerendering , if u use console.log  , whenever state var input is changing , that time it rerenders ! */}
      {/* for this problem use useRef */}
      {/* storing the input value as target for set function */}
      {/* storing the value of changing in input var in onChange */}
    
    <button onClick={display}> Show Input </button>
    
    
    {/* so us effct hook is for only when , we accessed the value it displays , other wise not renders everytime as state hook */}
      {/* but state is used for action  */}
      {/* useMemo will memorize the value we give */}
    {/* due to this slowness of generating the value , and rerendering to capture space in memory   */}
      {/* instead that  we use useMemo , to fast performance purely */}
      
      
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      {/* input field number will be timed 2 in double number and displayed blelow */}
      <button onClick={() => setDark((curr) => !curr)}> Toggle theme </button>
      <div style={themeStyles}> {doubleNumber}

      </div>
      {/* as state changes as number in console , so theme also delays , it also prints in console again again , 
      thats why use Memo is used , to memorize old memory and doesnt let print again again  */}
    
    
    
    
    </div>
  );
};

export default App;

// if u get 2 op  as same ,
// it means 1 op is from react side output
// another one is from development server output
// this happens during deveolopment , not in production


function slowFunction(num2) {
  console.log("running slow")
  let result = num2;
  for (let i = 0; i < 10000000000000000000000000000000; i++) {
    return num2 ** 2
  }
 return result
}

//before it returns , it iterates to generte slow 

