import 'o-ui/lib/o-ui.css';

export default ({Vue, options, router, siteData}) => {
	Vue.mixin({
		mounted() {
			import('o-ui').then((m) => {
				Vue.use(m.default);
			});
		},
	});
};