import Controller from '../../shared/BaseController'
import View from './View'
import Model from './Model'


export default class extends Controller {
  View = View
  Model = Model
}