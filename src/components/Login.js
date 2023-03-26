import React, {useState} from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import Cookies from "universal-cookie";
const cookies = new Cookies();


const Login = () => {

  const navigate = useNavigate();

    const [user, setUser] = useState({
       email: "", password: ""
    });
    let name, value;
    const handleInputs = (e) => {
        console.log(e);
        name = e.target.name;
        value = e.target.value;

        setUser({...user, [name]: value});
    }

  const handleSubmit = async (e) => {
    // prevent the form from refreshing the whole page
    e.preventDefault();
    const {email, password} = user;

        const res = await fetch("http://localhost:5000/login", {
            method : "POST",
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify({
                email, password
            })
        });

        const data = await res.json();
        if(res.status === 400 || res.status  === 404 || !data){
            window.alert("Invalid Credentials");
            console.log("Invalid Credentials");
        } else{
            window.alert(`Welcome  ${email}`);
            console.log("Registration Successful");
            navigate("../", { replace: true });
        }
  }



  return (
    <>
    <section className="vh-100">
  <div className="container-fluid h-custom">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-md-9 col-lg-6 col-xl-5">
        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
          className="img-fluid" alt="Sample image"/>
      </div>
      <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
        <form>

          <div className="form-outline mb-4">
            <input type="email" name = "email" id="email"
             value={user.email} onChange={handleInputs} className="form-control form-control-lg"
              placeholder="Enter a valid email address" />
          </div>

          <div className="form-outline mb-3">
            <input type="password" name="password" id="password" 
            value={user.password} onChange={handleInputs} className="form-control form-control-lg"
              placeholder="Enter password" />
          </div>

          <div className="text-center text-lg-start mt-4 pt-2">
            <button type="button" className="btn btn-primary btn-lg"
            onClick={(e) => handleSubmit(e)}
               style ={{paddingLeft: '2.5rem', paddingRight: '2.5rem'}}>Login</button>
          </div>
        </form>
      </div>
    </div>
  </div>
  {/* <div
    className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary">
    <div className="text-white mb-3 mb-md-0">
      Copyright © 2020. All rights reserved.
    </div>

    <div>
      <a href="#!" className="text-white me-4">
        <i className="fab fa-facebook-f"></i>
      </a>
      <a href="#!" className="text-white me-4">
        <i className="fab fa-twitter"></i>
      </a>
      <a href="#!" className="text-white me-4">
        <i className="fab fa-google"></i>
      </a>
      <a href="#!" className="text-white">
        <i className="fab fa-linkedin-in"></i>
      </a>
    </div>

  </div> */}
</section>
    </>
  )
}

export default Login