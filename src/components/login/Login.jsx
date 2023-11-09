import React from "react";

export default function Login() {
  const [formData, setFormData] = React.useState({
    email: "",
    password: "",
    rememberMe: false,
    showPassword: false,
  });

  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(formData.email + " " + formData.password);

    if (formData.rememberMe) {
      console.log("Remember Me");
    }
  }

  const handleClickShowPassword = () => {
    setFormData({
      ...formData,
      showPassword: !formData.showPassword,
    });
  };

  return (
    <div className="login--page">
      <form className="form" onSubmit={handleSubmit}>
        <p className="login-text">Log in</p>
        <div className="form--inputs">
          <input
            type="email"
            placeholder="Email ID*"
            className="form--input"
            name="email"
            onChange={handleChange}
            value={formData.email}
            required
          />
          <p className="form--input--float">FORGOT EMAIL ID?</p>
        </div>
        <div className="form--inputs">
          <div className="form--password">
            <input
              type={formData.showPassword ? "text" : "password"}
              placeholder="Password*"
              className="form--input"
              name="password"
              onChange={handleChange}
              value={formData.password}
              required
            />
            {formData.showPassword ? (
              <img
                onClick={handleClickShowPassword}
                src="../../../src/assets/invisibility_green.png"
                alt="Hide Password"
              />
            ) : (
              <img
                onClick={handleClickShowPassword}
                src="../../../src/assets/visibility_green.png"
                alt="Show Password"
              />
            )}
          </div>

          <p className="form--input--float">FORGOT PASSWORD?</p>
        </div>

        <div className="form--marketing">
          <input
            id="okayToEmail"
            type="checkbox"
            name="rememberMe"
            onChange={handleChange}
            checked={formData.rememberMe}
          />
          <label htmlFor="okayToEmail">Remember Me</label>
        </div>
        <button className="form--submit">LOG IN</button>
        <div className="form--footer">
          <p className="form--footer--text">Not registered yet?</p>
          <p className="form--footer--reg">CREATE AN ACCOUNT</p>
        </div>
      </form>
    </div>
  );
}
