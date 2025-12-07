// Mock data for dashboard components acc to the design specifications
export const metricsData = {
  customers: {
    value: 3781,
    change: 11.01,
    trending: 'up'
  },
  orders: {
    value: 1219,
    change: -0.03,
    trending: 'down'
  },
  revenue: {
    value: 695,
    change: 15.03,
    trending: 'up'
  },
  growth: {
    value: 30.1,
    change: 6.08,
    trending: 'up'
  }
};

export const revenueData = [
  { month: 'Jan', current: 15000, previous: 12000 },
  { month: 'Feb', current: 18000, previous: 16000 },
  { month: 'Mar', current: 16000, previous: 20000 },
  { month: 'Apr', current: 14000, previous: 18000 },
  { month: 'May', current: 22000, previous: 21000 },
  { month: 'Jun', current: 25000, previous: 23000 }
];

export const projectionsData = [
  { month: 'Jan', actual: 18000, projected: 15000 },
  { month: 'Feb', actual: 22000, projected: 20000 },
  { month: 'Mar', actual: 19000, projected: 22000 },
  { month: 'Apr', actual: 25000, projected: 24000 },
  { month: 'May', actual: 23000, projected: 26000 },
  { month: 'Jun', actual: 28000, projected: 27000 }
];

export const locationData = [
  { city: 'New York', revenue: 72000 },
  { city: 'San Francisco', revenue: 39000 },
  { city: 'Sydney', revenue: 25000 },
  { city: 'Singapore', revenue: 61000 }
];

export const topProducts = [
  { name: 'ASOS Ridley High Waist', price: 79.49, quantity: 82, amount: 6518.18 },
  { name: 'Marco Lightweight Shirt', price: 128.50, quantity: 37, amount: 4754.50 },
  { name: 'Half Sleeve Shirt', price: 39.99, quantity: 64, amount: 2559.36 },
  { name: 'Lightweight Jacket', price: 20.00, quantity: 184, amount: 3680.00 },
  { name: 'Marco Shoes', price: 79.49, quantity: 64, amount: 1965.81 }
];

export const salesChannels = [
  { channel: 'Direct', value: 300.56, percentage: 38.6 },
  { channel: 'Affiliate', value: 135.18, percentage: 25.2 },
  { channel: 'Sponsored', value: 154.02, percentage: 22.8 },
  { channel: 'E-mail', value: 48.96, percentage: 13.4 }
];

export const notifications = [
  { id: 1, type: 'bug', message: 'You have a bug that needs...', time: 'Just now' },
  { id: 2, type: 'user', message: 'New user registered', time: '59 minutes ago' },
  { id: 3, type: 'bug', message: 'You have a bug that needs...', time: '12 hours ago' },
  { id: 4, type: 'subscription', message: 'Andi Lane subscribed to you', time: 'Today, 11:59 AM' }
];

export const activities = [
  { id: 1, user: 'You', action: 'have a bug that needs...', time: 'Just now', avatar: '/avatar1.jpg' },
  { id: 2, user: 'Released', action: 'a new version', time: '59 minutes ago', avatar: '/avatar2.jpg' },
  { id: 3, user: 'Submitted', action: 'a bug', time: '12 hours ago', avatar: '/avatar3.jpg' },
  { id: 4, user: 'Modified', action: 'A data in Page X', time: 'Today, 11:59 AM', avatar: '/avatar4.jpg' },
  { id: 5, user: 'Deleted', action: 'a page in Project X', time: 'Feb 2, 2023', avatar: '/avatar5.jpg' }
];

export const contacts = [
  { id: 1, name: 'Natali Craig', avatar: '/contact1.jpg' },
  { id: 2, name: 'Drew Cano', avatar: '/contact2.jpg' },
  { id: 3, name: 'Orlando Diggs', avatar: '/contact3.jpg' },
  { id: 4, name: 'Andi Lane', avatar: '/contact4.jpg' },
  { id: 5, name: 'Kate Morrison', avatar: '/contact5.jpg' },
  { id: 6, name: 'Koray Okumus', avatar: '/contact6.jpg' }
];