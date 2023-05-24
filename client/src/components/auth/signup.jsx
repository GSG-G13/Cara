/* eslint-disable react/no-unescaped-entities */
import { useFormik } from 'formik';
import * as Yup from 'yup';
import './auth.css';
import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: Yup.object({
      username: Yup.string().min(10).required('Username must be filled'),
      email: Yup.string().email().required('Email is required!'),
      password: Yup.string()
        .min(8, 'Password must be more than 8 characters')
        .required('Password is required'),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref('password')], 'The fields must match')
        .required('The confirm password field is required'),
    }),
    onSubmit: ({ username, password, email }, { resetForm }) =>
      fetch('api/v1/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password, email }),
      })
        .then((response) => response.json(response))
        .then((data) => {
          console.log(data);
          resetForm('');
          navigate(-1);
        })
        .catch((error) => {
          console.error(error);
        }),
  });

  return (
    <section className="signup">
      <div className="signup_box">
        <div className="left">
          <div className="top_link">
            <a href="#">
              <img
                src="https://drive.google.com/u/0/uc?id=16U__U5dJdaTfNGobB_OpwAJ73vM50rPV&export=download"
                alt=""
              />
              <Link to="/">Return home</Link>
            </a>
          </div>
          <div className="contact">
            <form onSubmit={formik.handleSubmit}>
              <h3>SIGN UP</h3>
              <input
                type="text"
                placeholder="USERNAME"
                name="username"
                className="form-button"
                value={formik.values.username}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.username && formik.errors.username ? (
                <div className="error">{formik.errors.username}</div>
              ) : null}
              <input
                type="text"
                placeholder="Email"
                className="form-button"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.email && formik.errors.email ? (
                <div className="error">{formik.errors.email}</div>
              ) : null}
              <input
                type="password"
                placeholder="PASSWORD"
                className="form-button"
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.password && formik.errors.password ? (
                <div className="error">{formik.errors.password}</div>
              ) : null}
              <input
                type="password"
                placeholder="CONFIRM PASSWORD"
                className="form-button"
                name="confirmPassword"
                value={formik.values.confirmPassword}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.confirmPassword &&
              formik.errors.confirmPassword ? (
                <div className="error">{formik.errors.confirmPassword}</div>
              ) : null}
              <button type="submit" className="submit">
                Let's Go
              </button>
            </form>
          </div>
        </div>
        <div className="right">
          <div className="right-text">
            <h2>LONYX</h2>
            <h5>A UX BASED CREATIVE AGENCY</h5>
          </div>
          <div className="right-inductor">
            <img
              src="https://lh3.googleusercontent.com/fife/ABSRlIoGiXn2r0SBm7bjFHea6iCUOyY0N2SrvhNUT-orJfyGNRSMO2vfqar3R-xs5Z4xbeqYwrEMq2FXKGXm-l_H6QAlwCBk9uceKBfG-FjacfftM0WM_aoUC_oxRSXXYspQE3tCMHGvMBlb2K1NAdU6qWv3VAQAPdCo8VwTgdnyWv08CmeZ8hX_6Ty8FzetXYKnfXb0CTEFQOVF4p3R58LksVUd73FU6564OsrJt918LPEwqIPAPQ4dMgiH73sgLXnDndUDCdLSDHMSirr4uUaqbiWQq-X1SNdkh-3jzjhW4keeNt1TgQHSrzW3maYO3ryueQzYoMEhts8MP8HH5gs2NkCar9cr_guunglU7Zqaede4cLFhsCZWBLVHY4cKHgk8SzfH_0Rn3St2AQen9MaiT38L5QXsaq6zFMuGiT8M2Md50eS0JdRTdlWLJApbgAUqI3zltUXce-MaCrDtp_UiI6x3IR4fEZiCo0XDyoAesFjXZg9cIuSsLTiKkSAGzzledJU3crgSHjAIycQN2PH2_dBIa3ibAJLphqq6zLh0qiQn_dHh83ru2y7MgxRU85ithgjdIk3PgplREbW9_PLv5j9juYc1WXFNW9ML80UlTaC9D2rP3i80zESJJY56faKsA5GVCIFiUtc3EewSM_C0bkJSMiobIWiXFz7pMcadgZlweUdjBcjvaepHBe8wou0ZtDM9TKom0hs_nx_AKy0dnXGNWI1qftTjAg=w1920-h979-ft"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
