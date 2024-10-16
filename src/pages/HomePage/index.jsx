import './style.css';
// import { smartHomeData } from '../../smartHomeData';
import { Header } from '../../Components/Header/Header';
import { Dashboard } from '../../Components/Dashboard/Dashboard';


const title = 'Chytrý dům'

export const HomePage = () => {
  return (
    <>
      <div className="container">
        <>
          <Header title={title} />
          <Dashboard />
        </>
      </div>
    </>
  );
};

