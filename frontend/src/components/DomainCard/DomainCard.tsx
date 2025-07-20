import React from 'react';
import { motion } from 'framer-motion';
import { RiAlertLine, RiShieldLine, RiTimeLine, RiEyeLine } from 'react-icons/ri';
import { DomainSummary } from '../../interfaces/domain.interfaces';

interface DomainCardProps {
  domain: DomainSummary;
  onClick: () => void;
}

const DomainCard: React.FC<DomainCardProps> = ({ domain, onClick }) => {
  const getRiskColor = (score: string): string => {
    const numScore = parseInt(score);
    if (numScore > 66) return 'bg-security-critical-bg text-security-critical-text border-security-critical-border';
    if (numScore >= 35) return 'bg-security-warning-bg text-security-warning-text border-security-warning-border';
    return 'bg-security-success-bg text-security-success-text border-security-success-border';
  };

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="bg-ui-backgroundLight rounded-lg shadow-sm p-6 group cursor-pointer"
      onClick={onClick}
    >
      <div className="relative">
        {/* Risk Score Indicator */}
        <div className="absolute -top-3 -right-3">
          <div className={`w-14 h-14 rounded-xl ${getRiskColor(domain.risk_score)} flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-200 border-2`}>
            <span className="font-bold text-lg">{domain.risk_score}</span>
          </div>
        </div>

        {/* Domain Info */}
        <h2 className="text-xl font-semibold text-ui-text-primary mb-4 pr-12">
          {domain.domain_name}
        </h2>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="flex items-center space-x-2 text-ui-text-secondary">
            <RiAlertLine className="text-security-critical-text" />
            <span>Critical: {domain.n_vulns.total.critical}</span>
          </div>
          <div className="flex items-center space-x-2 text-ui-text-secondary">
            <RiShieldLine className="text-security-warning-text" />
            <span>High: {domain.n_vulns.total.high}</span>
          </div>
          <div className="flex items-center space-x-2 text-ui-text-secondary">
            <RiShieldLine className="text-ui-accent-primary" />
            <span>Active: {domain.vulnerability_score_active}</span>
          </div>
          <div className="flex items-center space-x-2 text-ui-text-secondary">
            <RiShieldLine className="text-ui-text-tertiary" />
            <span>Passive: {domain.vulnerability_score_passive}</span>
          </div>
        </div>

        {/* Creation Date */}
        <div className="flex items-center space-x-2 text-sm text-ui-text-tertiary">
          <RiTimeLine />
          <span>Created: {new Date(domain.creation_date).toLocaleDateString()}</span>
        </div>

        {/* View Details Button */}
        <div className="absolute bottom-0 right-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <button className="flex items-center space-x-1 text-ui-accent-primary hover:text-ui-accent-hover">
            <RiEyeLine />
            <span>View Details</span>
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default DomainCard; 