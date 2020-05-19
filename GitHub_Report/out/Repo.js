"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Repo = void 0;
var Repo = /** @class */ (function () {
    function Repo(repoInfo) {
        this.name = repoInfo.name;
        this.description = repoInfo.description;
        this.size = repoInfo.size;
        this.url = repoInfo.html_url;
    }
    return Repo;
}());
exports.Repo = Repo;
