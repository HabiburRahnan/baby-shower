import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";

const Login = () => {
  const { singIn, signInWithGoogle } = useContext(AuthContext);

  const location = useLocation();
  const navigate = useNavigate();
  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(e.currentTarget);
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    singIn(email, password)
      .then(() => {
        navigate(location?.state ? location.state : "/");
        Swal.fire("success Login!", "thank you!", "success");
      })
      .catch(() => {
        Swal.fire(
          "please provide right email and password!",
          "thank you!",
          "error"
        );
      });
  };
  return (
    <div className=" bg-gradient-to-r from-pink-500 via-purple-400 to-light-blue-400 rounded-2xl">
      <div className="p-20">
        <h2 className="text-3xl text-white my-10 text-center ">Please login</h2>

        <form
          onSubmit={handleLogin}
          className=" card-body w-full md:w-3/4 lg:w-1/2 mx-auto ">
          <div className="form-control">
            <label className="label">
              <span className="label-text ">Email</span>
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
              <span className="label-text ">Password</span>
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
            <p className="mb-5 text-white">
              <button onClick={handleGoogleSignIn} className="btn btn-ghost">
                Google
              </button>
            </p>
            <button type="submit" className="btn btn-primary">
              Login
            </button>
          </div>
        </form>

        <p className="text-center mt-4 ">
          Do not have an account{" "}
          <Link className="text-blue-600 font-bold" to="/register">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
