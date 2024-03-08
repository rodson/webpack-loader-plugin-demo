export default function(source) {
	return source.replace(/var/g, 'let');
}
