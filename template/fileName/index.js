/**
 * @author xxx
 * Date: xxxx-xx-xx
 */
import componentName from './src/main.vue'

componentName.install = function (Vue) {
  Vue.component(componentName.name, componentName)
}

export default componentName
