import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./App2.css";

function Edit() {
  
  const { id } = useParams();
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get("http://localhost:8084/property/" + id)
      .then((response) => setData(response.data))
      .catch((err) => console.log(err));
  }, );

  let handleSubmit = (e) => {
    e.preventDefault();
    axios.put("http://localhost:8084/property" , data).then((res) => {
      alert("Property Updated Successfully");
      navigate("/view");
    });
  };

  return (
    <div>
      <div
        id="edit2"
        className="d-flex w-100 vh-100 justify-content-center align-items-center "
      >
        <div className="w-50 border bg-light p-5">
          <form onSubmit={handleSubmit}>
            <h1>UPDATE PROPERTY DATA</h1>
            <br/>
            <div>
              <lable htmlFor="pid">Property ID :</lable><br/><br/>
              <input
                type="text"
                disabled
                name="pid"
                className="form-control"
                value={data.pid}
              />
            </div>
            <br/>
            <div>
              <lable htmlFor="address">Property Address :</lable><br/><br/>
              <input
                type="text"
                name="address"
                className="form-control"
                value={data.address}
                onChange={(e) => setData({ ...data, address: e.target.value })}
              />
            </div>
            <br/>
            <div>
              <lable htmlFor="type">Property Type :</lable><br/><br/>
              <input
                type="text"
                name="type"
                className="form-control"
                value={data.type}
                onChange={(e) => setData({ ...data, type: e.target.value })}
              />
            </div>
            <br/>
            <div>
              <lable htmlFor="status">Property Status :</lable><br/><br/>
              <input
                type="text"
                name="status"
                className="form-control"
                value={data.status}
                onChange={(e) => setData({ ...data, status: e.target.value })}
              />
            </div>
            <br />
            <button className="btn btn-info ">Update</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Edit;
