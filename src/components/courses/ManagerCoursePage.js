import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import * as courseActions from '../../actions/courseActions';
import {bindActionCreators} from 'redux';
import CourseForm from './CourseForm';

class ManagerCoursePage extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      course: Object.assign({}, this.props.course),
      errors: {}
    };
  }

  render(){
    return (
      <div>
        <CourseForm
          allAuthors={[]}
          course={this.state.course}
          errors ={this.state.errors}
        />
      </div>
    );
  }
}

ManagerCoursePage.propTypes = {
  //courses: PropTypes.array.isRequired,
  //actions : PropTypes.object.isRequired
  course: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  let course = {
    id: '',
    watchHref: '',
    title: '',
    authorId: '',
    length: '',
    category: ''
  };
  return {
    course: course
  };
}

function mapDispatchToProps(dispatch){
  return {
    actions: bindActionCreators(courseActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManagerCoursePage);
