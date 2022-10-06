import React from "react"
import { Form, Icon, Button, Input } from "semantic-ui-react";


import image from "./static/img/img2.png";

export default class RegisterPage extends React.Component{
   

    render(){
      return(

            


            <div class="AuthContainer" style={{ backgroundImage:`url(${image})`}}>

              
            
              <div class="AuthDiv">
              <Form
                unstackable
                size="large"
              >
              <Form.Group>
              <Form.Field
                    control={Input}
                    label='First name'
                    placeholder='First name'
                    required
                />
                <Form.Field
                    control={Input}
                    label='Last name'
                    placeholder='Last name'
                    required

                />
              </Form.Group>
              <Form.Field
                id='form-input-control-error-email'
                control={Input}
                label='Email'
                placeholder='joe@schmoe.com'
                required

                />
                <Form.Field
                    control={Input}
                    label='Password'
                    placeholder='********'
                    type='password'
                    required

                />
                <Form.Field
                    control={Input}
                    label='Verify Password'
                    placeholder='********'
                    type='password'
                    required

                />
                 <Form.Field
                    id='form-button-control-public'
                    control={Button}
                    content='Create Account'
                    type='submit'
                    
                />




              </Form>


              </div>
               

            </div>
      );
    
    }




}