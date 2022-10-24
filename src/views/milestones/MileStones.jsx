import React from "react"
import { Table, Button } from "reactstrap"
import { ArrowUp, ArrowDown, Edit, Trash2 } from "react-feather"
import { useDispatch, useSelector } from "react-redux"

const MileStones = () => {
  const dispatch = useDispatch()
  const milestonesList = useSelector(state => state.milestones.value)
  return (
    <div className="milestones">
      <div className="title">
        <h1>Milestones</h1>
      </div>
      <div className="table mt-4">
        <form>
          <Table>
            <thead>
              <tr>
                <th className="text-center">Actions</th>
                <th className="text-center">Name</th>
                <th className="text-center">Description</th>
                <th className="text-center">Start Date</th>
                <th className="text-center">End Date</th>
                <th className="text-center">Milestone Dependencies</th>
                <th className="text-center">Use Cases</th>
              </tr>
            </thead>
            <tbody>
              {milestonesList.map((milestone, index) => (
                <tr key={index}>
                  <td className="d-flex gap-1">
                    <Button color="success" className="mr-1">
                      <ArrowUp />
                    </Button>
                    <Button color="success" className="mr-1">
                      <ArrowDown />
                    </Button>
                    <Button color="primary" className="mr-1">
                      <Edit />
                    </Button>
                    <Button color="danger">
                      <Trash2 />
                    </Button>
                  </td>
                  <td className="text-center">{milestone.name}</td>
                  <td className="text-center">{milestone.description}</td>
                  <td className="text-center">{milestone.start_date}</td>
                  <td className="text-center">{milestone.end_date}</td>
                  <td className="text-center">
                    {milestone.milestone_dependencies}
                  </td>
                  <td className="text-center">{milestone.use_cases}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </form>
      </div>
    </div>
  )
}

export default MileStones
