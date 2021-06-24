import Express from 'express'
import Example from '../Controller/ExampleController'


const Router = Express.Router()


Router.get('/',Example.Index)
Router.get('/post',Example.Index)

export default Router