/* eslint-disable */
import commonNav from '../packages/commonNav/index.js'

const components = [
    commonNav
]
const install = function (Vue = {}) {
    components.map(component => {
        Vue.component(component.name, component)
    })

    if (typeof window !== 'undefined' && window.Vue) {
        install(window.Vue)
    }
}

export default {
    install,
    commonNav
}
