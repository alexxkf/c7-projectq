import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { Button } from "react-bootstrap";
import { connect } from "react-redux";
import * as actions from "../actions/actions";
import { Redirect } from 'react-router-dom';  

class SubmitAnswer extends Component {

  // state = {
  //   redirect: false
  // }

  // setRedirect = () => {
  //   this.setState({
  //     redirect: true
  //   })
  // }

  // renderRedirect = () => {
  //   if (this.state.redirect) {
  //     return <Redirect to='/target' />
  //   }
  // }

  renderField(field) {
    const {
      meta: { touched, error }
    } = field;
    const className = `form-group ${touched && error ? "has-danger" : ""}`;

    return (
      <div className={className}>
        <label>{field.label}</label>
        <input className="form-control" type="text" {...field.input} />
        <div className="text-help">{touched ? error : ""}</div>
      </div>
    );
  }

  onSubmit(values) {
    const questionid = this.props.questionid;
    this.props.createAnswer(questionid, values, () => {
      //this.setRedirect();
      window.location.reload();
    });
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <form
        className="k-form"
        onSubmit={handleSubmit(this.onSubmit.bind(this))}
      >
        <legend>Credentials</legend>
        <label className="k-form-field">
          <span> Why can you answer this question? </span>
          <Field
            name="credential"
            placeholder="Your Credentials"
            component={"input"}
          />
        </label>
        <legend>Answer</legend>
        <label className="k-form-field">
          <span>Type in your answer:</span>
          <Field name="answer" placeholder="Your Answer" component={"input"} />
        </label>
        <div className="text-right">
          <a href="/">
            <Button variant="outline-danger mr-2" size="sm">
              Back
            </Button>
          </a>
          <Button type="submit" variant="outline-secondary mr-2" size="sm">
            Submit
          </Button>
        </div>
      </form>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

// const newAnswer = reduxForm({
//   form: "addAnswer"
// })(SubmitAnswer);

export default reduxForm({form: "addAnswer"})(connect(mapStateToProps, actions)(SubmitAnswer));
