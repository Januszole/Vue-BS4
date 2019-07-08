import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import PortalVue from 'portal-vue'

Vue.use(PortalVue)
Vue.use(BootstrapVue)


// components

import App0 from './App0.vue';
import App1 from './App1.vue';
import App2 from './App2.vue';
import App3 from './App3.vue';
import Pagi from './Pagi.vue';
// components





new Vue({
    el: '#app0',
    render: h => h(App0),
});
new Vue({
    el: '#app1',
    render: h => h(App1),
});
new Vue({
       el: '#app2',
    render: h => h(App2),
});
new Vue({
    el: '#app3',
    render: h => h(App3),
});
new Vue({
    el: '#pagi',
    render: h => h(Pagi),
});