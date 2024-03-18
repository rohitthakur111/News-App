//  import React,{Component} from 'react';
// import loading  from '../../dist/loading.gif';
import loading  from './loading.gif';
export {loading};
const Spinner=()=> {
    return(
        <>  <div className="text-center">
                <img src={loading} alt="laoding"/>
            </div>
        </>
    )       
}
export default Spinner;