import './index.css'

const UserDetails = props => {
  const {userDetails} = props
  const {imageUrl, name, role} = userDetails

  return (
    <li className="bg-container">
      <img src={imageUrl} className="image" alt="avatar" />
      <div>
        <h1 className="main-heading">{name}</h1>
        <p className="paragraph">{role}</p>
      </div>
    </li>
  )
}

export default UserDetails
