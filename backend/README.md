# Max and Sherry Backend API

Backend server for Max and Sherry food ordering system.

## Trial Version Features
- In-memory data storage (no database required)
- RESTful API for menu and orders
- Simple order management

## Installation

```bash
cd backend
npm install
```

## Running the Server

```bash
# Development mode with auto-reload
npm run dev

# Production mode
npm start
```

Server runs on http://localhost:3000

## API Endpoints

### Menu
- `GET /api/menu` - Get all menu items
- `GET /api/menu/:id` - Get specific menu item
- `GET /api/menu/category/:category` - Get items by category

### Orders
- `POST /api/orders` - Create new order
- `GET /api/orders/:id` - Get order by ID
- `GET /api/orders/customer/:phone` - Get customer orders

### Health
- `GET /api/health` - Check API status

## Testing the API

```bash
# Get menu
curl http://localhost:3000/api/menu

# Create order
curl -X POST http://localhost:3000/api/orders \
  -H "Content-Type: application/json" \
  -d '{"customerName":"John Doe","customerPhone":"1234567890","items":[{"id":1,"quantity":2}],"totalAmount":51.98}'
```
