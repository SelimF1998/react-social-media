import React, { useState, useEffect } from "react"
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Card,
  CardText,
  CardBody,
  CardTitle,
  Alert,
  Label,
  Input
} from "reactstrap"
import { useDispatch, useSelector } from "react-redux"

const TasksListt = ({ title, openTasksListt, setOpenTasksListt, setNext }) => {
  const dispatch = useDispatch()
  const tasksListt = useSelector(state => state.tasks.value)
  return (
    <div>
      <Modal isOpen={openTasksListt}>
        <ModalHeader>{title}</ModalHeader>
        <ModalBody>
          <Form className="justify-content-center">
            <FormGroup>
              {tasksListt.map((task, index) => {
                return (
                  <Card
                    key={index}
                    style={{
                      cursor: "pointer"
                    }}
                    className="w-100"
                    onClick={() => {
                      setNext(task.name)
                      setOpenTasksListt(false)
                    }}
                  >
                    <CardBody>
                      <CardTitle>{task.name}</CardTitle>
                      <CardText>{task.description}</CardText>
                      <CardText>{task.progress}%</CardText>
                    </CardBody>
                  </Card>
                )
              })}
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={() => setOpenTasksList(false)}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  )
}

export default TasksListt
