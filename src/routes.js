import React from 'react';
import {Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import CoursesPage from './components/courses/CoursesPage';
import ManagerCoursePage from './components/courses/ManagerCoursePage';

export default(
  <Route path="/" components={App}>
    <IndexRoute component={HomePage} />
    <Route path="courses" component={CoursesPage}/>
    <Route path="course" component={ManagerCoursePage}/>
    <Route path="course/:id" component={ManagerCoursePage}/>
    <Route path="about" component={AboutPage}/>
  </Route>
);
