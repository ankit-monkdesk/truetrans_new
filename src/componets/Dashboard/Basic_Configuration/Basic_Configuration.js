import React, { Component } from 'react';
// import styled from 'styled-components';



class Basic_Configuration extends Component {
    render() {
      return (
        <div className="basic_configuration">
      
        <div id="sc-add-company">
            <h1>Basic Configuration </h1>
            <div className="sc-container">
                <form encType="multipart/form-data" className="add_company_form">
                    
                    <div className="radio_configration">
                    <label><strong>LR:</strong></label>
                        <input type="radio" name="lr" value="male" checked/> Auto number 
                        <input type="radio" name="lr" value="female"/> Manual
                    </div>
            
                    <div className="radio_configration">
                    <label><strong>Challan :</strong></label>
                        <input type="radio" name="challan" value="male" checked/> Auto number 
                        <input type="radio" name="challan" value="female"/> Manual
                    </div>
                  
                    
                   
                </form>
            </div>
        </div>
    </div>
      );
    }
   
  }
  export default Basic_Configuration;