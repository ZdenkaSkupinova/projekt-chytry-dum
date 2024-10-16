import "./Climate.css"
import imgClimate from "./temp.svg"
import { useState } from 'react';

export const Climate = ({ humidity}) => {

    const [temperature, setTemperature] = useState(24)
    return (
    <div className="climate">
        <div className="climate__icon">
            <img src={imgClimate} alt="prostředí: teplota a vlhkost vzduchu" />
        </div>
        <div className="climate__content">
            <div className="climate__temperature">{temperature}&deg;C</div>
            <div className="climate__humidity">Vlhost vzduchu {humidity}%</div>
        </div>
        <div className="climate__controls">
            <button onClick={() => setTemperature(temperature + 1)} className="button">+</button>
            <button onClick={() => setTemperature(temperature - 1)} className="button">-</button>
        </div>
    </div>
    )
}