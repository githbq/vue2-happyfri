import App from '../App'

export default [{
  path: '/',
  component: App,
  children: [{
      path: '',
      component: r => require.ensure([], () => r(require('../page/home')), 'home.vue')
    }, {
      path: '/item',
      component: r => require.ensure([], () => r(require('../page/item')), 'item.vue')
    }, {
      path: '/score',
      component: r => require.ensure([], () => r(require('../page/score')), 'score.vue')
    }]
}]
