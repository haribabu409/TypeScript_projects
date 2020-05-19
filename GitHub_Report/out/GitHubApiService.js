"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GitHubApiService = void 0;
var request = __importStar(require("request"));
var User_1 = require("./User");
var Repo_1 = require("./Repo");
var OPTIONS = {
    "headers": {
        "User-Agent": "request"
    },
    json: true
};
var GitHubApiService = /** @class */ (function () {
    function GitHubApiService() {
    }
    GitHubApiService.prototype.getUserInfo = function (userName, cb) {
        request.get("https://api.github.com/users/" + userName, OPTIONS, function (error, response, body) {
            var user = new User_1.User(body);
            cb(user);
        });
    };
    GitHubApiService.prototype.getRepoInfo = function (userName, cb) {
        request.get("https://api.github.com/users/" + userName + "/repos", OPTIONS, function (error, response, body) {
            var repoArray = body.map(function (repoInfo) { return new Repo_1.Repo(repoInfo); });
            cb(repoArray);
        });
    };
    return GitHubApiService;
}());
exports.GitHubApiService = GitHubApiService;
