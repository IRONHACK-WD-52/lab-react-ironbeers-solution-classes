import React from "react";
import axios from "axios";

class NewBeer extends React.Component {
  state = {
    name: "",
    tagline: "",
    description: "",
    first_brewed: "",
    brewers_tips: "",
    attenuation_level: "",
    contributed_by: "",
  };

  handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("https://ih-beers-api2.herokuapp.com/beers/new", { ...this.state })
      .then((response) => {
        // console.log("redirecting....");
        // this is how you redirect
        console.log(response);
        this.props.history.push("/all-beers");
      })
      .catch((err) => console.log(err));
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="mt-5 text-left w-100 d-flex justify-content-center">
        <form onSubmit={this.handleSubmit} className="col-6">
          <div className="form-group">
            <label>Name</label>
            <input
              className="form-control"
              value={this.state.name}
              name="name"
              onChange={this.handleChange}
            />
          </div>

          <div className="form-group">
            <label>Tagline</label>
            <input
              className="form-control"
              value={this.state.tagline}
              name="tagline"
              onChange={this.handleChange}
            />
          </div>

          <div className="form-group">
            <label>Description</label>
            <textarea
              className="form-control"
              name="description"
              value={this.state.description}
              onChange={this.handleChange}
            ></textarea>
          </div>

          <div className="form-group">
            <label>First Brewed</label>
            <input
              className="form-control"
              value={this.state.first_brewed}
              name="first_brewed"
              onChange={this.handleChange}
            />
          </div>

          <div className="form-group">
            <label>Brewer's Tips</label>
            <input
              className="form-control"
              value={this.state.brewers_tips}
              name="brewers_tips"
              onChange={this.handleChange}
            />
          </div>

          <div className="form-group">
            <label>Attenuation Level</label>
            <input
              className="form-control"
              value={this.state.attenuation_level}
              name="attenuation_level"
              onChange={this.handleChange}
            />
          </div>

          <div className="form-group">
            <label>Contributed By</label>
            <input
              className="form-control"
              value={this.state.contributed_by}
              name="contributed_by"
              onChange={this.handleChange}
            />
          </div>

          <div className="form-group">
            <button className="btn btn-primary" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default NewBeer;
