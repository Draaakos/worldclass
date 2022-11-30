const post = (url, data) => fetch(url, {
  method: 'POST',
  cache: 'no-cache',
  body: JSON.stringify(data)
});

const get = (url) => fetch(url, {
  method: 'GET',
  headers: { 'Content-Type': 'application/json' }
});

const put = (url, data = {}) => fetch(url, {
  method: 'PUT',
  cache: 'no-cache',
  body: JSON.stringify(data)
});

const onDelete = (url)  => fetch(url, {
  method: 'DELETE',
  cache: 'no-cache',
})

export { post, get, put, onDelete };
