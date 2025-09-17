import React, { useState, useEffect } from 'react';
import {
    AlertTriangle,
    TrendingUp,
    Users,
    DollarSign,
    Shield,
    Search,
    Filter,
    Download,
    Eye,
    AlertCircle,
    CheckCircle,
    XCircle,
    BarChart3,
    Network,
    Clock,
    MapPin,
    FileText,
    Bell,
    PlusCircleIcon,
    Settings,
    User,
    LogOut
} from 'lucide-react';
import { LineChart, Line, AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";

const MedicareFraudDashboard = () => {
    const [activeTab, setActiveTab] = useState('overview');
    const [selectedTimeRange, setSelectedTimeRange] = useState('30d');
    const [searchQuery, setSearchQuery] = useState('');
    const [alerts, setAlerts] = useState([]);

    const navigate = useNavigate();

    // Sample data - in real app this would come from API
    const kpiData = {
        totalClaims: 2847392,
        flaggedClaims: 3847,
        falsePositiveRate: 8.2,
        potentialSavings: 12500000,
        detectionRate: 94.7,
        avgProcessingTime: 0.8
    };

    const fraudTrendData = [
        { month: 'Jan', flagged: 2800, confirmed: 2200, savings: 8500000 },
        { month: 'Feb', flagged: 3200, confirmed: 2600, savings: 9200000 },
        { month: 'Mar', flagged: 2900, confirmed: 2400, savings: 8800000 },
        { month: 'Apr', flagged: 3400, confirmed: 2800, savings: 10100000 },
        { month: 'May', flagged: 3847, confirmed: 3200, savings: 12500000 },
    ];

    const alertsData = [
        {
            id: 1,
            provider: 'Dr. Smith Medical Group',
            providerID: 'P-445789',
            riskScore: 95,
            flagType: 'Billing Anomaly',
            description: 'Unusual spike in high-cost procedures (350% above baseline)',
            amount: '$485,000',
            status: 'Under Review',
            priority: 'high',
            date: '2024-05-15',
            location: 'Houston, TX'
        },
        {
            id: 2,
            provider: 'Central Valley Clinic',
            providerID: 'P-228901',
            riskScore: 87,
            flagType: 'Upcoding Pattern',
            description: 'Consistent billing of complex procedures for simple diagnoses',
            amount: '$234,500',
            status: 'Investigating',
            priority: 'high',
            date: '2024-05-14',
            location: 'Phoenix, AZ'
        },
        {
            id: 3,
            provider: 'Metro Physical Therapy',
            providerID: 'P-567234',
            riskScore: 72,
            flagType: 'Network Anomaly',
            description: 'Unusual referral patterns with connected providers',
            amount: '$156,700',
            status: 'New',
            priority: 'medium',
            date: '2024-05-13',
            location: 'Denver, CO'
        }
    ];

    const providerRiskData = [
        { name: 'Low Risk', value: 78, color: '#10B981' },
        { name: 'Medium Risk', value: 15, color: '#F59E0B' },
        { name: 'High Risk', value: 7, color: '#EF4444' }
    ];

    const fraudTypeData = [
        { type: 'Upcoding', count: 1247, percentage: 32.4 },
        { type: 'Unbundling', count: 958, percentage: 24.9 },
        { type: 'Excessive Services', count: 762, percentage: 19.8 },
        { type: 'Billing Anomalies', count: 542, percentage: 14.1 },
        { type: 'Network Fraud', count: 338, percentage: 8.8 }
    ];

    const getPriorityColor = (priority) => {
        switch (priority) {
            case 'high': return 'bg-red-100 text-red-800 border-red-200';
            case 'medium': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
            default: return 'bg-blue-100 text-blue-800 border-blue-200';
        }
    };

    const getStatusColor = (status) => {
        switch (status) {
            case 'Under Review': return 'bg-blue-100 text-blue-800';
            case 'Investigating': return 'bg-yellow-100 text-yellow-800';
            case 'Confirmed': return 'bg-red-100 text-red-800';
            case 'Resolved': return 'bg-green-100 text-green-800';
            default: return 'bg-gray-100 text-gray-800';
        }
    };

    return (
        <div className="min-h-screen bg-background">
            {/* Header */}
            <header className="bg-gradient-header border-b border-border/50 px-6 py-4 shadow-sm">
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-3">
                            <div className="flex items-center justify-center w-10 h-10 bg-white/20 rounded-lg backdrop-blur-sm">
                                <Shield className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <h1 className="text-xl font-bold text-white">Medicare Fraud Detection System</h1>
                                <p className="text-xs text-white/80">AI-Powered Healthcare Analytics</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center space-x-4">
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                            <Input
                                placeholder="Search claims, providers..."
                                className="pl-10 w-80 bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:bg-white/20"
                            />
                        </div>

                        <Button
                            variant="ghost"
                            size="icon"
                            className="text-white hover:bg-white/10"
                            onClick={() => navigate("/")}
                        >
                            <LogOut className="w-5 h-5" />
                        </Button>

                        <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                            <Bell className="w-5 h-5" />
                        </Button>

                        <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                            <Settings className="w-5 h-5" />
                        </Button>

                        <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                            <User className="w-5 h-5" />
                        </Button>
                    </div>
                </div>
            </header>

            <div className="mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Navigation Tabs */}
                <div className="border-b border-gray-200 mb-8">
                    <nav className="-mb-px flex space-x-8">
                        {[
                            { id: 'overview', name: 'Overview', icon: BarChart3 },
                            { id: 'alerts', name: 'Active Alerts', icon: AlertTriangle },
                            { id: 'providers', name: 'Provider Analysis', icon: Users },
                            { id: 'network', name: 'Network Analysis', icon: Network }
                        ].map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`${activeTab === tab.id
                                    ? 'border-blue-500 text-blue-600'
                                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                    } whitespace-nowrap py-2 px-1 border-b-2 font-medium text-sm flex items-center`}
                            >
                                <tab.icon className="h-5 w-5 mr-2" />
                                {tab.name}
                            </button>
                        ))}
                    </nav>
                </div>

                {/* Overview Tab */}
                {activeTab === 'overview' && (
                    <div className="space-y-8">
                        {/* KPI Cards */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
                            {/* Reusable Card */}
                            {[
                                {
                                    label: "Total Claims",
                                    value: kpiData.totalClaims.toLocaleString(),
                                    icon: FileText,
                                    color: "text-blue-600",
                                    bg: "bg-blue-50",
                                },
                                {
                                    label: "Flagged Claims",
                                    value: kpiData.flaggedClaims.toLocaleString(),
                                    icon: AlertTriangle,
                                    color: "text-red-600",
                                    bg: "bg-red-50",
                                },
                                {
                                    label: "Detection Rate",
                                    value: `${kpiData.detectionRate}%`,
                                    icon: TrendingUp,
                                    color: "text-green-600",
                                    bg: "bg-green-50",
                                },
                                {
                                    label: "False Positive",
                                    value: `${kpiData.falsePositiveRate}%`,
                                    icon: XCircle,
                                    color: "text-yellow-600",
                                    bg: "bg-yellow-50",
                                },
                                {
                                    label: "Potential Savings",
                                    value: `$${(kpiData.potentialSavings / 1000000).toFixed(1)}M`,
                                    icon: DollarSign,
                                    color: "text-emerald-600",
                                    bg: "bg-emerald-50",
                                },
                                {
                                    label: "Avg Processing",
                                    value: `${kpiData.avgProcessingTime}s`,
                                    icon: Clock,
                                    color: "text-indigo-600",
                                    bg: "bg-indigo-50",
                                },
                            ].map((item, idx) => (
                                <div
                                    key={idx}
                                    className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 
                 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 
                 flex items-center gap-4"
                                >
                                    <div className={`p-3 rounded-xl ${item.bg}`}>
                                        <item.icon className={`h-6 w-6 ${item.color}`} />
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-gray-500">{item.label}</p>
                                        <p className="text-2xl font-bold text-gray-900">{item.value}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Charts Row */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            {/* Fraud Detection Trends */}
                            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                                <h3 className="text-lg font-medium text-gray-900 mb-4">Fraud Detection Trends</h3>
                                <ResponsiveContainer width="100%" height={300}>
                                    <LineChart data={fraudTrendData}>
                                        <CartesianGrid strokeDasharray="3 3" />
                                        <XAxis dataKey="month" />
                                        <YAxis />
                                        <Tooltip formatter={(value, name) => [
                                            name === 'savings' ? `$${(Number(value) / 1000000).toFixed(1)}M` : value,
                                            name === 'flagged' ? 'Flagged Claims' : name === 'confirmed' ? 'Confirmed Fraud' : 'Savings'
                                        ]} />
                                        <Legend />
                                        <Line type="monotone" dataKey="flagged" stroke="#3B82F6" strokeWidth={2} />
                                        <Line type="monotone" dataKey="confirmed" stroke="#EF4444" strokeWidth={2} />
                                    </LineChart>
                                </ResponsiveContainer>
                            </div>

                            {/* Provider Risk Distribution */}
                            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                                <h3 className="text-lg font-medium text-gray-900 mb-4">Provider Risk Distribution</h3>
                                <ResponsiveContainer width="100%" height={300}>
                                    <PieChart>
                                        <Pie
                                            data={providerRiskData}
                                            cx="50%"
                                            cy="50%"
                                            outerRadius={100}
                                            fill="#8884d8"
                                            dataKey="value"
                                            label={({ name, value }) => `${name}: ${value}%`}
                                        >
                                            {providerRiskData.map((entry, index) => (
                                                <Cell key={`cell-${index}`} fill={entry.color} />
                                            ))}
                                        </Pie>
                                        <Tooltip />
                                    </PieChart>
                                </ResponsiveContainer>
                            </div>
                        </div>

                        {/* Fraud Types */}
                        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                            <h3 className="text-lg font-medium text-gray-900 mb-4">Fraud Types Detected</h3>
                            <div className="space-y-4">
                                {fraudTypeData.map((item, index) => (
                                    <div key={index} className="flex items-center justify-between">
                                        <div className="flex-1">
                                            <div className="flex items-center justify-between mb-1">
                                                <span className="text-sm font-medium text-gray-900">{item.type}</span>
                                                <span className="text-sm text-gray-500">{item.count} cases ({item.percentage}%)</span>
                                            </div>
                                            <div className="w-full bg-gray-200 rounded-full h-2">
                                                <div
                                                    className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                                                    style={{ width: `${item.percentage}%` }}
                                                ></div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}

                {/* Active Alerts Tab */}
                {activeTab === 'alerts' && (
                    <div className="space-y-6">
                        {/* Search and Filters */}
                        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                            <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
                                <div className="relative flex-1 max-w-md">
                                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                                    <input
                                        type="text"
                                        placeholder="Search providers, IDs, or locations..."
                                        className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent w-full"
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                    />
                                </div>
                                <div className="flex gap-2">
                                    <button className="inline-flex items-center px-3 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                                        <Filter className="h-4 w-4 mr-2" />
                                        Filters
                                    </button>
                                    <button className="inline-flex items-center px-3 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                                        <Download className="h-4 w-4 mr-2" />
                                        Export
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Alerts List */}
                        <div className="bg-white shadow-md rounded-2xl border border-gray-100 overflow-hidden">
                            {/* Header */}
                            <div className="px-6 py-4 border-b border-gray-100 bg-gray-50 flex items-center justify-between">
                                <h3 className="text-lg font-semibold text-gray-900">High Priority Alerts</h3>
                                <span className="text-sm text-gray-500">{alertsData.length} alerts</span>
                            </div>

                            {/* Alerts */}
                            <div className="divide-y divide-gray-100">
                                {alertsData.map((alert, index) => (
                                    <div
                                        key={alert.id}
                                        className={`p-6 transition-all duration-200 ${index % 2 === 0 ? "bg-white" : "bg-gray-50"
                                            } hover:shadow-md`}
                                    >
                                        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                                            {/* Left Section */}
                                            <div className="flex-1">
                                                {/* Header Row */}
                                                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                                                    <h4 className="text-lg font-bold text-gray-900">{alert.provider}</h4>
                                                    <span className="text-sm font-semibold text-gray-700">
                                                        Risk Score:
                                                        <span className="ml-1 text-red-600">{alert.riskScore}%</span>
                                                    </span>
                                                </div>

                                                {/* Tags */}
                                                <div className="flex flex-wrap items-center gap-2 mb-3">
                                                    <span
                                                        className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold ${getPriorityColor(
                                                            alert.priority
                                                        )}`}
                                                    >
                                                        {alert.priority.toUpperCase()}
                                                    </span>
                                                    <span
                                                        className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(
                                                            alert.status
                                                        )}`}
                                                    >
                                                        {alert.status}
                                                    </span>
                                                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-600">
                                                        Provider ID: {alert.providerID}
                                                    </span>
                                                </div>

                                                {/* Description */}
                                                <p className="text-sm text-gray-700 mb-3">{alert.description}</p>

                                                {/* Meta Info */}
                                                <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600">
                                                    <span className="flex items-center">
                                                        <DollarSign className="h-4 w-4 mr-1 text-green-500" />
                                                        {alert.amount}
                                                    </span>
                                                    <span className="flex items-center">
                                                        <MapPin className="h-4 w-4 mr-1 text-pink-500" />
                                                        {alert.location}
                                                    </span>
                                                    <span className="flex items-center">
                                                        <Clock className="h-4 w-4 mr-1 text-indigo-500" />
                                                        {alert.date}
                                                    </span>
                                                </div>
                                            </div>

                                            {/* Right Section - Actions */}
                                            <div className="flex flex-col gap-2 lg:w-40">
                                                <button className="w-full inline-flex items-center justify-center px-3 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 bg-white hover:bg-gray-100 transition">
                                                    <Eye className="h-4 w-4 mr-1" />
                                                    View Details
                                                </button>
                                                <button className="w-full inline-flex items-center justify-center px-3 py-2 border border-blue-300 rounded-lg text-sm font-medium text-blue-700 bg-blue-50 hover:bg-blue-100 transition">
                                                    Investigate
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}

                {/* Provider Analysis Tab */}
                {activeTab === 'providers' && (
                    <div className="space-y-6">
                        {/* Provider Search and Filters */}
                        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                            <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
                                <div className="relative flex-1 max-w-md">
                                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                                    <input
                                        type="text"
                                        placeholder="Search providers by name or ID..."
                                        className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent w-full"
                                    />
                                </div>
                                <div className="flex gap-2 flex-wrap">
                                    <select className="border border-gray-300 rounded-md px-3 py-2 text-sm">
                                        <option>All Specialties</option>
                                        <option>Cardiology</option>
                                        <option>Orthopedics</option>
                                        <option>Physical Therapy</option>
                                        <option>Primary Care</option>
                                    </select>
                                    <select className="border border-gray-300 rounded-md px-3 py-2 text-sm">
                                        <option>All Risk Levels</option>
                                        <option>High Risk (80-100)</option>
                                        <option>Medium Risk (50-79)</option>
                                        <option>Low Risk (0-49)</option>
                                    </select>
                                    <select className="border border-gray-300 rounded-md px-3 py-2 text-sm">
                                        <option>All States</option>
                                        <option>Texas</option>
                                        <option>California</option>
                                        <option>Florida</option>
                                        <option>New York</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        {/* Provider Risk Heatmap */}
                        <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                            {/* Header */}
                            <h3 className="text-xl font-semibold text-gray-900 mb-6">
                                Provider Risk Heatmap
                            </h3>

                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                                {/* Chart Section */}
                                <div className="lg:col-span-2">
                                    <ResponsiveContainer width="100%" height={320}>
                                        <BarChart
                                            data={[
                                                { specialty: "Cardiology", highRisk: 12, medRisk: 28, lowRisk: 160 },
                                                { specialty: "Orthopedics", highRisk: 8, medRisk: 22, lowRisk: 95 },
                                                { specialty: "Physical Therapy", highRisk: 15, medRisk: 35, lowRisk: 180 },
                                                { specialty: "Primary Care", highRisk: 6, medRisk: 42, lowRisk: 320 },
                                                { specialty: "Radiology", highRisk: 9, medRisk: 18, lowRisk: 78 },
                                            ]}
                                            margin={{ top: 10, right: 20, left: 0, bottom: 40 }}
                                        >
                                            <CartesianGrid strokeDasharray="3 3" vertical={false} />
                                            <XAxis
                                                dataKey="specialty"
                                                angle={-30}
                                                textAnchor="end"
                                                interval={0}
                                                height={60}
                                                tick={{ fontSize: 12 }}
                                            />
                                            <YAxis tick={{ fontSize: 12 }} />
                                            <Tooltip contentStyle={{ borderRadius: "8px" }} />
                                            <Legend wrapperStyle={{ fontSize: "12px" }} />
                                            <Bar dataKey="highRisk" stackId="a" fill="#EF4444" name="High Risk" radius={[4, 4, 0, 0]} />
                                            <Bar dataKey="medRisk" stackId="a" fill="#F59E0B" name="Medium Risk" radius={[4, 4, 0, 0]} />
                                            <Bar dataKey="lowRisk" stackId="a" fill="#10B981" name="Low Risk" radius={[4, 4, 0, 0]} />
                                        </BarChart>
                                    </ResponsiveContainer>
                                </div>

                                {/* Stats Section */}
                                <div className="space-y-5">
                                    <div className="bg-red-50 p-5 rounded-lg shadow-sm hover:shadow-md transition">
                                        <h4 className="text-sm font-medium text-red-900">High Risk Providers</h4>
                                        <p className="text-3xl font-bold text-red-600">50</p>
                                        <p className="text-sm text-red-600">Requiring immediate review</p>
                                    </div>
                                    <div className="bg-yellow-50 p-5 rounded-lg shadow-sm hover:shadow-md transition">
                                        <h4 className="text-sm font-medium text-yellow-900">Medium Risk Providers</h4>
                                        <p className="text-3xl font-bold text-yellow-600">145</p>
                                        <p className="text-sm text-yellow-600">Under monitoring</p>
                                    </div>
                                    <div className="bg-green-50 p-5 rounded-lg shadow-sm hover:shadow-md transition">
                                        <h4 className="text-sm font-medium text-green-900">Low Risk Providers</h4>
                                        <p className="text-3xl font-bold text-green-600">833</p>
                                        <p className="text-sm text-green-600">Normal patterns</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Top Risk Providers Table */}
                        <div className="bg-white shadow-sm rounded-lg border border-gray-200 overflow-hidden">
                            <div className="px-6 py-4 border-b border-gray-200">
                                <h3 className="text-lg font-medium text-gray-900">Top Risk Providers</h3>
                            </div>
                            <div className="overflow-x-auto">
                                <table className="min-w-full divide-y divide-gray-200">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Provider</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Risk Score</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Specialty</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Claims/Month</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Avg Amount</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Red Flags</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200">
                                        {[
                                            {
                                                name: 'Dr. Smith Medical Group',
                                                id: 'P-445789',
                                                riskScore: 95,
                                                specialty: 'Cardiology',
                                                claimsPerMonth: 1247,
                                                avgAmount: 850,
                                                redFlags: ['Upcoding', 'Volume Spike'],
                                                location: 'Houston, TX'
                                            },
                                            {
                                                name: 'Central Valley Clinic',
                                                id: 'P-228901',
                                                riskScore: 87,
                                                specialty: 'Orthopedics',
                                                claimsPerMonth: 892,
                                                avgAmount: 1200,
                                                redFlags: ['Billing Pattern', 'Referral Anomaly'],
                                                location: 'Phoenix, AZ'
                                            },
                                            {
                                                name: 'Metro Physical Therapy',
                                                id: 'P-567234',
                                                riskScore: 82,
                                                specialty: 'Physical Therapy',
                                                claimsPerMonth: 1534,
                                                avgAmount: 320,
                                                redFlags: ['Excessive Services', 'Network Links'],
                                                location: 'Denver, CO'
                                            },
                                            {
                                                name: 'Advanced Diagnostics LLC',
                                                id: 'P-789456',
                                                riskScore: 78,
                                                specialty: 'Radiology',
                                                claimsPerMonth: 456,
                                                avgAmount: 950,
                                                redFlags: ['Geographic Anomaly', 'Timing Issues'],
                                                location: 'Miami, FL'
                                            }
                                        ].map((provider, index) => (
                                            <tr key={index} className="hover:bg-gray-50">
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div>
                                                        <div className="text-sm font-medium text-gray-900">{provider.name}</div>
                                                        <div className="text-sm text-gray-500">{provider.id} • {provider.location}</div>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="flex items-center">
                                                        <div className="text-sm font-medium text-gray-900">{provider.riskScore}</div>
                                                        <div className={`ml-2 w-12 h-2 rounded-full ${provider.riskScore >= 80 ? 'bg-red-400' :
                                                            provider.riskScore >= 60 ? 'bg-yellow-400' : 'bg-green-400'
                                                            }`}></div>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{provider.specialty}</td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{provider.claimsPerMonth.toLocaleString()}</td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">${provider.avgAmount}</td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="flex flex-wrap gap-1">
                                                        {provider.redFlags.map((flag, i) => (
                                                            <span key={i} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                                                                {flag}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                                    <div className="flex gap-2">
                                                        <button className="text-blue-600 hover:text-blue-900">View Profile</button>
                                                        <button className="text-red-600 hover:text-red-900">Investigate</button>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* Provider Analytics */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                                <h3 className="text-lg font-medium text-gray-900 mb-4">Risk Score Distribution</h3>
                                <ResponsiveContainer width="100%" height={250}>
                                    <AreaChart data={[
                                        { range: '0-10', count: 45 },
                                        { range: '11-20', count: 123 },
                                        { range: '21-30', count: 189 },
                                        { range: '31-40', count: 156 },
                                        { range: '41-50', count: 98 },
                                        { range: '51-60', count: 67 },
                                        { range: '61-70', count: 43 },
                                        { range: '71-80', count: 28 },
                                        { range: '81-90', count: 19 },
                                        { range: '91-100', count: 12 }
                                    ]}>
                                        <CartesianGrid strokeDasharray="3 3" />
                                        <XAxis dataKey="range" />
                                        <YAxis />
                                        <Tooltip />
                                        <Area type="monotone" dataKey="count" stroke="#3B82F6" fill="#3B82F6" fillOpacity={0.6} />
                                    </AreaChart>
                                </ResponsiveContainer>
                            </div>

                            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                                <h3 className="text-lg font-medium text-gray-900 mb-4">Billing Pattern Analysis</h3>
                                <div className="space-y-4">
                                    <div className="flex justify-between items-center">
                                        <span className="text-sm text-gray-600">Average Claims per Provider</span>
                                        <span className="text-lg font-medium">847</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-sm text-gray-600">Providers Above Threshold</span>
                                        <span className="text-lg font-medium text-red-600">23</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-sm text-gray-600">Most Common Red Flag</span>
                                        <span className="text-lg font-medium">Upcoding (32%)</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-sm text-gray-600">Avg Review Time</span>
                                        <span className="text-lg font-medium">4.2 days</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Network Analysis Tab */}
                {activeTab === 'network' && (
                    <div className="space-y-6">
                        {/* Network Overview Cards */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[
                                { icon: Network, color: "text-blue-600", label: "Suspicious Networks", value: "12" },
                                { icon: Users, color: "text-red-600", label: "Connected Providers", value: "47" },
                                { icon: TrendingUp, color: "text-yellow-600", label: "Referral Anomalies", value: "156" },
                                { icon: DollarSign, color: "text-green-600", label: "Network Risk Value", value: "$3.2M" },
                            ].map((card, i) => (
                                <div
                                    key={i}
                                    className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition"
                                >
                                    <div className="flex items-center">
                                        <card.icon className={`h-9 w-9 ${card.color}`} />
                                        <div className="ml-4">
                                            <p className="text-sm font-medium text-gray-500">{card.label}</p>
                                            <p className="text-3xl font-bold text-gray-900">{card.value}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Network Visualization */}
                        <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-3">
                                <h3 className="text-lg font-semibold text-gray-900">
                                    Suspicious Provider Networks
                                </h3>
                                <div className="flex gap-2">
                                    <button className="px-3 py-1.5 text-sm border border-gray-300 rounded-lg bg-white hover:bg-gray-50 transition">
                                        Filter Networks
                                    </button>
                                    <button className="px-3 py-1.5 text-sm border border-gray-300 rounded-lg bg-white hover:bg-gray-50 transition">
                                        Export Graph
                                    </button>
                                </div>
                            </div>

                            {/* Simplified Network Visualization */}
                            <div className="bg-gray-50 rounded-lg p-8 min-h-[400px] flex items-center justify-center relative">
                                <div className="text-center space-y-4">
                                    <div className="relative w-72 h-72 sm:w-80 sm:h-80 mx-auto">
                                        {/* Central Node */}
                                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-red-500 rounded-full flex items-center justify-center text-white font-medium shadow-lg">
                                            P-001
                                        </div>
                                        {/* Connected Nodes */}
                                        {[
                                            { top: "20%", left: "50%", color: "bg-yellow-500", id: "P-002" },
                                            { top: "80%", left: "50%", color: "bg-yellow-500", id: "P-003" },
                                            { top: "50%", left: "20%", color: "bg-orange-500", id: "P-004" },
                                            { top: "50%", left: "80%", color: "bg-orange-500", id: "P-005" },
                                            { top: "30%", left: "30%", color: "bg-blue-500", id: "P-006" },
                                            { top: "70%", left: "70%", color: "bg-blue-500", id: "P-007" },
                                        ].map((node, i) => (
                                            <div key={i}>
                                                {/* Connection Line */}
                                                <div className="absolute top-1/2 left-1/2 w-px h-px">
                                                    <div
                                                        className="absolute w-0.5 bg-gray-400 origin-bottom"
                                                        style={{
                                                            height: "60px",
                                                            transform: `rotate(${i * 60}deg) translate(-50%, -100%)`,
                                                        }}
                                                    />
                                                </div>
                                                {/* Node */}
                                                <div
                                                    className={`absolute -translate-x-1/2 -translate-y-1/2 w-12 h-12 ${node.color} rounded-full flex items-center justify-center text-white text-xs font-medium shadow`}
                                                    style={{ top: node.top, left: node.left }}
                                                >
                                                    {node.id}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="text-sm text-gray-600">
                                        <p>Interactive network visualization showing provider relationships</p>
                                        <p className="text-xs mt-1">
                                            <span className="text-red-500 font-semibold">Red:</span> High Risk •{" "}
                                            <span className="text-orange-500 font-semibold">Orange:</span>{" "}
                                            Medium Risk • <span className="text-yellow-500 font-semibold">Yellow:</span>{" "}
                                            Monitored • <span className="text-blue-500 font-semibold">Blue:</span>{" "}
                                            Connected
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Network Alerts */}
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                            {/* Network Alerts */}
                            <div className="lg:col-span-2 bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden">
                                <div className="px-6 py-4 border-b border-gray-200">
                                    <h3 className="text-lg font-semibold text-gray-900">Network Fraud Alerts</h3>
                                </div>
                                <div className="divide-y divide-gray-200">
                                    {[
                                        {
                                            networkId: 'NET-001',
                                            riskScore: 92,
                                            providers: ['Dr. Smith Group', 'Valley Clinic', 'Metro PT'],
                                            pattern: 'Circular Referral Pattern',
                                            description: 'Unusual referral loop detected between 3 providers with 340% increase in cross-referrals',
                                            amount: '$1,240,000',
                                            patients: 156,
                                            status: 'Critical'
                                        },
                                        {
                                            networkId: 'NET-002',
                                            riskScore: 84,
                                            providers: ['Advanced Diagnostics', 'City Medical', 'Rehab Plus'],
                                            pattern: 'Billing Synchronization',
                                            description: 'Synchronized billing patterns suggesting coordination between providers',
                                            amount: '$890,000',
                                            patients: 203,
                                            status: 'High Priority'
                                        },
                                        {
                                            networkId: 'NET-003',
                                            riskScore: 76,
                                            providers: ['Downtown Cardiology', 'Heart Center'],
                                            pattern: 'Patient Sharing Anomaly',
                                            description: 'Unusual patient sharing pattern with identical billing codes',
                                            amount: '$567,000',
                                            patients: 89,
                                            status: 'Under Review'
                                        }
                                    ].map((network, index) => (
                                        <div key={index} className="p-6 hover:bg-gray-50 transition">
                                            <div className="flex items-start justify-between">
                                                <div className="flex-1">
                                                    <div className="flex items-center gap-3 mb-2">
                                                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${network.status === 'Critical' ? 'bg-red-100 text-red-800' :
                                                            network.status === 'High Priority' ? 'bg-orange-100 text-orange-800' :
                                                                'bg-yellow-100 text-yellow-800'
                                                            }`}>
                                                            {network.status}
                                                        </span>
                                                        <span className="text-sm text-gray-500">Risk Score: {network.riskScore}%</span>
                                                        <span className="text-sm text-gray-500">Network ID: {network.networkId}</span>
                                                    </div>
                                                    <h4 className="text-lg font-medium text-gray-900 mb-1">{network.pattern}</h4>
                                                    <p className="text-sm text-gray-600 mb-2">{network.description}</p>
                                                    <div className="flex flex-wrap gap-2 mb-3">
                                                        {network.providers.map((provider, i) => (
                                                            <span key={i} className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-blue-100 text-blue-800">
                                                                {provider}
                                                            </span>
                                                        ))}
                                                    </div>
                                                    <div className="flex items-center gap-4 text-sm text-gray-500">
                                                        <span className="flex items-center">
                                                            <DollarSign className="h-4 w-4 mr-1" />
                                                            {network.amount}
                                                        </span>
                                                        <span className="flex items-center">
                                                            <Users className="h-4 w-4 mr-1" />
                                                            {network.patients} patients
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="flex items-center gap-2 ml-4">
                                                    <button className="inline-flex items-center px-3 py-1 border border-gray-300 rounded text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                                                        <Network className="h-4 w-4 mr-1" />
                                                        View Network
                                                    </button>
                                                    <button className="inline-flex items-center px-3 py-1 border border-red-300 rounded text-sm font-medium text-red-700 bg-red-50 hover:bg-red-100">
                                                        Investigate
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Network Analytics */}
                            <div className="space-y-6">
                                <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                                    <h3 className="text-lg font-semibold text-gray-900 mb-4">
                                        Referral Pattern Analysis
                                    </h3>
                                    <ResponsiveContainer width="100%" height={250}>

                                        <LineChart data={[
                                            { month: 'Jan', normal: 12500, suspicious: 450 },
                                            { month: 'Feb', normal: 13200, suspicious: 520 },
                                            { month: 'Mar', normal: 12800, suspicious: 680 },
                                            { month: 'Apr', normal: 14100, suspicious: 890 },
                                            { month: 'May', normal: 13900, suspicious: 1240 }
                                        ]}>
                                            <CartesianGrid strokeDasharray="3 3" />
                                            <XAxis dataKey="month" />
                                            <YAxis />
                                            <Tooltip />
                                            <Legend />
                                            <Line type="monotone" dataKey="normal" stroke="#10B981" strokeWidth={2} name="Normal Referrals" />
                                            <Line type="monotone" dataKey="suspicious" stroke="#EF4444" strokeWidth={2} name="Suspicious Referrals" />
                                        </LineChart>
                                    </ResponsiveContainer>
                                </div>

                                <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                                    <h3 className="text-lg font-semibold text-gray-900 mb-4">
                                        Network Risk Metrics
                                    </h3>
                                    <div className="space-y-4">
                                        {[
                                            { label: "Active Networks Monitored", value: "127" },
                                            { label: "High-Risk Networks", value: "12", color: "text-red-600" },
                                            { label: "Average Network Size", value: "3.7 providers" },
                                            { label: "Detection Accuracy", value: "91.3%", color: "text-green-600" },
                                        ].map((metric, i) => (
                                            <div key={i} className="flex justify-between items-center">
                                                <span className="text-sm text-gray-600">{metric.label}</span>
                                                <span className={`text-lg font-medium ${metric.color || ""}`}>
                                                    {metric.value}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MedicareFraudDashboard;