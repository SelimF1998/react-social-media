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
  Input
} from "reactstrap"
import { ArrowDown, ArrowUp } from "react-feather"
import IssuesPulldown from "./Issuespulldown/IssuesPulldown"

const IssuesBox = ({
  title,
  openIssuesBox,
  setOpenIssuesBox,
  setOpenIssuesList,
  issuesListt,
  setIssuesList,
  issueName,
  indexx,
  issues,
  setIssues
}) => {
  const [dependanciesButtonClicked, setDependanciesButtonClicked] =
    useState(false)
  const [dependanciesList, setDependanciesList] = useState(
    issuesListt[indexx].dependancies
  )
  const [openIssuesPulldown, setOpenIssuesPulldown] = useState(false)
  const [dependancyName, setDependancyName] = useState("")

  useEffect(() => {
    console.log(dependanciesList)
    console.log(dependancyName)
  }, [])

  return (
    <div>
      <Modal isOpen={openIssuesBox}>
        <ModalHeader>{title}</ModalHeader>
        <ModalBody>
          <Form className="justify-content-center">
            <h4>Choose current issue or select a dependency</h4>
            <FormGroup>
              <Card
                className="w-100 mt-2"
                style={{
                  cursor: "pointer",
                  height: "5rem"
                }}
                onClick={() => {
                  setOpenIssuesPulldown(true)
                }}
              >
                <CardBody>
                  <CardTitle>{issueName}</CardTitle>
                </CardBody>
              </Card>
              <Card
                className="w-100 mt-2"
                style={{
                  cursor: "pointer",
                  height: "5rem"
                }}
                onClick={() =>
                  setDependanciesButtonClicked(!dependanciesButtonClicked)
                }
              >
                <CardBody className="d-flex">
                  <CardTitle>Dependencies</CardTitle>
                  {
                    //if dependanciesButtonClicked is true, show arrow up else show arrow down
                    dependanciesButtonClicked ? (
                      <ArrowUp
                        className="ml-auto"
                        style={{ marginTop: "0.5rem" }}
                      />
                    ) : (
                      <ArrowDown
                        className="ml-auto"
                        style={{ marginTop: "0.5rem" }}
                      />
                    )
                  }
                </CardBody>
              </Card>

              <div className="h-100 d-flex">
                <div className="px-2 divider h-100 d-flex justify-center">
                  <div
                    className="divider"
                    style={{ borderRight: "1px solid #ddd" }}
                  ></div>
                </div>
                <div>
                  {dependanciesButtonClicked
                    ? dependanciesList.map((dependancy, index) => {
                        return (
                          <Card
                            key={index}
                            className="mt-2 float-right "
                            style={{
                              cursor: "pointer",
                              height: "5rem",
                              width: "100%"
                            }}
                            onClick={() => {
                              setOpenIssuesPulldown(true)
                              setDependancyName(dependancy.name)
                            }}
                          >
                            <CardBody>
                              <CardTitle>{dependancy.name}</CardTitle>
                            </CardBody>
                          </Card>
                        )
                      })
                    : null}
                </div>
              </div>
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={() => setOpenIssuesBox(false)}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
      {openIssuesPulldown === true ? (
        <IssuesPulldown
          title="Choose an issue"
          openIssuesPulldown={openIssuesPulldown}
          setOpenIssuesPulldown={setOpenIssuesPulldown}
          setOpenIssuesBox={setOpenIssuesBox}
          setOpenIssuesList={setOpenIssuesList}
          issueName={issueName}
          dependancyName={dependancyName}
          issues={issues}
          setIssues={setIssues}
        />
      ) : null}
    </div>
  )
}

export default IssuesBox
