import React, { Component } from "react";
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

class Product extends Component {
  render() {
    return (
      <div className="forpadding">
        <div className="row">
          <div className="col-md-2 homeone">
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
                       <span className="clrwhite"><p>Products</p></span>
                       
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
          <div className="col-md-10">
            <div className="row  product">
              <div className="col-md-7">
                <p className="personalloan">
                  Personal Loan{" "}
                  <span>
                    <RiArrowDropDownFill size={28} />
                  </span>
                </p>
              </div>
              <div className="col-md-3 edits">
                <span className="productedit mx-5">
                  Edit <FaRegEdit />
                </span>
                <span className="productedit">
                  Add New{" "}
                  <span className="productplus">
                    <AiFillPlusCircle size={32} />
                  </span>
                </span>
              </div>
            </div>
            <div className="row threebox">
              <div className="col-md-3">
                <div className="row amountbox">
                  <div className="col-md-6">
                    <p className="productmaximum">Maximum fixed amount</p>
                    <p className="productmaximumvalue">Rs.5,00,000 </p>
                  </div>
                  <div className="col-md-6">
                    <p className="productmaximum">Maximum fixed amount</p>
                    <p className="productmaximumvalue">Rs.20,000 </p>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="row amountbox">
                  <div className="col-md-6">
                    <p className="productmaximum">Maximum Team</p>
                    <p className="productmaximumvalue">36 month </p>
                  </div>
                  <div className="col-md-6">
                    <p className="productmaximum">Maximum Term</p>
                    <p className="productmaximumvalue">3 month </p>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="row amountbox">
                  <div className="col-md-6">
                    <p className="productmaximum">Maximum Interest Rate</p>
                    <p className="productmaximumvalue">Rs.50,000 </p>
                  </div>
                  <div className="col-md-6">
                    <p className="productmaximum">Maximum Interest Rate</p>
                    <p className="productmaximumvalue">Rs.1000 </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <p className="personalloan mx-3 mt-3">Fee Sets</p>
            </div>
            <div className="row feeset">
              <div className="col-md-2">
                <div className="forleftborder">
                  <li className="productmaximum">Check bounce fee </li>
                  <p className="productmaximumvalue">Rs.750</p>
                </div>
              </div>
              <div className="col-md-2">
                <div className="forleftborder">
                  <li className="productmaximum">Late Fee</li>
                  <p className="productmaximumvalue">Rs.1</p>
                </div>
              </div>
              <div className="col-md-2">
                <div className="forleftborder">
                  <li className="productmaximum">Dummy Fee</li>
                  <p className="productmaximumvalue">Rs.3</p>
                </div>
              </div>
              <div className="col-md-2 mt-3">
                <li className="productmaximum">Penalty Fee</li>
                <p className="productmaximumvalue">Rs.3</p>
              </div>
            </div>
            <div className="row">
              <p className="personalloan mx-3 mt-3">Grace Period</p>
            </div>
            <div className="row feeset">
              <div className="col-md-4">
                <div className="forleftborder">
                  <li className="productmaximum">Late charge grace days </li>
                  <p className="productmaximumvalue">Rs.3</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="forleftborder">
                  <li className="productmaximum">Write off tolerance amount</li>
                  <p className="productmaximumvalue">Rs.0.0</p>
                </div>
              </div>
              <div className="col-md-4 mt-3">
                <li className="productmaximum">Deliquency grace days</li>
                <p className="productmaximumvalue">30 Days</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Product;
