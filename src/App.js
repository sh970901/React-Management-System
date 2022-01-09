import './App.css';
import Customer from './components/Customer';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import {withStyles} from '@material-ui/core/styles';

const styles = theme =>({
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
    overflowX: "auto" //전체 바깥쪽에 해당하는 root는 x축에 오버플로우가 발생할수있도록
  },
  table: {
    minWidth: 1080
  }
})


function App(props) {
  const {classes} = props;
  const customers = [{
    'id': 1,
    'image': 'https://placeimg.com/64/64/1',
    'name': '홍길동',
    'birthday': '960903',
    'gender': '남',
    'job': '대학생'
  },
  {
    'id': 2,
    'image': 'https://placeimg.com/64/64/2',
    'name': '이승훈',
    'birthday': '970901',
    'gender': '남',
    'job': '대학생'

  },
  {
    'id': 3,
    'image': 'https://placeimg.com/64/64/3',
    'name': '이범기',
    'birthday': '010326',
    'gender': '여',
    'job': '대학생'

  }]
  //각 원소를 c라하고 순회를 함
  //map을 사용하면 키값을 줘야함
  console.log(props)
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
          
            {customers.map(c => {
              return (<Customer
                key={c.id}
                id={c.id}
                image={c.image}
                name={c.name}
                birthday={c.birthday}
                gender={c.gender}
                job={c.job}
              ></Customer>)
            })}
          

        </TableBody>
      </Table>
    </Paper>
  );
}

export default withStyles(styles)(App);
