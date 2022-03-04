import { fireEvent, render, screen } from '@testing-library/react';
import React from "react";
import SignUpForm from './SignUpForm';
import { shallow, mount } from 'enzyme';
// import * as enzyme from 'enzyme';
// import * as Adapter from 'enzyme-adapter-react-16';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import {isEmailValid} from "../../utils/validations";
//enzyme.configure({ adapter: new Adapter() });
configure({ adapter: new Adapter() });



describe ("login",()=>{

    let props, wrapper;

      test ("Validate Email on Sign Up",()=>{
          const test='alekhyagollam68@gmail.com'
          expect(isEmailValid(test)).toBe(true);
      });
    
      test ("Fail Validate on Wrong Input",()=>{
        const test='ABCDEFGH'
        expect(isEmailValid(test)).not.toBe(true);
    });
      test("Check Placeholder for Email",()=>{
        render(<SignUpForm/>);
        screen.queryByPlaceholderText(/email/i)
      });

    beforeEach(() => {
        let wrapper;
        props = {
          onSubmit: () => {
          },
        };
        wrapper = shallow(<SignUpForm {...props} />);
      });

    test("Login form Submitted",()=>{
        const mockFunction=jest.fn()
        render(<SignUpForm onSubmit={mockFunction}/>)
        const buttonNode=screen.getByRole("submit");
        fireEvent.submit(buttonNode);
        
          })

        
       

    })