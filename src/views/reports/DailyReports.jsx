import React, { useState, useEffect } from "react"
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Table,
  Input,
  Alert,
  Badge,
  Progress
} from "reactstrap"
import "./DailyReports.css"
import { useDispatch, useSelector } from "react-redux"
import { addReport, deleteReport } from "../../features/reports/Reports"
import { updateTask, setTaskProgress } from "../../redux/reducers/tasks"
import {
  setTodayTasks,
  setNextTasks,
  setReports
} from "../../redux/reducers/users"
import { Plus } from "react-feather"
import IssuesList from "./Issueslist/IssuesList"
import TasksList from "./taskslist/TasksList"
import HelpModel from "./helpmodel/HelpModel"
import TasksListt from "./taskslist/TasksListt"

const DailyReports = () => {
  const dispatch = useDispatch()
  const reportsList = useSelector(state => state.reports.value)
  const tasksList = useSelector(state => state.tasks.value)
  const usersList = useSelector(state => state.users.value)
  const loggedInUserIndex = usersList.findIndex(user => user.loggedIn === true)

  let connectedUser = usersList[loggedInUserIndex]

  const [heroku, setHeroku] = useState(false)
  const [terma, setTerma] = useState(false)
  const [reportsButtonClicked, setReportsButtonClicked] = useState(false)
  const [submitButtonClicked, setSubmitButtonClicked] = useState(false)
  const [openIssuesList, setOpenIssuesList] = useState(false)
  const [openTasksList, setOpenTasksList] = useState(false)
  const [openTasksListt, setOpenTasksListt] = useState(false)
  const [taskSubmited, setTaskSubmited] = useState(false)
  const [taskIndex, setTaskIndex] = useState(0)
  const [myTask, setMyTask] = useState({})
  const [calendarList, setCalendarList] = useState(tasksList)
  const [calendarButtonClicked, setCalendarButtonClicked] = useState(false)
  const [negativeSlackColor, setNegativeSlackColor] = useState(false)
  const [duration, setDuration] = useState(0)
  const [helpSelectedOption, setHelpSelectedOption] = useState("")
  const [openHelpModel, setOpenHelpModel] = useState(false)

  const [work, setWork] = useState("")
  const [hours, setHours] = useState("")
  const [issues, setIssues] = useState("")
  const [blockings, setBlockings] = useState("")
  const [help, setHelp] = useState("")
  const [progress, setProgress] = useState("50")
  const [next, setNext] = useState("")
  const [statistics, setStatistics] = useState("")

  const updateProgressEvent = task => {
    document.getElementById("progressInput").value = task.progress
    document.getElementById("progressBadge").innerText = task.progress + "%"
    setProgress(task.progress)
    setMyTask(task)
    setCalendarList(tasksList[taskIndex])
  }

  const updateProgress = task => {
    document.getElementById("progressBadge").innerText = task.progress + "%"
    setProgress(task.progress)
    dispatch(setTaskProgress(task))
  }

  useEffect(() => {
    if (submitButtonClicked === true) {
      dispatch(updateTask(taskIndex, progress))
    }
    setCalendarList(tasksList[taskIndex])
    console.log("calendarList", calendarList)
    console.log(calendarList.progress)
    //get current date
    var today = new Date()
    var endDate = new Date(calendarList.end_date)
    console.log("endDate", endDate)
    console.log("today", today)
    //calculate the duration between the end date and the current date
    var duration = Math.floor(
      (Date.UTC(endDate.getFullYear(), endDate.getMonth(), endDate.getDate()) -
        Date.UTC(today.getFullYear(), today.getMonth(), today.getDate())) /
        (1000 * 60 * 60 * 24)
    )
    console.log("duration", duration)
    setDuration(duration + " days")
    //if endDate is greater than today and progress is less than 100% then setNegativeSlackColor to true
    if (endDate < today && calendarList.progress < 100) {
      setNegativeSlackColor(true)
    } else {
      setNegativeSlackColor(false)
    }
    console.log(usersList)
    console.log(connectedUser)
    console.log(loggedInUserIndex)
    console.log(work)
  }, [
    reportsList,
    calendarList,
    taskIndex,
    progress,
    submitButtonClicked,
    usersList,
    connectedUser
  ])

  return (
    <div>
      <div className="daily-reports">
        <h1>Daily Reports</h1>
      </div>
      <div>
        <div className="row">
          <div className="col">
            {taskSubmited === true ? (
              <Card
                className=" mt-5"
                style={{
                  backgroundColor: "#62fc7c",
                  width: "35%"
                }}
              >
                <CardBody>
                  <div className="row ">
                    <div className="col">
                      <CardTitle>{tasksList[taskIndex].name}</CardTitle>
                    </div>
                    <div className="col">
                      <CardTitle
                        className="text-right"
                        style={{
                          fontSize: "1rem"
                        }}
                      >
                        {
                          //wriite in progress if the progress is less than 100% or bigger than 0% and write done if the progress is 100% and not started if the progress is 0%
                          tasksList[taskIndex].progress < 100 &&
                          tasksList[taskIndex].progress > 0
                            ? "In Progress"
                            : tasksList[taskIndex].progress == 100
                            ? "Completed"
                            : "Not Started"
                        }
                      </CardTitle>
                    </div>
                  </div>

                  <CardSubtitle>
                    {tasksList[taskIndex].description}
                  </CardSubtitle>
                </CardBody>
              </Card>
            ) : null}

            <Card className="w-75 mt-5">
              <CardBody>
                <CardTitle>Submit Daily Report</CardTitle>
                <hr />
                <CardSubtitle>here the user email</CardSubtitle>
              </CardBody>
            </Card>
            <Card className="w-75">
              <CardBody>
                <CardTitle>What did i work on today</CardTitle>
                <Button
                  color="primary"
                  onClick={() => {
                    setOpenTasksList(true)
                  }}
                >
                  Select the task you did for today
                </Button>
              </CardBody>
            </Card>

            <Card className="w-75">
              <CardBody>
                <CardTitle>Total hours worked</CardTitle>
                <Input
                  type="number"
                  name="number"
                  id="exampleNumber"
                  min="0"
                  max="24"
                  onChange={e => setHours(e.target.value)}
                />
              </CardBody>
            </Card>
            <Card className="w-75">
              <CardBody>
                <CardTitle>Unknows/Issues</CardTitle>
                <Button
                  color="primary"
                  style={{
                    radius: "50%"
                  }}
                  onClick={() => {
                    setOpenIssuesList(true)
                  }}
                >
                  <span>
                    <Plus />
                  </span>
                </Button>
              </CardBody>
            </Card>
            <Card className="w-75">
              <CardBody>
                <CardTitle>Are you blocked</CardTitle>
                <Button
                  color="primary"
                  style={{
                    radius: "50%"
                  }}
                >
                  <span>
                    <Plus />
                  </span>
                </Button>
              </CardBody>
            </Card>
            <Card className="w-75">
              <CardBody>
                <CardTitle>Need help ?</CardTitle>
                <Input
                  type="select"
                  name="select"
                  id="exampleSelect"
                  onChange={e => {
                    setHelpSelectedOption(e.target.value)
                  }}
                >
                  <option>Select</option>
                  <option>Yes</option>
                  <option>No</option>
                </Input>
                {
                  //if the user select yes then show the plus button else show nothing
                  helpSelectedOption === "Yes" ? (
                    <Button
                      color="primary mt-2"
                      style={{
                        radius: "50%"
                      }}
                      onClick={() => {
                        setOpenHelpModel(true)
                      }}
                    >
                      <span>
                        <Plus />
                      </span>
                    </Button>
                  ) : null
                }
              </CardBody>
            </Card>
            <Card className="w-75">
              <CardBody>
                <CardTitle>Progress</CardTitle>
                <Input
                  type="range"
                  name="progress"
                  id="progressInput"
                  disabled={taskSubmited ? false : true}
                  onChange={e =>
                    updateProgress({ id: myTask.id, progress: e.target.value })
                  }
                />

                <div
                  className="mt-2"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                  }}
                >
                  <Badge
                    color="primary"
                    pill
                    style={{
                      width: "fit-content",
                      height: "3rem",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center"
                    }}
                  >
                    <span id="progressBadge">50%</span>
                  </Badge>
                </div>
              </CardBody>
            </Card>
            <Card className="w-75">
              <CardBody>
                <CardTitle>What am i going to do next</CardTitle>
                <Button
                  color="primary"
                  style={{
                    radius: "50%"
                  }}
                  onClick={() => {
                    setOpenTasksListt(true)
                  }}
                >
                  Select the next task
                </Button>
              </CardBody>
            </Card>
            <Card className="w-75">
              <CardBody>
                <CardTitle>Statistics</CardTitle>
                <Input
                  type="text"
                  name="statistics"
                  id="exampleStatistics"
                  onChange={e => setStatistics(e.target.value)}
                />
              </CardBody>
            </Card>
            <Button
              color="primary"
              size="lg"
              onClick={e => {
                e.preventDefault()
                dispatch(
                  addReport({
                    id: reportsList[reportsList.length - 1].id + 1,
                    work,
                    hours,
                    issues,
                    blockings,
                    help,
                    progress,
                    next,
                    statistics
                  })
                )
                //map throught the usersList and change loggedInUser todayTasks to work
                usersList.map(user => {
                  if (user.email === connectedUser.email) {
                    dispatch(setTodayTasks({ id: user.id, todayTasks: work }))
                    dispatch(setNextTasks({ id: user.id, nextTasks: next }))
                    dispatch(
                      setReports({
                        id: user.id,
                        reports: [
                          ...reportsList,
                          {
                            id: reportsList[reportsList.length - 1].id + 1,
                            work,
                            hours,
                            issues,
                            blockings,
                            help,
                            progress,
                            next,
                            statistics
                          }
                        ]
                      })
                    )
                  }
                })
                setSubmitButtonClicked(true)
              }}
            >
              Submit
            </Button>
            {submitButtonClicked ? (
              <Alert
                color="success"
                className="mt-3 w-25 text-center"
                style={{
                  height: "3rem"
                }}
              >
                <span
                  style={{
                    color: "green"
                  }}
                >
                  Report submitted successfully!
                </span>
              </Alert>
            ) : null}
          </div>
          <div className="col">
            <Button
              color={calendarButtonClicked ? "danger" : "primary"}
              className="float-right"
              onClick={() => {
                setCalendarButtonClicked(!calendarButtonClicked)
              }}
            >
              {calendarButtonClicked ? "Hide Calendar!" : "Show Calendar!"}
            </Button>
            <div>
              {calendarButtonClicked ? (
                <Table className="mt-5">
                  <thead>
                    <tr>
                      <th>Task Name</th>
                      <th>Delay</th>
                      <th>Start Date</th>
                      <th>Progress</th>
                      <th>End Date</th>
                      <th>Duration</th>
                      <th>Negative Slack</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{calendarList.name}</td>
                      <td
                        style={{
                          backgroundColor: "#e8f016"
                        }}
                      >
                        {calendarList.delay}
                      </td>
                      <td>{calendarList.start_date}</td>
                      <td>
                        <div className="text-center">
                          {calendarList.progress}%
                        </div>
                        <Progress value={calendarList.progress} />
                      </td>
                      <td>{calendarList.end_date}</td>
                      <td>{duration}</td>
                      <td
                        style={{
                          backgroundColor:
                            negativeSlackColor === true ? "#e31919" : ""
                        }}
                      ></td>
                    </tr>
                  </tbody>
                </Table>
              ) : null}
            </div>
          </div>
        </div>

        <div className="d-flex justify-content-end">
          <Button
            color={reportsButtonClicked ? "danger" : "primary"}
            size="lg"
            onClick={() => {
              setReportsButtonClicked(!reportsButtonClicked)
            }}
          >
            {reportsButtonClicked === false ? "Show Reports" : "Hide Reports"}
          </Button>
        </div>
        {reportsButtonClicked ? (
          <Table className="mt-5">
            <thead>
              <tr>
                <th>Work</th>
                <th>Hours</th>
                <th>Issues</th>
                <th>Blocked</th>
                <th>Help</th>
                <th>Progress</th>
                <th>Next</th>
                <th>Statistics</th>
              </tr>
            </thead>
            <tbody>
              {reportsList.map(report => (
                <tr key={report.work}>
                  <td>{report.work}</td>
                  <td>{report.hours}</td>
                  <td>{report.issues}</td>
                  <td>{report.blockings}</td>
                  <td>{report.help}</td>
                  <td>{report.progress}</td>
                  <td>{report.next}</td>
                  <td>{report.statistics}</td>
                  <td>
                    <Button
                      color="danger"
                      onClick={() => {
                        dispatch(deleteReport({ id: report.id }))
                      }}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        ) : (
          ""
        )}
      </div>
      {openIssuesList === true ? (
        <IssuesList
          title="Issues List"
          openIssuesList={openIssuesList}
          setOpenIssuesList={setOpenIssuesList}
          issues={issues}
          setIssues={setIssues}
        />
      ) : null}
      {openTasksList === true ? (
        <TasksList
          title="Tasks List"
          openTasksList={openTasksList}
          setOpenTasksList={setOpenTasksList}
          setWork={setWork}
          setTaskSubmited={setTaskSubmited}
          setTaskIndex={setTaskIndex}
          updateProgress={updateProgressEvent}
        />
      ) : null}
      {openHelpModel === true ? (
        <HelpModel
          title="Help Model"
          openHelpModel={openHelpModel}
          setOpenHelpModel={setOpenHelpModel}
          setHelp={setHelp}
        />
      ) : null}
      {openTasksListt === true ? (
        <TasksListt
          title="Tasks List"
          openTasksListt={openTasksListt}
          setOpenTasksListt={setOpenTasksListt}
          setNext={setNext}
        />
      ) : null}
    </div>
  )
}

export default DailyReports
