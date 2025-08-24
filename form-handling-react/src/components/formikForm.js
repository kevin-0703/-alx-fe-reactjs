import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email format").required("Email is required"),
    password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
});
const FormikForm = () => (
    <Formik initialValues={{ name: '', email: '', password: '' }} validationSchema={validationSchema} onSubmit={(values) => { console.log(values); }}>
        {() => (
            <Form>
                <Field type="text" name="name" placeholder="Enter your name" />
                <ErrorMessage name="name" component="div" />
                <Field type="email" name="email" placeholder="Enter your email" />
                <ErrorMessage name="email" component="div" />
                <Field type="password" name="password" placeholder="Enter your password" />
                <ErrorMessage name="password" component="div" />
                <button type="submit">Register</button>
            </Form>
        )}
    </Formik>
);
export default FormikForm;