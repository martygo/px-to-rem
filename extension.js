const vscode = require("vscode");

function activate(context) {
	let disposable = vscode.commands.registerCommand(
		"px-to-rem.convert",
		function () {
			const editor = vscode.window.activeTextEditor;
			if (!editor) {
				return;
			}

			const document = editor.document;
			const config = vscode.workspace.getConfiguration("px-to-rem");
			const baseFontSize = config.get("baseFontSize", 16);

			editor.edit((editBuilder) => {
				for (let i = 0; i < document.lineCount; i++) {
					let line = document.lineAt(i);
					let updatedLine = line.text.replace(/(\d+)px/g, (match, param) => {
						let remValue = (parseInt(param) / baseFontSize).toFixed(1);
						return `${remValue}rem`;
					});

					if (updatedLine !== line.text) {
						editBuilder.replace(line.range, updatedLine);
					}
				}
			});

			vscode.window.showInformationMessage("PX values converted to REM!");
		},
	);

	context.subscriptions.push(disposable);
}

function deactivate() {}

module.exports = { activate, deactivate };
