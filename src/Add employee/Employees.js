import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import './Employees.css'


const Employees = () => {
  const initialValues = {
    fullname: '',
    fathername: '',
    gender: '',
    dateofbirth: '',
    maritalstatus: '',
    phone1: '',
    phone2: '',
    email: '',
    address: '',
    permaentaddress: '',
  };

  const validationSchema = Yup.object().shape({
    fullname: Yup.string().required('Full Name is required'),
    fathername: Yup.string().required('Father Name is required'),
    gender: Yup.string().required('Gender is required'),
    dateofbirth: Yup.string().required('Date of Birth is required'),
    maritalstatus: Yup.string().required('Marital Status is required'),
    phone1: Yup.string().required('Phone 1 is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    address: Yup.string().required('Your Address is required'),
    permaentaddress: Yup.string().required('your permanent address is required'),
  });

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      setSubmitting(true);
      await axios.post('http://localhost:3003/employee_data/add', values);
      alert('Form submitted successfully');
      resetForm();
    } catch (error) {
      console.error(error);
      alert('Error submitting form');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className='Total'>
    <div className='home01'>
      <div className="outsideborderr9999">
        <div className="employee-form-container000">
          <h2 className="form-title01">ADD EMPLOYEE</h2>
          <hr />
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form>

                <div className="employee-group98">
                  <label className="employee-label98" htmlFor="employeeid">Employee ID</label>
                  <Field className="employee-fields98" type="employee-fields" id="employeeid" name="employeeid" />
                  <ErrorMessage name="employeeid" component="div" className="error-message98" />
                </div>

                <div className="employee-group98">
                  <label className="employee-label98" htmlFor="fullName">Full Name</label>
                  <Field className="employee-fields98" type="employee-fields" id="fullname" name="fullname" />
                  <ErrorMessage name="fullname" component="div" className="error-message98" />
                </div>

                <div className="employee-group98">
                  <label className="employee-label98" htmlFor="fatherName">Father Name</label>
                  <Field className="employee-fields98" type="employee-fields" id="fathername" name="fathername" />
                  <ErrorMessage name="fathername" component="div" className="error-message98" />
                </div>
                <br/>
                <div className="employee-group98">
                  <label className="employee-labels198">Gender</label>

                  <label className="employee-labels98">
                    <Field type="radio" name="gender" value="Male" className="field-with-margin1" />
                    Male
                  </label>
                  <label className="employee-labels98">
                    <Field type="radio" name="gender" value="Female" className="field-with-margin1" />
                    Female
                  </label>
                  <label className="employee-labels98">
                    <Field type="radio" name="gender" value="Other" className="field-with-margin" />
                    Other
                  </label>

                  <ErrorMessage name="gender" component="div" className="error-message98" />
                </div>

                <div className="employee-group98">
                  <label className="employee-label98">Date of Birth</label>
                  <Field className="employee-fields98" type="date" id="dateOfbirth" name="dateofbirth" />

                </div>
                
                <ErrorMessage name="dateofbirth" component="div" className="error-message98" />
                <div className="employee-group98">
                  <label className="employee-labels298">Martial Status</label>

                  <label className="employee-labels98">
                    <Field type="radio" name="maritalstatus" value="Single" className="field-with-margin98" />
                    Single
                  </label>
                  <label className="employee-labels98">
                    <Field type="radio" name="maritalstatus" value="married" className="field-with-margin98" />
                    Married
                  </label>

                  <ErrorMessage name="maritalstatus" component="div" className="error-message98" />
                </div>

                <div className="employee-group98">
                  <label className="employee-label98" htmlFor="phone1">Phone No</label>
                  <Field className="employee-fields98" type="employee-fields" id="phone1" name="phone1" />
                  <ErrorMessage name="phone1" component="div" className="error-message98" />
                </div>

                {/* <div className="employee-group">
                  <label className="employee-label" htmlFor="phone2">Phone - 2</label>
                  <Field className="employee-fields" type="employee-fields" id="phone2" name="phone2" />

                </div> */}

                <div className="employee-group98">
                  <label className="employee-label98" htmlFor="email">Email</label>
                  <Field className="employee-fields98" type="employee-email" id="email" name="email" />
                  <ErrorMessage name="email" component="div" className="error-message98" />
                </div>

                <div className="employee-group98">
                  <label className="employee-label98" htmlFor="localAddress">Local Address</label>
                  <Field className="employee-fields98" id="address" type="employee-fields" name="address" />
                  <ErrorMessage name="address" component="div" className="error-message98" />
                </div>

                <div className="employee-group98">
                  <label className="employee-label98" htmlFor="permaentAddress">Permanent Address</label>
                  <Field className="employee-fields98" type="employee-fields" id="permaentaddress" name="permaentaddress" />
                  <ErrorMessage name="permaentaddress" component="div" className="error-message98" />
                </div>

                <div className="employee-group98">
                  <button className="employee-button98" type="submit" disabled={isSubmitting} data-aos="fade-up">
                    {isSubmitting ? 'Submitting...' : 'Submit'}
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Employees;