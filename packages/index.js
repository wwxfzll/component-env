/**
 * @author wwx
 * Date: 18/08/23
 */
import SxTag from './components/tag/index'

const components = [
  SxTag
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
  result = SxTag
} else {
  result = {
    install,
    SxTag
  }
}
export default result
