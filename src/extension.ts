// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

class e implements vscode.TreeDataProvider<number>{
	onDidChangeTreeData?: vscode.Event<number | void | number[] | null | undefined> | undefined;
	getTreeItem(element: number): vscode.TreeItem | Thenable<vscode.TreeItem> {
		throw new Error('Method not implemented.');
	}
	getChildren(element?: number | undefined): vscode.ProviderResult<number[]> {
		throw new Error('Method not implemented.');
	}
	getParent?(element: number): vscode.ProviderResult<number> {
		throw new Error('Method not implemented.');
	}
	resolveTreeItem?(item: vscode.TreeItem, element: number, token: vscode.CancellationToken): vscode.ProviderResult<vscode.TreeItem> {
		throw new Error('Method not implemented.');
	}

}

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "spellbook" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('spellbook.ellie', () => {
		// The code you place here will be executed every time your command is executed
		// Display a message box to the user
		vscode.window.showWarningMessage('Hello World from Ellie!');
	});
	let gamer = vscode.commands.registerCommand("spellbook.time", () => vscode.window.showInformationMessage(Date.now().toString()));

	context.subscriptions.push(disposable);
	vscode.window.createTreeView("spellbook",{treeDataProvider: new e});
}

// This method is called when your extension is deactivated
export function deactivate() {}
