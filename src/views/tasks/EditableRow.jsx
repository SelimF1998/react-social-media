import React from "react"
import { Input, Button } from "reactstrap"

const EditableRow = ({ editFormTasks, handleEditFormChange }) => {
  return (
    <tr>
      <td>
        <Button type="submit" className="btn btn-primary">
          Save
        </Button>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter Id..."
          name="id"
          value={editFormTasks.id}
          onChange={handleEditFormChange}
        />
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter Username..."
          name="username"
          value={editFormTasks.username}
          onChange={handleEditFormChange}
        />
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter Blocked..."
          name="blocked"
          value={editFormTasks.blocked}
          onChange={handleEditFormChange}
        />
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter Issues..."
          name="issues"
          value={editFormTasks.issues}
          onChange={handleEditFormChange}
        />
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter Help..."
          name="help"
          value={editFormTasks.help}
          onChange={handleEditFormChange}
        />
      </td>
      <td>
        <select
          name="label"
          value={editFormTasks.label}
          onChange={handleEditFormChange}
        >
          <option value="">Select Label</option>
          <option value="Development">Development</option>
          <option value="Testing">Testing</option>
          <option value="Deployment">Deployment</option>
        </select>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter Sublabel..."
          name="sublabel"
          value={editFormTasks.sublabel}
          onChange={handleEditFormChange}
        />
      </td>
      <td>
        <select
          name="priority"
          value={editFormTasks.priority}
          onChange={handleEditFormChange}
        >
          <option value="">Select Priority</option>
          <option value="Urgent">Urgent</option>
          <option value="High Priority">High Priority</option>
          <option value="Medium Priority">Medium Priority</option>
          <option value="Low Priority">Low Priority</option>
          <option value="Future">Future</option>
        </select>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter Duration..."
          name="duration"
          value={editFormTasks.duration}
          onChange={handleEditFormChange}
        />
      </td>
      <td>
        <select
          name="duration_confidence"
          value={editFormTasks.duration_confidence}
          onChange={handleEditFormChange}
        >
          <option value="">Select Duration Confidence</option>
          <option value="Confident">Confident</option>
          <option value="Default">Default</option>
          <option value="Guess/have no idea">Guess/have no idea</option>
          <option value="Not Confident">Not Confident</option>
        </select>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter Start Date..."
          name="start_date"
          value={editFormTasks.start_date}
          onChange={handleEditFormChange}
        />
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter End Date..."
          name="end_date"
          value={editFormTasks.end_date}
          onChange={handleEditFormChange}
        />
      </td>
      <td>
        <select
          name="status"
          value={editFormTasks.status}
          onChange={handleEditFormChange}
        >
          <option value="">Select Status</option>
          <option value="Not Started">Not Started</option>
          <option value="In Progress">In Progress</option>
          <option value="Done">Done</option>
        </select>
      </td>
      <td>
        <select
          name="complexity"
          value={editFormTasks.complexity}
          onChange={handleEditFormChange}
        >
          <option value="">Select Complexity</option>
          <option value="Simple">Simple</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter Task Group..."
          name="task_group"
          value={editFormTasks.task_group}
          onChange={handleEditFormChange}
        />
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter Description..."
          name="description"
          value={editFormTasks.description}
          onChange={handleEditFormChange}
        />
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter #REF!..."
          name="ref"
          value={editFormTasks.ref}
          onChange={handleEditFormChange}
        />
      </td>
      <td>
        <select
          name="technical_dependencies"
          value={editFormTasks.technical_dependencies}
          onChange={handleEditFormChange}
        >
          <option value="">Select Technical Dependencies</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
      </td>
      <td>
        <select
          name="temporal_dependencies"
          value={editFormTasks.temporal_dependencies}
          onChange={handleEditFormChange}
        >
          <option value="">Select Temporal Dependencies</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
      </td>
      <td>
        {" "}
        <input
          type="text"
          required="required"
          placeholder="Enter Computed dependencies IDs..."
          name="computed_dependencies"
          value={editFormTasks.computed_dependencies}
          onChange={handleEditFormChange}
        />
      </td>
    </tr>
  )
}

export default EditableRow
