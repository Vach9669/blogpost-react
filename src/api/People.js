import { baseUrl } from "./url";

const endpoint = {
    people: "people/",
    login: "people/login"
}

class People {
    get() {
        return fetch(`${baseUrl}${endpoint.people}`)
    }

    getById(id){
        return fetch(`${baseUrl}${endpoint.people}${id}`)
    }

    getUserPosts(id){
        return fetch(`${baseUrl}${endpoint.people}${id}/posts`)
    }

    login(user) {
        return fetch(`${baseUrl}${endpoint.login}`, {
            method: "POST",
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json'
            }            
        })
    }
    registration(user){
        return fetch(`${baseUrl}${endpoint.people}`, {
            method: "POST",
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json'
            }            
        })
    }
}

export default People;