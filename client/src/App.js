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




const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
    overflowX: "auto" //전체 바깥쪽에 해당하는 root는 x축에 오버플로우가 발생할수있도록
  },
  table: {
    minWidth: 1080
  }
})

// state = {
//   customers: ""
// }

// callApi = async () => {
//   const response = await fetch('/api/customers');
//   const body = await response.json();
//   return body;
// }

// componentDidMount(){
//   this.callApi()
//   .then(res=> this.setState({customers: res}))
//   .catch(err => console.log(err));
// }


function App(props) {

  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/customers')
      .then((res) => res.json())
      .then((body) => {
        setCustomers(body)
      })
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
          }) : ""}


        </TableBody>
      </Table>
    </Paper>
  );
}

export default withStyles(styles)(App);
