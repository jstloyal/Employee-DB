import React, { useState } from 'react';
import PageHeader from '../../components/PageHeader';
import EmployeeForm from './EmployeeForm';
import PeopleOutlineTwoToneIcon from '@material-ui/icons/PeopleOutlineTwoTone';
import AddIcon from '@material-ui/icons/Add';
import { InputAdornment, makeStyles, Paper, TableBody, TableCell, TableRow, Toolbar } from '@material-ui/core';
import { Search } from '@material-ui/icons';
import useTable from '../../components/useTable';
import * as employeeService from '../../services/employeeService';
import Controls from '../../components/Controls/Controls';
import Popup from '../../components/Popup';

const useStyles = makeStyles(theme => ({
  pageContent: {
    margin: theme.spacing(5),
    padding: theme.spacing(3),
  },
  searchInput: {
    width: '75%'
  },
  newButton: {
    position: 'absolute',
    right: '10px'
  }
}));

const headCells = [
  {id: 'fullName', label: 'Employees Name'},
  {id: 'email', label: 'Email Address (Personal)'},
  {id: 'mobile', label: 'Phone Number'},
  {id: 'department', label: 'Department', disableSorting: true},

]

function Employees() {
  const classes = useStyles();
  const [records, setRecords] = useState(employeeService.getAllEmployees());
  const [filterFn, setFilterFn] = useState({ fn: items => { return items; } });
  const [openPopup, setOpenPopup] = useState(false);

  const {
    TblContainer,
    TblHeader,
    TblPagination,
    recordsAfterPagingAndSorting
  } = useTable(records, headCells, filterFn);

  const handleSearch = e => {
    let target = e.target;
    setFilterFn({
      fn:items => {
        if (target.value === "")
          return items;
        else
          return items.filter(x => x.fullName.toLowerCase().includes(target.value))
      }
    })
  }

  const addOrEdit = (employee, resetForm) => {
    employeeService.insertEmployee(employee);
    resetForm();
    setOpenPopup(false);
    setRecords(employeeService.getAllEmployees());
  }

  return (
    <div>
      <PageHeader 
        title="New Employee"
        subTitle="Form design"
        icon={<PeopleOutlineTwoToneIcon fontSize="large" />}
      />
      <Paper className={classes.pageContent}>
        
        <Toolbar>
          <Controls.Input 
            label="Search Employees"
            className={classes.searchInput}
            InputProps={{
              startAdornment: (<InputAdornment position="start">
                <Search />
              </InputAdornment>)
            }}
            onChange={handleSearch}
          />
          <Controls.Button 
            text="Add New"
            variant="outlined"
            startIcon={<AddIcon />}
            className={classes.newButton}
            onClick={() => setOpenPopup(true)}
          />
        </Toolbar>
        <TblContainer>
          <TblHeader />
          <TableBody>
            {recordsAfterPagingAndSorting().map(
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
        <TblPagination />
      </Paper>
      <Popup 
        openPopup={openPopup}
        setOpenPopup={setOpenPopup}
        title="Employee Form"
      >
        <EmployeeForm 
          addOrEdit={addOrEdit}
        />
      </Popup>
    </div>
  )
}

export default Employees;
