import React, { useState, useEffect } from "react"
import { Table, Button } from "reactstrap"
import { ArrowUp, ArrowDown, Edit, Trash2 } from "react-feather"
import { useDispatch, useSelector } from "react-redux"
import {
  addTaskGroup,
  updateTaskGroup,
  deleteTaskGroup
} from "../../redux/reducers/taskgroups"
import "./TaskGroups.css"
import AddTaskGroupForm from "./AddTaskGroupForm"
import EditTaskGroupForm from "./EditTaskGroupForm"
import "./TaskGroups.css"

const TaskGroups = () => {
  const dispatch = useDispatch()
  const taskGroupsList = useSelector(state => state.taskgroups.value)
  const [openTaskGroupForm, setOpenTaskGroupForm] = useState(false)
  const [openEditTaskGroupForm, setOpenEditTaskGroupForm] = useState(false)
  const [upButtonClicked, setUpButtonClicked] = useState(false)
  const [downButtonClicked, setDownButtonClicked] = useState(false)
  const [index, setIndex] = useState(0)
  const [index1, setIndex1] = useState(0)

  useEffect(() => {
    console.log(taskGroupsList)
  }, [taskGroupsList])

  return (
    <div className="taskgroups">
      <div className="title">
        <h1>Task Groups</h1>
      </div>
      <div className="table mt-4">
        <form>
          <Table>
            <thead>
              <tr>
                <th className="text-center">Actions</th>
                <th className="text-center">Owner</th>
                <th className="text-center">Code</th>
                <th className="text-center">Technical Dependencies</th>
                <th className="text-center">Temporal Dependencies</th>
                <th className="text-center">Milestone</th>
                <th className="text-center">Computed Task Group Start Date</th>
                <th className="text-center">Computed Task Group End Date</th>
                <th className="text-center">Total Tasks Duration</th>
                <th className="text-center">Not Done Tasks Duration</th>
                <th className="text-center">Completed Tasks Duration</th>
                <th className="text-center">Status</th>
                <th className="text-center">Progress</th>
                <th className="text-center">Start Date Delay</th>
                <th className="text-center">Name</th>
                <th className="text-center">End Date Delay</th>
                <th className="text-center">Description</th>
                <th className="text-center">
                  User Problem That Is Solved / Software Improvement
                </th>
                <th className="text-center">Software Category</th>
                <th className="text-center">Software Subcategory</th>
                <th className="text-center">Note</th>
                <th className="text-center">Issues And Unknowns</th>
                <th className="text-center">Use Case Priority</th>
              </tr>
            </thead>
            <tbody>
              {taskGroupsList.map((taskGroup, index) => (
                <tr key={index}>
                  <td className="d-flex gap-1">
                    <Button
                      color="success"
                      className="mr-1"
                      onClick={() => {
                        setOpenTaskGroupForm(true)
                        setUpButtonClicked(true)
                        setIndex(index)
                      }}
                    >
                      <ArrowUp />
                    </Button>
                    <Button
                      color="success"
                      className="mr-1"
                      onClick={() => {
                        setOpenTaskGroupForm(true)
                        setDownButtonClicked(true)
                        setIndex(index)
                      }}
                    >
                      <ArrowDown />
                    </Button>
                    <Button
                      color="primary"
                      className="mr-1"
                      onClick={() => {
                        setOpenEditTaskGroupForm(true)
                        setIndex1(index)
                      }}
                    >
                      <Edit />
                    </Button>
                    <Button
                      color="danger"
                      onClick={() => dispatch(deleteTaskGroup(taskGroup.id))}
                    >
                      <Trash2 />
                    </Button>
                  </td>
                  <td className="text-center">{taskGroup.owner}</td>
                  <td className="text-center">{taskGroup.code}</td>
                  <td className="text-center">
                    <select
                      name="technical-dependencies"
                      //make technical_dependencies in the array equal to whatever is selected with updateTaskGroup
                      onChange={event => {
                        dispatch(
                          updateTaskGroup({
                            ...taskGroup,
                            technical_dependencies: event.target.value
                          })
                        )
                      }}
                    >
                      <option>Select</option>
                      <option>None</option>
                      <option>Crusher 1</option>
                      <option>Crusher 2</option>
                      <option>Crusher 3</option>
                      <option>Crusher Docker</option>
                    </select>
                  </td>
                  <td className="text-center">
                    <select
                      name="temporal-dependencies"
                      //make temporal_dependencies in the array equal to whatever is selected with updateTaskGroup
                      onChange={event => {
                        dispatch(
                          updateTaskGroup({
                            ...taskGroup,
                            temporal_dependencies: event.target.value
                          })
                        )
                      }}
                    >
                      <option>Select</option>
                      <option>None</option>
                      <option>Crusher 1</option>
                      <option>Crusher 2</option>
                      <option>Crusher 3</option>
                      <option>Crusher Docker</option>
                    </select>
                  </td>
                  <td className="text-center">
                    <select
                      name="milestone"
                      //make milestone in the array equal to whatever is selected with updateTaskGroup
                      onChange={event => {
                        dispatch(
                          updateTaskGroup({
                            ...taskGroup,
                            milestone: event.target.value
                          })
                        )
                      }}
                    >
                      <option>Select</option>
                      <option>Data quality</option>
                      <option>Data scaling</option>
                      <option>Start labeling data with the crusher</option>
                      <option>Hippo R1</option>
                      <option>Hippo Growth</option>
                    </select>
                  </td>
                  <td className="text-center">
                    {taskGroup.computed_task_group_start_date}
                  </td>
                  <td className="text-center">
                    {taskGroup.computed_task_group_end_date}
                  </td>
                  <td className="text-center">
                    {taskGroup.total_tasks_duration}
                  </td>
                  <td className="text-center">
                    {taskGroup.not_done_tasks_duration}
                  </td>
                  <td className="text-center">
                    {taskGroup.completed_tasks_duration}
                  </td>
                  <td className="text-center">{taskGroup.status}</td>
                  <td className="text-center">{taskGroup.progress}%</td>
                  <td className="text-center">{taskGroup.start_date_delay}</td>
                  <td className="text-center">{taskGroup.name}</td>
                  <td className="text-center">{taskGroup.end_date_delay}</td>
                  <td className="text-center">{taskGroup.description}</td>
                  <td className="text-center">
                    {taskGroup.user_problem_that_is_solved_software_improvement}
                  </td>
                  <td className="text-center">{taskGroup.software_category}</td>
                  <td className="text-center">
                    {taskGroup.software_subcategory}
                  </td>
                  <td className="text-center">{taskGroup.note}</td>
                  <td className="text-center">
                    {taskGroup.issues_and_unknowns}
                  </td>
                  <td className="text-center">{taskGroup.use_case_priority}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </form>
      </div>
      {openTaskGroupForm === true ? (
        <AddTaskGroupForm
          title="Add Task Group"
          openTaskGroupForm={openTaskGroupForm}
          setOpenTaskGroupForm={setOpenTaskGroupForm}
          upButtonClicked={upButtonClicked}
          downButtonClicked={downButtonClicked}
          addTaskGroup={addTaskGroup}
          setUpButtonClicked={setUpButtonClicked}
          index={index}
        />
      ) : null}
      {
        //if openEditTaskGroupForm is true, then render the EditTaskGroupForm
        openEditTaskGroupForm === true ? (
          <EditTaskGroupForm
            title="Edit Task Group"
            openEditTaskGroupForm={openEditTaskGroupForm}
            setOpenEditTaskGroupForm={setOpenEditTaskGroupForm}
            index1={index1}
          />
        ) : null
      }
    </div>
  )
}

export default TaskGroups
