// Add icons as needed here
import {mdiBabyFace} from './node_modules/@mdi/js/mdi.js';
const knownIcons = {mdiBabyFace};

Vue.component('mdi-icons', {
	props: ['icon', 'size'],
	template: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" '+
		':width="sizeNum" :height="sizeNum" viewBox="0 0 24 24"><path :d="path" fill="currentColor" /></svg>',
	data() { return {}},
	computed: {
		sizeNum() { return (this.size || 24).replace(/(mdi-|px)/g, ''); },
		path() {
			const z = Array.isArray(this.icon) ? this.icon : [this.icon];
			for (const x of z) {
				// Convert kebab-case to camelCase
				const s = x.replace(/-./g, y => y[1].toUpperCase());
				if (knownIcons[s])
					return knownIcons[s];
			}
			return "";
		}
	}
});

const options = {iconComponent: 'mdi-icons', iconPack: 'mdi'};

// Note: we cannot use "Vue.use(Oruga, options)" because the way we include
// Oruga here, Oruga already calls Vue.use(Oruga) without options.

const app = new Vue({
	el: '#app',
	created() {
		this.$oruga.config.setOptions(options);
	}
})
