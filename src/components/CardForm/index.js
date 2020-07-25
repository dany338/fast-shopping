import React, { useState, useRef } from 'react';
import Swal from 'sweetalert2';
/* Style Components */
import { Container } from './styled';
/* Hooks */
import { useUsers } from '../../infrastructure/hooks';
/* Hooks */
import { isValidEmail } from '../../infrastructure/config';

const CardForm = () => {
  const emailForm = useRef(null);
  const [ existing, setExisting ] = useState(false);
  const [ lookup, setLookup ] = useState(false);
  const { userMeRequest, userFormCustomerFieldChangeRequest, customer } = useUsers();

  const handleChangeRadio = e => {
    const { value } = e.currentTarget;
    if(value === 'existing') setExisting(true);
    else setExisting(false);
  };

  const handleChangeField = e => {
    const { value, name } = e.currentTarget;
    userFormCustomerFieldChangeRequest(value, name);
  };

  const handleLookup = () => {
    const email = emailForm.current.value;

    if(email !== '' && isValidEmail(email)) {
      const { msg, err } = userMeRequest(email);
      if(!err) setLookup(true);
      else {
        Swal.fire({
          title: 'ERROR!',
          icon: 'info',
          text: `Error ${msg}`,
          confirmButtonText: 'OK'
        })
      }
    }
    else {
      Swal.fire({
        title: 'OBLIGATORY FIELD!',
        icon: 'info',
        text: 'you must enter a valid value for the email!',
        confirmButtonText: 'OK'
      })
    }
  };

  return (
    <Container>
      <>
        <div className="Card--row">
          <h6 className="Card--field">Are you?</h6>
          <div className="Card--radio-buttons">
            <input type="radio" name="existing" value="new" onChange={(e) => handleChangeRadio(e)} /> <span>New Customer</span>
            <input type="radio" name="existing" value="existing" onChange={(e) => handleChangeRadio(e)} /> <span>Existing Customer</span>
          </div>
        </div>
        {!existing && (
          <>
            <div className="Card--row">
              <h6 className="Card--field">Full Name*</h6>
              <div className="Card--input--text">
                <input type="text" name="fullName" onChange={(e) => handleChangeField(e)} />
                <p style={{color: 'red'}}>
                  Full Name is required!
                </p>
              </div>
            </div>
            <div className="Card--row">
              <h6 className="Card--field">ID*</h6>
              <div className="Card--input--text">
                <input type="text" name="identification" onChange={(e) => handleChangeField(e)} />
                <p style={{color: 'red'}}>
                  ID is required!
                </p>
              </div>
            </div>
            <div className="Card--row">
              <h6 className="Card--field">Address*</h6>
              <div className="Card--input--text">
                <input type="text" name="address" onChange={(e) => handleChangeField(e)} />
                <p style={{color: 'red'}}>
                  ID is required!
                </p>
              </div>
            </div>
            <div className="Card--row">
              <h6 className="Card--field">Phone Number</h6>
              <div className="Card--input--text">
                <input type="text" name="phoneNumber" onChange={(e) => handleChangeField(e)} />
              </div>
            </div>
          </>
        )}
        {(!lookup) ? (
          <div className="Card--row">
            <h6 className="Card--field">Email*</h6>
            <div className="Card--input--text">
              <input type="text" name="email" ref={emailForm} onChange={(e) => handleChangeField(e)} />
              <p style={{color: 'red'}}>
                Email is required!
              </p>
            </div>
          </div>
        ) : (
          <>
            <div className="Card--row">
              <h3 className="Card--title">{`Welcome back, ${customer.fullName}`}</h3>
            </div>
            <div className="Card--row">
              <div className="Card--row--info">
                <b>ID:</b> <span>{customer.identification}</span>
                <b>Address:</b> <span>{customer.identification}</span>
                <b>Phone Number:</b> <span>{customer.phonenumber}</span>
                <b>Email:</b> <span>{customer.email}</span>
              </div>
            </div>
            <div className="Card--row">
              <div className="Card--link" onClick={() => setLookup(false)}>{`Not ${customer.fullName}? Lookup again`}</div>
            </div>
          </>
        )}
        {(existing && !lookup) && (
          <div className="Card--row">
            <div className="Card--button" onClick={() => handleLookup()}>Lookup</div>
          </div>
        )}
      </>
    </Container>
  )
};

export default CardForm;
