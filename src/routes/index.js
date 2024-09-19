import { lazy } from 'react';

const Home1 = lazy(() => import('../pages/Home/hellopages'));
const Home2 = lazy(() => import('../pages/Home/homepage'));
const Coursemenu = lazy(() =>import('../pages/Student/CourseMenu'));
const Createcourse = lazy(() =>import('../pages/SuperAdmin/Createcourse'));

// const FormElements = lazy(() => import('../pages/Form/FormElements'));
// const FormLayout = lazy(() => import('../pages/Form/FormLayout'));
// const Profile = lazy(() => import('../pages/Profile'));
// const Settings = lazy(() => import('../pages/Settings'));
// const Tables = lazy(() => import('../pages/Tables'));
// const Alerts = lazy(() => import('../pages/UiElements/Alerts'));
// const Buttons = lazy(() => import('../pages/UiElements/Buttons'));

const coreRoutes = [
  {
    path: '/superAdmin/dashboard',
    title: 'home1',
    component: Home1,
  },
  {
    path: '/superAdmin/createCourse',
    title: 'CreateCourse',
    component: Createcourse,
  },
  {
    path: '/admin/dashboard',
    title: 'home2',
    component: Home2,
  },
  {
    path: '/student/dashboard',
    title: 'home2',
    component: Home2,
  },
  {
    path: '/student/course',
    title: 'course',
    component: Coursemenu,
  }
 

  
];

const routes = [...coreRoutes];
export default routes;
