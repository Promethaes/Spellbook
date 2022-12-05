"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TreeView = void 0;
const vscode = require("vscode");
const path = require("path");
class TreeView {
    getTreeItem(element) {
        return element;
    }
    getChildren(element) {
        //TODO: figure this out    
        return Promise.resolve([]);
    }
    resolveTreeItem(item, element, token) {
        throw new Error("Method not implemented.");
    }
}
exports.TreeView = TreeView;
class Spell extends vscode.TreeItem {
    constructor(label, version, collapsibleState) {
        super(label, collapsibleState);
        this.label = label;
        this.version = version;
        this.collapsibleState = collapsibleState;
        this.iconPath = {
            light: path.join(__filename, "..", "..", "media", "sunandmoon.svg"),
            dark: path.join(__filename, "..", "..", "media", "sunandmoon.svg"),
        };
        this.tooltip = "${this.label}-${this.version}";
        this.description = this.version;
    }
}
//# sourceMappingURL=treeview.js.map