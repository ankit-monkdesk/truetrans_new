import React, { Component } from 'react';
//import { Route,HashRouter as Router,Link,Switch } from 'react-router-dom';
import { Route,HashRouter as Router,Link,Switch} from 'react-router-dom';
import styled from 'styled-components';

/* Components */
import Profile from './Profile/Profile';
import Lorry_Receipt from './Lorry_Receipt/Lorry_Receipt';
import Invoice from './Invoice/Invoice';
import Challans from './Challans/Challans';
import Bank_Cashbook from './Bank_Cashbook/Bank_Cashbook';
import Reports from './Reports/Reports';
import Master from './Master/Master';
import Add_company from './Add_company/Add_company';
import Basic_Configuration from './Basic_Configuration/Basic_Configuration';
import List_company from './Add_company/List_company';
import Branch from './Master/Branch';

/**STYLE COMPONET CSS HERE */
const LeftSidebar = styled.div`
width: 260px;
height: 100%;
position: fixed;
top: 0;
left: 0;
border: none;
bottom: 0;
z-index: 1;
box-shadow: 0 10px 30px -12px rgba(0, 0, 0, 0.42), 0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2);
right: auto;
overflow-y: auto;
flex-direction: column;
display: flex;
outline: none;
flex: 1 0 auto;
background: linear-gradient(60deg, #66bb6a, #43a047);
`;

const Logo = styled.div`
padding: 15px 15px;
z-index: 4;
position: relative;
background: darkcyan;
`;

const LinkImg = styled.a`
color: #FFF;
display: block;
padding: 5px 0;
font-size: 18px;
text-align: left;
font-family: "Roboto", "Helvetica", "Arial", sans-serif;
font-weight: 400;
line-height: 30px;
text-transform: uppercase;
text-decoration: none;
background-color: transparent;
`;

const InSideLinkDiv = styled.div`
width: 30px;
display: inline-block;
max-height: 30px;
margin-left: 10px;
margin-right: 15px;
`;

const Icon = styled.img`
top: 15px;
width: 35px;
border: 0;
position: absolute;
vertical-align: middle;
`;

const MenuSideBar = styled.div`
width: 260px;
height: calc(100vh - 75px);
z-index: 4;
overflow-y: auto;
overflow-x: hidden;
position: relative;
`;

const Ul = styled.ul`
position: unset;
list-style: none;
margin-top: 20px;
padding-top: 0;
padding-left: 0;
margin-bottom: 0;
padding-bottom: 0;
`;

// const A = styled.a`
// color: #FFF;
// text-decoration: none;
// `;

const MenuSpace = styled.div`
width: auto;
margin: 10px 15px 0;
display: block;
padding: 10px 15px;
position: relative;
transition: all 300ms linear;
font-family: "Roboto", "Helvetica", "Arial", sans-serif;
font-weight: 300;
line-height: 1.5em;
border-radius: 3px;
background-color: transparent;
box-sizing: border-box;
text-align: left;
align-items: center;
justify-content: flex-start;
text-decoration: none;
color: inherit;
border: 0;
cursor: pointer;
outline: none;
user-select: none;
vertical-align: middle;
-webkit-appearance: none;
-webkit-tap-highlight-color: transparent;
`;

const Name = styled.div`
color: #FFF;
margin: 0;
font-size: 16px;
font-family: "Roboto", "Helvetica", "Arial", sans-serif;
font-weight: 300;
line-height: 30px;
flex: 1 1 auto;
min-width: 0;
position: relative;
right: -46px;
top: 9px;
`;

const Span = styled.span`
top: 0;
left: 0;
width: 100%;
height: 100%;
display: block;
z-index: 0;
overflow: hidden;
position: absolute;
border-radius: inherit;
pointer-events: none;
`;


/////////
const Header = styled.header`
    color: #555555;
    width: calc(100% - 260px);
    height: 70px;
    border: 0;
    display: block;
    padding: 10px 0;
    z-index: 1029;
    position: absolute;
    box-shadow: none;
    min-height: 50px;
    transition: all 150ms ease 0s;
    padding-top: 10px;
    border-bottom: 0;
    border-radius: 3px;
    margin-bottom: 0;
    background-color: #607d8b29;
    top: 0;
    left: auto;
    right: 0;
    box-sizing: border-box;
    flex-shrink: 0;
    flex-direction: column;

`;
const Button = styled.button`
width: auto;
    cursor: pointer;
    background: transparent;
    font-size: 16px;
    border-radius: 3px;
    color: #fff;
    border: 2px solid #fff;
    margin: 0 1em;
    padding: 10px;
    -webkit-transition: 0.5s all ease-out;
    transition: 0.5s all ease-out;
    float: right;
    margin-top: 8px;
  &:hover {
    background-color: palevioletred;
    color: white;
  }
`;

//  const ImgPro = styled.img`
//     float:right;
//     height: 30px;
//     margin: 10px;
//     cursor: pointer;
//     display: inline-block;
//  `;

 const Dropdowncont = styled.div`
 display: none;
 background-color: #f9f9f9;
 min-width: 160px;
 box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
 z-index: 1;     
`;

 const Dropdown = styled.div`
      position: relative;
      display: inline-block;
      float: right;
      cursor: pointer;
      &:hover ${Dropdowncont}{
        display:block;
        position: absolute;
    right: 0;
    width: 200px;
      }
 `;
 const IconDrop = styled.i`
 margin-right: 10px;
 font-size: 30px !important;
    
 `;
 const Content = styled.div`
 margin-left: 270px;
 margin-top: 70px;
 font-size: medium;
 `;


 
 let LeftMenu = props =>  <Link to={props.link} onClick={props.click}>
  <MenuSpace>
    <Icon src="https://img.icons8.com/ios-glyphs/30/000000/user-male-circle.png"/>
    <Name className={props.iname}>{props.menuname}{props.fa_icon}</Name>
    <Span></Span>
  </MenuSpace>
  </Link>;

class Dashboard extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //       company_id:''
  //   }
  // }
  logout(){
    sessionStorage.removeItem('formData');
    localStorage.removeItem('formData');
    this.props.history.push("/");
  }

 
  
  render() {
   
  

    // const company_id = this.state.company_id;
    // alert(company_id);
    const sessionData = localStorage.getItem('formData');
    const AllFormData = JSON.parse(sessionData)

    return (
     
      <div className="main_dashboard">
            
         <Router >
            <div>
          <LeftSidebar>
            <Logo>
              <LinkImg href="#">
                <InSideLinkDiv>
                  <Icon src="https://img.icons8.com/material/24/000000/flow-chart.png"/>
                </InSideLinkDiv>
                Creative Tim
              </LinkImg>
            </Logo>
            <MenuSideBar>
              <Ul>
                <LR></LR>
                {/* {LeftMenu({link:'lorry_receipt',menuname:'Lorry Receipt (LR)'})} */}

                {LeftMenu({link:'invoice',menuname:'Invoice'})}

                {LeftMenu({link:'challans',menuname:'Challans'})}

                {LeftMenu({link:'bank_cashbook',menuname:'Bank & Cash book'})}

                {LeftMenu({link:'reports',menuname:'Reports'})}

                <Master1></Master1>
                <Company></Company>
              </Ul>
            </MenuSideBar>
        </LeftSidebar>

   
      
        <Header>
          
          <Dropdown>
                {/* <h5>{AllFormData.data.data.tpsData.first_name}</h5> */}
                <IconDrop className="fa fa-user" ></IconDrop>
                <IconDrop className="fa fa-caret-down"></IconDrop>
                <Dropdowncont>
                   <Link className="prof_link" to="/profile" >Profile</Link>
                   {AllFormData.data.data.tpsData.user_type ==='Admin' && <Link className="prof_link" to="/basic_configuration">Basic Configuration</Link>}
                   <Link className="prof_link" to="" onClick={this.logout.bind(this)}>Logout</Link>
                  
                   
                </Dropdowncont>           
          </Dropdown>

         
        </Header>
{/*         
          <div className="dashboard_main">
              <div className="img_dash">
              <img src="https://www.gstatic.com/webp/gallery/1.jpg"/>
              </div>
              <div className="welcome_board">Welcome To True Transform
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                 Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                  when an unknown printer took a galley of type and scrambled it to make a type
                   specimen book. It has survived not only five centuries, but also the leap into 
                   electronic typesetting, remaining essentially unchanged. It was popularised in the 
                   1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more 
                   recently with desktop publishing software like Aldus PageMaker including versions of 
                   Lorem Ipsum.</p>
              </div>
            </div> */}
            
              {AllFormData.data.data.tpsData.company_id ==='' && AllFormData.data.data.tpsData.user_type ==='Admin' ? <div className="cmp_name"> <Link to="/addcompany"><Button>+Add company</Button> </Link></div>:''}
              
         
                  <Switch>
                    <Content>
                           <Route path="/profile" component={Profile} /> 
                           <Route path="/lorry_receipt" component={Lorry_Receipt} />     
                           <Route path="/invoice" component={Invoice} />
                           <Route path="/challans" component={Challans} />
                           <Route path="/bank_cashbook"  component={Bank_Cashbook}  />
                           <Route path="/reports" component={Reports}  />
                           <Route path="/master" component={Master} />
                           <Route path="/addcompany" component={Add_company} /> 
                           <Route path="/basic_configuration" component={Basic_Configuration} />
                           <Route path="/list_company" component={List_company} />
                           <Route path="/branch" component={Branch}/>
                    </Content> 
                  </Switch>
               
           </div> 
            </Router>
        </div>  
        

     
    );
  }
 
}
 
/**LEFT SIDE MENU DROPDOWN COMPANY */
class Company extends Component {
  constructor() {
    super();
    
    this.state = {
      showMenu: false,
    };
    
    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }
  
  showMenu(event) {
    event.preventDefault();
    
    this.setState({ showMenu: true }, () => {
      document.addEventListener('click', this.closeMenu);
    });
  }
  
  closeMenu() {
    this.setState({ showMenu: false }, () => {
      document.removeEventListener('click', this.closeMenu);
    });
  }

  render() {
    return (
      <div>
        {LeftMenu({link:'',click:this.showMenu,menuname:'Company',iname:'name_right_icon',fa_icon:<i className="fa fa-angle-down"></i>})}
        {
          this.state.showMenu
            ? (
              <ul className="menu">
                <li className="arrow_set"><i className="fa fa-arrow-right"></i> <Link to="/addcompany">Add Company</Link> </li>
                <li className="arrow_set"><i className="fa fa-arrow-right"></i> <Link to="/list_company">List Company</Link> </li>
              </ul>
            )
            : (
              null
            )
        }
      </div>
    );
  }
}

/**LEFT SIDE MENU DROPDOWN MASTER MENU */
class Master1 extends Component {
  constructor() {
    super();
    
    this.state = {
      showMenu: false,
    };
    
    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }
  
  showMenu(event) {
    event.preventDefault();
    
    this.setState({ showMenu: true }, () => {
      document.addEventListener('click', this.closeMenu);
    });
  }
  
  closeMenu() {
    this.setState({ showMenu: false }, () => {
      document.removeEventListener('click', this.closeMenu);
    });
  }

  render() {
    return (
      <div>
        {LeftMenu({link:'master',click:this.showMenu,menuname:'Master',iname:'master',fa_icon:<i className="fa fa-angle-down"></i>})}
        {
          this.state.showMenu
            ? (
              <ul className="menu">
                <li className="arrow_set"><i className="fa fa-arrow-right"></i> <Link to="/branch">Branch</Link> </li>
                <li className="arrow_set"><i className="fa fa-arrow-right"></i> <Link to="/consigner">Consigner</Link> </li>
                <li className="arrow_set"><i className="fa fa-arrow-right"></i> <Link to="/consignee">Consignee</Link> </li>
                <li className="arrow_set"><i className="fa fa-arrow-right"></i> <Link to="/supplier_truck_owner">Supplier / Truck Owner</Link> </li>
                <li className="arrow_set"><i className="fa fa-arrow-right"></i> <Link to="/truck_lorry">Truck No. / Lorry No.</Link> </li>
                <li className="arrow_set"><i className="fa fa-arrow-right"></i> <Link to="/bank_cash">Bank and Cash</Link> </li>
                <li className="arrow_set"><i className="fa fa-arrow-right"></i> <Link to="/tax_rate">Tax Rate</Link> </li>
                <li className="arrow_set"><i className="fa fa-arrow-right"></i> <Link to="/uom">UoM</Link> </li>
                <li className="arrow_set"><i className="fa fa-arrow-right"></i> <Link to="/payment">Mode of Payment </Link> </li>
                <li className="arrow_set"><i className="fa fa-arrow-right"></i> <Link to="/account_ledger">Account Ledger </Link> </li>
                <li className="arrow_set"><i className="fa fa-arrow-right"></i> <Link to="/account_group">Account Group </Link> </li>
              </ul>
            )
            : (
              null
            )
        }
      </div>
    );
  }
}

/**LEFT SIDE MENU DROPDOWN Lorry Receipt MENU */
class LR extends Component {
  constructor() {
    super();
    
    this.state = {
      showMenu: false,
    };
    
    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }
  
  showMenu(event) {
    event.preventDefault();
    
    this.setState({ showMenu: true }, () => {
      document.addEventListener('click', this.closeMenu);
    });
  }
  
  closeMenu() {
    this.setState({ showMenu: false }, () => {
      document.removeEventListener('click', this.closeMenu);
    });
  }

  render() {
    return (
      <div>
         {LeftMenu({link:'lorry_receipt',click:this.showMenu,menuname:'Lorry Receipt (LR)',iname:'lr',fa_icon:<i className="fa fa-angle-down"></i>})}
        {/* {LeftMenu({link:'master',click:this.showMenu,menuname:'Master',iname:'master',fa_icon:<i className="fa fa-angle-down"></i>})} */}
        {
          this.state.showMenu
            ? (
              <ul className="menu">
                <li className="arrow_set"><i className="fa fa-arrow-right"></i><Link to="/create_booking_lr">Create LR / LR Booking</Link> </li>
                <li className="arrow_set"><i className="fa fa-arrow-right"></i><Link to="/assign_lr">Assign LR</Link> </li>
              </ul>
            )
            : (
              null
            )
        }
      </div>
    );
  }
}
export default Dashboard;