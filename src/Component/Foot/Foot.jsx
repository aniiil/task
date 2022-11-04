import React from "react";
import "./foot.css";
import IM from "../Img/img3.jpg";
import { NavLink } from "react-router-dom";
import { FiFacebook,FiInstagram,FiYoutube } from "react-icons/fi";
import { TfiVimeo} from "react-icons/tfi";

const Foot = () => {
  return (
    <>
    <div className="main-foot">
      <div className="con-foot ">
        <div className="left-box ">
          <div className="imgbox">
            
            <img src={IM} alt="" className="img-fluid left-img" />
            <div className="half"></div>
          </div>
        </div>
        <div className="right-box">
            <div className="right-min col-md-8">
            <h2 className="right-head">Subscribe</h2>
            <p className="rightpara">to the newsletters and content update</p>
            <div className="right-input">
                <input type="email" name="email" className="r-mail"  placeholder="Enter a valid  email address" id="" />
              <NavLink href=""className="input-btn" >Submit</NavLink>
            </div>
            <div className="lower-di">
                <div className="low1">
                    <h2 className="low-head">
                        Location
                    </h2>
                    <p className="low-para">28 jackson Blvd ste 1020</p>
                    <p className="low-para">Chicago</p>
                    <p className="low-para">IL 60602340</p>
                </div>
                {/* ============================= */}
                <div className="low2">
                    <h2 className="low-head2">
                       Follow Us
                    </h2>
                    <div className="icon-box">
                    <FiFacebook className="ic"/>
                    <TfiVimeo className="ic"/>
                    <FiInstagram className="ic"/>
                    <FiYoutube className="ic"/>
                   
                    </div>
                    <p className="low-para2">Image from Freepik</p>
                    <p className="low-para2">@ 2020 Privacy policiy</p>
                </div>
            </div>
        </div>
       
        </div>
      </div>
      </div>

      {/* =============================Footer=================== */}
      
      
    </>
  );
};
export default Foot;
