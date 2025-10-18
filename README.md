# Dynamic Profile API

A simple RESTful API that returns user profile information along with a dynamic cat fact 🐱.

## 🚀 Endpoint
**GET** `/me`

### Example Response
```json
{
  "status": "success",
  "user": {
    "email": "toluwalaseemmanuel20@gmail.com",
    "name": "Toluwalase Olaniyan",
    "stack": "Node.js/Express"
  },
  "timestamp": "2025-10-17T12:34:56.789Z",
  "fact": "Cats can rotate their ears 180 degrees."
}
```

## 🧰 Installation & Setup

```bash
git clone https://github.com/<your-username>/dynamic-profile-api.git
cd dynamic-profile-api
npm install
npm run dev
```

## ⚙️ Environment Variables

Create a `.env` file:

```
PORT=3001
HEROKU_API_KEY=your_heroku_api_key_here
```

### For Heroku MCP Server Integration:
1. Get your Heroku API key from [Heroku Dashboard](https://dashboard.heroku.com/account)
2. Set the `HEROKU_API_KEY` environment variable
3. The `.cursor/mcp.json` file is configured to use this environment variable

## 🧪 Testing

Visit: `http://localhost:3001/me`

## 🛠️ Available Scripts

- `npm run dev` - Start development server with auto-restart
- `npm start` - Start production server
- `npm test` - Run tests (placeholder)

## 📦 Dependencies

- **express** - Web framework for Node.js
- **axios** - HTTP client for API requests
- **cors** - Cross-Origin Resource Sharing middleware
- **dotenv** - Environment variable management
- **nodemon** - Development auto-restart tool

## 🏗️ Project Structure

```
dynamic-profile-api/
├── node_modules/          # Dependencies
├── .env                   # Environment variables
├── .gitignore            # Git ignore rules
├── package.json          # Project metadata & scripts
├── package-lock.json     # Dependency lock file
├── server.js             # Main server file
└── README.md             # Project documentation
```

## 🔧 Features

- ✅ Dynamic cat facts from external API
- ✅ Graceful error handling
- ✅ CORS enabled for cross-origin requests
- ✅ Request logging middleware
- ✅ Environment-based configuration
- ✅ Clean, production-ready code