import expect from 'expect';
import courseReducer from './courseReducer';
import * as actions from '../actions/courseActions';

describe("Course Reducer", () => {
  it('should add course when passes CREATED_COURSE_SUCCESS', () => {
    //arrange
    const initialState = [
      {id: 'A', title: 'A'},
      {id: 'B', title: 'B'},
      {id: 'C', title: 'C'}
    ];

    const course = {id: 'B', title: "New Title"};
    const action = actions.updateCourseSuccess(course);

    //act
    const newState = courseReducer(initialState, action);
    const updateCourse = newState.find(a => a.id == course.id);
    const untouchedCourse = newState.find(a => a.id == 'A');

    //assert
    expect(updateCourse.title).toEqual('New Title');
    expect(untouchedCourse.title).toEqual('A');
    expect(newState.length).toEqual(3);

  });
});
