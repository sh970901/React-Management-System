import * as React from 'react';
import './App.css';
import Customer from './components/Customer';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { withStyles } from '@material-ui/core/styles';
import { useEffect } from 'react';
import { useState } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';




const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
    overflowX: "auto" //전체 바깥쪽에 해당하는 root는 x축에 오버플로우가 발생할수있도록
  },
  table: {
    minWidth: 1080
  },
  progress: {
    margin: theme.spacing(2)
  }
})

// state = {
//   customers: ""
//   completed: 0
// }

// callApi = async () => {
//   const response = await fetch('/api/customers');
//   const body = await response.json();
//   return body;
// }

// componentDidMount(){
//  this.timer = setInterval(this.progress, 20)
//   this.callApi()
//   .then(res=> this.setState({customers: res}))
//   .catch(err => console.log(err));
// }


// progress=()=> {
//   const {completd} = this.state;
//   this.setState({completed: completer >=100? 0 : completed +1})
// }

function App(props) {

  const [customers, setCustomers] = useState([]);
  const [progress, setProgress] = useState(0);


  useEffect(() => {
    fetch('http://localhost:5000/api/customers')
      .then((res) => res.json())
      .then((body) => {
        setCustomers(body)
      })
  }, []);
  

  useEffect(()=>{
    const timer = setInterval(() => {
      setProgress(progress=> progress >= 100 ? 0 : progress + 1);
    }, 200);

    return () => {
      clearInterval(timer);
    };
  }, []);


  const { classes } = props;
  return (

    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>번호</TableCell>
            <TableCell>이미지</TableCell>
            <TableCell>이름</TableCell>
            <TableCell>생년월일</TableCell>
            <TableCell>성별</TableCell>
            <TableCell>직업</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {customers ? customers.map(c => {
            return (<Customer
              key={c.id}
              id={c.id}
              image={c.image}
              name={c.name}
              birthday={c.birthday}
              gender={c.gender}
              job={c.job}
            ></Customer>)
          }) : 
          <TableRow>
            <TableCell colSpan="6" align='center'>
              <CircularProgress className = {classes.progress} variant= "determinate" value= {progress}></CircularProgress>
            </TableCell>
          </TableRow>
          }


        </TableBody>
      </Table>
    </Paper>
  );
}

export default withStyles(styles)(App);
