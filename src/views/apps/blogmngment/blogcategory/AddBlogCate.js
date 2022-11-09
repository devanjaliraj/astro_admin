import React, { Component } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  Row,
  Col,
  Form,
  Label,
  Input,
  CustomInput,
  Button,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";
import axiosConfig from "../../../axiosConfig";
// import { history } from "../../../../history";
import swal from "sweetalert";
import { Route } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "../../../assets/scss/plugins/extensions/editor.scss";
export default class AddBlog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blog_title: "",
      desc: "",
      blogcategory: "",
      blogImg: "",
      selectedFile: undefined,
      selectedName: "",
    };
    this.state = {
      categoryB: [],
    };
  }
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
  async componentDidMount() {
    axiosConfig
      .get("/admin/all_blog_category")
      .then((response) => {
        console.log(response);
        this.setState({
          categoryB: response.data.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  submitHandler = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("blog_title", this.state.blog_title);
    data.append("desc", this.state.desc);
    data.append("blogcategory", this.state.blogcategory);

    for (const file of this.state.selectedFile) {
      if (this.state.selectedFile !== null) {
        data.append("blogImg", file, file.name);
      }
    }
    for (var value of data.values()) {
      console.log(value);
    }
    for (var key of data.keys()) {
      console.log(key);
    }
    axiosConfig
      .post(`admin/addBlog`, data)

      .then((response) => {
        console.log(response.data);

        swal("Success!", "Submitted SuccessFull!", "success");
        this.props.history.push("/app/blogmngment/blogList");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <div>
        <Row>
          <Col sm="12">
            <div>
              <Breadcrumb listTag="div">
                <BreadcrumbItem href="/analyticsDashboard" tag="a">
                  Home
                </BreadcrumbItem>
                <BreadcrumbItem href="/app/blogmngment/blogList" tag="a">
                  Blog List
                </BreadcrumbItem>
                <BreadcrumbItem active>Add Blog</BreadcrumbItem>
              </Breadcrumb>
            </div>
          </Col>
        </Row>
        <Card>
          <Row className="m-2">
            <Col>
              <h1 col-sm-6 className="float-left">
                Add Blog
              </h1>
            </Col>
            <Col>
              <Route
                render={({ history }) => (
                  <Button
                    className=" btn btn-success float-right"
                    onClick={() => history.push("/app/blogmngment/blogList")}
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
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Title</Label>
                  <Input
                    required
                    type="text"
                    name="blog_title"
                    placeholder=""
                    value={this.state.blog_title}
                    onChange={this.changeHandler}
                  ></Input>
                </Col>
                <Col lg="4" md="4" sm="4" className="mb-2">
                  <Label>Blog Image</Label>

                  <Label>Image</Label>
                  <CustomInput
                    type="file"
                    // multiple
                    onChange={this.onChangeHandler}
                  />
                </Col>

                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Blog Category</Label>

                  <CustomInput
                    type="select"
                    name="blogcategory"
                    value={this.state.blogcategory}
                    onChange={this.changeHandler}
                  >
                    <option>select blog category</option>
                    {this.state.categoryB?.map((allCategory) => (
                      <option value={allCategory?._id} key={allCategory?._id}>
                        {allCategory?.name}
                      </option>
                    ))}
                  </CustomInput>
                </Col>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Description</Label>
                  <Input
                    required
                    type="text"
                    name="desc"
                    placeholder=""
                    value={this.state.desc}
                    onChange={this.changeHandler}
                  ></Input>
                </Col>
              </Row>
              <Row>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Button.Ripple
                    color="primary"
                    type="submit"
                    className="mr-1 mb-1"
                  >
                    Add
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
