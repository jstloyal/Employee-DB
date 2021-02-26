import React from 'react';
import { createMuiTheme, CssBaseline, makeStyles, ThemeProvider } from '@material-ui/core';
import SideMenu from '../components/SideMenu';
import './App.css';
import Header from '../components/Header';
import PageHeader from '../components/PageHeader';
import PeopleOutlineTwoToneIcon from '@material-ui/icons/PeopleOutlineTwoTone';

const theme = createMuiTheme({
  pallete: {
    primary: {
      main: "#333996",
      light: "#3c44b126"
    },
    secondary: {
      main: "#f83245",
      light: "#f8324526"
    },
    background: {
      default: "#f4f5fd"
    },
  },
  shape: {
    borderRadius: '12px'
  },
  overrides: {
    MuiAppBar: {
      root: {
        transform: 'translateZ(0)'
      }
    }
  }
});

const useStyles = makeStyles({
  appMain: {
    paddingLeft: '320px',
    width: '100%',
  }
});

function App() {
  const classes = useStyles();
  
  return (
    <ThemeProvider theme={theme}>
      <SideMenu />
      <div className={classes.appMain}>
        <Header />
        <PageHeader 
          title="Page header"
          subTitle="Sample description"
          icon={<PeopleOutlineTwoToneIcon fontSize="large" />}
        />
      </div>
      <CssBaseline />
    </ThemeProvider>
  );
}

export default App;
