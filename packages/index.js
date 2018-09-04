/**
 * @author wwx
 * Date: 18/08/23
 */
import WTag from './tag/index'


const components = [
  WTag
]

const install = function(Vue) {
  if (install.installed) return
  components.map(component => Vue.component(component.name, component))
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install,
  WTag
}
