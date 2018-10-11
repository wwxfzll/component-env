/**
 * @author xxx
 * Date: xxxx-xx-xx
 */
import componentName from './components/fileName/index'

const components = [
  componentName
]

const install = function (Vue) {
  if (install.installed) return
  components.map(component => Vue.component(component.name, component))
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

let result
if (process.env.prod) {
  result = componentName
} else {
  result = {
    install,
    componentName
  }
}
export default result
