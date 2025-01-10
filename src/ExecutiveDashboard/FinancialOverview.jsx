import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts';

import MarketAccessView from './MarketAccessView';

const FinancialChart = () => {
  const [activeTab, setActiveTab] = useState('Financial Overview');
  
  const chartData = {
    'Financial Overview': {
      data: [
        { date: 'Jan 25', sales: 0, marketShare: 0 },
        { date: 'Feb 25', sales: 10, marketShare: 15 },
        { date: 'Mar 25', sales: 10, marketShare: 18 },
        { date: 'Apr 25', sales: 15, marketShare: 22 },
        { date: 'May 25', sales: 20, marketShare: 25 },
        { date: 'Jun 25', sales: 32, marketShare: 30 },
        { date: 'Jul 25', sales: 32, marketShare: 28 },
        { date: 'Aug 25', sales: 32, marketShare: 35 },
        { date: 'Sep 25', sales: 35, marketShare: 35 },
        { date: 'Oct 25', sales: 45, marketShare: 36 },
        { date: 'Nov 25', sales: 75, marketShare: 38 },
        { date: 'Dec 25', sales: 95, marketShare: 95 }
      ],
      lines: [
        { key: 'sales', color: '#22c55e', label: 'Sales' },
        { key: 'marketShare', color: '#3b82f6', label: 'Market Share' }
      ],
      showMetrics: true
    },
    'Market Share': {
      data: [
        { date: 'Jan 25', competitor1: 45, competitor2: 30, competitor3: 25 },
        { date: 'Feb 25', competitor1: 42, competitor2: 32, competitor3: 26 },
        { date: 'Mar 25', competitor1: 40, competitor2: 35, competitor3: 25 },
        { date: 'Apr 25', competitor1: 38, competitor2: 36, competitor3: 26 },
        { date: 'May 25', competitor1: 35, competitor2: 38, competitor3: 27 },
        { date: 'Jun 25', competitor1: 32, competitor2: 40, competitor3: 28 },
        { date: 'Jul 25', competitor1: 30, competitor2: 42, competitor3: 28 },
        { date: 'Aug 25', competitor1: 28, competitor2: 43, competitor3: 29 },
        { date: 'Sep 25', competitor1: 25, competitor2: 45, competitor3: 30 },
        { date: 'Oct 25', competitor1: 23, competitor2: 46, competitor3: 31 },
        { date: 'Nov 25', competitor1: 20, competitor2: 48, competitor3: 32 },
        { date: 'Dec 25', competitor1: 18, competitor2: 50, competitor3: 32 }
      ],
      lines: [
        { key: 'competitor1', color: '#3b82f6', label: 'Competitor 1' },
        { key: 'competitor2', color: '#22c55e', label: 'Competitor 2' },
        { key: 'competitor3', color: '#a855f7', label: 'Competitor 3' }
      ],
      showMetrics: true
    },
    'Global Overview': {
      data: [
        { region: 'North America', revenue: 1200, growth: 5.6, marketShare: 40 },
        { region: 'Europe', revenue: 950, growth: 4.2, marketShare: 30 },
        { region: 'Asia-Pacific', revenue: 800, growth: 7.8, marketShare: 20 },
        { region: 'Latin America', revenue: 450, growth: 6.3, marketShare: 7 },
        { region: 'Middle East & Africa', revenue: 300, growth: 5.1, marketShare: 3 }
      ],
      lines: [
        { key: 'revenue', color: '#3b82f6', label: 'Revenue ($M)' },
        { key: 'growth', color: '#22c55e', label: 'Growth (%)' },
        { key: 'marketShare', color: '#a855f7', label: 'Market Share (%)' }
      ],
      showMetrics: true
    },
    'Market Access': {
      data: [],
      lines: [],
      showMetrics: false
    }
  };

  const tabs = Object.keys(chartData);
  const currentChart = chartData[activeTab];

  return (
    <div className="flex flex-col bg-white border-2 border-grey-500 rounded-2xl p-2 items-center h-82 shadow-md" style={{width:"770px"}}>
      <div className="flex gap-4 mb-6 -mt-8">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-4 border-2 border-grey-500 rounded-2xl ${
              activeTab === tab 
                ? 'bg-green-50 text-[#558a41] shadow-md' 
                : 'bg-white text-gray-600 shadow-sm'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {currentChart.showMetrics && (
        <div className="flex gap-4 text-sm text-gray-600 mb-6 -ml-4">
          <span>ROI - 120%</span>
          <span>|</span>
          <span>Breakeven Point - 8 Month</span>
          <span>|</span>
          <span>Profit Margin - 35%</span>
          <span>|</span>
          <span>Launch Cost - $50M</span>
        </div>
      )}

      {activeTab !== 'Market Access' ? (
        <>
          <div className="flex gap-4 text-sm mb-6">
            {currentChart.lines.map(({ key, color, label }) => (
              <div key={key} className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: color }}></div>
                <span className="text-gray-600">{label}</span>
              </div>
            ))}
          </div>

          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 flex flex-col justify-between text-gray-700 text-md">
              <span>$100M</span>
              <span>$50M</span>
              <span>$30M</span>
              <span>$10M</span>
              <span>0</span>
            </div>

            <LineChart width={700} height={300} data={currentChart.data} margin={{ top: 5, right: 30, left: 50, bottom: 5 }}>
              <XAxis dataKey="date" tick={{ fontSize: 12, fill: '#666' }} />
              <YAxis hide />
              {currentChart.lines.map(({ key, color }) => (
                <Line key={key} type="monotone" dataKey={key} stroke={color} strokeWidth={2} dot={false} />
              ))}
              <Tooltip />
            </LineChart>

            <div className="absolute top-0 left-1/2 w-px h-full bg-gray-200"></div>
          </div>
        </>
      ) : (
        <MarketAccessView />
      )}
    </div>
  );
};

export default FinancialChart;