import React, { useState, useEffect } from "react"
import { nanoid } from "nanoid"
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Input
} from "reactstrap"

const AddTaskForm = ({
  title,
  setOpenTaskForm,
  openTaskForm,
  upButtonClicked,
  downButtonClicked,
  tasks,
  setTasks,
  id,
  indexx
}) => {
  const [newArrayData, setNewArrayData] = useState(tasks)
  const [addFormData, setAddFormData] = useState({
    id: "",
    username: "",
    label: "",
    sublabel: "",
    priority: "",
    duration: "",
    duration_confidence: "",
    start_date: "",
    end_date: "",
    status: "",
    complexity: "",
    task_group: "",
    description: "",
    ref: "",
    technical_dependencies: "",
    temporal_dependencies: "",
    computed_dependencies: ""
  })

  const handleAddFormChange = event => {
    event.preventDefault()

    const fieldName = event.target.getAttribute("name")
    const fieldValue = event.target.value

    const newFormData = { ...addFormData }

    newFormData[fieldName] = fieldValue

    setAddFormData(newFormData)
  }

  const handleAddFormSubmit = event => {
    event.preventDefault()

    let idRow

    if (upButtonClicked === true) {
      idRow = id - 1
    } else if (downButtonClicked === true) {
      idRow = id + 1
    }

    const newData = {
      id: nanoid(),
      username: addFormData.username,
      label: addFormData.label,
      sublabel: addFormData.sublabel,
      priority: addFormData.priority,
      duration: addFormData.duration,
      duration_confidence: addFormData.duration_confidence,
      start_date: addFormData.start_date,
      end_date: addFormData.end_date,
      status: addFormData.status,
      complexity: addFormData.complexity,
      task_group: addFormData.task_group,
      description: addFormData.description,
      ref: addFormData.ref,
      technical_dependencies: addFormData.technical_dependencies,
      temporal_dependencies: addFormData.temporal_dependencies,
      computed_dependencies: addFormData.computed_dependencies
    }

    if (upButtonClicked === true) {
      newArrayData.splice(indexx, 0, newData)
    } else if (downButtonClicked === true) {
      newArrayData.splice(indexx + 1, 0, newData)
    }

    setTasks(newArrayData)
    setOpenTaskForm(false)
  }

  useEffect(() => {
    console.log(id)
    console.log(newArrayData)
  }, [id])
  return (
    <Modal isOpen={openTaskForm}>
      <ModalHeader>{title}</ModalHeader>
      <ModalBody>
        <Form>
          <FormGroup>
            <Label for="exampleEmail">Username</Label>
            <Input
              type="text"
              name="username"
              id="username"
              placeholder="Enter Username..."
              onChange={handleAddFormChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">Label</Label>
            <Input
              type="text"
              name="label"
              id="label"
              placeholder="Enter Label..."
              onChange={handleAddFormChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">Sublabel</Label>
            <Input
              type="text"
              name="sublabel"
              id="sublabel"
              placeholder="Enter Sublabel..."
              onChange={handleAddFormChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="exampleSelect">Priority</Label>
            <Input
              type="select"
              name="priority"
              id="priority"
              onChange={handleAddFormChange}
            >
              <option>Select</option>
              <option>Urgent</option>
              <option>High Priority</option>
              <option>Medium Priority</option>
              <option>Low Priority</option>
              <option>Future</option>
            </Input>
          </FormGroup>
          <FormGroup>
            <Label for="exampleDuration">Duration</Label>
            <Input
              type="text"
              name="duration"
              id="duration"
              placeholder="Enter Duration..."
              onChange={handleAddFormChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="exampleSelect">Duration Confidence</Label>
            <Input
              type="select"
              name="duration_confidence"
              id="exampleSelect"
              onChange={handleAddFormChange}
            >
              <option>Select</option>
              <option>Confident</option>
              <option>Default</option>
              <option>Guess/have no idea</option>
              <option>Not Confident</option>
            </Input>
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">Start Date</Label>
            <Input
              type="date"
              name="start_date"
              id="start-date"
              placeholder="Enter Start Date..."
              onChange={handleAddFormChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">End Date</Label>
            <Input
              type="date"
              name="end_date"
              id="end-date"
              placeholder="Enter End Date..."
              onChange={handleAddFormChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="exampleSelect">Status</Label>
            <Input
              type="select"
              name="status"
              id="exampleSelect"
              onChange={handleAddFormChange}
            >
              <option>Select</option>
              <option>Not Started</option>
              <option>In Progress</option>
              <option>Done</option>
            </Input>
          </FormGroup>
          <FormGroup>
            <Label for="exampleSelect">Complexity</Label>
            <Input
              type="select"
              name="complexity"
              id="exampleSelect"
              onChange={handleAddFormChange}
            >
              <option>Select</option>
              <option>Simple</option>
              <option>Medium</option>
              <option>High</option>
            </Input>
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">Task Group</Label>
            <Input
              type="text"
              name="task_group"
              id="task-group"
              placeholder="Enter Task Group..."
              onChange={handleAddFormChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">Description</Label>
            <Input
              type="textarea"
              name="description"
              id="description"
              placeholder="Enter Description..."
              onChange={handleAddFormChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">#REF!</Label>
            <Input
              type="text"
              name="ref"
              id="ref"
              placeholder="Enter #REF!"
              onChange={handleAddFormChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="exampleSelect">Technical \ndependencies\nIDs</Label>
            <Input
              type="select"
              name="technical_dependencies"
              id="exampleSelect"
              onChange={handleAddFormChange}
            >
              <option>Select Technical Dependencies</option>
              <option>Yes</option>
              <option>No</option>
            </Input>
          </FormGroup>
          <FormGroup>
            <Label for="exampleSelect">Temporal_\ndependencies\nIDs</Label>
            <Input
              type="select"
              name="temporal_dependencies"
              id="exampleSelect"
              onChange={handleAddFormChange}
            >
              <option>Select Temporal Dependencies</option>
              <option>Yes</option>
              <option>No</option>
            </Input>
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">Computed_dependency_IDs</Label>
            <Input
              type="text"
              name="computed_dependencies"
              id="computed-dependency-IDs"
              placeholder="Enter Computed Dependency IDs..."
              onChange={handleAddFormChange}
            />
          </FormGroup>
        </Form>
      </ModalBody>
      <ModalFooter>
        <Button type="submit" color="primary" onClick={handleAddFormSubmit}>
          Submit
        </Button>
        <Button
          color="secondary"
          onClick={() => {
            setOpenTaskForm(false)
          }}
        >
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  )
}

export default AddTaskForm
