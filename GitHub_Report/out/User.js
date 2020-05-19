"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
var User = /** @class */ (function () {
    function User(userInfo) {
        this.login = userInfo.login;
        this.name = userInfo.name;
        this.repoCount = userInfo.public_repos;
        this.followers = userInfo.followers;
    }
    return User;
}());
exports.User = User;
