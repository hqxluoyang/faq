/*
    hqx
    2016/1231
*/
import eventBus from './eventBus'
import allComp from './allComp'
import chRouterSucc from './chRouterSucc.js'
import Config from './config.js'
import tools from './tools.js'

export default {
   
    start (data) {
        Config.Runtime.eventBus = new eventBus();
        allComp.startInit();
        chRouterSucc.init();
    }

}