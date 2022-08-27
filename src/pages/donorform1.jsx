import React, { useState }from "react";
import axios from "axios";
import "../CSS/dono_form.css"

function DonorForm1() {
  const [input, setInput] = useState({
    donorname: "",
    donoremail: "",
    donorcontact: "",
    donorcity: "",
    donorstate: "",
    donorpin: "",
    donorage: "",
    donorgender: "",
    donorbloodgroup: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setInput((prevInput) => {
      return {
        ...prevInput,
        [name]: value,
      };
    });
  }

  function handleClick(event) {
    event.preventDefault();
    console.log(input);
    const newForm = {
      donorname: input.donorname,
      donoremail: input.donoremail,
      donorcontact: input.donorcontact,
      donorcity: input.donorcity,
      donorstate: input.donorstate,
      donorpin: input.donorpin,
      donorage: input.donorage,
      donorgender: input.donorgender,
      donorbloodgroup: input.donorbloodgroup,

    }

    axios.post('http://localhost:4000/api/donorForm1', newForm)

    window.location='/'
  }

  
  return (
    <div className="container-sm">
      <h1>Donor Form</h1><br/>
      <form>
        <div className="form-group">
          <label>Name</label>
          <input
            onChange={handleChange}
            className="form-control form-control-lg"
            value={input.donorname}
            autoComplete="off"
            type="text"
            name="donorname"
            placeholder="Enter Your Full Name"
            required="true"
          ></input>
        </div>
        <div className="form-group">
          <label>EMAIL</label>
          <input
            onChange={handleChange}
            className="form-control form-control-lg"
            value={input.donoremail}
            autoComplete="off"
            type="email"
            name="donoremail"
            placeholder="Enter Your Email"
            required="true"
          ></input>
        </div>
        <div className="form-group">
          <label>CONTACT NO.</label>
          <input
            onChange={handleChange}
            className="form-control form-control-lg"
            value={input.donorcontact}
            autoComplete="off"
            type="tel"
            name="donorcontact"
            placeholder="Enter Your Contact Number"
            required="true"
          ></input>
        </div>
        <div className="form-group">
          <label>CITY</label>
          <input
            onChange={handleChange}
            className="form-control form-control-lg"
            value={input.donorcity}
            autoComplete="off"
            type="text"
            name="donorcity"
            placeholder="Enter Your City"
            required="true"
          ></input>
        </div>
        <div className="form-group">
          <label>STATE</label>
          <input
            onChange={handleChange}
            className="form-control form-control-lg"
            value={input.donorstate}
            autoComplete="off"
            type="text"
            name="donorstate"
            placeholder="Enter Your state"
            required="true"
            
          ></input>
        </div>
        <div className="form-group">
          <label>PIN</label>
          <input
            onChange={handleChange}
            className="form-control form-control-lg"
            value={input.donorpin}
            autoComplete="off"
            type="text"
            name="donorpin"
            placeholder="Enter Your PIN"
            required="true"
          ></input>
        </div>
        <div className="form-group">
          <label>AGE</label>
          <select
            onChange={handleChange}
            className="form-control form-control-lg"
            value={input.donorage}
            autoComplete="off"
            name="donorage"
            type="text"
            required="true"
            
            
          >
            <option>UNDER 18</option>
            <option>OVER 18</option>
          </select>
        </div><br/>
        <div className="form-group">
          <label>GENDER</label>
          <select
            onChange={handleChange}
            className="form-control form-control-lg"
            value={input.donorgender}
            autoComplete="off"
            name="donorgender"
            type="text"
          >
            <option>OTHER</option>
            <option>MALE</option>
            <option>FEMALE</option>
            
          </select>
        </div><br/>
        <div className="form-group">
          <label>BLOOD GROUP</label>
          <select
            onChange={handleChange}
            className="form-control form-control-lg"
            value={input.donorbloodgroup}
            autoComplete="off"
            name="donorbloodgroup"
            type="text"
          >
            <option>A+</option>
            <option>B+</option>
            <option>O+</option>
            <option>AB+</option>
            <option>A-</option>
            <option>B-</option>
            <option>O-</option>
            <option>AB-</option>
          </select>
        </div><br/>

        <button
          onClick={handleClick}
          className="btn btn-primary btn-lg btn-success"
        >
          SUBMIT
        </button>
      </form><br/><br/><br/>
    </div>
  );
}

export default DonorForm1;
