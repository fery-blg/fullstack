import { Formik, Form, Field } from "formik";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export function Login() {
  const { LoginSchema, handelLogin } = useContext(AuthContext);
  return (
    <>
      <div className="w-full p-6 m-auto rounded-md shadow-xl lg:max-w-xl bg-gradient-to-br from-purple-600 via-blue-400 to-blue-200 duration-500">
        <h1 className="text-3xl font-semibold text-center text-black-700 uppercase" style={{ marginBottom: "20px", transition: "all 0.3s ease" }}>Login</h1>
        <Formik
          initialValues={{
            email: "",
            password: ""
          }}
          validationSchema={LoginSchema}
          onSubmit={async (values) => await handelLogin(values.email, values.password)}
        >
          {({ errors, touched }) => (
            <Form className="mt-6">
              <div className="mb-2">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <Field
                  className="opacity-70 block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  name="email"
                />
                {errors.email && touched.email ? <div>{errors.email}</div> : null}
              </div>
              <div className="mb-2">
                <label
                  htmlFor="password"
                  className="block text-sm font-semibold text-gray-800"
                >Password</label>
                <Field
                  type="password"
                  className="opacity-70 block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  name="password"
                />
                {errors.password && touched.password ? <div>{errors.password}</div> : null}
              </div>
              <div className="mt-6">
                <button
                  type="submit"
                  name="submit"
                  className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600"
                >
                  Login
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
      <p className="mt-8 text-xs font-light text-center text-gray-700">
        Don't have an account?{" "}
        <Link
          to="/register"
          className="font-medium text-purple-600 hover:underline"
        >
          Sign up
        </Link>
      </p>
    </>
  );
}
