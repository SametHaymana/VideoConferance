import React  from "react";
import { Form,Container, Icon, Button, Input } from "semantic-ui-react";


import image from "./static/img/img1.png";







export default class LoginPage extends React.Component{
   

    render(){
      return(

            


            <div id="loginContainer" style={{ backgroundImage:`url(${image})`}}>

              
            
              <div id="loginDiv">
              <Form
                unstackable
                size="large"
              >
              <Form.Field>
                <label>E-mail</label>
                <Input iconPosition='left' placeholder='example@exaple.com'>
                  <Icon name='at' />
                  <input />
                </Input>
                </Form.Field>

              <Form.Field>
              <label>Password</label>

                <Input iconPosition='left' placeholder='********' type='password'>
                  <Icon loading name='certificate' />
                      <input />
                  </Input>
                </Form.Field>
                
                  
                <Button type='submit'>Login</Button>
              </Form>


              </div>
               

            </div>
      );
    
    }




}

