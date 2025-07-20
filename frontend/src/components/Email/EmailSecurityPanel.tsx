import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { RiMailLine, RiCloseLine, RiAlertLine, RiCheckLine, RiShieldLine } from 'react-icons/ri';

interface EmailSecurityProps {
  spoofable: string;
  dmarc_policy: string;
  blacklist_detections: number;
  blacklist_total_list: number;
  blacklist_detected_list: string[];
  onClose: () => void;
}

const EmailSecurityPanel: React.FC<EmailSecurityProps> = ({
  spoofable,
  dmarc_policy,
  blacklist_detections,
  blacklist_total_list,
  blacklist_detected_list,
  onClose
}) => {
  // Prepare data for blacklist chart
  const blacklistData = {
    labels: ['Clean', 'Detected'],
    datasets: [{
      data: [
        blacklist_total_list - blacklist_detections,
        blacklist_detections
      ],
      backgroundColor: [
        'rgba(34, 197, 94, 0.5)',  // success-500 with alpha
        'rgba(239, 68, 68, 0.5)'   // danger-500 with alpha
      ],
      borderColor: [
        'rgb(34, 197, 94)',        // success-500
        'rgb(239, 68, 68)'         // danger-500
      ],
      borderWidth: 1
    }]
  };

  // DMARC policy status
  const getDmarcStatus = () => {
    switch (dmarc_policy.toLowerCase()) {
      case 'reject':
        return {
          color: 'text-security-success-text',
          bg: 'bg-security-success-bg',
          border: 'border-security-success-border',
          icon: <RiCheckLine className="text-2xl text-security-success-text" />,
          text: 'Strong Protection'
        };
      case 'quarantine':
        return {
          color: 'text-security-warning-text',
          bg: 'bg-security-warning-bg',
          border: 'border-security-warning-border',
          icon: <RiAlertLine className="text-2xl text-security-warning-text" />,
          text: 'Medium Protection'
        };
      default:
        return {
          color: 'text-security-critical-text',
          bg: 'bg-security-critical-bg',
          border: 'border-security-critical-border',
          icon: <RiAlertLine className="text-2xl text-security-critical-text" />,
          text: 'Weak Protection'
        };
    }
  };

  const dmarcStatus = getDmarcStatus();

  // Spoofing risk assessment
  const getSpoofingRisk = () => {
    const isHighRisk = spoofable.toLowerCase().includes('possible');
    return {
      color: isHighRisk ? 'text-security-critical-text' : 'text-security-success-text',
      bg: isHighRisk ? 'bg-security-critical-bg' : 'bg-security-success-bg',
      border: isHighRisk ? 'border-security-critical-border' : 'border-security-success-border',
      icon: isHighRisk ? 
        <RiAlertLine className="text-2xl text-security-critical-text" /> :
        <RiCheckLine className="text-2xl text-security-success-text" />,
      text: isHighRisk ? 'High Risk' : 'Low Risk'
    };
  };

  const spoofingRisk = getSpoofingRisk();

  return (
    <div className="w-full">
      {/* Header */}
      <div className="flex justify-between items-center p-6 border-b border-ui-border">
        <div className="flex items-center">
          <RiMailLine className="text-3xl text-features-email-text mr-3" />
          <h2 className="text-2xl font-bold text-ui-text-primary">Email Security Analysis</h2>
        </div>
        <button
          onClick={onClose}
          className="text-ui-text-tertiary hover:text-ui-text-primary transition-colors"
        >
          <RiCloseLine className="text-2xl" />
        </button>
      </div>

      <div className="p-6">
        {/* Status Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* DMARC Status */}
          <div className={`rounded-lg p-6 ${dmarcStatus.bg} border ${dmarcStatus.border}`}>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-ui-text-primary">DMARC Policy</h3>
              {dmarcStatus.icon}
            </div>
            <div className={`text-2xl font-bold ${dmarcStatus.color} mb-2`}>
              {dmarc_policy.toUpperCase()}
            </div>
            <p className="text-ui-text-secondary">{dmarcStatus.text}</p>
          </div>

          {/* Spoofing Risk */}
          <div className={`rounded-lg p-6 ${spoofingRisk.bg} border ${spoofingRisk.border}`}>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-ui-text-primary">Spoofing Risk</h3>
              {spoofingRisk.icon}
            </div>
            <div className={`text-2xl font-bold ${spoofingRisk.color} mb-2`}>
              {spoofingRisk.text}
            </div>
            <p className="text-ui-text-secondary">{spoofable}</p>
          </div>

          {/* Blacklist Status */}
          <div className={`rounded-lg p-6 ${blacklist_detections > 0 ? 'bg-security-critical-bg border-security-critical-border' : 'bg-security-success-bg border-security-success-border'} border`}>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-ui-text-primary">Blacklist Status</h3>
              {blacklist_detections > 0 ? 
                <RiAlertLine className="text-2xl text-security-critical-text" /> :
                <RiCheckLine className="text-2xl text-security-success-text" />
              }
            </div>
            <div className={`text-2xl font-bold ${blacklist_detections > 0 ? 'text-security-critical-text' : 'text-security-success-text'} mb-2`}>
              {blacklist_detections} / {blacklist_total_list}
            </div>
            <p className="text-ui-text-secondary">
              {blacklist_detections > 0 ? 'Detections Found' : 'Clean Status'}
            </p>
          </div>
        </div>

        {/* Detailed Analysis */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Blacklist Distribution */}
          <div className="bg-ui-backgroundAlt rounded-lg p-6">
            <h3 className="text-xl font-semibold text-ui-text-primary mb-6">Blacklist Distribution</h3>
            <div className="h-64 flex items-center justify-center">
              <div className="w-64">
                <Doughnut
                  data={blacklistData}
                  options={{
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                      legend: {
                        position: 'bottom',
                        labels: {
                          color: '#94A3B8' // text-ui-text-secondary
                        }
                      }
                    }
                  }}
                />
              </div>
            </div>
          </div>

          {/* Security Recommendations */}
          <div className="bg-ui-backgroundAlt rounded-lg p-6">
            <h3 className="text-xl font-semibold text-ui-text-primary mb-4">Security Recommendations</h3>
            <div className="space-y-4">
              {dmarc_policy.toLowerCase() !== 'reject' && (
                <div className="flex items-start space-x-3">
                  <RiAlertLine className="text-security-warning-text text-xl mt-0.5" />
                  <div>
                    <p className="font-medium text-ui-text-primary">Strengthen DMARC Policy</p>
                    <p className="text-sm text-ui-text-secondary">
                      Consider upgrading your DMARC policy to 'reject' for maximum protection against email spoofing.
                    </p>
                  </div>
                </div>
              )}

              {spoofable.toLowerCase().includes('possible') && (
                <div className="flex items-start space-x-3">
                  <RiAlertLine className="text-security-critical-text text-xl mt-0.5" />
                  <div>
                    <p className="font-medium text-ui-text-primary">Address Spoofing Vulnerability</p>
                    <p className="text-sm text-ui-text-secondary">
                      Implement SPF and DKIM records to prevent email spoofing attempts.
                    </p>
                  </div>
                </div>
              )}

              {blacklist_detections > 0 && (
                <div className="flex items-start space-x-3">
                  <RiAlertLine className="text-security-critical-text text-xl mt-0.5" />
                  <div>
                    <p className="font-medium text-ui-text-primary">Resolve Blacklist Issues</p>
                    <p className="text-sm text-ui-text-secondary">
                      Investigate and address the cause of blacklist detections:
                    </p>
                    <ul className="mt-2 space-y-1 text-sm text-ui-text-secondary">
                      {blacklist_detected_list.map((list, index) => (
                        <li key={index} className="flex items-center">
                          <span className="w-2 h-2 bg-security-critical-text rounded-full mr-2" />
                          {list}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {/* General Recommendations */}
              <div className="flex items-start space-x-3">
                <RiShieldLine className="text-features-email-text text-xl mt-0.5" />
                <div>
                  <p className="font-medium text-ui-text-primary">Best Practices</p>
                  <ul className="mt-2 space-y-1 text-sm text-ui-text-secondary">
                    <li>• Regularly monitor email security settings</li>
                    <li>• Keep SPF records up to date</li>
                    <li>• Implement email authentication protocols</li>
                    <li>• Use secure email gateways</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailSecurityPanel; 