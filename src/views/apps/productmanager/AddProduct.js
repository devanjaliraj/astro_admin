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
  CustomInput,
} from "reactstrap";
import axiosConfig from "../../../axiosConfig";
import "react-toastify/dist/ReactToastify.css";
import { Route } from "react-router-dom";
import Breadcrumbs from "../../../components/@vuexy/breadCrumbs/BreadCrumb";
import { data } from "jquery";
export class AddProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      productname: "",
      category: "",
      image: "",
      desc: "",
      mrp_price: "",
      des_price: "",
      selectedFile: undefined,
      status: "",
    };
    this.state = {
      categoryP: [],
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
      .get("/admin/getproductcalegory")
      .then((response) => {
        console.log(response);
        this.setState({
          categoryP: response.data.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  submitHandler = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("title", this.state.title);
    data.append("productname", this.state.productname);
    data.append("category", this.state.category);
    data.append("desc", this.state.desc);
    data.append("mrp_price", this.state.mrp_price);
    data.append("des_price", this.state.des_price);
    data.append("status", this.state.status);

    for (const file of this.state.selectedFile) {
      if (this.state.selectedFile !== null) {
        data.append("image", file, file.name);
      }
    }
    for (var value of data.values()) {
      console.log(value);
    }
    for (var key of data.keys()) {
      console.log(key);
    }

    axiosConfig
      .post(`/admin/addProduct`, data)
      .then((response) => {
        console.log(response.data);
        alert("Product Added Successful");
        this.props.history.push("/app/productmanager/productlist");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <div>
        <Breadcrumbs
          breadCrumbTitle="Add Product"
          breadCrumbParent=" Product Management"
          breadCrumbActive="Add Product"
        />
        <Card>
          <Row className="m-2">
            <Col>
              <h1 col-sm-6 className="float-left">
                Add Product
              </h1>
            </Col>
            <Col>
              <Route
                render={({ history }) => (
                  <Button
                    className=" btn btn-danger float-right"
                    onClick={() =>
                      history.push("/app/productmanager/productlist")
                    }
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
                  <Label>Product Name</Label>
                  <Input
                    required
                    type="text"
                    name="productname"
                    placeholder="Enter Title"
                    value={this.state.productname}
                    onChange={this.changeHandler}
                  ></Input>
                </Col>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Product Category</Label>
                  <CustomInput
                    type="select"
                    name="category"
                    value={this.state.category}
                    onChange={this.changeHandler}
                  >
                    <option>select script</option>
                    {this.state.categoryP?.map((allCategory) => (
                      <option value={allCategory?._id} key={allCategory?._id}>
                        {allCategory?.name}
                      </option>
                    ))}
                  </CustomInput>
                </Col>
                <Col lg="4" md="4" sm="4" className="mb-2">
                  <Label>Selling Price(MRP)</Label>
                  <Input
                    required
                    type="number"
                    name="mrp_price"
                    placeholder="Enter MRP"
                    value={this.state.mrp_price}
                    onChange={this.changeHandler}
                  ></Input>
                </Col>
                <Col lg="4" md="4" sm="4" className="mb-2">
                  <Label>Discount Price</Label>
                  <Input
                    required
                    type="number"
                    name="des_price"
                    placeholder="Enter Offer Price"
                    value={this.state.des_price}
                    onChange={this.changeHandler}
                  ></Input>
                </Col>
                <Col lg="4" md="4" sm="4" className="mb-2">
                  <Label>Thumnail image</Label>

                  <Label>Image</Label>
                  <CustomInput
                    type="file"
                    multiple
                    onChange={this.onChangeHandler}
                  />
                </Col>
                <Col lg="4" md="4" sm="4" className="mb-2">
                  <Label>Description</Label>
                  <Input
                    required
                    type="textarea"
                    name="desc"
                    placeholder="Enter desc"
                    value={this.state.desc}
                    onChange={this.changeHandler}
                  ></Input>
                </Col>

                {/* <Col lg="12" md="12" sm="12" className="mb-2">
                  <Label>Description</Label>
                  <textarea
                    className="form-control"
                    placeholder="Description..."
                  ></textarea>
                </Col> */}
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
export default AddProduct;
