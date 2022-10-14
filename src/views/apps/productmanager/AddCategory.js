import React, { Component } from "react";
import {
  Card,
  CardBody,
  Col,
  Form,
  Row,
  Input,
  Label,
  Button,
  FormGroup,
} from "reactstrap";
//import axios from "axios";
import axiosConfig from "../../../axiosConfig";
// import { useParams } from "react-router-dom";
//import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { Route } from "react-router-dom";
import Breadcrumbs from "../../../components/@vuexy/breadCrumbs/BreadCrumb";

import { data } from "jquery";
export class AddCategory extends Component {
  state = {
    // activeTab: "1",
    astroId: "",
    name: "",
    img: "",
    desc: "",
    status: "",
    selectedFile: undefined,
    selectedName: "",
  };

  // toggle = (tab) => {
  //   this.setState({
  //     activeTab: tab,
  //   });
  // };

  onChangeHandler = (event) => {
    this.setState({ selectedFile: event.target.files[0] });
    this.setState({ selectedName: event.target.files[0].name });
    console.log(event.target.files[0]);
  };
  onChangeHandler = (event) => {
    this.setState({ selectedFile: event.target.files });
    this.setState({ selectedName: event.target.files.name });
    console.log(event.target.files);
  };
  changeHandler1 = (e) => {
    this.setState({ status: e.target.value });
  };
  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  componentDidMount() {
    console.log(this.props.match.params);
    let { id } = this.props.match.params;
    axiosConfig.get(`/getonecustomer/${id}`).then((response) => {
      console.log(response);
      this.setState({
        astroId: response.data.data.astroId,
        name: response.data.data.name,
        img: response.data.data.img,
        desc: response.data.data.desc,
        status: response.data.data.status,
      });
    });
  }

  submitHandler = (e) => {
    e.preventDefault();
    console.log(this.props.match.params, this.state);
    const data = new FormData();
    data.append("astroId", this.state.astroId);
    data.append("name", this.state.name);
    data.append("desc", this.state.desc);
    data.append("status", this.state.status);
    for (const file of this.state.selectedFile) {
      if (this.state.selectedFile !== null) {
        data.append("img", file, file.name);
      }
    }
    for (var value of data.values()) {
      console.log(value);
    }
    for (var key of data.keys()) {
      console.log(key);
    }

    let { id } = this.props.match.params;
    axiosConfig
      .post(`//${id}`, data)
      .then((response) => {
        console.log(response);
        this.props.history.push("/app/customer/customerList");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  render() {
    return (
      <div>
        <Breadcrumbs
          breadCrumbTitle="Add Category"
          breadCrumbParent=" Product Management"
          breadCrumbActive="Add Category"
        />
        <Card>
          <Row className="m-2">
            <Col>
              <h1 col-sm-6 className="float-left">
                Add Category
              </h1>
            </Col>
            <Col>
              <Route
                render={({ history }) => (
                  <Button
                    className=" btn btn-danger float-right"
                    onClick={() => history.push("/app/customer/customerList")}
                  >
                    Back
                  </Button>
                )}
              />
            </Col>
          </Row>
          <CardBody>
            <Form className="m-1" onSubmit={this.submitHandler}>
              <Row>
                <Col lg="4" md="4" sm="4" className="mb-2">
                  <Label>Category Name</Label>
                  <Input
                    required
                    type="text"
                    name="title"
                    placeholder="Enter Category Name"
                    // value={this.state.title}
                    // onChange={this.changeHandler}
                  ></Input>
                </Col>
                <Col lg="4" md="4" sm="4" className="mb-2">
                  <Label>slug Name</Label>
                  <Input
                    required
                    type="text"
                    name="mrp"
                    placeholder="slug  Name"
                    // value={this.state.mrp}
                    // onChange={this.changeHandler}
                  ></Input>
                </Col>
                <Col lg="4" md="4" sm="4" className="mb-2">
                  <Label>Thumnail image1</Label>
                  <Input
                    required
                    type="file"
                    name="last_name"
                    className="form-control"
                    placeholder="Enter Last Name"
                    value={this.state.last_name}
                    onChange={this.changeHandler}
                  ></Input>
                </Col>
              </Row>
              <Col lg="6" md="6" sm="6" className="mb-2">
                <Label className="mb-1">Status</Label>
                <div
                  className="form-label-group"
                  onChange={(e) => this.changeHandler1(e)}
                >
                  <input
                    style={{ marginRight: "3px" }}
                    type="radio"
                    name="status"
                    value="Active"
                  />
                  <span style={{ marginRight: "20px" }}>Active</span>

                  <input
                    style={{ marginRight: "3px" }}
                    type="radio"
                    name="status"
                    value="Inactive"
                  />
                  <span style={{ marginRight: "3px" }}>Inactive</span>
                </div>
              </Col>
              <Row>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Button.Ripple
                    color="primary"
                    type="submit"
                    className="mr-1 mb-1"
                  >
                    Save
                  </Button.Ripple>
                </Col>
              </Row>
            </Form>
          </CardBody>
        </Card>
      </div>
    );
  }
}
export default AddCategory;
