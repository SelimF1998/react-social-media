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

const TasksList = ({
  title,
  openTasksList,
  setOpenTasksList,
  setWork,
  setTaskSubmited,
  setTaskIndex,
  updateProgress
}) => {
  const dispatch = useDispatch()
  const tasksList = useSelector(state => state.tasks.value)

  const setReportProgress = task => {
    updateProgress(task)
  }

  return (
    <div>
      <Modal isOpen={openTasksList}>
        <ModalHeader>{title}</ModalHeader>
        <ModalBody>
          <Form className="justify-content-center">
            <FormGroup>
              {tasksList.map((task, index) => {
                return (
                  <Card
                    key={index}
                    style={{
                      cursor: "pointer"
                    }}
                    className="w-100"
                    onClick={() => {
                      setReportProgress({
                        id: task.id,
                        progress: task.progress
                      })
                      setWork(task.name)
                      setOpenTasksList(false)
                      setTaskSubmited(true)
                      setTaskIndex(index)
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

export default TasksList
