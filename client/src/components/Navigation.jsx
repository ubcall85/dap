import React from "react";
import Groups from "./Groups";
import { BsArrowBarDown } from 'react-icons/bs';



const Navigation = () => {

    return (
        <nav>
            <div className={"groupManagment"}>
                <p>
                    <span className={"icon"}><BsArrowBarDown/></span>
                    <span className={"name"}> Управление группами</span>
                </p>
            </div>
            <div className="subjectChoise">
                <ul>
                    <li>
                        <button className={"first"}>ОПД</button>
                    </li>
                    <li>
                        <button className={"second"}>ЭО</button>
                    </li>
                    <li>
                        <button className={"third"}>Менедж.</button>
                    </li>
                </ul>
                <Groups></Groups>
            </div>
        </nav>
    );
}

export default Navigation;