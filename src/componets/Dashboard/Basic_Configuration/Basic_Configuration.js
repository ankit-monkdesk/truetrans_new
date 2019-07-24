import React, { Component } from 'react';


class Basic_Configuration extends Component {
    render() {
      return (
        <div className="basic_configuration">
        <h2>Basic_Configuration Component</h2>

        <div id="sc-add-company">
            <h1>Add Company Details </h1>
            <div className="sc-container">
                <form encType="multipart/form-data" className="add_company_form">
                    <div className="field_company">
                        <div className="labelname">Name Of Legal Entity:</div>
                        <input type="text" name="legal_entity_name" value={this.state.fields["legal_entity_name"]} onChange={this.handleChange.bind(this, "legal_entity_name")} placeholder="Name of Legal entity" />
                        <span className="errorMsgcompany">{this.state.errors.legal_entity_name}</span>
                    </div>
                    
                    <div className="field_company">
                    <div className="labelname">City:</div>
                        <input type="text" name="city" value={this.state.fields["city"]} onChange={this.handleChange.bind(this, "city")} placeholder="City" />
                        <span className="errorMsgcompany">{this.state.errors.city}</span>
                    </div>
                    
                    <div className="field_company">
                    <div className="labelname">PAN NO:</div>
                        <input type="text" name="pan_no" value={this.state.fields["pan_no"]} onChange={this.handleChange.bind(this, "pan_no")} placeholder="PAN NO" />
                        <span className="errorMsgcompany">{this.state.errors.pan_no}</span>
                    </div>
                   
                    <div className="field_company">
                    <div className="labelname">GST NO:</div>
                        <input type="text" name="gst_no" value={this.state.fields["gst_no"]} onChange={this.handleChange.bind(this, "gst_no")} placeholder="GST NO" />
                        <span className="errorMsgcompany">{this.state.errors.gst_no}</span>
                    </div>
                    
                    <div className="field_company">
                    <div className="labelname">CIN NO:</div>
                        <input type="text" name="cin_no" value={this.state.fields["cin_no"]} onChange={this.handleChange.bind(this, "cin_no")} placeholder="CIN NO" />
                        <span className="errorMsgcompany">{this.state.errors.cin_no}</span>
                    </div>
                   
                    <div className="field_company">
                    <div className="labelname">Email:</div>
                        <input type="text" name="email" value={this.state.fields["email"]} onChange={this.handleChange.bind(this, "email")} placeholder="Email Id" />
                        <span className="errorMsgcompany">{this.state.errors.email}</span>
                    </div>
                   
                    <div className="field_company">
                    <div className="labelname">Mobile No:</div>
                        <input type="text" name="mobile_no" value={this.state.fields["mobile_no"]} onChange={this.handleChange.bind(this, "mobile_no")} placeholder="Contact Number" />
                        <span className="errorMsgcompany">{this.state.errors.mobile_no}</span>
                    </div>
                    
                    <div className="clr"></div>
                        <div className="labelname">&nbsp;&nbsp;Address:</div>
                        <textarea name="address" value={this.state.fields["address"]} onChange={this.handleChange.bind(this, "address")} placeholder="Address"></textarea>
                        <span className="errorMsgcompany">{this.state.errors.address}</span>
                   

                    <div className="btncompany">
                    <input type="submit" onClick={this.AddCompanySend.bind(this)} className="save" value="Save" />
                    <input type="submit" className="save_close" value="Save & Next" />
                    </div>
                </form>
            </div>
        </div>
    </div>
      );
    }
   
  }
  export default Basic_Configuration;