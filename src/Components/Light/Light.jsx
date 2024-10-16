import "./Light.css"
import { useState } from 'react';
import lightOff from './img/light-off.svg';
import lightOn from './img/light-on.svg';


export const Light = ({name, state}) => {

  const [lightState, setLightState] = useState(state);

  const toggleLight = () => {
    setLightState(prevState => (prevState === 'on' ? 'off' : 'on'));
  };

    return (
        <div className="light" 
            onClick={toggleLight}>
        <div className="light__icon">
            <img src={lightState === 'on' ? lightOn : lightOff} alt={`${name} světlo je ${lightState}`}  />
        </div>
    <div className="light__name">{name}</div>
</div>
    )
}
