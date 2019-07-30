import React from 'react';
import { Link } from 'react-router-dom';
import '../Login/Login.css';
import axios from 'axios';



class Login extends React.Component{
  constructor(props){   
    super(props);

    this.state = {
         fields: {},
         errors: {},
         email:'',
         password:'',
         msgdata:'',
         redirectToReferrer: false
    };
    this.login = this.login.bind(this);
    this.onChange = this.onChange.bind(this);
 }

 

 login(e){
  
   e.preventDefault();
   if(this.handleValidation()){
      //alert("Form submitted");
      if(this.state.email && this.state.password){
        let init = {
           method: 'POST',
           headers: { 'content-type': 'multipart/form-data' },
           mode: 'cors',
           cache: 'default',
           dataType: 'json',
           type:     'POST',
           async:    true,
         };
  
         const email= this.state.email
         const password= this.state.password
         
         
         let formData = new FormData();
  
         formData.append('loginid', email);
         formData.append('pass', password);
       
         axios.post('/tps_api/index.php?view=login', formData,init)
         .then(response => {
           console.log(response.data);
           sessionStorage.setItem('formData',JSON.stringify(response));
           localStorage.setItem('formData',JSON.stringify(response));
          //  const company_id = response.data.data.tpsData.company_id;
            // alert( response.data.data.tpsData.email);
          
           if(response.data.msgcode === 0){
            // alert(response.data.msgcode);
            this.props.history.push("/dashboard");
           }else{
              alert("Invalid username or Password");
             
          }
           
         })

         .catch(err => {
           console.log(err);
           this.setState({
             loading:false,
           })
         })
        
        
        }

   }
  
   else{ 
     // alert("Form has errors.")
   }

   
      
 }
 
     
 handleValidation(){
  let fields = this.state.fields;
  let errors = {};
  let formIsValid = true;

  //Name
   if(!fields["password"]){
      formIsValid = false;
      errors["password"] = "*Password is required";
   }


  //Email
  if(!fields["email"]){
     formIsValid = false;
     errors["email"] = "*Email is required";
  }
  

 this.setState({errors: errors});
 return formIsValid;
}


contactSubmit(e){
  e.preventDefault();
  if(this.handleValidation()){
     alert("Form submitted");
  }else{ 
     alert("Form has errors.")
  }

}

onChange(field, e){         
  let fields = this.state.fields;
  fields[field] = e.target.value;        
  this.setState({fields});
  this.setState({[e.target.name]:e.target.value});
}


     
    render() {
               
              
            return (
              <div className="login">
                  <div className="background"></div>
                  <div className="background2"></div>
                   <div className="loginForm"> 
                        <hgroup>
                        <h1>True Transport Login</h1>
                        </hgroup>
                        <form name="login">
                           
                        <div className="group">
                    <input ref="email" type="text" name="email" className="temail" placeholder="Enter Email or Phone No" 
                    value={this.state.fields["email"]} onChange={this.onChange.bind(this, "email")}  />
                     <span style={{color: "red"}}>{this.state.errors["email"]}</span>
             
                        </div>


                        <div className="group">
                            <input ref="password" type="password" name="password" className="tpass" placeholder="Enter Password"
               value={this.state.fields["password"]} onChange={this.onChange.bind(this, "password")} /><span className="highlight"></span><span className="bar"></span>
                          <span style={{color: "red"}}>{this.state.errors["password"]}</span>
                          
                        </div>
                        <button
                         
                        onClick={this.login.bind(this)} type="button" className="buttonui "> 
                        <span> Login </span>
                                <div className="ripples buttonRipples"><span className="ripplesCircle"></span></div>
                        </button>        
                        </form>
                        <div className="powered">
                        Create New<Link to="/register" > Register</Link>
                        </div>
                    </div>
              </div>
            );
          }
}


 
export default Login;