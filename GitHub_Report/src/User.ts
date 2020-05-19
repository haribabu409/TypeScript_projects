import { Repo } from "./Repo";

export class User
{
    login : string;
    name: string;
    repoCount: number;
    followers: number;
    repos: Repo[];

    constructor(userInfo : any)
    {
        this.login = userInfo.login;
        this.name = userInfo.name;
        this.repoCount = userInfo.public_repos;
        this.followers = userInfo.followers;
    }
}