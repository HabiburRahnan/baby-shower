import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const [registerError, setRegisterError] = useState("");

  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    console.log(e.currentTarget);
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const photo = form.get("photo");
    const email = form.get("email");
    const password = form.get("password");
    setRegisterError("");

    if (password.length < 6) {
      setRegisterError(" Password should be at least 6 characters");
      return;
    } else if (!/^(?=.*[A-Z])(?=.*[\W_]).{6,}$/.test(password)) {
      setRegisterError("your password should have at least one upper case ");
      return;
    }

    // create user
    createUser(email, password)
      .then(() => {
        navigate(location?.state ? location.state : "/");
        Swal.fire("success register!", "thank you!", "success");
      })
      .catch(() => {
        Swal.fire("please provide right information!", "thank you!", "error");
      });
  };

  return (
    <div className=" bg-gradient-to-r from-pink-400 via-purple-400 to-light-blue-400 rounded-2xl">
      <div className="p-0 md:p-10">
        <h2 className="text-3xl my-10 text-center text-white">
          Please Register
        </h2>

        <form
          onSubmit={handleRegister}
          className="card-body w-full md:w-3/4 lg:w-1/2 mx-auto ">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              type="text"
              name="photo"
              placeholder="photo url"
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
              placeholder="email"
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
              placeholder="password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            {registerError && (
              <p className="text-white text-lg ">{registerError}</p>
            )}

            <button type="submit" className="btn btn-primary">
              Register
            </button>
          </div>
        </form>
        <p className="text-center mt-4 ">
          Already have an account
          <Link className="text-blue-600 font-bold" to="/login">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
