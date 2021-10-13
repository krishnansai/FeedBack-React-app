import React, { useState } from "react";
import { useFormik } from "formik";
import { Col, Row } from "reactstrap";
import './index.css';


const Forms = () => {
  const [message, setMessage] = useState(" ")
  const formik = useFormik({
    initialValues: {
      Form: "Aromatic Bar",
      Text: "",
      Phone: "",
      Email: "",
      think: "",
      Name: "",
    },

    onSubmit: (e) => {


      let data = []

      if (localStorage.getItem("data")) {
        let exitddata = JSON.parse(localStorage.getItem("data"))
        let finaldata = [e, ...exitddata]
        localStorage.setItem("data", JSON.stringify(finaldata))
        data.length = 0
      }
      else {
        data.push(e)
        localStorage.setItem("data", JSON.stringify(data))
        data.length = 0

      }
      e.Email = ""
      e.Text = ""
      e.Phone = ""
      e.Name = ""
      e.think = ""
      setMessage("Thank you for completing the information")

    },
  });
  return (
    <div className="full">
      <div className="heading">
        <h2>Aromatic Bar</h2>
        <h6>We are committed to providing you with the best
          dining experience possible, so we welcome your comments. Please
          fill out this questionnaire. Thank you</h6>
      </div>
      <form onSubmit={formik.handleSubmit} className="form-control">
        <div className="container">
          <Row className="main">
            <Col className="col-6">
              <div className="form-group">
                <br />
                <label>Text feild </label>
                <br />
                <input
                  className="form-control"

                  form-control input-lg
                  required
                  type="text"
                  name="Text"
                  value={formik.values.Text}
                  onChange={formik.handleChange}
                />

              </div>
              <br />
              <div className="form-group">
                <label>Phone Feild </label>
                <br />
                <input
                  className="form-control"

                  required
                  type="number"
                  name="Phone"
                  value={formik.values.Phone}
                  onChange={formik.handleChange}
                />
              </div>
              <br />
              <div className="form-group">
                <label>Name </label>
                <br />
                <input
                  className="form-control"

                  required
                  type="text"
                  name="Name"
                  value={formik.values.Name}
                  onChange={formik.handleChange}
                />
              </div>
              <br />
            </Col>
            <Col className="col-6">
              <div className="form-group">
                <br />
                <label>Email Feild </label>
                <br />
                <input
                  className="form-control"
                  required
                  type="email"
                  name="Email"
                  value={formik.values.Email}
                  onChange={formik.handleChange}
                />
              </div>
              <br />
              <div>
                <div className="form-group" value={formik.values.Radio} onChange={formik.handleChange}>
                  <label>Radio Button</label>
                  <br />
                  <input type="radio" class="radio-inline" value="Excellent" name="think" /> Excellent

                  <input type="radio" class="radio-inline" value="Good" name="think" /> Good

                  <input type="radio" class="radio-inline" value="Fair" name="think" /> Fair

                  <input type="radio" class="radio-inline" value="Bad" name="think" /> Bad

                </div>
              </div>
            </Col>
          </Row>
          <br />
          <br />
          <div className="sub">
            <button className="btn btn-success" type="submit">Submit</button>
          </div>
          {message && message}
        </div>
      </form>
    </div>
  );
};

export default Forms;
