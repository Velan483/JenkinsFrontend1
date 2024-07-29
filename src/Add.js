import axios from "axios";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./App2.css";

function Add() {
  const [inputData, setInputData] = useState({
    pid: "",
    address: "",
    type: "",
    status:"",
  });

  const naviget = useNavigate();

  let handleSubmit = (e) => {
    e.preventDefault();
    let result = validateValues(inputData);
    
    if (result === true) {
      axios
        .post("http://localhost:8084/property", inputData)
        .then((res) => {
          alert("Property added Successfully");
          naviget("/view");
          console.log(res.data);
        })
        .catch((err) => console.log(err));
    } 
  };

  const validateValues = (inputData) => {
    if (inputData.address.length === 0) {
      alert("Please enter Property Address !!! ");
      return false;
    } else if (inputData.type.length === 0) {
      alert("Please enter Property type !!!");
      return false;
    } else if (inputData.status.length === 0) {
      alert("Please enter Property Status !!!");
      return false;
    } else {
      return true;
    }
  };

  return (
    <div
      id="add2"
      className="d-flex w-100 vh-100 justify-content-center align-items-center "
    >
      <div className="w-50 border bg-light p-5">
        <form onSubmit={handleSubmit}>
          <h1>ADD PROPERTY DATA</h1><br/>
          <div>
            <lable htmlFor="address">Property Address :</lable> <br/><br/>
            <input
              type="text"
              name="address"
              className="form-control"
              onChange={(e) =>
                setInputData({ ...inputData, address: e.target.value })
              }
            />
          </div>
          <br/>
          <div>
            <lable htmlFor="type">Property Type :</lable><br/><br/>
            <input
              type="text"
              name="type"
              className="form-control"
              onChange={(e) =>
                setInputData({ ...inputData, type: e.target.value })
              }
            />
          </div>
          <br/>
          <div>
            <lable htmlFor="status">Property Status :</lable><br/><br/>
            <input
              type="text"
              name="status"
              className="form-control"
              onChange={(e) =>
                setInputData({ ...inputData, status: e.target.value })
              }
            />
          </div>
          <br />
          <button className="btn btn-info ">Submit</button>
        </form>

        
      </div>
    </div>
  );
}

export default Add;
