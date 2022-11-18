import React from "react";
import {BsArrowDown} from "react-icons/bs";

const Groups = () => {

    const members = [
        {
           "group_name": "ИСПВ-1",
           "group_members": [{"name": "Срыль Шудья", "token": "000000"}]
        },
        {
            "group_name": "Ъ-666",
            "group_members": [{"name": "Дрестелев Иван", "token": "00000"}]
         } 
    ];


    return (
        <div className={"groupList"}>
            {members.map( el => <div><span>{el.group_name}</span><span>▼</span></div> )}
        </div>
    );
}

export default Groups;