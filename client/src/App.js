import logo from './logo.svg';
import './App.css';
import { gql, useQuery } from '@apollo/client';

const query = gql`
  query GetTodos{
    getTodos{
      id
      title
    }
  }
`

function App() {
  const {data,loading} = useQuery(query);

  if (loading)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Loading Data
        </p>
      </header>
    </div>
  );

  return (
    <div className="App">
     <table border="1px solid black" align='center'>
      <tbody>
        <tr>
          <th>
          Todo Title
          </th>
        </tr>
        {
        data.getTodos.map(todo=> 
        <tr key={todo.id}>
          <td>{todo.title}</td>
        </tr>)
        }
      </tbody>
     </table>
    </div>
  );
}

export default App;
