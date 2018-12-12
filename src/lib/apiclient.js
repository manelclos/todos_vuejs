class ApiClient {
  getTodos() {
    return fetch('https://server3.microdisseny.com/apps/todos/api/v1/todos/').then(response => response.json())
  }

  getTodo(pk) {
    return fetch('https://server3.microdisseny.com/apps/todos/api/v1/todos/' + pk).then(response => response.json())
  }

  createTodo(formData) {
    const data = {
      description: formData.description,
      due_date: `${formData.dueDate}T${formData.dueTime}`
    }
    return fetch('https://server3.microdisseny.com/apps/todos/api/v1/todos/', {
      method: 'post',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
  }

  deleteTodo(pk) {
    return fetch('https://server3.microdisseny.com/apps/todos/api/v1/todos/' + pk + '/', {
      method: 'delete',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      }
    })
  }

  updateTodo(pk, formData) {
    const data = {
      description: formData.description,
      due_date: `${formData.dueDate}`
    }
    return fetch('https://server3.microdisseny.com/apps/todos/api/v1/todos/' + pk + '/', {
      method: 'put',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
  }
}

const apiclient = new  ApiClient()
export default apiclient
