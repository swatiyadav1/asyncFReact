import React,{useEffect} from "react";
import {useState} from "react";


export default function App(){
const [isLoadingData,setIsLoadingData] = React.useState(false);
const [data,setData] = React.useState([]);
const [showData,setShowData] = React.useState(false);

const handleClick = () => {
  setIsLoadingData(true);
  setShowData(true);

  const url = "https://randomuser.me/api/?results=20";

  fetch(url).then((response) => response.json()).then((json) => {
    setIsLoadingData(false);
    setData(json["results"])
    console.log(data);
  })
.catch((error) =>
  console.log(error)
);

}


return(
  <div>
    <button onClick={handleClick}>Clock to load data</button>

{showData?(isLoadingData?(<h2>loading data.....</h2>):(data.map((user) => (<h2>{user.name.first} {user.name.last}</h2>)
)
)
) : (
<div></div>
) }



  </div>
);




}

