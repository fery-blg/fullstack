import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";

import { Link } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import AuthContext from "../context/AuthContext";
import { useContext } from "react";
import { register } from "../service/service";

export function Register() {
  const { RegisterSchema, handelRegister } = useContext(AuthContext);
  return (
    <>
      <div className="w-full p-6 m-auto rounded-md shadow-xl lg:max-w-xl bg-gradient-to-br from-purple-600 via-blue-400 to-blue-200 duration-500">
        <h1 className="text-3xl font-semibold text-center text-black-700 uppercase">
          Sign up
        </h1>
        <Formik
          initialValues={{
            username: "",
            email: "",
            password: "",
          }}
          validationSchema={RegisterSchema}
          onSubmit={async (values) => {
            await handelRegister(values.username, values.email, values.password);
          }}
        >
          {({ errors, touched }) => (
            <Form className="mt-6">
              <div className="mb-2">
                <label
                  htmlFor="username"
                  className="block text-sm font-semibold text-gray-800"
                >
                  Username
                </label>
                <Field
                  className="opacity-70 block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  name="username"
                />
                {errors.username && touched.username ? <div>{errors.username}</div> : null}
              </div>
              <div className="mb-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-gray-800"
                >
                  Email
                </label>
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
                >
                  Password
                </label>
                <Field
                  type="password"
                  className="block opacity-70 w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
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
                  Register
                </button>
              </div>
            </Form>
          )}
        </Formik>
        <p className="mt-8 text-xs font-light text-center text-gray-700">
          Already registered?{" "}
          <Link
            to="/login"
            className="font-medium text-purple-600 hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </>
  );
}
