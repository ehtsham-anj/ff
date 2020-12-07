import React,  {Component}from 'react'
import {  Button,Form,FormGroup} from 'react-bootstrap'
import UserService from './services/UserService'

class Register extends Component {
  
    constructor(props) {

        super(props)
        
      this.state = {
        
          // step 2
          id: this.props.match.params.id,
          firstName:'',
          lastName:'',
          emailId:'',
          password:'',
         
      }
      this.changeFullNameHandler = this.changeFullNameHandler.bind(this);
      this.changeUserNameHandler = this.changeUserNameHandler.bind(this);
      this.saveOrUpdateUser = this.saveOrUpdateUser.bind(this);
    }
  
    
    componentDidMount(){
  
      // step 4
      if(this.state.id === '_add'){
          return
      }else{
          UserService.getUserById(this.state.id).then( (res) =>{
              let user = res.data;
              this.setState({firstName: user.firstName,
                  lastName: user.userName,
                  email : user.email,
                  password:user.password,
                 
              });
          });
      }        
  }
  saveOrUpdateUser = (e) => {
    e.preventDefault();
    let user = {firstName: this.state.firstName, lastName: this.state.lastName, email: this.state.email,
      password: this.state.password,};
    console.log('user => ' + JSON.stringify(user));

    // step 5
    if(this.state.id ='_add'){
        UserService.createUser(user ).then(res =>{
            this.props.history.push('/login');
        });
    }else{
        UserService.updateUser(user, this.state.id).then( res => {
            this.props.history.push('/login');
        });
    }
}
changeUserNameHandler= (event) => {
  this.setState({firstName: event.target.value});
}

changeFullNameHandler= (event) => {
  this.setState({lastName: event.target.value});
}

changeEmailAddressHandler= (event) => {
  this.setState({email: event.target.value});
}
changePasswordHandler= (event) => {
  this.setState({password: event.target.value});

}


render(){
    return (
        <div>
            <form className="signupform" style={{width:400, paddingLeft:60}} >
    <h1  className="text-danger text-center">REGISTRATION</h1>
  
    
        <div className = "form-group">
             <label> First Name: </label>
                <input placeholder="First Name" name="firstName" className="form-control" 
                      value={this.state.fullName} onChange={this.changeFullNameHandler}/>
               </div>
             <div className = "form-group">
                    <label>Last Name: </label>
             <input placeholder="Last Name" name="lastName" className="form-control" 
                    value={this.state.userName} onChange={this.changeUserNameHandler} />
                           </div>
                <div className = "form-group">
                   <label> Email-Id: </label>
    <input placeholder="Email Address" name="emailId" className="form-control" 
                 value={this.state.email} onChange={this.changeEmailAddressHandler}/>
            </div>
            <div className = "form-group">
                <label> Password: </label>
                       <input placeholder="Password" name="password" className="form-control" 
                           value={this.state.password} onChange={this.changePasswordHandler}/>
                                        </div>
                                       
                                       

                                   
 <Button onClick={this.saveOrUpdateUser}  className="btnpadreg mt-3" variant="primary" type="Sign Up">
    Sign Up
  </Button>
</form>
            
        </div>
    )
}
}

export default Register
