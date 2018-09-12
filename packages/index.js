/**
 * @author wwx
 * Date: 18/08/23
 */
import SxTag from './components/tag/index'


const components = [
  SxTag
]

const install = function(Vue) {
  if (install.installed) return
  components.map(component => Vue.component(component.name, component))
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}


module.exports = {
  install,
  SxTag
}

module.exports.default = module.exports
