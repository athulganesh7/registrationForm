import { useState } from 'react';
import './App.css';
import { Button, ButtonGroup, FormControlLabel, FormLabel, Radio, RadioGroup, TextField } from '@mui/material';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import TransitionsModal from './Modal';

function App() {
  const [emailValid, setEmailValid] = useState(false);
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [dob, setDob] = useState("");
  const [address, setAddress] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [numberValid, setNumberValid] = useState(false);

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const mobileNumberRegex = /^\d{10}$/;

  const invalid = (userInput) => {
    const { name, value } = userInput;

    if (name === 'emailid') {
      setEmail(value);
      setEmailValid(!value.match(emailRegex)); // If email is invalid, set emailValid to true
    }

    if (name === 'username') {
      setUserName(value);
    }

    if (name === 'address') {
      setAddress(value);
    }

    if (name === 'dob') {
      setDob(value);
    }

    if (name === 'mobileNumber') {
      setMobileNumber(value);
      setNumberValid(!value.match(mobileNumberRegex)); // If mobile number is invalid, set numberValid to true
    }
  };

  const modalShow = () => {
    if (!userName || !email || !address || !mobileNumber) {
      alert('Please fill in all fields.');
    } else {
      setShowModal(false);
      setTimeout(() => {
        setShowModal(true); // Trigger the modal after a slight delay
      }, 0);
    }
  };

  const resetButton = () => {
    setAddress("");
    setUserName("");
    setDob("");
    setMobileNumber("");
    setEmailValid(false);
    setEmail("");
    setNumberValid(false);
    setShowModal(false);
  };

  return (
    <>
      <div className='d-flex justify-content-center align-items-center' style={{ minHeight: '100vh', width: '100%', backgroundColor: 'black', flexDirection: 'column' }} >
        <div className='mt-5'>
          <h2 style={{ color: 'white' }}>Higher Secondary Admission</h2>
        </div>

        <form className='form-control d-flex ' style={{ backgroundColor: 'white', width: '30rem', height: '40rem', flexDirection: 'column ' }}>
          {/* username */}
          <TextField value={userName} name='username' onChange={(e) => invalid(e.target)} className='mt-3' id="standard-basic" label="Name" variant="standard" />

          {/* mobile number */}
          <TextField className='mt-3' name='mobileNumber' value={mobileNumber} onChange={(e) => invalid(e.target)} id="outlined-number" label="Mobile Number" type="number" />
          {/* invalid mobile */}
          {numberValid && <div className='text-danger fw-bolder'>Enter a valid mobile number (10 digits)</div>}

          {/* email */}
          <TextField value={email} onChange={(e) => invalid(e.target)} name='emailid' className='mt-3' id="standard-basic" label="Email" variant="standard" />
          {/* invalid email */}
          {emailValid && <div className='text-danger'>Enter a correct email id</div>}

          {/* address */}
          <TextField name='address' className='mt-3' value={address} onChange={(e) => invalid(e.target)} id="outlined-multiline-static" label="Address" multiline rows={4} />

          {/* dob */}
          <label className='mt-3' htmlFor="dob">Date of Birth:</label>
          <input value={dob} onChange={(e) => invalid(e.target)} type="date" id="dob" name="dob" max="2024-12-22" required />

          {/* gender */}
          <FormLabel className='mt-3' id="demo-row-radio-buttons-group-label">Gender</FormLabel>
          <RadioGroup row aria-labelledby="demo-row-radio-buttons-group-label" name="row-radio-buttons-group">
            <FormControlLabel value="female" control={<Radio />} label="Female" />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel value="other" control={<Radio />} label="Other" />
          </RadioGroup>

          {/* dropdown */}
          <DropdownButton className='mt-3' id="dropdown-basic-button" title="Courses">
            <Dropdown.Item href="#/action-1">Computer Science</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Biology Science</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Commerce</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Humanities</Dropdown.Item>
          </DropdownButton>

          {/* button group */}
          <ButtonGroup className='mt-3 d-flex justify-content-center' disableElevation variant="contained" aria-label="Disabled button group">
            <Button onClick={modalShow} className='bg-primary'>Submit</Button>
            <Button onClick={resetButton} className='bg-danger'>Reset</Button>
          </ButtonGroup>
        </form>

        {/* modal */}
        {showModal && <TransitionsModal email={email} mobileNumber={mobileNumber} showModal={showModal} userName={userName} />}
      </div>
    </>
  );
}

export default App;
