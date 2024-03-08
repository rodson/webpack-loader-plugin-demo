function MyPlugin(options) {}

MyPlugin.prototype.apply = function(compiler) {
	compiler.hooks.emit.tap({name: 'fff'}, function(compilation) {
		const filename = compiler.options.output.filename
		console.log('hello wwwwwworld ' + filename);
		const html = `<!DOCTYPE html>
		<html lang="en">
		<head>
			<meta charset="UTF-8">
			<meta name="viewport" content="width=device-width, initial-scale=1.0">
			<title>Document</title>
			<script src="${filename}"></script>
		</head>
		<body>
			
		</body>
		</html>`
		compilation.assets['index.html'] = {
            source: function () {
                return html
            },
            size: function () {
                return html.length
            }
        }
	});
}

module.exports = MyPlugin;
