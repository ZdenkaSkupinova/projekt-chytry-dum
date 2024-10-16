import "./Energy.css"
import imageEl from "./img/electricity.svg"
import imageWater from "./img/water.svg"

export const Energy = ({electricity, water}) => {

return (
        <div className="energy">
        <div className="energy__source">
            <div className="energy__icon">
                <img src={imageEl} alt ="elektřina" />
            </div>
            <div className="energy__consumption">
                <div className="energy__description">Elektřina</div>
                <div className="energy__value">{electricity} kW</div>
            </div>
        </div>
        <div className="energy__source">
            <div className="energy__icon">
                <img src={imageWater} alt ="voda"/>
            </div>
            <div className="energy__consumption">
                <div className="energy__description">Voda</div>
                <div className="energy__value">{water} m<sup>3</sup></div>
            </div>
        </div>
        </div>
    )
}

