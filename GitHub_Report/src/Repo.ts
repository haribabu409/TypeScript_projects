export class Repo
{
    name : string;
    description : string;
    size : number;
    url : string;

    constructor(repoInfo : any)
    {
        this.name = repoInfo.name;
        this.description = repoInfo.description;
        this.size = repoInfo.size;
        this.url = repoInfo.html_url;
    }
}