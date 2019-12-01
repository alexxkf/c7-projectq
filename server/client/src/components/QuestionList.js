import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../App.css";
import CategoryList from './CategoryList'
import * as actions from '../actions/actions';
//import { bindActionCreators } from 'redux'
// import _ from "lodash";
import { connect } from "react-redux";
// import InfiniteScroll from 'react-infinite-scroller';

class QuestionList extends Component {

  // Fetch questions once page assets are ready
  componentDidMount() {
    this.props.fetchQuestions()
    this.props.fetchLoginStatus()
  }

  renderQuestions() {
    // If questions in state; loop and return each one
    if (this.props.questions.questionsList) {
      console.log(this.props.questions.questionsList);
      return (
        <div>
          <div class="card-columns">
            <div class="col-md-12">
              {this.props.questions.questionsList.map(q => (
                <div class="card">
                  <div class="card text-center">
                    Categories
                </div>
                  <div class="card-body">
                    <h6 class="card-title">
                      <React.Fragment key={q._id}>
                        <a href='/' onClick={e => { e.preventDefault(this.fetchQuestions(q._id)); }}>{q.question}</a>
                        <p class="card-text">{q.topAnswer.answer}</p>
                      </React.Fragment>
                    </h6>
                    <small class="text">
                      <i class="material-icons float-left">
                        arrow_upward</i>
                      <i class="material-icons float-right">
                        chat_bubble_outline</i>
                      <i class="material-icons float-left">
                        loop</i>
                    </small>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )
    }
  }

  render() {
    const { authenticated } = this.props.auth;
    const { user } = this.props.auth;
    console.log('questionList render props: ', this.props)
    return (
      <React.Fragment>
        <CategoryList />
        <div>
          {this.renderQuestions()}
        </div>
      </React.Fragment>

    )
  }
}

const mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps, actions)(QuestionList)