import { Users, DollarSign, TrendingUp, Network } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const NetworkAnalysis = () => {

  return (
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
  );
};

export default NetworkAnalysis;