// Mock data for Kalimas Group Management Dashboard

export const kpiData = {
  totalShips: 847,
  activeProjects: 23,
  revenue: 45.8,
  revenueGrowth: 12.5,
  customerSatisfaction: 4.9,
  onTimeDelivery: 94.2,
  shipsInDock: 12,
  completedThisMonth: 8,
};

export const revenueData = [
  { month: 'Jan', revenue: 32, expenses: 18, profit: 14 },
  { month: 'Feb', revenue: 38, expenses: 21, profit: 17 },
  { month: 'Mar', revenue: 42, expenses: 24, profit: 18 },
  { month: 'Apr', revenue: 35, expenses: 20, profit: 15 },
  { month: 'May', revenue: 48, expenses: 26, profit: 22 },
  { month: 'Jun', revenue: 52, expenses: 28, profit: 24 },
  { month: 'Jul', revenue: 45, expenses: 25, profit: 20 },
  { month: 'Aug', revenue: 55, expenses: 30, profit: 25 },
  { month: 'Sep', revenue: 58, expenses: 32, profit: 26 },
  { month: 'Oct', revenue: 50, expenses: 27, profit: 23 },
  { month: 'Nov', revenue: 62, expenses: 34, profit: 28 },
  { month: 'Dec', revenue: 68, expenses: 36, profit: 32 },
];

export const serviceDistribution = [
  { name: 'Ship Building', value: 35, color: '#0ea5e9' },
  { name: 'Repair & Maintenance', value: 30, color: '#06b6d4' },
  { name: 'Docking', value: 20, color: '#14b8a6' },
  { name: 'Metal Workshop', value: 10, color: '#8b5cf6' },
  { name: 'Others', value: 5, color: '#6366f1' },
];

export const projectStatusData = [
  { name: 'On Track', value: 14, color: '#10b981' },
  { name: 'Delayed', value: 3, color: '#f59e0b' },
  { name: 'Critical', value: 2, color: '#ef4444' },
  { name: 'Completed', value: 4, color: '#6366f1' },
];

export const activeProjects = [
  {
    id: 'PRJ-001',
    shipName: 'MV Borneo Spirit',
    type: 'Tugboat',
    client: 'PT Samudra Transport',
    status: 'On Track',
    progress: 78,
    startDate: '2026-01-15',
    endDate: '2026-04-30',
    budget: 2800,
    spent: 2100,
    manager: 'Harmonis',
  },
  {
    id: 'PRJ-002',
    shipName: 'KM Kalimantan Jaya',
    type: 'Barge',
    client: 'PT Batubara Nusantara',
    status: 'On Track',
    progress: 45,
    startDate: '2026-02-01',
    endDate: '2026-06-15',
    budget: 4200,
    spent: 1800,
    manager: 'Harmonis',
  },
  {
    id: 'PRJ-003',
    shipName: 'MV Balikpapan Express',
    type: 'LCT',
    client: 'PT Logistik Maritim',
    status: 'Delayed',
    progress: 32,
    startDate: '2026-01-20',
    endDate: '2026-05-10',
    budget: 3500,
    spent: 1400,
    manager: 'Harmonis',
  },
  {
    id: 'PRJ-004',
    shipName: 'MT East Kalimantan',
    type: 'Tanker',
    client: 'PT Minyak Timur',
    status: 'On Track',
    progress: 92,
    startDate: '2025-10-01',
    endDate: '2026-03-15',
    budget: 6800,
    spent: 6200,
    manager: 'Harmonis',
  },
  {
    id: 'PRJ-005',
    shipName: 'MV Sulawesi Pride',
    type: 'Tugboat',
    client: 'PT Armada Laut',
    status: 'Critical',
    progress: 15,
    startDate: '2026-02-10',
    endDate: '2026-05-25',
    budget: 2600,
    spent: 800,
    manager: 'Harmonis',
  },
  {
    id: 'PRJ-006',
    shipName: 'KM Mahakam Raya',
    type: 'Barge',
    client: 'PT Coal Indonesia',
    status: 'On Track',
    progress: 60,
    startDate: '2026-01-05',
    endDate: '2026-04-20',
    budget: 3800,
    spent: 2200,
    manager: 'Harmonis',
  },
];

export const fleetData = [
  { id: 1, name: 'MV Borneo Spirit', type: 'Tugboat', status: 'In Service', lastDocking: '2025-12-10', nextMaintenance: '2026-06-10', condition: 92 },
  { id: 2, name: 'KM Kalimantan Jaya', type: 'Barge', status: 'Under Repair', lastDocking: '2025-09-15', nextMaintenance: '2026-03-15', condition: 68 },
  { id: 3, name: 'MV Balikpapan Express', type: 'LCT', status: 'In Service', lastDocking: '2025-11-20', nextMaintenance: '2026-05-20', condition: 85 },
  { id: 4, name: 'MT East Kalimantan', type: 'Tanker', status: 'In Service', lastDocking: '2025-10-05', nextMaintenance: '2026-04-05', condition: 95 },
  { id: 5, name: 'MV Sulawesi Pride', type: 'Tugboat', status: 'Docked', lastDocking: '2026-01-08', nextMaintenance: '2026-07-08', condition: 45 },
  { id: 6, name: 'KM Mahakam Raya', type: 'Barge', status: 'In Service', lastDocking: '2025-08-22', nextMaintenance: '2026-02-22', condition: 78 },
  { id: 7, name: 'MV Nusantara', type: 'LCT', status: 'Under Repair', lastDocking: '2025-07-14', nextMaintenance: '2026-01-14', condition: 55 },
  { id: 8, name: 'MT Samarinda', type: 'Tanker', status: 'In Service', lastDocking: '2025-12-01', nextMaintenance: '2026-06-01', condition: 88 },
];

export const financialData = {
  totalRevenue: 45.8,
  totalExpenses: 28.4,
  netProfit: 17.4,
  profitMargin: 37.9,
  escrowBalance: 8.2,
  pendingPayments: 3.6,
  monthlyReceivables: [
    { month: 'Jan', amount: 28 },
    { month: 'Feb', amount: 32 },
    { month: 'Mar', amount: 38 },
    { month: 'Apr', amount: 30 },
    { month: 'May', amount: 42 },
    { month: 'Jun', amount: 46 },
  ],
};

export const operationsSchedule = [
  { id: 1, ship: 'MV Borneo Spirit', activity: 'Engine Overhaul', dock: 'Dock A', date: '2026-03-15', duration: '5 days', priority: 'High' },
  { id: 2, ship: 'KM Kalimantan Jaya', activity: 'Sandblasting & Painting', dock: 'Dock B', date: '2026-03-16', duration: '3 days', priority: 'Medium' },
  { id: 3, ship: 'MV Sulawesi Pride', activity: 'Hull Inspection', dock: 'Dock A', date: '2026-03-17', duration: '2 days', priority: 'Critical' },
  { id: 4, ship: 'MT East Kalimantan', activity: 'Final Testing', dock: 'Dock C', date: '2026-03-18', duration: '1 day', priority: 'High' },
  { id: 5, ship: 'MV Nusantara', activity: 'Propeller Repair', dock: 'Dock B', date: '2026-03-19', duration: '4 days', priority: 'Medium' },
  { id: 6, ship: 'KM Mahakam Raya', activity: 'Electrical System', dock: 'Dock C', date: '2026-03-20', duration: '3 days', priority: 'Low' },
];

export const teamMembers = [
  { name: 'Aditya Topani', role: 'President Director', department: 'Executive', status: 'Active' },
  { name: 'Inayah Annisa', role: 'Legal Director', department: 'Legal', status: 'Active' },
  { name: 'Harmonis', role: 'Operations Director', department: 'Operations', status: 'Active' },
  { name: 'Febrina Anindita', role: 'Finance Director', department: 'Finance', status: 'Active' },
];

export const recentActivities = [
  { id: 1, action: 'New project started', detail: 'MV Sulawesi Pride - Tugboat construction', time: '2 hours ago', type: 'project' },
  { id: 2, action: 'Payment received', detail: 'PT Samudra Transport - Rp 2.1B', time: '4 hours ago', type: 'finance' },
  { id: 3, action: 'Docking completed', detail: 'MT Samarinda - Routine maintenance', time: '6 hours ago', type: 'operations' },
  { id: 4, action: 'Quality inspection passed', detail: 'KM Mahakam Raya - ISO 9001 audit', time: '8 hours ago', type: 'quality' },
  { id: 5, action: 'New client inquiry', detail: 'PT Armada Laut - LCT construction', time: '12 hours ago', type: 'client' },
  { id: 6, action: 'Material delivered', detail: 'Steel plates for MV Borneo Spirit', time: '1 day ago', type: 'logistics' },
];

export const dockUtilization = [
  { name: 'Dock A', capacity: 5, current: 4, utilization: 80 },
  { name: 'Dock B', capacity: 4, current: 3, utilization: 75 },
  { name: 'Dock C', capacity: 3, current: 2, utilization: 67 },
  { name: 'Workshop', capacity: 10, current: 7, utilization: 70 },
];

export const qualityMetrics = [
  { metric: 'ISO 9001 Compliance', score: 98, target: 95 },
  { metric: 'Safety Standards', score: 96, target: 95 },
  { metric: 'Client Satisfaction', score: 94, target: 90 },
  { metric: 'On-Time Delivery', score: 88, target: 90 },
  { metric: 'Cost Efficiency', score: 91, target: 85 },
];
