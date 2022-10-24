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

const HelpModel = ({ title, openHelpModel, setOpenHelpModel, setHelp }) => {
  const [helpDescription, setHelpDescription] = useState("")

  return (
    <div>
      {" "}
      <Modal isOpen={openHelpModel}>
        <ModalHeader>{title}</ModalHeader>
        <ModalBody>
          <Form className="justify-content-center">
            <FormGroup>
              <h4>Describe your problrem</h4>
              <Input
                type="textarea"
                name="text"
                id="exampleText"
                placeholder="Describe your problem"
                onChange={e => {
                  setHelpDescription(e.target.value)
                }}
              />
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button
            color="primary"
            onClick={() => {
              setHelp(helpDescription)
              setOpenHelpModel(false)
            }}
          >
            Submit
          </Button>
          <Button
            color="secondary"
            onClick={() => {
              setOpenHelpModel(false)
            }}
          >
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  )
}

export default HelpModel
