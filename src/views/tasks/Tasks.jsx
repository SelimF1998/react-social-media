import React, { useState, useEffect } from "react"
import { Table, Button } from "reactstrap"
import TASKS_DATA from "./TASKS_DATA.json"
import "./Tasks.css"
import ReadOnlyRow from "./ReadOnlyRow"
import EditableRow from "./EditableRow"
import { useDispatch, useSelector } from "react-redux"

const Tasks = () => {
  const [tasks, setTasks] = useState(TASKS_DATA)
  const [editTasksId, setEditTasksId] = useState(null)
  const reportsList = useSelector(state => state.reports.value)

  const onDelete = id => {
    setTasks(tasks.filter(task => task.id !== id))
    console.log(tasks)
  }

  const [editFormTasks, setEditFormTasks] = useState({
    id: "",
    username: "",
    blocked: "",
    issues: "",
    help: "",
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

  const handleEditClick = (event, task) => {
    event.preventDefault()
    setEditTasksId(task.id)

    const formValues = {
      id: task.id,
      username: task.username,
      blocked: task.blocked,
      issues: task.issues,
      help: task.help,

      label: task.label,
      sublabel: task.sublabel,
      priority: task.priority,
      duration: task.duration,
      duration_confidence: task.duration_confidence,
      start_date: task.start_date,
      end_date: task.end_date,
      status: task.status,
      complexity: task.complexity,
      task_group: task.task_group,
      description: task.description,
      ref: task.ref,
      technical_dependencies: task.technical_dependencies,
      temporal_dependencies: task.temporal_dependencies,
      computed_dependencies: task.computed_dependencies
    }

    setEditFormTasks(formValues)
  }

  const handleEditFormChange = event => {
    event.preventDefault()

    const fieldName = event.target.getAttribute("name")
    const fieldValue = event.target.value

    const newFormTasks = { ...editFormTasks }

    newFormTasks[fieldName] = fieldValue

    setEditFormTasks(newFormTasks)
  }

  const handleEditFormSubmit = event => {
    event.preventDefault()

    const editedTasks = {
      id: editTasksId,
      username: editFormTasks.username,
      blocked: editFormTasks.blocked,
      issues: editFormTasks.issues,
      help: editFormTasks.help,
      label: editFormTasks.label,
      sublabel: editFormTasks.sublabel,
      priority: editFormTasks.priority,
      duration: editFormTasks.duration,
      duration_confidence: editFormTasks.duration_confidence,
      start_date: editFormTasks.start_date,
      end_date: editFormTasks.end_date,
      status: editFormTasks.status,
      complexity: editFormTasks.complexity,
      task_group: editFormTasks.task_group,
      description: editFormTasks.description,
      ref: editFormTasks.ref,
      technical_dependencies: editFormTasks.technical_dependencies,
      temporal_dependencies: editFormTasks.temporal_dependencies,
      computed_dependencies: editFormTasks.computed_dependencies
    }

    const newTasks = [...tasks]

    const index = newTasks.findIndex(task => task.id === editedTasks.id)

    newTasks[index] = editedTasks

    setTasks(newTasks)
    setEditTasksId(null)
  }

  useEffect(() => {
    tasks.map(task => {
      for (let i = 0; i < reportsList.length; i++) {
        if (task.id === reportsList[i].id) {
          task.progress = reportsList[i].progress
          task.blocked = reportsList[i].blockings
          task.issues = reportsList[i].issues
          task.help = reportsList[i].help
        }
      }
    })
    setTasks(tasks)
  }, [reportsList])

  return (
    <div>
      <div>
        <h1>Tasks</h1>
      </div>
      <div className="mt-2">
        <Button color="primary">Reduce Table Size</Button>
      </div>
      <div className="table mt-4">
        <form onSubmit={handleEditFormSubmit}>
          <Table>
            <thead>
              <tr>
                <th className="text-center">Actions</th>
                <th className="text-center">#</th>
                <th className="text-center">Username</th>
                <th className="text-center">Blocked</th>
                <th className="text-center">Issues</th>
                <th className="text-center">Help</th>
                <th className="text-center">Label</th>
                <th className="text-center">Sublabel</th>
                <th className="text-center">Priority</th>
                <th className="text-center">Duration</th>
                <th className="text-center">Duration Confidence</th>
                <th className="text-center">Start Date</th>
                <th className="text-center">End Date</th>
                <th className="text-center">Status</th>
                <th className="text-center">Complexity</th>
                <th className="text-center">Task Group</th>
                <th className="text-center">Description</th>
                <th className="text-center">#REF!</th>
                <th className="text-center">Technical \ndependencies\nIDs</th>
                <th className="text-center">Temporal_\ndependencies\nIDs</th>
                <th className="text-center">Computed_dependency_IDs</th>
                <th className="text-center">Timeline</th>
              </tr>
            </thead>
            <tbody>
              {tasks.map((task, index) => (
                <>
                  {editTasksId === task.id ? (
                    <EditableRow
                      key={index}
                      task={task}
                      editFormTasks={editFormTasks}
                      handleEditFormChange={handleEditFormChange}
                    />
                  ) : (
                    <ReadOnlyRow
                      index={index}
                      task={task}
                      tasks={tasks}
                      setTasks={setTasks}
                      onDelete={onDelete}
                      handleEditClick={handleEditClick}
                    />
                  )}
                </>
              ))}
            </tbody>
          </Table>
        </form>
      </div>
    </div>
  )
}

export default Tasks
