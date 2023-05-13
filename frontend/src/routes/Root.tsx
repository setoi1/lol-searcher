import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

function Root() {
  return (
    <>
      <Navbar />
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
};

export default Root;