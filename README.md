# Job Application Tracker

A full-stack web application built to help users organize and track their job applications in one place. Users can create an account, log in, add job application details, view their applications, edit existing records, and delete applications.

## Features

- **User Authentication** – Register and log in using an email and password.
- **Password Hashing** – Passwords are hashed with `bcryptjs` before being stored.
- **JWT Authentication** – JSON Web Tokens are used to protect application API routes.
- **Add Application** – Save company name, job title, location, job URL, application date, status, and notes.
- **View Applications** – Display saved job applications.
- **Edit Application** – Update the details of an existing application.
- **Delete Application** – Remove an application.
- **Application Statuses** – Track applications using `Applied`, `Interview`, `Offer`, and `Rejected`.
- **Protected Dashboard Routes** – Dashboard routes require a login token.
- **User-specific Applications** – Each application is associated with its owner through `userId`. Application list, detail, update, and delete operations should always be scoped to the authenticated user's ID so users can access only their own records.
- **Immediate UI Update After Delete** – After the delete API responds successfully, remove the deleted item from React state with `filter()` so the list re-renders without fetching the full list again.

> **Important:** The uploaded project ZIP is the code snapshot from before the user-specific query filtering and state-based delete update discussed later. Apply those controller and `AllApplication.jsx` changes in the source code for the last two behaviors to work as described.

## Tech Stack

### Frontend
- React
- Vite
- React Router
- Axios
- React Hook Form
- Tailwind CSS

### Backend
- Node.js
- Express
- MongoDB
- Mongoose
- JSON Web Token (`jsonwebtoken`)
- `bcryptjs`
- `cors`
- `dotenv`

## Project Structure

```text
job-application-tracker/
├── backend/
│   ├── config/
│   │   └── mongodb.js
│   ├── controllers/
│   │   ├── application-controller.js
│   │   └── user-controller.js
│   ├── middlewares/
│   │   └── applicationMiddleware.js
│   ├── models/
│   │   ├── application.model.js
│   │   └── user.model.js
│   ├── routes/
│   │   ├── application.route.js
│   │   └── user.route.js
│   ├── index.js
│   └── package.json
│
└── frontend/
    ├── public/
    ├── src/
    │   ├── components/
    │   ├── context/
    │   ├── layout/
    │   ├── lib/
    │   ├── pages/
    │   │   ├── auth/
    │   │   └── dashboard/
    │   ├── routes/
    │   ├── services/
    │   ├── App.jsx
    │   └── main.jsx
    └── package.json
```

## Getting Started

### Prerequisites

Make sure you have these installed:

- Node.js (LTS recommended)
- npm
- MongoDB database (local MongoDB or MongoDB Atlas)

### 1. Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/job-application-tracker.git
cd job-application-tracker
```

Replace `YOUR_USERNAME` with your GitHub username.

### 2. Configure the backend

```bash
cd backend
npm install
```

Create a `.env` file inside the `backend` folder:

```env
PORT=3000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_long_random_secret
```

Do not commit your `.env` file or expose your MongoDB connection string or JWT secret.

Start the backend:

```bash
npm run dev
```

The backend API runs at:

```text
http://localhost:3000
```

### 3. Configure the frontend

Open another terminal from the project root:

```bash
cd frontend
npm install
npm run dev
```

Vite will show the local frontend URL in the terminal (commonly `http://localhost:5173`).

The Axios base URL is currently configured in `frontend/src/lib/axios.js` as:

```js
http://localhost:3000/api
```

Update this value if your backend runs on a different host or port.

## API Routes

All application routes are protected by JWT authentication. Send the token in the request header:

```http
Authorization: Bearer YOUR_JWT_TOKEN
```

### Authentication

| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/auth/register` | Register a new user |
| POST | `/api/auth/login` | Log in and receive a JWT |

### Applications

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/application` | Get the authenticated user's applications |
| POST | `/api/application` | Create an application for the authenticated user |
| GET | `/api/application/:id` | Get one application owned by the authenticated user |
| PUT | `/api/application/:id` | Update an application owned by the authenticated user |
| DELETE | `/api/application/:id` | Delete an application owned by the authenticated user |

For secure multi-user behavior, the backend must include both the application ID and authenticated `userId` in single-record update/delete/read queries. The create controller must set `userId` from the verified JWT payload, not trust a `userId` sent by the frontend.

## Application Data Model

Each application record contains:

| Field | Type | Description |
|---|---|---|
| `userId` | ObjectId | Reference to the user who owns the application |
| `companyName` | String | Company name |
| `jobTitle` | String | Job role/title |
| `location` | String | Job location |
| `jobUrl` | String | Job posting URL (optional) |
| `applicationDate` | Date | Date of application |
| `status` | String | `Applied`, `Interview`, `Offer`, or `Rejected` |
| `notes` | String | Additional notes (optional) |
| `createdAt` | Date | Record creation timestamp |
| `updatedAt` | Date | Last update timestamp |

## How User Data Is Kept Separate

1. A user logs in and receives a JWT.
2. The frontend sends the JWT with protected application requests.
3. The authentication middleware verifies the token and attaches its decoded payload to `req.user`.
4. The backend uses `req.user.id` as the owner ID when creating and querying applications.
5. List and single-record queries are restricted to that owner.
6. Update and delete queries must also match both `_id` and `userId`.

The frontend should update its local application state only after the delete request succeeds:

```jsx
async function deleteApplication(id) {
  try {
    await api.delete(`/application/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
    });

    setApplication((previousApplications) =>
      previousApplications.filter((item) => item._id !== id)
    );
  } catch (error) {
    console.error("Delete failed:", error);
  }
}
```

This avoids an unnecessary second GET request and makes the deleted card disappear immediately after the server confirms deletion.

## Security Notes

- Keep `.env` files out of Git.
- Use a strong, private `JWT_SECRET`.
- Never return a user's hashed password in API responses.
- Validate incoming request data on the backend.
- Verify ownership for every read, update, and delete operation.
- Return appropriate `401`, `403`, `404`, and `500` responses.
- Use environment variables for production API and database configuration.

## Current Scope

This README documents the authentication and job-application management functionality discussed for this project. It does not describe or add separate Overview or Manage Application page features.

## Future Improvements

- Add pagination for large application lists.
- Add search and status/date filters.
- Add form validation and clearer API error messages.
- Add loading states and delete confirmation.
- Add automated backend and frontend tests.
- Configure production deployment and environment variables.

## Author

**Gopal Mule**

- GitHub: [github.com/gopalmule1608](https://github.com/gopalmule1608)
- LinkedIn: [linkedin.com/in/gopal-mule-ba89233b1](https://linkedin.com/in/gopal-mule-ba89233b1)
