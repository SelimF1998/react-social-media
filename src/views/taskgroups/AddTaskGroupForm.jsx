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
import { useDispatch, useSelector } from "react-redux"
import { setTaskGroup } from "../../redux/reducers/taskgroups"

const AddTaskGroupForm = ({
  title,
  setOpenTaskGroupForm,
  openTaskGroupForm,
  upButtonClicked,
  downButtonClicked,
  index
}) => {
  const dispatch = useDispatch()
  const taskGroupsList = useSelector(state => state.taskgroups.value)

  const [addFormData, setAddFormData] = useState({
    id: "",
    owner: "",
    code: "",
    technical_dependencies: "",
    temporal_dependencies: "",
    Milestone: "",
    computed_task_groug_start_date: "",
    computed_task_groug_end_date: "",
    total_tasks_duration: "",
    not_done_tasks_duration: "",
    completed_tasks_duration: "",
    status: "",
    progress: " ",
    start_date_delay: "",
    name: " ",
    end_date_delay: "",
    description: "",
    user_problem: "",
    use_case_category: "",
    software_category: "",
    software_subcategory: "",
    note: "  ",
    issues_and_unknows: "",
    use_case_priority: ""
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

    const newTaskGroup = {
      id: nanoid(),
      owner: addFormData.owner,
      code: addFormData.code,
      technical_dependencies: addFormData.technical_dependencies,
      temporal_dependencies: addFormData.temporal_dependencies,
      milestone: addFormData.Milestone,
      computed_task_groug_start_date:
        addFormData.computed_task_groug_start_date,
      computed_task_groug_end_date: addFormData.computed_task_groug_end_date,
      total_tasks_duration: addFormData.total_tasks_duration,
      not_done_tasks_duration: addFormData.not_done_tasks_duration,
      completed_tasks_duration: addFormData.completed_tasks_duration,
      status: addFormData.status,
      progress: addFormData.progress,
      start_date_delay: addFormData.start_date_delay,
      name: addFormData.name,
      end_date_delay: addFormData.end_date_delay,
      description: addFormData.description,
      user_problem: addFormData.user_problem,
      use_case_category: addFormData.use_case_category,
      software_category: addFormData.software_category,
      software_subcategory: addFormData.software_subcategory,
      note: addFormData.note,
      issues_and_unknows: addFormData.issues_and_unknows,
      use_case_priority: addFormData.use_case_priority
    }

    //if the upButtonClicked is true, add the newTaskGroup above the index of the taskGroup
    if (upButtonClicked) {
      const newTaskGroupsList = [...taskGroupsList]
      newTaskGroupsList.splice(index, 0, newTaskGroup)
      dispatch(setTaskGroup(newTaskGroupsList))
    }
    //if the downButtonClicked is true, add the newTaskGroup below the index of the taskGroup
    else if (downButtonClicked) {
      const newTaskGroupsList = [...taskGroupsList]
      newTaskGroupsList.splice(index + 1, 0, newTaskGroup)
      dispatch(setTaskGroup(newTaskGroupsList))
    }

    setOpenTaskGroupForm(false)
  }

  return (
    <Modal isOpen={openTaskGroupForm}>
      <ModalHeader>{title}</ModalHeader>
      <ModalBody>
        <Form>
          <FormGroup>
            <Label for="exampleEmail">Owner</Label>
            <Input
              type="text"
              name="owner"
              id="owner"
              placeholder="Enter Owner..."
              onChange={handleAddFormChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">Code</Label>
            <Input
              type="text"
              name="code"
              id="code"
              placeholder="Enter Code..."
              onChange={handleAddFormChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">Technical Dependencies</Label>
            <Input
              type="select"
              name="technical_dependencies"
              id="technical_dependencies"
              onChange={handleAddFormChange}
            >
              <option>Select</option>
              <option>None</option>
              <option>Crusher 1</option>
              <option>Crusher 2</option>
              <option>Crusher 3</option>
              <option>Crusher Docker</option>
            </Input>
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">Temporal Dependencies</Label>
            <Input
              type="select"
              name="temporal_dependencies"
              id="temporal_dependencies"
              onChange={handleAddFormChange}
            >
              <option>Select</option>
              <option>None</option>
              <option>Crusher 1</option>
              <option>Crusher 2</option>
              <option>Crusher 3</option>
              <option>Crusher Docker</option>
            </Input>
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">Milestone</Label>
            <Input
              type="select"
              name="milestone"
              id="milestone"
              onChange={handleAddFormChange}
            >
              <option>Select</option>
              <option>Data quality</option>
              <option>Data scaling</option>
              <option>Start labeling data with the crusher</option>
              <option>Hippo R1</option>
              <option>Hippo Growth</option>
            </Input>
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">Computed Task Group Start Date</Label>
            <Input
              type="date"
              name="computed_task_group_start_date"
              id="computed_task_group_start_date"
              placeholder="Enter Computed Task Group Start Date..."
              onChange={handleAddFormChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">Computed Task Group End Date</Label>
            <Input
              type="date"
              name="computed_task_group_end_date"
              id="computed_task_group_end_date"
              placeholder="Enter Computed Task Group End Date..."
              onChange={handleAddFormChange}
            />
          </FormGroup>

          <FormGroup>
            <Label for="examplePassword">Total Tasks Duration</Label>
            <Input
              type="number"
              name="total_tasks_duration"
              id="total_tasks_duration"
              placeholder="Enter Total Tasks Duration..."
              onChange={handleAddFormChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">Not Done Tasks Duration</Label>
            <Input
              type="number"
              name="not_done_tasks_duration"
              id="not_done_tasks_duration"
              placeholder="Enter Not Done Tasks Duration..."
              onChange={handleAddFormChange}
            />
          </FormGroup>

          <FormGroup>
            <Label for="examplePassword">Status</Label>
            <Input
              type="select"
              name="status"
              id="status"
              onChange={handleAddFormChange}
            >
              <option>Select</option>
              <option>Not Started</option>
              <option>In Progress</option>
              <option>Done</option>
            </Input>
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">Progress</Label>
            <Input
              type="range"
              name="progress"
              id="progress"
              placeholder="Enter Progress..."
              onChange={handleAddFormChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">Start Date Delay</Label>
            <Input
              type="number"
              name="start_date_delay"
              id="start_date_delay"
              placeholder="Enter Start Date Delay..."
              onChange={handleAddFormChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">Name</Label>
            <Input
              type="text"
              name="name"
              id="name"
              placeholder="Enter Name..."
              onChange={handleAddFormChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">End Date Delay</Label>
            <Input
              type="number"
              name="end_date_delay"
              id="end_date_delay"
              placeholder="Enter End Date Delay..."
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
            <Label for="examplePassword">
              USER PROBLEM THAT IS SOLVED / SOFTWARE IMPROVEMENT
            </Label>
            <Input
              type="textarea"
              name="user_problem_that_is_solved"
              id="user_problem_that_is_solved"
              placeholder="Enter USER PROBLEM THAT IS SOLVED / SOFTWARE IMPROVEMENT..."
              onChange={handleAddFormChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">Software Category</Label>
            <Input
              type="select"
              name="software_category"
              id="software_category"
              placeholder="Enter Software Category..."
              onChange={handleAddFormChange}
            >
              <option>Select</option>
              <option>Crusher</option>
              <option>Crusher Docker</option>
              <option>Crusher API</option>
              <option>Crusher Web</option>
              <option>Crusher Mobile</option>
              <option>Crusher Desktop</option>
            </Input>
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">Software Sub Category</Label>
            <Input
              type="select"
              name="software_sub_category"
              id="software_sub_category"
              onChange={handleAddFormChange}
            >
              <option>Select</option>
              <option>Crusher</option>
              <option>Crusher Docker</option>
              <option>Crusher API</option>
              <option>Crusher Web</option>
              <option>Crusher Mobile</option>
              <option>Crusher Desktop</option>
            </Input>
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">Note</Label>
            <Input
              type="textarea"
              name="note"
              id="note"
              placeholder="Enter Note..."
              onChange={handleAddFormChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">Issues and Uknowns</Label>
            <Input
              type="textarea"
              name="issues_and_unkowns"
              id="issues_and_unkowns"
              placeholder="Enter Issues and Uknowns..."
              onChange={handleAddFormChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">Use Case Priorities</Label>
            <Input
              type="textarea"
              name="use_case_priorities"
              id="use_case_priorities"
              placeholder="Enter Use Case Priorities..."
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
            setOpenTaskGroupForm(false)
          }}
        >
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  )
}

export default AddTaskGroupForm
