import React from "react";
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
                    <li className={"first"}>
                        <button><span>ОПД</span></button>
                    </li>
                    <li className={"second"}>
                        <button>ЭО</button>
                    </li>
                    <li className={"third"}>
                        <button>Менедж.</button>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navigation;