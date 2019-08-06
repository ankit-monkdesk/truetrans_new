import React from 'react';
import '../Registration/Registration.css';
import { Link } from 'react-router-dom';
import base64 from 'base-64';
import FlashMessage from 'react-flash-message';
import axios from 'axios';
class Registration extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            fields: {},
            errors: {},
             mobileno:'',
            loading:false,
            message:false,
            request_time:'',
            otp:'',
            msgcode:'',
            msg:false,
            company_id:''

        }
        this.handleChange = this.handleChange.bind(this);
        this.MobileNoChange = this.MobileNoChange.bind(this);
        this.sendMobileVerifyOtp = this.sendMobileVerifyOtp.bind(this);
        this.RegistrationDetailSend = this.RegistrationDetailSend.bind(this);
      }
 
      MobileNoChange(e) {
        //const message = value.slice(0, maxLength);
        this.setState({ [e.target.name]: e.target.value });
      }
      
      sendMobileVerifyOtp(e) {
        e.preventDefault();
        const mobileno= this.state.mobileno
        
        this.setState({
          loading:true,
          message:true,
          msg:true,
        })
       
       // const passdata = mobileno
        let formData = new FormData();
        formData.append('mobile', mobileno);
        let init = {
          method: 'POST',
          headers: { 'content-type': 'multipart/form-data' },
          mode: 'cors',
          cache: 'default',
          dataType: 'json',
          type:     'POST',
          async:    true,
          
        };

        axios.post('/tps_api/index.php?view=mobile_verify',formData,init)
        .then(response => {
          
          const tm = response.data.request_time;
          const otp = response.data.data;
          const msg1 = response.data.MSG;
         
         // alert(msg);
      
          //var bytes = base64.decode(otp);
         
          this.setState({
            request_time:tm,
            otp:otp,
            msg:msg1,
            msgcode:response.data.msgcode
          });
          
          
        })
        .catch(err => {
          console.log(err);
          this.setState({
            loading:false,
            message:false,
            msg:false

          })
        })
  
      }
      
    
      RegistrationDetailSend(e){
        e.preventDefault();
          // alert(this.state.mobileno);
        if(this.handleValidation()){

          var bytes = base64.decode(this.state.otp);

          if(bytes !== this.state.fields.verifyno){
             alert ('OTP NOT VALID PLEASE CHECK YOUR OTP');
            return false;
          }

          let init = {
            method: 'POST',
            headers: { 'content-type': 'multipart/form-data' },
            mode: 'cors',
            cache: 'default',
            dataType: 'json',
            type:     'POST',
            async:    true,
          };
          
          const name= this.state.fields.name
          const email= this.state.fields.email
          const mobileno= this.state.mobileno
          // const verifyno= this.state.fields.verifyno
          const password= this.state.fields.password
          const re_password= this.state.fields.cpassword
          
          if(password !== re_password){
            alert("Password Does Not Match");
            return false;
          }
          let formData = new FormData();
  
          formData.append('name', name);
          formData.append('email', email);
          formData.append('phone', mobileno);
          // formData.append('verifyno', verifyno);
          formData.append('pwd', password);
          formData.append('cpwd', re_password);

          formData.append('request_time', this.state.request_time);
        axios.post('/tps_api/index.php?view=register',formData,init)
        .then(response => {
          console.log(response.data.msgcode);
          const msgcode= response.data.msgcode;
          const company_id = response.data.data.tpsData.company_id;
          // localStorage.setItem('formData');
          if(msgcode===0){
            alert("successfully Registred");
            this.props.history.push("/");
          }
          this.setState({
            company_id:company_id
          })
          // if(response.data.msgcode === 0){
          //   alert(response.data.msgcode);
          //   this.props.history.push("/dashboard");
          //  }else{
          //     alert("Invalid username or Password");
             
          // }
        })
        .catch(err => {
          console.log(err);
        })
      
       
        
       }else{
         alert("Please Fill Up Fields");
         this.props.history.push("/register");
       }
        

      }
     
      /**VALIDATION REGISTRATION FORM HERE..... */
      handleValidation(){
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;
   
        //Name
        if(!fields["name"]){
           formIsValid = false;
           errors["name"] = "*Name is required";
        }
   
        // if(typeof fields["name"] !== "undefined"){
        //    if(!fields["name"].match(/^[a-zA-Z]+$/)){
        //       formIsValid = false;
        //       errors["name"] = "Only letters Allow";
        //    }        
        // }
   
        //Email
        if(!fields["email"]){
           formIsValid = false;
           errors["email"] = "*Email is Required";
        }
   
        if(typeof fields["email"] !== "undefined"){
           let lastAtPos = fields["email"].lastIndexOf('@');
           let lastDotPos = fields["email"].lastIndexOf('.');
   
           if (!(lastAtPos < lastDotPos && lastAtPos > 0 && fields["email"].indexOf('@@') === -1 && lastDotPos > 2 && (fields["email"].length - lastDotPos) > 2)) {
              formIsValid = false;
              errors["email"] = "Email is not valid";
            }
       } 
       
   
    if(!fields["verifyno"]){
     formIsValid = false;
     errors["verifyno"] = "*Verify Code Required";
   } 
   if(typeof fields["verifyno"] !== "undefined"){
     if(!fields["verifyno"].match(/^[0-9]+$/)){
        formIsValid = false;
        errors["verifyno"] = "Only Digits Allow";
     }        
   }

       

   
   if(!fields["password"]){
     formIsValid = false;
     errors["password"] = "*Password Is Required";
   } 
   
   if(!fields["cpassword"]){
     formIsValid = false;
     errors["cpassword"] = "*Conform Password Is Required";
   } 
   
       this.setState({errors: errors});
       return formIsValid;
   }
   
  
    handleChange(field, e){         
        let fields = this.state.fields;
        fields[field] = e.target.value;        
        this.setState({fields});
        //console.log(fields)
        
    }

    render() {
      const error =  <FlashMessage duration={3000} persistOnHover={true}>
      <span className="errormsg">{this.state.msg}</span>
        </FlashMessage>;

      const success =  <FlashMessage duration={2000}>
      <span className="sendmsg">{this.state.msg}</span>
        </FlashMessage>; 
  
      // const password= this.state.fields.password
      // const re_password= this.state.fields.cpassword
      // var bytes = base64.decode(this.state.otp);
            return (
              
              <div className="register">
            
     {/* <Dashboard company_id_blank={this.state.company_id}/> */}
                   <div className="background1"></div>
                  <div className="background3"></div>
                {/* {this.loadingOrmessage()} */}
                   <div className="registerForm"> 
                        <hgroup>
                        <h1>True Transport Register</h1>
                        {/* <span class="icon novi-icon icon-circle icon-bordered icon-lg icon-default mdi mdi-account-multiple-outline"></span> */}
                        </hgroup>
                        <form encType="multipart/form-data">
                        <div className="group">
                            <input type="text" placeholder="Name" name="name" className="tname" value={this.state.fields["name"]} onChange={this.handleChange.bind(this, "name")}/><span className="highlight"></span><span className="bar"></span>
                          
                            <span className="errorMsg">{this.state.errors.name}</span>
                        </div>
                        <div className="group">
                            <input type="email" placeholder="Email" name="email" className="temail" value={this.state.fields["email"]} onChange={this.handleChange.bind(this, "email")}/><span className="highlight"></span><span className="bar"></span>
                           
                            <span className="errorMsg">{this.state.errors.email}</span>
                        </div>
                        <div className="group">
                            <input type="number" placeholder="Mobile No" name="mobileno" value={this.state.mobileno} onChange={this.MobileNoChange} className="tmobile" minLength="11"/><span className="highlight"></span><span className="rbar"></span>
                         
                            <button onClick= {this.sendMobileVerifyOtp} className="btn btn-deluge btn-sm" id="verifymobileno" name="verifymobileno" type="button">Send OTP</button>
                            { this.state.msgcode===0 && this.state.message ? success :''}
                            { this.state.msgcode===1 && this.state.message ? error :''}
                           
                            {/* { this.state.msgcode===0 && this.state.message ? success :this.state.message && this.state.msgcode===1 ? error :''} */}
                         
                           
                            {/* <span className="errorMsg">{this.state.errors.mobileno}</span> */}
                        </div>
                        <div className="group">
                            <input type="text" placeholder="Verify Code" name="verifyno" className="tvcode" value={this.state.fields["verifyno"]} onChange={this.handleChange.bind(this,"verifyno")}/><span className="highlight"></span><span className="bar"></span>
                            <span className="errorMsg">{this.state.errors.verifyno}</span>
                        </div>
                        <div className="group">
                            <input type="password"  placeholder="Password" name="password" className="tpass" value={this.state.fields["password"]} onChange={this.handleChange.bind(this,"password")}/><span className="highlight"></span><span className="bar"></span>
                            <span className="errorMsg">{this.state.errors.password}</span>
                           
                        </div>
                        <div className="group">
                            <input ref="cpassword" type="password" placeholder="Confirm Password" name="cpassword" className="tpass" value={this.state.fields["cpassword"]} onChange={this.handleChange.bind(this,"cpassword")}/><span className="highlight"></span><span className="bar"></span>
                            <span className="errorMsg">{this.state.errors.cpassword}</span>
                            {/* {(password !== re_password && re_password !=='')  ? passwordNotMatch:''} */}
                          
                        </div>
                            <button onClick={this.RegistrationDetailSend.bind(this)} type="button" className="buttonui "> <span> Register </span>
                                <div className="ripples buttonRipples"><span className="ripplesCircle"></span></div>
                            </button>     
                        </form>
                        <div className="powered">
                        You have Already Account ? <Link to="/" className="link_login">Login</Link>
                        </div>

                    </div>
              </div>
            );
          }
}



export default Registration;