import React, { useState, useEffect } from "react"
import { useHistory } from "react-router-dom"
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  CardText,
  CardLink
} from "reactstrap"
import { useDispatch, useSelector } from "react-redux"

const Home = () => {
  let history = useHistory()
  const dispatch = useDispatch()
  const usersList = useSelector(state => state.users.value)

  useEffect(() => {
    if (!usersList.find(user => user.loggedIn === true)) {
      history.push("/login")
    }

    console.log(usersList)
  }, [usersList])

  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>Kick start your project 🚀</CardTitle>
        </CardHeader>
        <CardBody>
          <CardText>All the best for your new project.</CardText>
          <CardText>
            Please make sure to read our{" "}
            <CardLink
              href="https://pixinvent.com/demo/vuexy-react-admin-dashboard-template/documentation/"
              target="_blank"
            >
              Template Documentation
            </CardLink>{" "}
            to understand where to go from here and how to use our template.
          </CardText>
        </CardBody>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Want to integrate JWT? 🔒</CardTitle>
        </CardHeader>
        <CardBody>
          <CardText>
            We carefully crafted JWT flow so you can implement JWT with ease and
            with minimum efforts.
          </CardText>
          <CardText>
            Please read our{" "}
            <CardLink
              href="https://pixinvent.com/demo/vuexy-react-admin-dashboard-template/documentation/development/auth"
              target="_blank"
            >
              JWT Documentation
            </CardLink>{" "}
            to get more out of JWT authentication.
          </CardText>
        </CardBody>
      </Card>
    </div>
  )
}

export default Home
