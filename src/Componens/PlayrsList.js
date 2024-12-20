import React from "react"
import  Player from "./Players";
import player from "../players";

const PlayrsList = () => {
  return (
    <div>
        { player.map ((player ,index)=>(
            < Player key={index} {...player}/>
    ))} 
        </div>
  );
};

export default PlayrsList