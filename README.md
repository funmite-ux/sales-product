# Sales Product API

A REST API built with **Node.js and Express.js** for managing sales product data. The project contains 20 products with their names, descriptions, prices, and stock quantities.

## Features

* Fetch all products using GET
* Add a new product using POST
* Update an existing product using PUT
* Delete an existing product using DELETE
* View product data in the browser
* Test API requests using Postman

## Technologies

* Node.js
* Express.js
* JavaScript
* JSON
* Postman

## API Endpoints

| Method | Endpoint            | Description        |
| ------ | ------------------- | ------------------ |
| GET    | `/api/products`     | Fetch all products |
| POST   | `/api/products`     | Add a new product  |
| PUT    | `/api/products/:id` | Update a product   |
| DELETE | `/api/products/:id` | Delete a product   |

## How to Run

Clone the repository:

```bash
git clone YOUR-REPOSITORY-LINK
```

Move into the project folder:

```bash
cd sales-product-api
```

Install the required packages:

```bash
npm install
```

Start the server:

```bash
node app.js
```

The API will be available at:

```text
http://localhost:5000
```

## View Products in Browser

Open:

```text
http://localhost:5000/api/products
```

This will display the 20 products in JSON format.

## Postman Testing

### POST — Add Product

```text
POST /api/products
```

Example:

```json
{
  "id": 21,
  "name": "Bluetooth Speaker",
  "description": "Portable wireless speaker",
  "price": 45000,
  "stock": 10
}
```

### PUT — Update Product

```text
PUT /api/products/5
```

### DELETE — Delete Product

```text
DELETE /api/products/5
```

## Project Objective

This project was created as part of an assignment to demonstrate the use of **JSON, Express.js, REST APIs, CRUD operations, and Postman**.

## Author

**Mary Adesioye**

---

*Created for educational purposes.*
