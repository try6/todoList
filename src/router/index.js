import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import apple from '@/components/apple'
import banana from '@/components/banana'
import orange from '@/components/orange'
Vue.use(Router)

export default new Router({
    mode: "history",
    routes: [{
        path: '/',
        component: Hello,
        children: [{
                path: 'banana',
                component: banana
            },
            {
                path: 'apple',
                component: apple,
                children: [{
                    path: 'orange',
                    component: orange
                }]
            }
        ]
    }, ]
})