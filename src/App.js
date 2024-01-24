import {Route, Switch} from 'react-router-dom'

import LoginForm from './components/LoginForm'
import Home from './components/Home'
import NotFound from './components/NotFound'
import ProctedRoute from './components/ProctedRoute'
import Cart from './components/Cart'
import Products from './components/Products'

import './App.css'

const App = () => (
  <Switch>
    <Route exact path="/login" component={LoginForm} />
    <ProctedRoute exact path="/" component={Home} />
    <ProctedRoute exact path="/cart" component={Cart} />
    <ProctedRoute exact path="/products" component={Products} />
    <Route component={NotFound} />
  </Switch>
)

export default App
