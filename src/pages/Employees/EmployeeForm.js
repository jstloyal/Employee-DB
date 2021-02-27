import React from 'react';
import { Grid } from '@material-ui/core';
import { useForm, Form } from '../../components/useForm';
import Controls from '../../components/Controls/Controls';
import * as employeeService from '../../services/employeeService';

const genderItems = [
  {id: 'male', title: 'Male'},
  {id: 'female', title: 'Female'},
  {id: 'other', title: 'Other'}
];

const initialValues = {
  id: 0,
  fullName: '',
  email: '',
  mobile: '',
  city: '',
  gender: 'male',
  departmentId: '',
  hireDate: new Date(),
  isPermanent: false,
};

function EmployeeForm() {

  const validate = () => {
    let temp = {};
    temp.fullName = values.fullName ? "" : "This field is required.";
    temp.email = (/$^|.+@.+..+/).test(values.email) ? "" : "Email is not valid.";
    temp.mobile = values.mobile.length > 9 ? "" : "Minimum 10 numbers required.";
    temp.departmentId = values.departmentId.length != 0 ? "" : "This field is required.";
    setErrors({
      ...temp
    });

    return Object.values(temp).every(x => x == "");
  }
 
  const {
    values,
    setValues,
    errors,
    setErrors,
    handleInputChange,
    resetForm
  } = useForm(initialValues);

  const handleSubmit = e => {
    e.preventDefault();
    if (validate())
      window.alert('testing');
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Grid container>
        <Grid item xs={6}>
          <Controls.Input 
            name="fullName"
            label="Full Name"
            value={values.fullName}
            onChange={handleInputChange}
            error={errors.fullName}
          />
          <Controls.Input 
            label="Email"
            name="email"
            value={values.email}
            onChange={handleInputChange}
            error={errors.email}

          />
          <Controls.Input 
            label="Mobile"
            name="mobile"
            value={values.mobile}
            onChange={handleInputChange}
            error={errors.mobile}
          />
          <Controls.Input 
            label="City"
            name="city"
            value={values.city}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={6}>
          <Controls.RadioGroup 
            name="gender"
            label="Gender"
            value={values.gender}
            onChange={handleInputChange}
            items={genderItems}
          />
          <Controls.Select 
            name="departmentId"
            label="Department"
            value={values.departmentId}
            onChange={handleInputChange}
            options={employeeService.getDepartmentCollection()}
            error={errors.departmentId}
          />
          <Controls.DatePicker
            name="hireDate"
            label="Hire Date"
            value={values.hireDate}
            onChange={handleInputChange}
          />
          <Controls.Checkbox
            name="isPermanent"
            label="Permanent Employee"
            value={values.isPermanent}
            onChange={handleInputChange}
          />

          <div>
            <Controls.Button
              text="Submit"
              type="submit"
            />
            <Controls.Button
              text="Reset"
              color="default"
              onClick={resetForm}
            />
          </div>
        </Grid>
      </Grid>
    </Form>
  )
}

export default EmployeeForm
