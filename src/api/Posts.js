import { baseUrl } from "./url"

const endpoint = "posts/"

class Posts {
    get() {
        return fetch(`${baseUrl}${endpoint}`)
    }

    createPost(post){
        return fetch(`${baseUrl}${endpoint}`,{
                method: "POST",
                body: JSON.stringify(post),
                headers: {
                  'Content-Type': 'application/json'
                }
        })
    }

update(id, post) {
    return fetch(`${baseUrl}${endpoint}${id}`, {
      method: "PUT",
      body: JSON.stringify(post),
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }

  remove(id) {
    return fetch(`${baseUrl}${endpoint}${id}`, {
      method: "DELETE",
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }

}

export default Posts;