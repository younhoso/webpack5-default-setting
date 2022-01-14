import {sum} from '@/js/Helpers/math.js'
import {$} from '@/js/utils/dom.js'

window.addEventListener('DOMContentLoaded', () => {
    const el = $('#root')[0]
    el.innerHTML = `
        <h1 class="select">default-setting</h1>
        <div>1 + 4 = ${sum(1,4)}</div>
    `
});