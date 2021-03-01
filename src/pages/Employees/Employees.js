import React, { useState } from 'react';
import PageHeader from '../../components/PageHeader';
import EmployeeForm from './EmployeeForm';
import PeopleOutlineTwoToneIcon from '@material-ui/icons/PeopleOutlineTwoTone';
import { makeStyles, Paper, TableBody, TableCell, TableRow } from '@material-ui/core';
import useTable from '../../components/useTable';
import * as employeeService from '../../services/employeeService';

const useStyles = makeStyles(theme => ({
  pageContent: {
    margin: theme.spacing(5),
    padding: theme.spacing(3),
  }
}));

const headCells = [
  {id: 'fullName', label: 'Employees Name'},
  {id: 'email', label: 'Email Address (Personal)'},
  {id: 'mobile', label: 'Phone Number'},
  {id: 'department', label: 'Department'},

]

function Employees() {
  const classes = useStyles();
  const [records, setRecords] = useState(employeeService.getAllEmployees());

  const {
    TblContainer,
    TblHeader
  } = useTable(records, headCells);

  return (
    <div>
      <PageHeader 
        title="New Employee"
        subTitle="Form design"
        icon={<PeopleOutlineTwoToneIcon fontSize="large" />}
      />
      <Paper className={classes.pageContent}>
        <EmployeeForm />
        <TblContainer>
          <TblHeader />
          <TableBody>
            {records.map(
              item => (
                <TableRow key={item.id}>
                  <TableCell>{item.fullName}</TableCell>
                  <TableCell>{item.email}</TableCell>
                  <TableCell>{item.mobile}</TableCell>
                  <TableCell>{item.department}</TableCell>
                </TableRow>
              )
            )}
          </TableBody>
        </TblContainer>
      </Paper>
    </div>
  )
}

export default Employees;
