
import Sections from '../components/Sections/index';
import Carousel  from '../components/Sections/carousel';

export function Home() {
  return (
    <div>
      <Sections />
      <div className=" container text-center d-flex flex-column align-items-center justify-content-center my-5">
    <h4 style={{ fontWeight: 'bold' }}>Les voitures disponibles</h4>
    <h6 className="text-muted">choisi ton model préféré</h6>
    </div>
      <Carousel/>
    </div>
  );
}