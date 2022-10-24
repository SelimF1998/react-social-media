import React, { useState, useEffect } from "react"
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

const EditTaskGroupForm = ({
  title,
  setOpenEditTaskGroupForm,
  openEditTaskGroupForm,
  index1
}) => {
  const dispatch = useDispatch()
  const taskGroupsList = useSelector(state => state.taskgroups.value)
  const [data, setData] = useState(taskGroupsList[index1])

  if (data.technical_dependencies)
    return (
      <Modal isOpen={openEditTaskGroupForm}>
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
                value={data.owner}
                onChange={e => setData({ ...data, owner: e.target.value })}
              />
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">Code</Label>
              <Input
                type="text"
                name="code"
                id="code"
                placeholder="Enter Code..."
                value={data.code}
                onChange={e => setData({ ...data, code: e.target.value })}
              />
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">Technical Dependencies</Label>
              <Input
                type="select"
                name="technical_dependencies"
                id="technical_dependencies"
                defaultValue={data.technical_dependencies}
                onChange={e =>
                  setData({ ...data, technical_dependencies: e.target.value })
                }
              >
                <option value="select">Select</option>
                <option value="none">None</option>
                <option value="crusher1">Crusher 1</option>
                <option value="crusher2">Crusher 2</option>
                <option value="crusher3">Crusher 3</option>
                <option value="docker">Crusher Docker</option>
              </Input>
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">Temporal Dependencies</Label>
              <Input
                type="select"
                name="temporal_dependencies"
                id="temporal_dependencies"
                value={data.temporal_dependencies}
                onChange={e =>
                  setData({ ...data, temporal_dependencies: e.target.value })
                }
              >
                <option value="select">Select</option>
                <option value="none">None</option>
                <option value="crusher1">Crusher 1</option>
                <option value="crusher2">Crusher 2</option>
                <option value="crusher3">Crusher 3</option>
                <option value="docker">Crusher Docker</option>
              </Input>
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">Milestone</Label>
              <Input
                type="select"
                name="milestone"
                id="milestone"
                value={data.milestone}
                onChange={e => setData({ ...data, milestone: e.target.value })}
              >
                <option value="select">Select</option>
                <option value="select">Data quality</option>
                <option value="select">Data scaling</option>
                <option value="select">
                  Start labeling data with the crusher
                </option>
                <option value="select">Hippo R1</option>
                <option value="select">Hippo Growth</option>
              </Input>
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">
                Computed Task Group Start Date
              </Label>
              <Input
                type="date"
                name="computed_task_group_start_date"
                id="computed_task_group_start_date"
                placeholder="Enter Computed Task Group Start Date..."
                value={data.computed_task_group_start_date}
                onChange={e =>
                  setData({
                    ...data,
                    computed_task_group_start_date: e.target.value
                  })
                }
              />
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">Computed Task Group End Date</Label>
              <Input
                type="date"
                name="computed_task_group_end_date"
                id="computed_task_group_end_date"
                placeholder="Enter Computed Task Group End Date..."
                value={data.computed_task_group_end_date}
                onChange={e =>
                  setData({
                    ...data,
                    computed_task_group_end_date: e.target.value
                  })
                }
              />
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">Total Tasks Duration</Label>
              <Input
                type="number"
                name="total_tasks_duration"
                id="total_tasks_duration"
                placeholder="Enter Total Tasks Duration..."
                value={data.total_tasks_duration}
                onChange={e =>
                  setData({ ...data, total_tasks_duration: e.target.value })
                }
              />
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">Not Done Tasks Duration</Label>
              <Input
                type="number"
                name="not_done_tasks_duration"
                id="not_done_tasks_duration"
                placeholder="Enter Not Done Tasks Duration..."
                value={data.not_done_tasks_duration}
                onChange={e =>
                  setData({ ...data, not_done_tasks_duration: e.target.value })
                }
              />
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">Status</Label>
              <Input
                type="select"
                name="status"
                id="status"
                defaultValue={data.status}
                onChange={e => setData({ ...data, status: e.target.value })}
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
                value={data.progress}
                onChange={e => setData({ ...data, progress: e.target.value })}
              />
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">Start Date Delay</Label>
              <Input
                type="number"
                name="start_date_delay"
                id="start_date_delay"
                placeholder="Enter Start Date Delay..."
                value={data.start_date_delay}
                onChange={e =>
                  setData({ ...data, start_date_delay: e.target.value })
                }
              />
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">Name</Label>
              <Input
                type="text"
                name="name"
                id="name"
                placeholder="Enter Name..."
                value={data.name}
                onChange={e => setData({ ...data, name: e.target.value })}
              />
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">End Date Delay</Label>
              <Input
                type="number"
                name="end_date_delay"
                id="end_date_delay"
                placeholder="Enter End Date Delay..."
                value={data.end_date_delay}
                onChange={e =>
                  setData({ ...data, end_date_delay: e.target.value })
                }
              />
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">Description</Label>
              <Input
                type="textarea"
                name="description"
                id="description"
                placeholder="Enter Description..."
                value={data.description}
                onChange={e =>
                  setData({ ...data, description: e.target.value })
                }
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
                value={data.user_problem_that_is_solved}
                onChange={e =>
                  setData({
                    ...data,
                    user_problem_that_is_solved: e.target.value
                  })
                }
              />
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">Software Category</Label>
              <Input
                type="select"
                name="software_category"
                id="software_category"
                placeholder="Enter Software Category..."
                defaultValue={data.software_category}
                onChange={e =>
                  setData({ ...data, software_category: e.target.value })
                }
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
                defaultValue={data.software_sub_category}
                onChange={e =>
                  setData({ ...data, software_sub_category: e.target.value })
                }
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
                value={data.note}
                onChange={e => setData({ ...data, note: e.target.value })}
              />
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">Issues and Uknowns</Label>
              <Input
                type="textarea"
                name="issues_and_unkowns"
                id="issues_and_unkowns"
                placeholder="Enter Issues and Uknowns..."
                value={data.issues_and_unkowns}
                onChange={e =>
                  setData({ ...data, issues_and_unkowns: e.target.value })
                }
              />
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">Use Case Priorities</Label>
              <Input
                type="textarea"
                name="use_case_priorities"
                id="use_case_priorities"
                placeholder="Enter Use Case Priorities..."
                value={data.use_case_priorities}
                onChange={e =>
                  setData({ ...data, use_case_priorities: e.target.value })
                }
              />
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button
            type="submit"
            color="primary"
            onClick={() => {
              console.log(data)
              console.log(taskGroupsList[index1])
              const taskGroupList1 = [...taskGroupsList]
              taskGroupList1[index1] = data
              dispatch(setTaskGroup(taskGroupList1))
              setOpenEditTaskGroupForm(false)
            }}
          >
            Submit
          </Button>
          <Button
            color="secondary"
            onClick={() => {
              setOpenEditTaskGroupForm(false)
            }}
          >
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    )
}

export default EditTaskGroupForm
