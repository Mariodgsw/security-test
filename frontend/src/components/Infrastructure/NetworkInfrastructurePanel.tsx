import React from 'react';
import { Bar } from 'react-chartjs-2';
import { RiServerLine, RiCloseLine, RiGlobalLine, RiShieldLine } from 'react-icons/ri';

interface NetworkInfrastructureProps {
  ports: {
    [key: string]: {
      n: number;
    };
  };
  ipv4: number;
  ipv6: number;
  waf: {
    count: number;
    assets: string[];
  };
  cdn: {
    count: number;
    assets: string[];
  };
  onClose: () => void;
}

const NetworkInfrastructurePanel: React.FC<NetworkInfrastructureProps> = ({
  ports,
  ipv4,
  ipv6,
  waf,
  cdn,
  onClose
}) => {
  // Prepare data for ports chart
  const portsData = {
    labels: Object.keys(ports),
    datasets: [{
      label: 'Instances',
      data: Object.values(ports).map(p => p.n),
      backgroundColor: 'rgba(99, 102, 241, 0.5)', // features-infrastructure color
      borderColor: 'rgb(99, 102, 241)',
      borderWidth: 1
    }]
  };

  return (
    <div className="w-full">
      {/* Header */}
      <div className="flex justify-between items-center p-6 border-b border-ui-border">
        <div className="flex items-center">
          <RiServerLine className="text-3xl text-features-infrastructure-text mr-3" />
          <h2 className="text-2xl font-bold text-ui-text-primary">Network Infrastructure</h2>
        </div>
        <button
          onClick={onClose}
          className="text-ui-text-tertiary hover:text-ui-text-primary transition-colors"
        >
          <RiCloseLine className="text-2xl" />
        </button>
      </div>

      <div className="p-6">
        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-features-infrastructure-bg rounded-lg p-4 border border-features-infrastructure-border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-features-infrastructure-text font-semibold">Open Ports</p>
                <h3 className="text-2xl font-bold text-ui-text-primary">
                  {Object.keys(ports).length}
                </h3>
              </div>
              <RiGlobalLine className="text-3xl text-features-infrastructure-text" />
            </div>
          </div>

          <div className="bg-features-waf-bg rounded-lg p-4 border border-features-waf-border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-features-waf-text font-semibold">WAF Protected</p>
                <h3 className="text-2xl font-bold text-ui-text-primary">
                  {waf.count}
                </h3>
              </div>
              <RiShieldLine className="text-3xl text-features-waf-text" />
            </div>
          </div>

          <div className="bg-features-cdn-bg rounded-lg p-4 border border-features-cdn-border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-features-cdn-text font-semibold">CDN Enabled</p>
                <h3 className="text-2xl font-bold text-ui-text-primary">
                  {cdn.count}
                </h3>
              </div>
              <RiGlobalLine className="text-3xl text-features-cdn-text" />
            </div>
          </div>

          <div className="bg-ui-backgroundAlt rounded-lg p-4 border border-ui-border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-ui-text-secondary font-semibold">Total IPs</p>
                <h3 className="text-2xl font-bold text-ui-text-primary">
                  {ipv4 + ipv6}
                </h3>
              </div>
              <RiServerLine className="text-3xl text-ui-text-tertiary" />
            </div>
          </div>
        </div>

        {/* Port Analysis */}
        <div className="bg-ui-backgroundAlt rounded-lg p-6 mb-8">
          <h3 className="text-xl font-semibold text-ui-text-primary mb-4">Port Distribution</h3>
          <div className="h-80">
            <Bar
              data={portsData}
              options={{
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                  legend: {
                    display: false
                  }
                },
                scales: {
                  y: {
                    beginAtZero: true,
                    grid: {
                      color: 'rgba(255, 255, 255, 0.1)'
                    },
                    ticks: {
                      color: '#94A3B8' // text-ui-text-secondary
                    }
                  },
                  x: {
                    grid: {
                      color: 'rgba(255, 255, 255, 0.1)'
                    },
                    ticks: {
                      color: '#94A3B8' // text-ui-text-secondary
                    }
                  }
                }
              }}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-ui-backgroundAlt rounded-lg p-6">
            <h3 className="text-xl font-semibold text-ui-text-primary mb-4">WAF Protection</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-ui-text-secondary">Protected Assets</span>
                <span className="font-semibold text-ui-text-primary">{waf.count}</span>
              </div>
              <div className="h-2 bg-ui-divider rounded-full">
                <div
                  className="h-2 bg-features-waf-text rounded-full"
                  style={{
                    width: `${(waf.count / (waf.count + cdn.count)) * 100}%`
                  }}
                />
              </div>
              <div className="mt-4 space-y-2">
                {waf.assets.map((asset, index) => (
                  <div key={index} className="flex items-center text-sm">
                    <RiShieldLine className="text-features-waf-text mr-2" />
                    <span className="text-ui-text-secondary">{asset}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-ui-backgroundAlt rounded-lg p-6">
            <h3 className="text-xl font-semibold text-ui-text-primary mb-4">CDN Configuration</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-ui-text-secondary">CDN Assets</span>
                <span className="font-semibold text-ui-text-primary">{cdn.count}</span>
              </div>
              <div className="h-2 bg-ui-divider rounded-full">
                <div
                  className="h-2 bg-features-cdn-text rounded-full"
                  style={{
                    width: `${(cdn.count / (waf.count + cdn.count)) * 100}%`
                  }}
                />
              </div>
              <div className="mt-4 space-y-2">
                {cdn.assets.map((asset, index) => (
                  <div key={index} className="flex items-center text-sm">
                    <RiGlobalLine className="text-features-cdn-text mr-2" />
                    <span className="text-ui-text-secondary">{asset}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NetworkInfrastructurePanel; 