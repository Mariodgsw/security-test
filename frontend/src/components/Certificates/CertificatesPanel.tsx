import React from 'react';
import { motion } from 'framer-motion';
import { RiShieldFill, RiErrorWarningFill } from 'react-icons/ri';
import { Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  ArcElement,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface CertificatesPanelProps {
  certificateScore: number;
  activeCertificates: number;
  expiredCertificates: number;
}

const CertificatesPanel: React.FC<CertificatesPanelProps> = ({
  certificateScore,
  activeCertificates,
  expiredCertificates
}) => {
  // Doughnut chart data for certificate ratio
  const ratioData = {
    labels: ['Active Certificates', 'Expired Certificates'],
    datasets: [
      {
        data: [activeCertificates, expiredCertificates],
        backgroundColor: [
          'rgb(16, 185, 129)', // success-500
          'rgb(239, 68, 68)'   // danger-500
        ],
        borderColor: [
          'rgb(6, 95, 70)',    // success-800
          'rgb(153, 27, 27)'   // danger-800
        ],
        borderWidth: 1,
      },
    ],
  };

  // Score indicator configuration
  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-success-500';
    if (score >= 60) return 'text-warning-500';
    return 'text-danger-500';
  };

  const getScoreBackgroundColor = (score: number) => {
    if (score >= 80) return 'bg-success-500';
    if (score >= 60) return 'bg-warning-500';
    return 'bg-danger-500';
  };

  const totalCertificates = activeCertificates + expiredCertificates;
  const activePercentage = (activeCertificates / totalCertificates) * 100;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-ui-background rounded-lg shadow-lg p-6"
    >
      <h2 className="text-2xl font-bold text-ui-text-primary mb-6">SSL Certificates Overview</h2>
      
      {/* Certificate Score */}
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <span className="text-ui-text-secondary">Certificate Score</span>
          <span className={`text-3xl font-bold ${getScoreColor(certificateScore)}`}>
            {certificateScore}
          </span>
        </div>
        <div className="h-2 bg-ui-divider rounded-full mt-2">
          <div
            className={`h-2 rounded-full ${getScoreBackgroundColor(certificateScore)}`}
            style={{ width: `${certificateScore}%` }}
          />
        </div>
      </div>

      {/* Certificates Ratio */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col items-center">
          <h3 className="text-lg font-semibold text-ui-text-primary mb-4">Certificates Ratio</h3>
          <div className="w-48 h-48">
            <Doughnut data={ratioData} />
          </div>
        </div>

        {/* Status Summary */}
        <div className="flex flex-col justify-center space-y-4">
          <div className="flex items-center justify-between p-4 bg-ui-backgroundAlt rounded-lg">
            <div className="flex items-center">
              <RiShieldFill className="text-success-500 text-2xl mr-2" />
              <span className="text-ui-text-primary">Active</span>
            </div>
            <span className="font-bold text-ui-text-primary">{activeCertificates}</span>
          </div>
          <div className="flex items-center justify-between p-4 bg-ui-backgroundAlt rounded-lg">
            <div className="flex items-center">
              <RiErrorWarningFill className="text-danger-500 text-2xl mr-2" />
              <span className="text-ui-text-primary">Expired</span>
            </div>
            <span className="font-bold text-ui-text-primary">{expiredCertificates}</span>
          </div>
          <div className="p-4 bg-ui-backgroundAlt rounded-lg">
            <div className="flex justify-between mb-2">
              <span className="text-ui-text-secondary">Health Status</span>
              <span className="font-bold text-ui-text-primary">{activePercentage.toFixed(1)}% Active</span>
            </div>
            <div className="h-2 bg-ui-divider rounded-full">
              <div
                className="h-2 bg-success-500 rounded-full"
                style={{ width: `${activePercentage}%` }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Alert Section */}
      {expiredCertificates > 0 && (
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mt-6 p-4 bg-security-critical-bg border border-security-critical-border rounded-lg"
        >
          <div className="flex items-center">
            <RiErrorWarningFill className="text-security-critical-text text-xl mr-2" />
            <div>
              <h4 className="font-semibold text-security-critical-text">Certificate Alert</h4>
              <p className="text-security-critical-text">
                {expiredCertificates} certificate{expiredCertificates > 1 ? 's' : ''} expired.
                Please review and update.
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default CertificatesPanel; 