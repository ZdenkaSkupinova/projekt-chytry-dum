import "./Blinds.css"
import blindsOpen from "./img/blinds-open.svg"
import blindsClosed from "./img/blinds-closed.svg"
import { useState } from 'react';


export const Blinds = ({state}) => {
    const [blindsState, setBlindsState] = useState(true);
    
    return (
    <div className="blinds">
        <div className="blinds__icon">
            <img src={blindsState ? blindsOpen : blindsClosed} alt={blindsState ? 'žaluzie otevřeno' : 'žaluzie zavřeno'} />
        </div>
        <div className="blinds__name">
            Žaluzie
        </div>
        <div className="blinds__controls">
            <button className={"button" + (blindsState ? "button button--active" : "")} disabled={blindsState} onClick={() => setBlindsState(true)}>Otevřeno</button>
            <button className="button" disabled={!blindsState} onClick={() => setBlindsState(false)}>Zavřeno</button>
        </div>
    </div>

    )
}

// komponenta mi funguje, ale nevezme data z file, kde je "open". 