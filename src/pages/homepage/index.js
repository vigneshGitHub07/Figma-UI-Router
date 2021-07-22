
import React, { Component } from 'react';
import {Link} from 'react-router-dom';
// import DashBoard from './DashBoard';

 class Home extends Component {
     logIn=()=>{
     }
    
    render() {
        return (
            <div>
                <div className="row pageone">
       <div className="col-md-5 optacredit">
         {/* {vector} */}
         <h3 className="optacreditH ">OPTACREDIT</h3>
       </div>
       <div className="col-md-6 loginPage">
         <div className="row">
         <p className="login col-md-12">Login</p><br/>
         </div>
        
        <div className="row ">
        <input className="inputfiled col-md-6" type="text" placeholder="User ID"></input>
        </div>
        <div className="row mt-5">
        <input className="inputfiled col-md-6" type="text" placeholder="Password"></input>
        </div>
        <div className="row mt-4 ">
<p className="forgetP">Forgot Password</p>
        </div>
        <div className="row mt-5">
       <Link to='/d'><button type="button" className="loginbtn" >LOGIN</button></Link>
        </div>
        
    
       
        
       </div>
     </div>
<div >
  {/* <DashBoard /> */}
</div>
            </div>
        )
    }
}

export default Home;
