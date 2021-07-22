// import React, { Component } from 'react'
import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import {FaUserCircle} from 'react-icons/fa' 
import {RiArrowDropDownFill} from 'react-icons/ri'
import{FiSettings} from 'react-icons/fi'
import{BsBell} from 'react-icons/bs'
import {CgFileDocument} from 'react-icons/cg'
import {FaUser} from 'react-icons/fa'
import {FaBoxOpen} from 'react-icons/fa'
import {RiLoginCircleFill} from 'react-icons/ri'
import {TiSocialFacebookCircular} from 'react-icons/ti'
import {TiSocialLinkedinCircular} from 'react-icons/ti'
import{TiSocialTwitterCircular} from 'react-icons/ti'
import{BiChevronRight} from 'react-icons/bi'

 class DashBoard extends Component {
    render() {
        return (
            <div className="forpadding">
                 <div className="row">
               
               <div className="col-md-2 homeone">
               <p className="dassoptacredit">OPTACREDIT</p>
               <div className="row homeonerow pt-5">
                   <div className="dassuserdetails">
                   <FaUserCircle size={32} />
                <p className="ajesh mt-3">Ajesh <RiArrowDropDownFill size={28} /></p>
                   <div className="bellicons"> <span className="bell"><BsBell/></span> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span className="bell"><FiSettings/></span> </div>
                   <Link to='/d'> 
                   <div className="clrwhite mt-5">
                       <CgFileDocument size={28} />
                       <span className="clrwhite"><p>Application</p></span>
                       </div>
                       </Link>
                       <Link to='/c'>
                       <div className="clrwhite mt-5">
                       <FaUser size={28} />
                      <span className="clrwhite"> <p>Co-Lender</p></span> 
                       </div>
                       </Link>
                       <Link  to='/p'>
                       <div className="clrwhite mt-5">
                       <FaBoxOpen size={28} />
                      <span className="clrwhite"><p> Products</p></span> 
                       </div>
                       </Link>
                       <div className="footer">
                           <p>Last Login</p>  
                           <p>12/06/18 at 3pm</p> 
                          <Link to='/'> <p><span className="logout "><RiLoginCircleFill/> LOGOUT</span></p> </Link>
                       </div>
                   </div>
               </div>
           </div>
           <div className="hometwo col-md-3 mt-3">
           <div className="hometwouserdetails mt-4">
           <FaUserCircle size={46} />
           <p className="hometwoajesh">Ajesh Sinu</p>
           <a><span class="hometwoicons"><TiSocialFacebookCircular/><TiSocialLinkedinCircular/><TiSocialTwitterCircular/></span></a>
           </div>
           <div className="personalloan">
               <p>App - 123456787</p>
               <p>P1650</p>
               <p><span className="loan">Personal Loan </span> <span className="inprogress">inprogress</span> </p>
           </div>
           <div className="reqloanamount">
               <p>Required Loan Amount</p>
               <p>Rs 3,00,000</p>
           </div>
           <div >
               <p className="hometwodropdown my-3">Credit Report  <span className="leftarrow"><BiChevronRight/></span> </p>
           </div>
           <div >
               <p className="hometwodropdown my-3">Application Review <span className="leftarrow"><BiChevronRight/></span></p>
           </div>
           <div >
               <p className="hometwodropdown my-3">Personal Details <span className="leftarrow"><BiChevronRight/></span></p>
           </div>
           <div >
               <p className="hometwodropdown my-3">Document Upload <span className="leftarrow"><BiChevronRight/></span></p>
           </div>
           <div >
               <p className="hometwodropdown my-3">Loan Details <span className="leftarrow"><BiChevronRight/></span></p>
           </div>
           </div>
           <div className="homethree col-md-7 mt-3">
               <div className="homethreebutton">
<button className="homethreebtn mx-4">Save and Send Loan Offer Details</button><span><button className="homethreebtn">Disburse Loan</button></span>
</div>
<div className="details mt-3">
<button className="detailsbtn mx-4">Personal Details </button> <span><button className="detailsbtn mx-4">Additional Details</button></span><span><button className="detailsbtn">References </button></span>
</div>
<div className="tab mt-3">
<div className="table ">

<p className="tableP">General Information</p> 
</div>

<div class="row gendralinfo">
<div class="col-sm-2 tablecol">
  <p className="colhead">Name</p>
  <p className="colbody">General Information</p>
</div>
<div class="col-sm-2 tablecol">
  <p className="colhead">DOB</p>
  <p className="colbody">25-5-1989</p>
</div>
<div class="col-sm-2 tablecol">
  <p className="colhead">MOBILE PHONE</p>
  <p className="colbody">(+91) 9875463746</p>
</div>
<div class="col-sm-2 tablecol">
  <p className="colhead">TENURE</p>
  <p className="colbody">36 Months</p>
</div>
<div class="col-sm-2 tablecol">
  <p className="colhead">GENDER</p>
  <p className="colbody">Male</p>
</div>
</div>
<div class="row gendralinfo mt-3">
<div class="col-sm-2 tablecol">
  <p className="colhead">EMAIL</p>
  <p className="colbody">jessica@gmail.com</p>
</div>
<div class="col-sm-2 tablecol">
  <p className="colhead">CITY</p>
  <p className="colbody">Chennai</p>
</div>
<div class="col-sm-2 tablecol">
  <p className="colhead">NO.OF DEPENDENTS</p>
  <p className="colbody">5</p>
</div>
<div class="col-sm-2 tablecol">
  <p className="colhead">LOAN AMOUNT</p>
  <p className="colbody">Rs.3,00,000</p>
</div>
<div class="col-sm-2 tablecol">
  <p className="colhead">TENURE</p>
  <p className="colbody">12 months</p>
</div>
</div>
</div>
<div className="tab mt-3">
<div className="table ">

<p className="tableP">Identity Details</p> 
</div>

<div class="row gendralinfo">
<div class="col-sm-2 tablecol">
  <p className="colhead">AADHAAR</p>
  <p className="colbody"> 4587123695478963</p>
</div>
<div class="col-sm-2 tablecol">
  <p className="colhead">PAN NO</p>
  <p className="colbody">AAAPL1234C</p>
</div>
<div class="col-sm-2 tablecol">
  <p className="colhead">VOTER ID</p>
  <p className="colbody">569874</p>
</div>
<div class="col-sm-2 tablecol">
  <p className="colhead">DRIVING LICENCE</p>
  <p className="colbody">896244</p>
</div>
<div class="col-sm-2 tablecol">
  <p className="colhead">EDUCATION LEVEL </p>
  <p className="colbody">Graduate</p>
</div>
</div>
<div class="row gendralinfo mt-3">
<div class="col-sm-2 tablecol">
  <p className="colhead">BANK A/C NUMBER</p>
  <p className="colbody">1236547896</p>
</div>
<div class="col-sm-2 tablecol">
  <p className="colhead">BRANCH</p>
  <p className="colbody">Veppery</p>
</div>
<div class="col-sm-2 tablecol">
  <p className="colhead">BANK NAME</p>
  <p className="colbody">HDFC</p>
</div>
<div class="col-sm-2 tablecol">
  <p className="colhead">IFSC CODE</p>
  <p className="colbody">HDFC775446</p>
</div>
<div class="col-sm-2 tablecol">
  <p className="colhead">OFFICIAL MAIL</p>
  <p className="colbody">test@gmail.com</p>
</div>
</div>
</div>
<div className="tab mt-3">
<div className="table ">

<p className="tableP">Contact Address</p> 
</div>

<div class="row gendralinfotwo">
<div class="col-sm-3 mx-5 tablecol">
  <p className="colhead"> RESIDENTIAL ADDRESS</p>
  <p className="colbody">58/43C, Mission Hill, Velacherry
Chennai 643102</p>
</div>
<div class="col-sm-3 tablecol">
  <p className="colhead">PERMENANT ADDRESS</p>
  <p className="colbody">58/43C, Mission Hill, Velacherry
Chennai 643102</p>
</div>

</div>

</div>
           </div>
           </div>
                
            </div>
        )
    }
}
export default DashBoard;