import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    meta: {
      title: '概览'
    }
    // component: Home
  },
  {
    path: 'scene',
    name: 'ScenarioConfig',
    meta: {
      title: '业务场景配置'
    }

    // component: () => import('../containers/scenarioConfig'),
  },
  {
    path: 'scene/strategy',
    name: 'ScenarioStrategy',
    meta: {
      title: '业务场景配置'
    }

    // component: ScenarioStrategy,
  },
  {
    path: 'rules/rule',
    name: 'RulesConfig',
    meta: {
      title: '规则配置'
    }

    // component: RulesConfig,
  },
  {
    path: 'rules/factor',
    name: 'FactorConfig',
    meta: {
      title: '因子配置'
    }

    // component: FactorConfig,
  },
  {
    path: 'punish/package',
    name: 'PunishPackage',
    meta: {
      title: '处罚套餐设置'
    }

    // component: PunishPackage,
  },
  {
    path: 'punish/atom',
    name: 'PunishAtom',
    meta: {
      title: '处罚原子配置'
    }

    // component: PunishAtom,
  },
  {
    path: 'punish/log',
    name: 'PunishLog',
    meta: {
      title: '处罚日志查询'
    }

    // component: PunishLog,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
