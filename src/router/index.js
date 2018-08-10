import Vue from 'vue'
import Router from 'vue-router'

// import PagesView from '../views/PagesView.vue'
// import HomeView from '../views/HomeView.vue'
// import MovieView from '../views/MovieView.vue'
// import BookView from '../views/BookView.vue'
// import StatusView from '../views/StatusView.vue'
// import GroupView from '../views/GroupView.vue'
// import SubjectView from '../views/SubjectView.vue'
// import DetailView from '../views/DetailView.vue'
// import SearchView from '../views/SearchView.vue'
// import LoginView from '../views/LoginView.vue'
// import RegisterView from '../views/RegisterView.vue'
// import LangTest from '../views/test.vue'

const PagesView = () => import('../views/PagesView.vue');
const HomeView = () => import('../views/HomeView.vue');
const MovieView = () => import('../views/MovieView.vue');
const BookView = () => import('../views/BookView.vue');
const StatusView = () => import('../views/StatusView.vue');
const GroupView = () => import('../views/GroupView.vue');
const SubjectView = () => import('../views/SubjectView.vue');
const DetailView = () => import('../views/DetailView.vue');
const SearchView = () => import('../views/SearchView.vue');
const LoginView = () => import('../views/LoginView.vue');
const RegisterView = () => import('../views/RegisterView.vue');
const LangTest = () => import('../views/test.vue');

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/pages/'
    },
    {
      path: '/pages',
      component: PagesView,
      children: [
        {
          path: '',
          redirect: '/pages/home'
        },
        {
          path: 'home',
          name: 'HomeView',
          component: HomeView
        },
        {
          path: 'movie',
          name: 'MovieView',
          component: MovieView
        },
        {
          path: 'book',
          name: 'BookView',
          component: BookView
        },
        {
          path: 'status',
          name: 'StatusView',
          component: StatusView
        },
        {
          path: 'group',
          name: 'GroupView',
          component: GroupView
        },
        {
          path: 'detail/:id',
          name: 'DetailView',
          component: DetailView
        },
        {
          path:'test',
          name:'LangTest',
          component:LangTest
        }
      ]
    },
    {
      path: '/pages/:classify/subject/:id',
      name: 'SubjectView',
      components: {
        default: PagesView,
        subject: SubjectView
      }
    },
    {
      path: '/search',
      name: 'SearchView',
      components: {
        default: PagesView,
        search: SearchView
      }
    },
    {
      path: '/login',
      name: 'LoginView',
      component: LoginView
    },
    {
      path: '/register',
      name: 'RegisterView',
      component: RegisterView
    },
    {
      path: '*',
      redirect: '/pages/'
    }
  ]
})
