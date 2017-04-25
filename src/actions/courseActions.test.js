import expect from 'expect';
import * as courseActions from './courseActions';
import * as  types from './actionTypes';

import thunk from 'redux-thunk';
import nock from 'nock';
import configureMockStore from 'redux-mock-store';

//Test a sync action
describe('CourseActions', () => {
  describe('createCourseSuccess', () => {
    //arrange
    const course = {ID: 'clean-code', title: 'Clean Code'};
    const expectedAction = {
      type: types.CREATE_COURSES_SUCCESS,
      course: course
    };

    //act
    const action = courseActions.createCourseSuccess(course);

    //assert
    expect(action).toEqual(expectedAction);

  });
});

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe('Async Actions', function () {
  afterEach(function () {
    nock.cleanAll();
  });

  it('should create ' +
    'BEGIN_AJAX_CALL and LOAD_COURSE_SUCCESS' +
    ' when loading course', function (done) {
    //Here´s an example call to nock.
    //nock(http://example.com/')
    //.get('/courses')
    //.reply(200, {body : {course: [{id:1, firstName: 'Cory', lastName: 'House'}]}})

    const expectActions = [
      {type: types.BEGIN_AJAX_CALL},
      {type: types.LOAD_COURSES_SUCCESS,
        body: {courses: [{id: 'clean-code', title:'Clean Code'}]}}
    ];

    const store = mockStore({course: []}, expectActions);

    store.dispatch(courseActions.loadCourses()).then(() => {
      const actions = store.getActions();
      expect(actions[0].type).toEqual(types.BEGIN_AJAX_CALL);
      expect(actions[1].type).toEqual(types.LOAD_COURSES_SUCCESS);
      done();
    });

  });
});
