import './index.css'

const ListItem = props => {
  const {listDetails, deleteId} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = listDetails
  const deleteHistory = () => {
    deleteId(id)
  }
  return (
    <li className="list-style">
      <p className="time-style">{timeAccessed}</p>
      <div className="container-1">
        <div className="container-2">
          <div className="logo-container">
            <img className="logo-style" src={logoUrl} alt="domain logo" />
          </div>
          <div className="title-domain-container">
            <p className="heading-style">{title}</p>
            <p className="domain-style">{domainUrl}</p>
          </div>
        </div>
        <button
          type="button"
          className="button-style"
          onClick={deleteHistory}
          data-testid="delete"
        >
          <img
            className="delete-style"
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png "
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default ListItem
