import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/UserContext';

const Register = () => {

    const { createUser, signInWithGoogle } = useContext(AuthContext);
    
       const handalSubmit = (e)=>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password);

        createUser(email, password)
        .then(result =>{
          const user = result.user;
          console.log('Register user',user);
          form.reset();
        })
        .catch(error =>{
          console.error(error);
        })
    }
    const handalSigninGoogle = ()=>{
      signInWithGoogle()
      .then(result =>{
        const user = result.user;
        console.log(user);
      })
      .catch(error => console.error(error))
    }
    return (
      <div>
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold">Please Register now!</h1>
            </div>
            <form
              onSubmit={handalSubmit}
              className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100"
            >
              <div className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter Your Name"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter Your email"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="Enter a password"
                    className="input input-bordered"
                    required
                  />
                  <label className="label">
                    <Link
                      to="/login"
                      className="label-text-alt link link-hover"
                    >
                      Already Have a account? Please Login
                    </Link>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Register</button>
                </div>
              </div>
            </form>
            <button onClick={handalSigninGoogle} className="btn btn-success mt-4">
              Sign In With Google
            </button>
          </div>
        </div>
      </div>
    );
};

export default Register;