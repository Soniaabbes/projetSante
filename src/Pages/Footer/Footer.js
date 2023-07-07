import React from 'react'
import {BsFacebook,BsTwitter,BsInstagram}from "react-icons/bs";

function Footer() {
  return (
    <div style={{"color":'gray', "marginTop":"400px " ,'padding':"0px"}}>
   <p style={{"marginLeft":"48%  "}}>REJOIGNEZ NOUS  <br/>
   <p style={{"marginLeft":"5% "}}><BsFacebook/> <BsTwitter/> <BsInstagram/> </p>
   </p>
 <p  style={{"color":'gray', "marginBottom":"0px" ,"marginLeft":"45%  "}}>www.healthcare.com © 2023 </p>
    </div>
  )
}

export default Footer