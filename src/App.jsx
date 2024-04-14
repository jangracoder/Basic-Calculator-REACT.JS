import React, { useState } from "react";

function App() {
  const [display, setDisplay] = useState("");

  const buttons = [
    { label: "C", value: "clear" },
    { label: "+", value: "+" },
    { label: "-", value: "-" },
    { label: "*", value: "*" },
    { label: "7", value: "7" },
    { label: "8", value: "8" },
    { label: "9", value: "9" },
    { label: "/", value: "/" },
    { label: "4", value: "4" },
    { label: "5", value: "5" },
    { label: "6", value: "6" },
    { label: "0", value: "0" },
    { label: "1", value: "1" },
    { label: "2", value: "2" },
    { label: "3", value: "3" },
    { label: "=", value: "=" },
  ];

  const clearALL = () =>{
    setDisplay('');
  }
  const handleInput =(value)=>{
   
    setDisplay(display+value);
  }
  const calculateALL =()=>{
    const result =eval(display);
    setDisplay(result.toString());
  }

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="bg-zinc-500  w-[12%]">
        <div className="text-center my-2 text-xl">{display}</div>
        <div className="flex flex-wrap justify-center  m-2 gap-1">
          {buttons.map((item, index) => (
            <button
              key={index}
              onClick={() => {
                if(item.value ==='clear'){
                  clearALL();
                }
                else if(item.value==='='){
                  calculateALL();
                }
                else{
                  handleInput(item.value);
                }
              }}
              className="px-3 py-2 text-xl  bg-zinc-300  rounded-full"
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
