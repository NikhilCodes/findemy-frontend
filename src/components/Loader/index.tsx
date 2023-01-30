import './style.css'
import { Spinner } from 'react-bootstrap';

export function Loader() {
  return (
    <div className="loader-container">
      <Spinner/>
    </div>
  );
}