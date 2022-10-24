// ** React Imports
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

// ** Custom Components
import Avatar from "@components/avatar"

// ** Utils
import { isUserLoggedIn } from "@utils"

// ** Store & Actions
import { useDispatch } from "react-redux"
import { handleLogout } from "@store/actions/auth"
import { useSelector } from "react-redux"
import { setUserLoggedIn } from "../../../../redux/reducers/users"

// ** Third Party Components
import {
  UncontrolledDropdown,
  DropdownMenu,
  DropdownToggle,
  DropdownItem
} from "reactstrap"
import {
  User,
  Mail,
  CheckSquare,
  MessageSquare,
  Settings,
  CreditCard,
  HelpCircle,
  Power
} from "react-feather"

// ** Default Avatar Image
import defaultAvatar from "@src/assets/images/portrait/small/avatar-s-11.jpg"

const UserDropdown = () => {
  const dispatch = useDispatch()
  const [userData, setUserData] = useState(null)
  const usersList = useSelector(state => state.users.value)
  //get the index of the user that is logged in
  const loggedInUserIndex = usersList.findIndex(user => user.loggedIn === true)

  let connectedUser = usersList[loggedInUserIndex]

  useEffect(() => {
    console.log(loggedInUserIndex)
    if (!connectedUser) window.location.href = "/login"
  }, [usersList, loggedInUserIndex, connectedUser])

  if (connectedUser) {
    return (
      <UncontrolledDropdown tag="li" className="dropdown-user nav-item">
        <DropdownToggle
          href="/"
          tag="a"
          className="nav-link dropdown-user-link"
          onClick={e => e.preventDefault()}
        >
          <div className="user-nav d-sm-flex d-none">
            <span className="user-name font-weight-bold">
              {connectedUser.name}
            </span>
            <span className="user-status">{connectedUser.role}</span>
          </div>
          <Avatar
            img={connectedUser.avatar}
            imgHeight="40"
            imgWidth="40"
            status="online"
          />
        </DropdownToggle>
        <DropdownMenu right>
          <DropdownItem tag={Link} to="#" onClick={e => e.preventDefault()}>
            <User size={14} className="mr-75" />
            <span className="align-middle">Profile</span>
          </DropdownItem>
          <DropdownItem tag={Link} to="#" onClick={e => e.preventDefault()}>
            <Mail size={14} className="mr-75" />
            <span className="align-middle">Inbox</span>
          </DropdownItem>
          <DropdownItem tag={Link} to="#" onClick={e => e.preventDefault()}>
            <CheckSquare size={14} className="mr-75" />
            <span className="align-middle">Tasks</span>
          </DropdownItem>
          <DropdownItem tag={Link} to="#" onClick={e => e.preventDefault()}>
            <MessageSquare size={14} className="mr-75" />
            <span className="align-middle">Chats</span>
          </DropdownItem>
          <DropdownItem
            tag={Link}
            to="/login"
            onClick={() => dispatch(handleLogout())}
          >
            <Power size={14} className="mr-75" />
            <span
              className="align-middle"
              onClick={() => {
                dispatch(
                  setUserLoggedIn({ id: connectedUser.id, loggedIn: false })
                )
              }}
            >
              Logout
            </span>
          </DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    )
  } else return null
}

export default UserDropdown
