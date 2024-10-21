import "./Blinds.css"
import blindsOpen from "./img/blinds-open.svg"
import blindsClosed from "./img/blinds-closed.svg"
import { useState } from 'react';

export const Blinds = ({state}) => {
    const [blindsState, setBlindsState] = useState(state);
    
    return (
    <div className="blinds">
        <div className="blinds__icon">
            <img src={blindsState === 'open' ? blindsOpen : blindsClosed} alt={blindsState === 'open' ? 'žaluzie otevřeno' : 'žaluzie zavřeno'} />
        </div>
        <div className="blinds__name">
            Žaluzie
        </div>
        <div className="blinds__controls">
            <button className={blindsState === 'open' ? "button button--active" : ""} onClick={() => setBlindsState(state)}>Otevřeno</button>
            <button className="button" onClick={() => setBlindsState(!state)}>Zavřeno</button>
        </div>
    </div>

    )
}


