import UserDetails from './components/UserDetails'
import './App.css'

const userdetailsList = [
  {
    uniqueKey: 1,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
    name: 'SaiRam',
    role: 'SoftwareDeveloper',
  },
  {
    uniqueKey: 2,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/floyd-miles-img.png',
    name: 'Srikanth',
    role: 'Agriee Management officer',
  },
  {
    uniqueKey: 3,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/jacob-jones-img.png',
    name: 'Krishna',
    role: 'Agriee Management officer',
  },
  {
    uniqueKey: 4,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/devon-lane-img.png',
    name: 'Vakkalagadda',
    role: 'Agriee Management officer',
  },
]

const App = () => (
  <div className="list-container">
    <h1 className="users-list-heading">Users List</h1>
    <ul>
      {userdetailsList.map(eachItem => (
        <UserDetails userDetails={eachItem} key={eachItem.uniqueKey} />
      ))}
    </ul>
  </div>
)

export default App
