import * as vscode from "vscode";
import * as fs from "fs";
import * as path from "path";

export class TreeView implements vscode.TreeDataProvider<Spell> {
  onDidChangeTreeData?:
    | vscode.Event<void | Spell | Spell[] | null | undefined>
    | undefined;
  getTreeItem(element: Spell): vscode.TreeItem | Thenable<vscode.TreeItem> {
    return element;
  }
  getChildren(element?: Spell | undefined): vscode.ProviderResult<Spell[]> {
    //TODO: figure this out    
    return Promise.resolve([]);

  }
  resolveTreeItem?(
    item: vscode.TreeItem,
    element: Spell,
    token: vscode.CancellationToken
  ): vscode.ProviderResult<vscode.TreeItem> {
    throw new Error("Method not implemented.");
  }
}

class Spell extends vscode.TreeItem {
  constructor(
    public readonly label: string,
    private version: string,
    public readonly collapsibleState: vscode.TreeItemCollapsibleState
  ) {
    super(label, collapsibleState);
    this.tooltip = "${this.label}-${this.version}";
    this.description = this.version;
  }

  iconPath = {
    light: path.join(__filename, "..", "..", "media", "sunandmoon.svg"),
    dark: path.join(__filename, "..", "..", "media", "sunandmoon.svg"),
  };
}
