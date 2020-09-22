import React,{Component} from 'react';
import { Button, Navbar, Nav, NavItem, NavDropdown, MenuItem,FormControl ,Form,FormGroup,Input,Label} from 'react-bootstrap';
import './style.css';
import Reviews from '../Reviews/Reviews';

class Contact extends Component {
   constructor(){
   	super()
   	this.state ={
   		name:'',
   		email:'',
   		message:''
   	}
   	this.handleChange=this.handleChange.bind(this)
   	this.handleSubmit=this.handleSubmit.bind(this)
   }
   handleChange =(e)=>{
     this.setState({
     	[e.target.name] :e.target.value
     	
     })
   }
    handleSubmit =(e)=>{
    	e.PreventDefault()
    	const {name,email,message} =this.state
    
   }

 render(){
  return (
    <div className="row">
        <div className="column">
           <Form onChange ={this.handleSubmit} className="formgroup">
             <FormGroup>
              <Form.Label style={{color: 'white'}}>Enter Name</Form.Label>
              <Form.Control type="text" placeholder="Enter Name" onChange ={this.handleChange} />
              </FormGroup>
              <FormGroup>
              <Form.Label style={{color: 'white'}}>Enter address</Form.Label>
              <Form.Control type="email" placeholder="Enter Email" onChange ={this.handleChange} />
              </FormGroup>
              <FormGroup>
              <Form.Label style={{color: 'white'}}>Message</Form.Label>
              <Form.Control type="textarea" placeholder="Enter Message" onChange ={this.handleChange} />
              </FormGroup>
              <Button style={{backgroundColor :'rgb(120, 120, 120)', borderRadius: '12px'}} className="button">Submit</Button>
           </Form>
        </div>
        <div className="column" style={{padding :'60px'}}>
         <Reviews/>
        </div>
        <div class="column" style={{backgroundColor:'rgba(0, 128, 0, 0.3)', width:'100%' ,height:'300px'}} >
              <h2>Kenshoo Information</h2>
             
        </div>
     </div>

    
  );
}
}
export default Contact;