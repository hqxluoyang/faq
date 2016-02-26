export function configRouter (router) {

  // normal routes
//  console.log("router:" , router)
  router.hashbang=true
  router.map({

    '/image': {
      component: require('./components/image/index.vue')
    },

    '/app': {
      component: require('./components/app/index.vue')
    },
    
    '/xender': {
        component: require('./components/xender/index.vue')
      },

    '/music': {
      component: require('./components/music/index.vue')
    },

    '/video': {
        component: require('./components/video/video.vue')
      },
      
      '/record': {
          component: require('./components/record/record.vue')
        },
    // not found handler
    '*': {
      component: require('./components/xender/index.vue')
    },

  })

  // redirect
  router.redirect({
    '*': '/xender'
  })

  /*
  router.beforeEach((transition) => {
	  
    if (transition.to.path === '/forbidden') {
      router.app.authenticating = true
      setTimeout(() => {
        router.app.authenticating = false
        transition.abort()
      }, 3000)
    } else {
      transition.next()
    }
  })
  */
}
