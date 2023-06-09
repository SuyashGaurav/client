import React, {useState} from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
// import axios from "axios";

const Signup = () => {
    const navigate = useNavigate();

    const [user, setUser] = useState({
        name: "", email: "", phone: "", password: ""
    });
    let name, value;
    const handleInputs = (e) => {
        console.log(e);
        name = e.target.name;
        value = e.target.value;

        setUser({...user, [name]: value});
    }

    const PostData = async (e) => {
        e.preventDefault();

        const {name, email, phone, password} = user;

        const res = await fetch("http://localhost:5000/register", {
            method : "POST",
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify({
                name, email, phone, password
            })
        });

        const data = await res.json();
        if(res.status === 500 || !data){
            window.alert("Invalid Registration");
            console.log("Invalid Registration");
        } else{
            window.alert("Registration Successful");
            console.log("Registration Successful");
            navigate("../login", { replace: true });
        }
    }

  return (
    <>
    <section className="vh-100" style={{backgroundColor: '#eee'}}>
  <div className="container h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-lg-12 col-xl-11">
        <div className="card text-black" style={{borderRadius: '25px'}}>
          <div className="card-body p-md-5">
            <div className="row justify-content-center">
              <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

                <form method = "POST" className="mx-1 mx-md-4">
                {/* <form onSubmit={PostData} className="mx-1 mx-md-4"> */}

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input type="text" name="name" id="name" className="form-control" 
                       value={user.name} onChange={handleInputs} />
                      <label className="form-label" htmlFor="name">Name</label>
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input type="email" name="email" id="email" className="form-control"
                       value={user.email} onChange={handleInputs}/>
                      <label className="form-label" htmlFor="email">Email</label>
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input type="number" name="phone" id="phone" className="form-control" 
                       value={user.phone} onChange={handleInputs}/>
                      <label className="form-label" htmlFor="phone">Phone No</label>
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input type="password" name="password" id="password" className="form-control"
                       value={user.password} onChange={handleInputs} />
                      <label className="form-label" htmlFor="password">Password</label>
                    </div>
                  </div>

                  <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                    <input type="submit" name="signup" id="signup" className="btn btn-primary btn-lg" value= "Register" onClick={PostData}/>
                    {/* <button type="submit" name="signup" id="signup" className="btn btn-primary btn-lg">Register</button> */}
                  </div>
                  <div>
                  <NavLink style ={{color: 'blue'}} to = "/login">Already registered?</NavLink>
                  </div>

                </form>

              </div>
              <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                  className="img-fluid" alt="Sample image"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </>
  )
}

export default Signup