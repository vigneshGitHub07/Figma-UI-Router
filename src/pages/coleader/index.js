import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { FaUserCircle } from "react-icons/fa";
import { RiArrowDropDownFill } from "react-icons/ri";
import { FiSettings } from "react-icons/fi";
import { BsBell } from "react-icons/bs";
import { CgFileDocument } from "react-icons/cg";
import { FaUser } from "react-icons/fa";
import { FaBoxOpen } from "react-icons/fa";
import { RiLoginCircleFill } from "react-icons/ri";
import { FaRegEdit } from "react-icons/fa";
import { AiFillPlusCircle } from "react-icons/ai";
 class Coleader extends Component {
    render() {
        return (
            <div className="forpadding">
                <div className="row">
                <div className="col-md-2   homeone">
            <p className="dassoptacredit">OPTACREDIT</p>
            <div className="row homeonerow pt-5">
              <div className="dassuserdetails">
                <FaUserCircle size={32} />
                <p className="ajesh mt-3">
                  Ajesh <RiArrowDropDownFill size={28} />
                </p>
                <div className="bellicons">
                  {" "}
                  <span className="bell">
                    <BsBell />
                  </span>{" "}
                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{" "}
                  <span className="bell">
                    <FiSettings />
                  </span>{" "}
                </div>
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
                      <span className="clrwhite"> <p>Products</p> </span>
                       
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
          <div className="col-md-10 mt-3">
          <div className="row  product">
              <div className="col-md-6">
                <p className="personalloan">
                  Personal Loan{" "}
                
                </p>
              </div>
              <div className="col-md-2 pl-5  edits">
               
                <span className="productedit">
                  Add New{" "}
                  <span className="productplus">
                    <AiFillPlusCircle size={32} />
                  </span>
                </span>
              </div>
            </div>
            <div className="row box">
                <div className="col-md-3 coleadercol">
                    <div className="coleaderdetails">
                <FaUserCircle size={46} />
                <p className="ashikan">Ashokan CV</p>
                <p className="coleaderBlackClr">+91 95874 58142</p>
                </div>
                <div>
                    <p className="ashikan mt-3">E-mail</p>
                    <p className="coleaderBlackClr">jessica@gmail.com</p>
                </div>
                <div>
                    <p className="ashikan">Address</p>
                    <p className="coleaderBlackClr">58/43C, Mission Hill,
Chennai 643102</p> 
                </div>
                </div>
                <div className="col-md-8">
                    <div className="row fortexalineright">
                        <div className="col-md-9">
                            <p className="productedit ">Edit<span className="forline mx-3"><FaRegEdit /></span> </p>
                            
                        </div>
                        <div className="col-md-3">
                        <p className="productedit ">Active<span className=" mx-3"><button className="yesbtn">yes</button></span> </p>
                        </div>
                    </div>
                    <div className="row">
                        <p className="coleaderBlackClr mx-5">Loan Details</p>
                    </div>
                    <div className="row">
                        <div className="col-md-3">
                        <p className="coleaderBlackClr ml-4 ">Income Range</p>
                        </div>
                        <div className="col-md-4">
                        <p className="valuedetails"> Rs 1,00,000 to Rs 4,00,000</p>
                        </div>
                        <div className="col-md-2">
                        <p className="coleaderBlackClr ml-4 ">EMI to Income Ratio</p>
                        </div>
                        <div className="col-md-3">
                        <p className="valuedetails"> 1:6 </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-3">
                        <p className="coleaderBlackClr ml-4 ">Income Range</p>
                        </div>
                        <div className="col-md-4">
                        <p className="valuedetails"> Rs 30,000 to Rs 50,000</p>
                        </div>
                        <div className="col-md-2">
                        <p className="coleaderBlackClr ml-4 ">Age</p>
                        </div>
                        <div className="col-md-3">
                        <p className="valuedetails"> 25 to 50 </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-3">
                        <p className="coleaderBlackClr ml-4 ">Share</p>
                        </div>
                        <div className="col-md-4">
                        <p className="valuedetails"> 50/50</p>
                        </div>
                        
                    </div>
                </div>
            </div>
            
          </div>
                </div>
            </div>
        )
    }
}
export default Coleader