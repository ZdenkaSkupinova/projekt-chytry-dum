import "./Dashboard.css"
import { smartHomeData } from "../../smartHomeData"
import { Blinds } from "../Blinds/Blinds"
import { Lights } from "../Lights/Lights" 
import { Energy } from "../Energy/Energy"
import { Climate } from "../Climate/Climate"


export const Dashboard = () => {

 return (
        <main className="dashboard">
        <Lights lights={smartHomeData.lights} />
        <Climate temperature={smartHomeData.climate.temperature}
                humidity={smartHomeData.climate.humidity} />
        <Blinds state={smartHomeData.state} />
        <Energy electricity={smartHomeData.energyConsumption.electricity}
                water={smartHomeData.energyConsumption.water} />
        </main>   
        )
}


