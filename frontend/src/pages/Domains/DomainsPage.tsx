import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import axios from 'axios';
import { RiFilterLine } from 'react-icons/ri';
import { DomainSummary, FilterState } from '../../interfaces/domain.interfaces';
import FilterPanel from '../../components/Filters/FilterPanel';
import DomainCard from '../../components/DomainCard/DomainCard';

const DomainsPage: React.FC = () => {
  const navigate = useNavigate();
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState<FilterState>({
    domainName: '',
    searchTerm: '',
    minRiskScore: '',
    maxRiskScore: '',
    riskLevel: '',
    minCriticalVulns: '',
    dateRange: '',
    sortBy: '',
    sortOrder: 'desc'
  });
  const [domains, setDomains] = useState<DomainSummary[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDomains = async () => {
      try {
        const response = await axios.get('http://localhost:5001/api/summaries');
        setDomains(response.data.results);
      } catch (error) {
        console.error('Error fetching domains:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchDomains();
  }, []);

  useEffect(() => {
    let filteredDomains = [...domains];

    if (filteredDomains.length > 0) {
      // Apply filters
      if (filters.domainName) {
        filteredDomains = filteredDomains.filter((domain: DomainSummary) =>
          domain.domain_name.toLowerCase().includes(filters.domainName.toLowerCase())
        );
      }

      if (filters.minRiskScore) {
        filteredDomains = filteredDomains.filter((domain: DomainSummary) =>
          parseInt(domain.risk_score) >= parseInt(filters.minRiskScore)
        );
      }

      if (filters.maxRiskScore) {
        filteredDomains = filteredDomains.filter((domain: DomainSummary) =>
          parseInt(domain.risk_score) <= parseInt(filters.maxRiskScore)
        );
      }

      if (filters.minCriticalVulns) {
        filteredDomains = filteredDomains.filter((domain: DomainSummary) =>
          domain.n_vulns.total.critical >= parseInt(filters.minCriticalVulns)
        );
      }

      // Apply sorting
      if (filters.sortBy) {
        filteredDomains.sort((a: DomainSummary, b: DomainSummary) => {
          const aValue = a[filters.sortBy as keyof DomainSummary];
          const bValue = b[filters.sortBy as keyof DomainSummary];
          
          if (typeof aValue === 'string' && typeof bValue === 'string') {
            return filters.sortOrder === 'asc'
              ? aValue.localeCompare(bValue)
              : bValue.localeCompare(aValue);
          }
          
          if (typeof aValue === 'number' && typeof bValue === 'number') {
            return filters.sortOrder === 'asc'
              ? aValue - bValue
              : bValue - aValue;
          }

          return 0;
        });
      }

      setDomains(filteredDomains);
    }
  }, [filters]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-primary-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-ui-background">
      <div className="mx-auto px-9 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold gradient-text">My Domains</h1>
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center space-x-2 px-4 py-2 rounded-lg border border-ui-border text-ui-text-primary hover:bg-ui-backgroundAlt transition-colors"
          >
            <RiFilterLine className="text-ui-text-primary" />
            <span>Filters</span>
          </button>
        </div>

        {/* Filters Panel */}
        <FilterPanel
          filters={filters}
          onFilterChange={(key, value) => setFilters(prev => ({ ...prev, [key]: value }))}
          onSortOrderToggle={() => setFilters(prev => ({
            ...prev,
            sortOrder: prev.sortOrder === 'asc' ? 'desc' : 'asc'
          }))}
          show={showFilters}
        />

        {/* Domains Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {domains.map(domain => (
            <motion.div
              key={domain.idsummary}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <DomainCard
                domain={domain}
                onClick={() => navigate(`/domain/${domain.idsummary}`)}
              />
            </motion.div>
          ))}
        </div>

        {/* Empty State */}
        {domains.length === 0 && (
          <div className="text-center py-12">
            <p className="text-ui-text-secondary">No domains found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default DomainsPage; 