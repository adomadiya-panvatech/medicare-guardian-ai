import { Search } from "lucide-react";
import { AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const Providers = () => {

  return (
    <div className="space-y-6 p-5">
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
  );
};

export default Providers;