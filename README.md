
# ToDo CRUD Application with Profile Picture

A ToDo CRUD (Create, Read, Update, Delete) application with profile picture functionality is a useful and efficient way to manage your daily tasks while also personalizing your user experience. This application allows you to create, update, and delete your to-do items, as well as upload and display a profile picture.

You can upload a profile picture by navigating to the "Profile" section of the application. Here, you will see an option to upload a new picture. Once you have selected your picture, it will be displayed on your profile page, and it will also be visible next to your tasks


## API Reference in Laravel

#### Create item

```http
  GET /api/todos/
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | to Create the item in todo app |

#### Get item

```http
  GET /api/todos/
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | to get all the item in todo app |

#### Update item

```http
  POST /api/todos/
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | to update the item. you can find more idea to see the  code.

#### Delete item

```http
  Delete /api/todos/{id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | to delete the item in todo app |


## Installation

Install my-project with npm

```bash
  npm install my-project
  cd my-project
```
    