import Lottie from "lottie-react";
import registerLottieData from "../../assets/Animation1.json";
import { useContext, useState } from "react";
import AuthContext from "../../context/AuthContext";
import SocialLogin from "../../shared/SocialLogin";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    createUser(email, password)
      .then((result) => {
        setError(null);
        form.reset();
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left w-96">
          <Lottie animationData={registerLottieData}></Lottie>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form className="card-body" onSubmit={handleSubmit}>
            <h1 className="text-5xl font-bold">Register now!</h1>

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
            {error && (
              <div className="alert alert-error shadow-lg my-2">
                <span>{error}</span>
              </div>
            )}

            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
          </form>

          <div className="divider">OR</div>

          <div className="px-5 mb-5">
            <SocialLogin />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
