// Data Models
const modules = [
    { id: 'dashboard', name: 'Dashboard', icon: 'trending-up' },
    { id: 'workers', name: 'Worker Management', icon: 'users' },
    { id: 'contractors', name: 'Contractor Portal', icon: 'briefcase' },
    { id: 'supervisor', name: 'Site Supervisor', icon: 'clipboard-check' },
    { id: 'homeowner', name: 'Homeowner Portal', icon: 'home' },
    { id: 'admin', name: 'Admin Control', icon: 'settings' },
    { id: 'analytics', name: 'Analytics Engine', icon: 'bar-chart-3' }
];

const workersData = [
    { id: 'W-001', name: 'Rajesh Kumar', skill: 'Mason', status: 'Active', site: 'S-034', rating: 4.8 },
    { id: 'W-002', name: 'Amit Singh', skill: 'Electrician', status: 'Active', site: 'S-042', rating: 4.6 },
    { id: 'W-003', name: 'Suresh Yadav', skill: 'Plumber', status: 'Idle', site: '-', rating: 4.9 },
    { id: 'W-004', name: 'Vijay Sharma', skill: 'Painter', status: 'Training', site: '-', rating: 4.5 }
];

// App State
let activeModule = 'dashboard';

// Initialization
document.addEventListener('DOMContentLoaded', () => {
    lucide.createIcons();
    renderSidebar();
    loadModule('dashboard');
});

// Toggle between Public Site and Dashboard
function toggleDashboard() {
    const publicSite = document.getElementById('public-site');
    const dashboard = document.getElementById('app-dashboard');
    
    if (dashboard.classList.contains('hidden')) {
        publicSite.classList.add('hidden');
        dashboard.classList.remove('hidden');
        lucide.createIcons(); // Re-init icons for dashboard
    } else {
        dashboard.classList.add('hidden');
        publicSite.classList.remove('hidden');
    }
}

// Render Sidebar Menu
function renderSidebar() {
    const menuContainer = document.getElementById('sidebar-menu');
    menuContainer.innerHTML = modules.map(mod => `
        <button onclick="loadModule('${mod.id}')" 
            class="w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all ${activeModule === mod.id ? 'bg-white text-gray-900 shadow-lg' : 'hover:bg-gray-700 text-gray-300'}">
            <i data-lucide="${mod.icon}" class="w-5 h-5"></i>
            <span class="text-sm font-medium">${mod.name}</span>
        </button>
    `).join('');
    lucide.createIcons();
}

// Switch Module Logic
function loadModule(moduleId) {
    activeModule = moduleId;
    renderSidebar(); // Update active state styling
    
    const contentArea = document.getElementById('module-content');
    contentArea.innerHTML = ''; // Clear current content
    contentArea.className = 'flex-1 overflow-y-auto p-6 animate-fade-in';

    switch(moduleId) {
        case 'dashboard':
            renderDashboard(contentArea);
            break;
        case 'workers':
            renderWorkers(contentArea);
            break;
        case 'contractors':
        case 'supervisor':
        case 'homeowner':
        case 'admin':
        case 'analytics':
            renderPlaceholder(contentArea, moduleId);
            break;
    }
    lucide.createIcons();
}

// --- RENDER FUNCTIONS ---

function renderDashboard(container) {
    container.innerHTML = `
        <div class="space-y-6">
            <div class="flex items-center justify-between">
                <div>
                    <h2 class="text-3xl font-bold text-gray-900">Dashboard Overview</h2>
                    <p class="text-gray-500 mt-1">Real-time business intelligence powered by AI</p>
                </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
                ${createStatCard('Total Workers', '145', 'users', '+12%')}
                ${createStatCard('Active Sites', '34', 'map-pin', '+8%')}
                ${createStatCard('Revenue', '₹28.4L', 'dollar-sign', '+15%')}
                ${createStatCard('Alerts', '3', 'alert-circle', 'High')}
            </div>

            <div class="bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl p-6 text-white shadow-lg">
                <div class="flex items-center space-x-3 mb-4">
                    <i data-lucide="activity" class="w-6 h-6"></i>
                    <h3 class="text-xl font-bold">AI-Powered Insights</h3>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div class="bg-white bg-opacity-20 rounded-lg p-4">
                        <p class="text-sm opacity-90 mb-2">Predicted Shortage</p>
                        <p class="text-2xl font-bold">Site #S-042</p>
                        <p class="text-xs opacity-75 mt-2">In 3 days</p>
                    </div>
                    <div class="bg-white bg-opacity-20 rounded-lg p-4">
                        <p class="text-sm opacity-90 mb-2">Optimal Utilization</p>
                        <p class="text-2xl font-bold">94.2%</p>
                        <p class="text-xs opacity-75 mt-2">Above avg</p>
                    </div>
                    <div class="bg-white bg-opacity-20 rounded-lg p-4">
                        <p class="text-sm opacity-90 mb-2">Revenue Forecast</p>
                        <p class="text-2xl font-bold">₹32.4L</p>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function renderWorkers(container) {
    const rows = workersData.map(w => `
        <tr class="border-b hover:bg-gray-50 transition">
            <td class="px-6 py-4 text-sm font-medium">${w.id}</td>
            <td class="px-6 py-4 text-sm">${w.name}</td>
            <td class="px-6 py-4 text-sm">${w.skill}</td>
            <td class="px-6 py-4">
                <span class="px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(w.status)}">
                    ${w.status}
                </span>
            </td>
            <td class="px-6 py-4 text-sm">${w.site}</td>
            <td class="px-6 py-4 text-sm font-bold text-gray-700">${w.rating} ★</td>
        </tr>
    `).join('');

    container.innerHTML = `
        <div class="space-y-6">
            <div class="flex items-center justify-between">
                <h2 class="text-3xl font-bold text-gray-900">Worker Management</h2>
                <button class="bg-green-500 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-green-600">
                    <i data-lucide="plus" class="w-4 h-4"></i> Add Worker
                </button>
            </div>
            
            <div class="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <table class="w-full text-left">
                    <thead class="bg-gray-50 border-b">
                        <tr>
                            <th class="px-6 py-4 text-sm font-semibold">ID</th>
                            <th class="px-6 py-4 text-sm font-semibold">Name</th>
                            <th class="px-6 py-4 text-sm font-semibold">Skill</th>
                            <th class="px-6 py-4 text-sm font-semibold">Status</th>
                            <th class="px-6 py-4 text-sm font-semibold">Site</th>
                            <th class="px-6 py-4 text-sm font-semibold">Rating</th>
                        </tr>
                    </thead>
                    <tbody>${rows}</tbody>
                </table>
            </div>
        </div>
    `;
}

function renderPlaceholder(container, title) {
    const displayTitle = modules.find(m => m.id === title)?.name || title;
    container.innerHTML = `
        <div class="space-y-6 text-center pt-10">
            <h2 class="text-3xl font-bold text-gray-900">${displayTitle}</h2>
            <div class="bg-white rounded-xl shadow-sm p-12 inline-block">
                <i data-lucide="lock" class="w-16 h-16 mx-auto text-gray-300 mb-4"></i>
                <h3 class="text-xl font-bold mb-2">Module Locked</h3>
                <p class="text-gray-600">This feature is available in the production version.</p>
            </div>
        </div>
    `;
}

// Helpers
function createStatCard(label, value, icon, change) {
    return `
        <div class="bg-white rounded-xl shadow-sm p-6 border border-gray-100 dashboard-card">
            <div class="flex items-center justify-between mb-4">
                <div class="bg-blue-100 p-3 rounded-lg">
                    <i data-lucide="${icon}" class="w-6 h-6 text-blue-600"></i>
                </div>
                <span class="text-sm font-semibold text-green-500">${change}</span>
            </div>
            <p class="text-gray-600 text-sm">${label}</p>
            <p class="text-3xl font-bold text-gray-900 mt-2">${value}</p>
        </div>
    `;
}

function getStatusColor(status) {
    if (status === 'Active') return 'bg-green-100 text-green-700';
    if (status === 'Idle') return 'bg-yellow-100 text-yellow-700';
    return 'bg-blue-100 text-blue-700';
}