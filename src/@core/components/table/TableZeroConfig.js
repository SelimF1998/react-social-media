// ** Third Party Components
import { ChevronDown } from "react-feather"
import DataTable from "react-data-table-component"
import { Card, CardHeader, CardTitle } from "reactstrap"

const DataTablesBasic = () => {
  const data = [
    {
      id: 1,
      name: "Task 1",
      description: "Task 1 description",
      progress: "20"
    },
    {
      id: 2,
      name: "Task 2",
      description: "Task 2 description",
      progress: "30"
    },
    {
      id: 3,
      name: "Task 3",
      description: "Task 3 description",
      progress: "30"
    },
    {
      id: 4,
      name: "Task 4",
      description: "Task 4 description",
      progress: "70"
    },
    {
      id: 5,
      name: "Task 5",
      description: "Task 5 description",
      progress: "100"
    }
  ]

  const basicColumns = [
    {
      name: "ID",
      selector: "id",
      sortable: true,
      maxWidth: "100px"
    },
    {
      name: "Name",
      selector: "name",
      sortable: true,
      minWidth: "225px"
    },
    {
      name: "Description",
      selector: "description",
      sortable: true,
      minWidth: "310px"
    },
    {
      name: "Progress",
      selector: "progress",
      sortable: true,
      minWidth: "250px"
    }
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle tag="h4">Zero Configuration</CardTitle>
      </CardHeader>
      <DataTable
        noHeader
        pagination
        data={data}
        columns={basicColumns}
        className="react-dataTable"
        sortIcon={<ChevronDown size={10} />}
        paginationRowsPerPageOptions={[10, 25, 50, 100]}
      />
    </Card>
  )
}

export default DataTablesBasic
