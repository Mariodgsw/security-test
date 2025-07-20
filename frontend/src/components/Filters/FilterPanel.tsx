import React from 'react';
import { motion } from 'framer-motion';
import { RiSearch2Line, RiFilterLine } from 'react-icons/ri';
import { FilterState } from '../../interfaces/domain.interfaces';

interface FilterPanelProps {
  filters: FilterState;
  onFilterChange: (key: keyof FilterState, value: string) => void;
  onSortOrderToggle: () => void;
  show: boolean;
}

const FilterPanel: React.FC<FilterPanelProps> = ({
  filters,
  onFilterChange,
  onSortOrderToggle,
  show
}) => {
  if (!show) return null;

  return (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: 'auto' }}
      exit={{ opacity: 0, height: 0 }}
      className="bg-ui-backgroundLight rounded-lg shadow-sm p-6 mb-8"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Domain Search */}
        <div>
          <label className="block text-sm font-medium text-ui-text-primary mb-2">
            Domain Name
          </label>
          <div className="relative">
            <RiSearch2Line className="absolute left-3 top-1/2 transform -translate-y-1/2 text-ui-text-tertiary" />
            <input
              type="text"
              value={filters.domainName}
              onChange={(e) => onFilterChange('domainName', e.target.value)}
              placeholder="Search domains..."
              className="pl-10 pr-4 py-2 w-full rounded-lg border border-ui-border focus:ring-2 focus:ring-ui-accent-primary focus:border-transparent bg-ui-backgroundAlt text-ui-text-primary placeholder:text-ui-text-tertiary"
            />
          </div>
        </div>

        {/* Risk Score Range */}
        <div>
          <label className="block text-sm font-medium text-ui-text-primary mb-2">
            Risk Score Range
          </label>
          <div className="flex space-x-2">
            <input
              type="number"
              value={filters.minRiskScore}
              onChange={(e) => onFilterChange('minRiskScore', e.target.value)}
              placeholder="Min"
              className="w-1/2 px-4 py-2 rounded-lg border border-ui-border focus:ring-2 focus:ring-ui-accent-primary focus:border-transparent bg-ui-backgroundAlt text-ui-text-primary placeholder:text-ui-text-tertiary"
            />
            <input
              type="number"
              value={filters.maxRiskScore}
              onChange={(e) => onFilterChange('maxRiskScore', e.target.value)}
              placeholder="Max"
              className="w-1/2 px-4 py-2 rounded-lg border border-ui-border focus:ring-2 focus:ring-ui-accent-primary focus:border-transparent bg-ui-backgroundAlt text-ui-text-primary placeholder:text-ui-text-tertiary"
            />
          </div>
        </div>

        {/* Critical Vulnerabilities */}
        <div>
          <label className="block text-sm font-medium text-ui-text-primary mb-2">
            Critical Vulnerabilities
          </label>
          <input
            type="number"
            value={filters.minCriticalVulns}
            onChange={(e) => onFilterChange('minCriticalVulns', e.target.value)}
            placeholder="Minimum critical vulns"
            className="px-4 py-2 w-full rounded-lg border border-ui-border focus:ring-2 focus:ring-ui-accent-primary focus:border-transparent bg-ui-backgroundAlt text-ui-text-primary placeholder:text-ui-text-tertiary"
          />
        </div>

        {/* Sort Options */}
        <div>
          <label className="block text-sm font-medium text-ui-text-primary mb-2">
            Sort By
          </label>
          <div className="flex space-x-2">
            <select
              value={filters.sortBy}
              onChange={(e) => onFilterChange('sortBy', e.target.value)}
              className="w-full px-4 py-2 rounded-lg border border-ui-border focus:ring-2 focus:ring-ui-accent-primary focus:border-transparent bg-ui-backgroundAlt text-ui-text-primary"
            >
              <option value="">None</option>
              <option value="risk_score">Risk Score</option>
              <option value="domain_name">Domain Name</option>
              <option value="last_edit">Last Update</option>
              <option value="creation_date">Creation Date</option>
            </select>
            {filters.sortBy && (
              <button
                onClick={onSortOrderToggle}
                className="px-4 py-2 rounded-lg border border-ui-border hover:bg-ui-backgroundAlt text-ui-text-primary"
              >
                {filters.sortOrder === 'asc' ? '↑' : '↓'}
              </button>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default FilterPanel; 