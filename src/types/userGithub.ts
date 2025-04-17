// acá definimos los datos que vamos a usar, los tipos, definimos las propiedas y decimos de que tipo son, tienen que llamarse igual que como estan en la api porque sino se rompe el programa, no encuentra los datos

//en types siempre vamos a definir los tipos de objetos que vamos a usar y nada más 

export interface IUserGithub   {
    login : string,
    name : string,
    avatar_url : string,
    bio : string,
    public_repos : number,
    html_url : string
}


//de acá saque las props
/**
 * 
 * {
  "login": "erredev-JS",
  "id": 118647241,
  "node_id": "U_kgDOBxJpyQ",
  "avatar_url": "https://avatars.githubusercontent.com/u/118647241?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/erredev-JS",
  "html_url": "https://github.com/erredev-JS",
  "followers_url": "https://api.github.com/users/erredev-JS/followers",
  "following_url": "https://api.github.com/users/erredev-JS/following{/other_user}",
  "gists_url": "https://api.github.com/users/erredev-JS/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/erredev-JS/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/erredev-JS/subscriptions",
  "organizations_url": "https://api.github.com/users/erredev-JS/orgs",
  "repos_url": "https://api.github.com/users/erredev-JS/repos",
  "events_url": "https://api.github.com/users/erredev-JS/events{/privacy}",
  "received_events_url": "https://api.github.com/users/erredev-JS/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "Rodrigo Zapata",
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": " 💻 Desarrollador web Front-End Trainee.\r\n🚀 Mendoza-Argentina.\r\n\r\n 👩🏻‍💻 JavaScript - Python.",
  "twitter_username": null,
  "public_repos": 45,
  "public_gists": 0,
  "followers": 12,
  "following": 10,
  "created_at": "2022-11-20T04:00:51Z",
  "updated_at": "2025-04-08T20:47:01Z"
}
 */