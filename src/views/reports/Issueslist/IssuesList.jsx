import React, { useState, useEffet } from "react"
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Card,
  CardText,
  CardBody,
  CardTitle,
  Label,
  Input
} from "reactstrap"
import IssuesBox from "./Issuesbox/IssuesBox"
import { IssuesListt } from "./IssuesListt"

const IssuesList = ({
  title,
  openIssuesList,
  setOpenIssuesList,
  issues,
  setIssues
}) => {
  const [issuesListt, setIssuesListt] = useState(IssuesListt)
  const [issueName, setIssueName] = useState("")
  const [indexx, setIndexx] = useState(0)
  const [openIssuesBox, setOpenIssuesBox] = useState(false)

  return (
    <div>
      <Modal isOpen={openIssuesList}>
        <ModalHeader>{title}</ModalHeader>
        <ModalBody>
          <Form className="justify-content-center">
            {issuesListt.map((issue, index) => {
              return (
                <FormGroup key={index}>
                  <Card
                    style={{
                      cursor: "pointer"
                    }}
                    className="w-100"
                    onClick={() => {
                      console.log(index)
                      console.log(issue.name)
                      setOpenIssuesBox(true)
                      setIssueName(issue.name)
                      setIndexx(index)
                    }}
                  >
                    <CardBody>
                      <CardTitle>{issue.name}</CardTitle>
                      <CardText>Issue Description</CardText>
                    </CardBody>
                  </Card>
                </FormGroup>
              )
            })}
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={() => setOpenIssuesList(false)}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
      {openIssuesBox === true ? (
        <IssuesBox
          title="Issues Box"
          setOpenIssuesBox={setOpenIssuesBox}
          setOpenIssuesList={setOpenIssuesList}
          openIssuesBox={openIssuesBox}
          issuesListt={issuesListt}
          setIssuesListt={setIssuesListt}
          issueName={issueName}
          indexx={indexx}
          issues={issues}
          setIssues={setIssues}
        />
      ) : null}
    </div>
  )
}

export default IssuesList
