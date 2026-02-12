const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// In-memory database for trial version (replace with MongoDB later)
let menuItems = [
  {
    id: 1,
    name: "Delicious Chocolate Cake",
    description: "Rich, moist chocolate cake with smooth frosting",
    price: 25.99,
    category: "Desserts",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=300&fit=crop",
    available: true
  },
  {
    id: 2,
    name: "Fresh Garden Salad",
    description: "Healthy and colorful salad with organic vegetables",
    price: 12.99,
    category: "Salads",
    image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=400&h=300&fit=crop",
    available: true
  },
  {
    id: 3,
    name: "Classic Italian Pasta",
    description: "Authentic pasta with homemade tomato sauce",
    price: 18.99,
    category: "Main Course",
    image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=300&fit=crop",
    available: true
  },
  {
    id: 4,
    name: "Gourmet Pizza",
    description: "Wood-fired pizza with fresh toppings",
    price: 22.99,
    category: "Main Course",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=300&fit=crop",
    available: true
  },
  {
    id: 5,
    name: "Breakfast Special",
    description: "Perfect start to your morning with eggs, bacon, and toast",
    price: 15.99,
    category: "Breakfast",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop",
    available: true
  },
  {
    id: 6,
    name: "Classic Burger",
    description: "Juicy beef burger with all the fixings",
    price: 16.99,
    category: "Main Course",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop",
    available: true
  }
];

let orders = [];
let orderIdCounter = 1000;

// API Routes

// Get all menu items
app.get('/api/menu', (req, res) => {
  res.json({
    success: true,
    data: menuItems.filter(item => item.available)
  });
});

// Get menu item by ID
app.get('/api/menu/:id', (req, res) => {
  const item = menuItems.find(m => m.id === parseInt(req.params.id));
  if (!item) {
    return res.status(404).json({ success: false, message: 'Item not found' });
  }
  res.json({ success: true, data: item });
});

// Get menu items by category
app.get('/api/menu/category/:category', (req, res) => {
  const items = menuItems.filter(m => 
    m.category.toLowerCase() === req.params.category.toLowerCase() && m.available
  );
  res.json({ success: true, data: items });
});

// Create new order
app.post('/api/orders', (req, res) => {
  const { customerName, customerPhone, customerEmail, items, deliveryAddress, totalAmount } = req.body;
  
  if (!customerName || !customerPhone || !items || items.length === 0) {
    return res.status(400).json({ 
      success: false, 
      message: 'Missing required fields' 
    });
  }
  
  const newOrder = {
    id: orderIdCounter++,
    orderNumber: `GB${Date.now()}`,
    customerName,
    customerPhone,
    customerEmail: customerEmail || '',
    items,
    deliveryAddress: deliveryAddress || 'Pickup',
    totalAmount,
    status: 'pending',
    createdAt: new Date().toISOString(),
    estimatedDelivery: new Date(Date.now() + 45 * 60000).toISOString() // 45 minutes
  };
  
  orders.push(newOrder);
  
  res.status(201).json({
    success: true,
    message: 'Order placed successfully',
    data: newOrder
  });
});

// Get order by ID
app.get('/api/orders/:id', (req, res) => {
  const order = orders.find(o => o.id === parseInt(req.params.id));
  if (!order) {
    return res.status(404).json({ success: false, message: 'Order not found' });
  }
  res.json({ success: true, data: order });
});

// Get orders by phone number
app.get('/api/orders/customer/:phone', (req, res) => {
  const customerOrders = orders.filter(o => o.customerPhone === req.params.phone);
  res.json({ success: true, data: customerOrders });
});

// Update order status (for admin/restaurant)
app.patch('/api/orders/:id/status', (req, res) => {
  const { status } = req.body;
  const order = orders.find(o => o.id === parseInt(req.params.id));
  
  if (!order) {
    return res.status(404).json({ success: false, message: 'Order not found' });
  }
  
  order.status = status;
  order.updatedAt = new Date().toISOString();
  
  res.json({ success: true, message: 'Order status updated', data: order });
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({ 
    success: true, 
    message: 'Max and Sherry API is running',
    version: '1.0.0 (Trial)',
    timestamp: new Date().toISOString()
  });
});

// Root endpoint
app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to Max and Sherry API',
    version: '1.0.0 (Trial Version)',
    endpoints: {
      menu: '/api/menu',
      orders: '/api/orders',
      health: '/api/health'
    }
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Max and Sherry Backend running on port ${PORT}`);
  console.log(`API endpoints available at http://localhost:${PORT}/api`);
});
