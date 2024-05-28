import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const CompanyInformation = ({ show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Company Information</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Company: Geeksynergy Technologies Pvt Ltd</p>
        <p>Address: Sanjayanagar, Bengaluru-56</p>
        <p>Phone: XXXXXXXXX09</p>
        <p>Email: XXXXXX@gmail.com</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default CompanyInformation;
