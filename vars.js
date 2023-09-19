const template = `//{0}
//{1}
const vscode = require('vscode');
//{2}
//{3}
/**
 * @param {vscode.ExtensionContext}
 *{4}
 */
function activate(context) { //{5}
	//{6}
	console.log('Congratulations, your extension "codenovel" is now active!');
	//{7}
	//{8}
	//{9}
	let disposable = vscode.commands.registerCommand('extension.helloWorld', function () {
		//{10}
		vscode.window.showInformationMessage('Hello World!');
	}); //{11}
	context.subscriptions.push(disposable);
}
exports.activate = activate;
//{12}
//{13}
/**{14}
 * @param {vscode.ExtensionContext} 
 *{15}
 */
function activate(context) { //{16}
	//{17}
	//{18}
	console.log('Congratulations, your extension "codenovel" is now active!');
	//{19}
	//{20}
	//{21}
	let disposable = vscode.commands.registerCommand('extension.helloWorld', function () {
		//{22}
		vscode.window.showInformationMessage('Hello World!');
	});
	//{23}
	context.subscriptions.push(disposable);
}
exports.activate = activate; //{24}

`
module.exports = template
