// import Vue from 'vue'
// import MButton from '~/components/ui/MButton.vue'

// Vue.use('MButton', MButton)

import Vue from 'vue'
import { VImg } from 'vuetensils'
import VCard from '~/components/ui/VCard'
import VChip from '~/components/ui/VChip'
import VError from '~/components/ui/forms/VError'
import VErrorWrapper from '~/components/ui/forms/VErrorWrapper'
import VField from '~/components/ui/forms/VField'
import VFrame from '~/components/layout/VFrame'
import VPageHeader from '~/components/ui/VPageHeader'
import VPageWrap from '~/components/layout/VPageWrap'

Vue.component('VCard', VCard)
Vue.component('VChip', VChip)
Vue.component('VError', VError)
Vue.component('VErrorWrapper', VErrorWrapper)
Vue.component('VField', VField)
Vue.component('VFrame', VFrame)
Vue.component('VImg', VImg)
Vue.component('VPageHeader', VPageHeader)
Vue.component('VPageWrap', VPageWrap)
