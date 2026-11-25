# Node.js MongoDB Notes API

A small Express and Mongoose learning project. It connects a Node.js backend to MongoDB and saves notes through an API endpoint.

## Requirements

- Node.js and npm
- A MongoDB instance, such as MongoDB Atlas
- Postman or another HTTP client (optional)

## Run locally

Open a terminal in this folder and run:

```powershell
npm install
$env:MONGODB_URI = "mongodb+srv://<db-user>:<url-encoded-password>@<cluster-host>/<database>?retryWrites=true&w=majority"
npm start
```

Replace the placeholders with your MongoDB connection details. Keep the connection string in the `MONGODB_URI` environment variable; do not put real credentials in source files or commit them. The variable is set for the current PowerShell session only. In other shells, set the same environment variable using that shell's syntax.

For MongoDB Atlas, create a database user and allow your client IP address in Network Access before connecting. URL-encode special characters in the database user's password.

The server listens on `http://localhost:3000`.

## Save a note

Send a `POST` request to `http://localhost:3000/create` with a JSON body:

```json
{
  "title": "My first note",
  "discription": "Saved from the backend API"
}
```

PowerShell example:

```powershell
Invoke-RestMethod -Uri http://localhost:3000/create -Method Post -ContentType "application/json" -Body '{"title":"My first note","discription":"Saved from the backend API"}'
```

The endpoint creates a note with the Mongoose model in `src/models/note.model.js` and stores it in MongoDB. `GET /` confirms that the server is running.

## Security

Never commit `.env` files, database connection strings, or passwords. If a database credential was previously stored in source code or shared, rotate it in MongoDB Atlas.
