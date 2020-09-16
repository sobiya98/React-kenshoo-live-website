// eslint-disable-next-line
import React from 'react';
//install rreact bootstrap - npm install react-bootstrap bootstrap
import {Button, Navbar, Nav,FormControl ,Form, Card,CardGroup} from 'react-bootstrap';
//no use of this file just for your understanding..
import './style.css';
import './Style.scss';
import { SiAcademia } from "react-icons/si";


const Home= (props)=>{
	return(
      <div className="div1">
           <div>
            <Navbar bg="light" expand="lg">
               <Navbar.Brand href="#home">Kenshoo</Navbar.Brand>
                 <Navbar.Toggle aria-controls="basic-navbar-nav" />
                 <Navbar.Collapse id="basic-navbar-nav">
                   <Nav className="mr-auto">
                     <Nav.Link href="#Industries">Industries</Nav.Link>
                     <Nav.Link href="#Solutions">Solutions</Nav.Link>
                     <Nav.Link href="#Products">Products</Nav.Link>
                     <Nav.Link href="#Resource">Resource</Nav.Link>
                     <Nav.Link href="#Company">Company</Nav.Link>   
                   </Nav>
                   <Form inline>
                     <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                     <Button variant="outline-success">Search</Button>
                   </Form>
                </Navbar.Collapse>
               </Navbar>
            </div>
       <div>
         <div className ="float-child">
         <br /><br/>
         <h1>Total market intelligence.Totally intelligent marketing.</h1><br/>
           <p>It's a new era for digital marketing, with new challenges and opportunities. From the contextual relevance of your data to making sound, fast decisions across all of the most important go-to-market channels to amazing performance and unbiased measurement—we have you covered today and tomorrow.
             <br />
             <br />
Join the world's most successful brands and agencies who leverage the Kenshoo platform for smart decisions and strong outcomes that empower your business to achieve strategic growth.</p>
         </div>
         <div className="float-child">
            <div className="images-selector">
             <ul class='circle-container'>
              <li><img src='https://kenshoo.com/wp-content/uploads/2020/06/Amazon_060120.png-.png' /></li>
              <li><img src='https://kenshoo.com/wp-content/uploads/2020/06/Snapchat_060120.png' /></li>
              <li><img src='https://kenshoo.com/wp-content/uploads/2020/06/Facebook_060120.png' /></li>
              <li><img src='https://kenshoo.com/wp-content/uploads/2020/06/Microsoft_060120-1.png' /></li>
              <li><img src='https://kenshoo.com/wp-content/uploads/2020/06/Pinterest_060120.png' /></li>
              <li><img src='https://kenshoo.com/wp-content/uploads/2020/06/Instagram_060120.png' /></li>
              <li><img src='https://kenshoo.com/wp-content/uploads/2020/06/Apple_060120.png' /></li>
              <li><img src='https://kenshoo.com/wp-content/uploads/2020/06/Walmart_060120.png' /></li>
            </ul>
        </div>
        </div>
       </div>
         
        <h3>An open platform for closed loop marketing</h3> <br/><br/>
         <CardGroup>
            <Card style={{backgroundColor :'#add8e6', padding :'20px'}}>
              <Card.Img variant="top" src="https://kenshoo.com/wp-content/uploads/2020/06/Pinterest_060120.png" width="100" height="300"/>
              <Card.Body>
                <Card.Title>Strategy</Card.Title>
                <Card.Text>
                  SaaS solutions and services to guide strategic planning of digital programs based on insights derived from a configurable data lake and your optimal media mix.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card style={{backgroundColor :'#e0ffff', padding :'20px'}}>
              <Card.Img variant="top" src="https://kenshoo.com/wp-content/uploads/2020/06/Instagram_060120.png" />
              <Card.Body>
                <Card.Title>Activation</Card.Title>
                <Card.Text>
                  Industry-leading, cross channel campaign management based on a foundation of data intelligence to drive marketing performance and efficiency with predictive budget management.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card style={{backgroundColor :'#add8e6', padding :'20px'}}>
              <Card.Img variant="top" src="https://kenshoo.com/wp-content/uploads/2020/06/Walmart_060120.png" width="200" height="300" />
              <Card.Body>
                <Card.Title>Measurement</Card.Title>
                <Card.Text>
                  Testing, auditing and incrementality measurement solutions that bring speed, integrity and transparency to attribution and media mix for seamless workflows from insight to action to business value.
                </Card.Text>
              </Card.Body>
            </Card>
       </CardGroup>
       <br/><br/><h1>Why Kenshoo?</h1>
     </div>  

		)

}

export default Home;