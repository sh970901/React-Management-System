import './App.css';
import Customer from './components/Customer';

function App() {
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
    'name': '이주희',
    'birthday': '010326',
    'gender': '여',
    'job': '대학생'

  }]
  return (
    <div className="gray-background">
      {
        customers.map(c => {
          return (
            <Customer
              key ={c.id}
              id={c.id}
              image={c.image}
              name={c.name}
              birthday={c.birthday}
              gender={c.gender}
              job={c.job}
            ></Customer>
          )
        })
        //각 원소를 c라하고 순회를 함
        //map을 사용하면 키값을 줘야함
      }


      {/* <Customer
        id={customers[0].id}
        image={customers[0].image}
        name={customers[0].name}
        birthday={customers[0].birthday}
        gender={customers[0].gender}
        job={customers[0].job}
      ></Customer>
      <Customer
        id={customers[1].id}
        image={customers[1].image}
        name={customers[1].name}
        birthday={customers[1].birthday}
        gender={customers[1].gender}
        job={customers[1].job}
      ></Customer>
      <Customer
        id={customers[2].id}
        image={customers[2].image}
        name={customers[2].name}
        birthday={customers[2].birthday}
        gender={customers[2].gender}
        job={customers[2].job}
      ></Customer> */}
    </div>
  );
}

export default App;
