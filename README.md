# MongoDB Connection Setup

A small Express API for practising a MongoDB connection with Mongoose and saving notes.

## Run locally

You need Node.js, npm, and a MongoDB connection string. From this folder, run:

```powershell
npm install
$env:MONGODB_URI = "mongodb+srv://<username>:<url-encoded-password>@<cluster>/<database>?retryWrites=true&w=majority"
npm start
```

In MongoDB Atlas, create a database user and allow your IP address under **Network Access**. Replace the placeholders above with your own connection details. Keep the URI in the environment variable; don't add real credentials to source files or commits.

The server runs at `http://localhost:3000`.

## Routes

| Method | Path | Purpose |
| --- | --- | --- |
| `GET` | `/` | Check that the server is running |
| `POST` | `/create` | Save a note to MongoDB |

Example request body for `POST /create`:

```json
{
  "title": "First note",
  "discription": "A note saved in MongoDB"
}
```

The request field is spelled `discription` in the current model. The database connection is configured in `src/config/db.js`, and the note schema is in `src/models/note.model.js`.
