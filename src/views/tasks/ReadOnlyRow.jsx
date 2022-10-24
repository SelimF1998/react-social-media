import React from "react"
import { useState, useEffect } from "react"
import { ArrowUp, ArrowDown, Edit, Trash2 } from "react-feather"
import { Table, Button } from "reactstrap"
import AddTaskForm from "./AddTaskForm"

const ReadOnlyRow = ({
  index,
  task,
  tasks,
  setTasks,
  onDelete,
  handleEditClick
}) => {
  const [openTaskForm, setOpenTaskForm] = useState(false)
  const [upButtonClicked, setUpButtonClicked] = useState(false)
  const [downButtonClicked, setDownButtonClicked] = useState(false)
  const [indexx, setIndexx] = useState(0)
  const [id, setId] = useState(0)

  return (
    <>
      <tr key={task.id}>
        <td className="d-flex">
          <Button
            color="success"
            size="sm"
            className="d-flex align-items-center mr-1"
            onClick={() => {
              setOpenTaskForm(true)
              setUpButtonClicked(true)
              console.log(upButtonClicked)
              setIndexx(index)
              setId(task.id)
              console.log(index)
            }}
          >
            <ArrowUp />
          </Button>
          <Button
            color="success"
            size="sm"
            className="d-flex align-items-center mr-1"
            onClick={() => {
              setOpenTaskForm(true)
              setDownButtonClicked(true)
              setIndexx(index)
              setId(task.id)
              console.log(index)
            }}
          >
            <ArrowDown />
          </Button>
          <Button
            color="primary"
            size="sm"
            className="d-flex align-items-center mr-1"
            onClick={event => handleEditClick(event, task)}
          >
            <Edit />
          </Button>
          <Button
            color="danger"
            size="sm"
            className="d-flex align-items-center mr-1"
            onClick={() => onDelete(task.id)}
          >
            <Trash2 />
          </Button>
        </td>
        <td className="text-center">{task.id}</td>
        <td className="text-center">{task.username}</td>
        <td
          className="text-center"
          style={{
            backgroundColor:
              task.blocked === "Yes"
                ? "#f74f4f"
                : task.blocked === "No"
                ? "#9bf788"
                : ""
          }}
        >
          {task.blocked}
        </td>
        <td className="text-center">{task.issues}</td>
        <td
          className="text-center"
          style={{
            backgroundColor:
              task.help === "Yes"
                ? "#f74f4f"
                : task.help === "No"
                ? "#9bf788"
                : ""
          }}
        >
          {task.help}
        </td>
        <td>
          <select
            name="label"
            value={task.label}
            onChange={event => {
              task.label = event.target.value
              console.log(tasks)
            }}
          >
            <option value="DevOps">DevOps</option>
            <option value="Development">Development</option>
            <option value="Testing">Testing</option>
            <option value="Deployment">Deployment</option>
          </select>
        </td>
        <td className="text-center">{task.sublabel}</td>
        <td>
          <select
            name="priority"
            value={task.priority}
            onChange={event => {
              task.priority = event.target.value
              console.log(tasks)
            }}
          >
            <option value="Urgent">Urgent</option>
            <option value="High Priority">High Priority</option>
            <option value="Medium Priority">Medium Priority</option>
            <option value="Low Priority">Low Priority</option>
            <option value="Future">Future</option>
          </select>
        </td>
        <td className="text-center">{task.duration}</td>
        <td>
          <select
            name="duration-confidence"
            value={task.durationConfidence}
            onChange={event => {
              task.durationConfidence = event.target.value
              console.log(tasks)
            }}
          >
            <option value="Guess/have no idea">Guess/have no idea</option>
            <option value="Confident">Confident</option>
            <option value="Default">Default</option>
          </select>
        </td>
        <td className="text-center">{task.start_date}</td>
        <td className="text-center">{task.end_date}</td>
        <td className="text-center">
          <select
            name="status"
            value={task.status}
            onChange={event => {
              task.status = event.target.value
              console.log(tasks)
            }}
          >
            <option value="Not Started">Not Started</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
          </select>
        </td>
        <td className="text-center">
          <select
            name="complexity"
            value={task.complexity}
            onChange={event => {
              task.complexity = event.target.value
              console.log(tasks)
            }}
          >
            <option value="Simple">Simple</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        </td>
        <td className="text-center">{task.task_group}</td>
        <td className="text-center">{task.description}</td>
        <td className="text-center">{task.ref}</td>
        <td className="text-center">
          <select
            name="technical_dependencies"
            value={task.technical_dependencies}
            onChange={event => {
              task.technical_dependencies = event.target.value
              console.log(tasks)
            }}
          >
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </td>
        <td className="text-center">
          <select
            name="temporal_dependencies"
            value={task.temporal_dependencies}
            onChange={event => {
              task.temporal_dependencies = event.target.value
              console.log(tasks)
            }}
          >
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </td>
        <td className="text-center">{task.computed_dependencies}</td>
      </tr>
      {openTaskForm === true ? (
        <AddTaskForm
          title="Add Task"
          tasks={tasks}
          setTasks={setTasks}
          indexx={indexx}
          id={id}
          upButtonClicked={upButtonClicked}
          downButtonClicked={downButtonClicked}
          setOpenTaskForm={setOpenTaskForm}
          openTaskForm={openTaskForm}
        />
      ) : (
        ""
      )}
    </>
  )
}

export default ReadOnlyRow
