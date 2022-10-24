import React, { useState, useEffect } from "react"
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
  Input,
  Textarea
} from "reactstrap"
import { Issues } from "./Issues"

const IssuesPulldown = ({
  title,
  openIssuesPulldown,
  setOpenIssuesPulldown,
  setOpenIssuesBox,
  setOpenIssuesList,
  issueName,
  issues,
  setIssues,
  dependancyName
}) => {
  const [issuesList, setIssuesList] = useState(Issues)
  const [issueName1, setIssueName1] = useState("")
  const [issueDescription, setIssueDescription] = useState("eaeaeaea")

  return (
    <Modal isOpen={openIssuesPulldown}>
      <ModalHeader>{title}</ModalHeader>
      <ModalBody>
        <Form className="justify-content-center">
          <FormGroup>
            <Input
              type="select"
              name="select"
              id="exampleSelect"
              onChange={e => {
                setIssueName1(e.target.value)
              }}
            >
              {issuesList.map((issue, index) => {
                return <option key={index}>{issue.name}</option>
              })}
            </Input>
            <h4 className="mt-2">Decribe the issue here</h4>
            <Input
              type="textarea"
              name="text"
              id="exampleText"
              onChange={e => {
                setIssueDescription(e.target.value)
              }}
            />
          </FormGroup>
        </Form>
      </ModalBody>
      <ModalFooter>
        <Button
          type="submit"
          color="primary"
          onClick={() => {
            setOpenIssuesPulldown(false)
            setOpenIssuesBox(false)
            setOpenIssuesList(false)
            setIssues(
              "the issue is " +
                issueName +
                " " +
                dependancyName +
                " " +
                issueName1 +
                " with a description " +
                issueDescription
            )
            console.log(issues)
          }}
        >
          Submit
        </Button>
        <Button color="secondary" onClick={() => setOpenIssuesPulldown(false)}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  )
}

export default IssuesPulldown
