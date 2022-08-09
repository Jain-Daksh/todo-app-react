import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

import Addtext from './components/addtext';
import Plan from './components/plan'

function App() {
  return (
    <div className='container-fluid my-5'>
      <div className='row'>
        <div className='col-sm-6 mx-auto text-white shadow-lg p-3'>
          <h1 className='text-center'>Today's Plan</h1>
          <div className='row'>
            <div className='form'>
              <Addtext />
            </div>
            {/*<div className='container-fluid'>
              <Plan />
            </div>*/}
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
