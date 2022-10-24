import React, { Fragment } from "react"
import Breadcrumbs from "@components/breadcrumbs"
import { Row, Col } from "reactstrap"

import TableZeroConfig from "@components/table/TableZeroConfig"

// ** Styles
import "@styles/react/libs/tables/react-dataTable-component.scss"

export const DailyReportsTable = () => {
  return (
    <Fragment>
      <Breadcrumbs
        breadCrumbTitle="Datatables"
        breadCrumbParent="Home"
        breadCrumbActive="Datatables Basic"
      />
      <Row>
        <Col sm="12">
          <TableZeroConfig />
        </Col>
      </Row>
    </Fragment>
  )
}
