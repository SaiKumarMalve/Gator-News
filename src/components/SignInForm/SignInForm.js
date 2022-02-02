import React, {useState} from 'react';
import {Form,Button, Spinner} from "react-bootstrap"
import "./SignInForm.scss";
import {values,size} from "lodash";
import {toast} from "react-toastify";
import {isEmailValid} from "../../utils/validations";

export default function SignInForm() {
    const[formData,setFormData]=useState(initialFormValue());
    const [signInLoading, setSignInLoading] = useState(false);
    
    const onSubmit=e=>{
        e.preventDefault();
        console.log(formData);

        let validationCount=0;
        values(formData).some(value => {
            value && validationCount++
            return null;
        });

        //validate the input size entered by matching args
        if(size(formData) !== validationCount){
            toast.warning("Enter all details in the mentioned fields ");
        } else{
            if(!isEmailValid(formData.email)){
                toast.warning("Invalid Email Entered");
            } else{
                setSignInLoading(true);
                toast.success("Gator Login Successful");
            }
        }

        console.log(validationCount);
    };


    const onChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };

    return (
        <div className="sign-in-form">
          <Form onSubmit={onSubmit} onChange={onChange}>
            <Form.Group>
              <Form.Control
                type="email"
                placeholder="Email Address"
                defaultValue={formData.email}
                name="email"
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                type="password"
                defaultValue={formData.password}
                name="password"
                placeholder="Password"
                
              />
            </Form.Group>
            <Button variant="primary" type="submit"> {!signInLoading ? "Login to Gator News" : <Spinner animation="border" />} </Button>
          </Form>
        </div>
      );
    }
  
  

  function initialFormValue() {
      return{
          email: "",
          password: ""
      };
  }