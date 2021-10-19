import React, { useState } from "react";
import s from './_h_UpMainDown.module.css';
import perfect from './imgHead/perfect.svg';
import vector from './imgHead/vector.png';
import classNames from "classnames";

const H_Main_items = () => {
    const [stateMainItem, setStateMainItem] = useState([
        { id: 1, done: true, "itemNumber": 1, notes: "Selection", "activ": false },
        { id: 2, done: true, "itemNumber": 2, notes: "Reservation", "activ": false },
        { id: 3, done: false, "itemNumber": 3, notes: "Payment", "activ": true },
        { id: 4, done: false, "itemNumber": 4, notes: "Ticket Confirmation", "activ": false },
    ])

    return (
        <div className={s.h_up__right}>
            {stateMainItem.map((e, index) => {
                return (
                    <>
                        <div key={e.id} className={s.__leftMain} >
                            <div className={classNames(s.__leftMainUP, { [s.activ]: e.activ })}>
                                {
                                    e.done ?
                                        <img src={perfect} alt="perfect" /> :
                                        <p>{e.itemNumber}</p>
                                }
                            </div>
                            <span>{e.notes}</span>
                        </div>
                        {index <= 2 &&
                            <img className={s.__leftIMG} src={vector} alt="perfect" />}
                    </>
                )
            })}
        </div >
    );
};

export default H_Main_items;