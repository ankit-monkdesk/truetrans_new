import React, { Component } from 'react';

const Inputbox = props => <div className="field_company">
<div className="labelname">{props.labelname}:</div>
<input type={props.type} name={props.name}  placeholder={props.placeholdername} />
<span className="errorMsgcompany">{props.ErrorMsg}</span> 
</div>

const ButtonForm = props => <div className="btncompany">
<input type={props.type} className={props.className} value={props.value} />
</div>


class Branch extends Component {
  
    
    render() {
      
      return (
        <div className="branch">
             <div id="sc-add-company">
                    <h1>Add Branch</h1>
                    <div className="sc-container">
                        <form encType="multipart/form-data" className="add_company_form">
                            {Inputbox({labelname:'Name',type:'text',name:'bname',placeholdername:'Enter Name',ErrorMsg:''})}
                            {Inputbox({labelname:'Address',type:'text',name:'address',placeholdername:'Enter Address',ErrorMsg:''})}
                            {Inputbox({labelname:'City',type:'text',name:'city',placeholdername:'Enter City',ErrorMsg:''})}
                            {Inputbox({labelname:'State',type:'text',name:'state',placeholdername:'Enter State',ErrorMsg:''})}
                            {Inputbox({labelname:'Country',type:'text',name:'country',placeholdername:'Enter Country',ErrorMsg:''})}
                            {Inputbox({labelname:'Phone No',type:'text',name:'phone_no.',placeholdername:'Enter Phone No.',ErrorMsg:''})}
                            {Inputbox({labelname:'Email',type:'text',name:'email',placeholdername:'Enter Email',ErrorMsg:''})}
                            {Inputbox({labelname:'Contact Person',type:'text',name:'contact_person',placeholdername:'Enter Contact Person',ErrorMsg:''})}
                            {Inputbox({labelname:'Mobile No',type:'text',name:'mobile_no',placeholdername:'Enter Mobile No.',ErrorMsg:''})}
                            {Inputbox({labelname:'GST No',type:'text',name:'gst_no',placeholdername:'Enter GST No',ErrorMsg:''})}
                            {ButtonForm({type:'submit',className:'save',value:'Save'})}
                            {ButtonForm({type:'submit',className:'save_close',value:'Save & Next'})}
                        </form>
                    </div>
              </div>
                        
        </div>
      );
    }
   
  }
  export default Branch;