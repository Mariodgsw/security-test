const express = require('express');
const router = express.Router();
const summaries = require('../data/summaries');

// Helper function to filter domains based on query parameters
const filterDomains = (domains, query) => {
  let filtered = [...domains];

  // Filter by minimum risk score
  if (query.minRiskScore) {
    filtered = filtered.filter(d => parseInt(d.risk_score) >= parseInt(query.minRiskScore));
  }

  // Filter by maximum risk score
  if (query.maxRiskScore) {
    filtered = filtered.filter(d => parseInt(d.risk_score) <= parseInt(query.maxRiskScore));
  }

  // Filter by minimum critical vulnerabilities
  if (query.minCriticalVulns) {
    filtered = filtered.filter(d => d.n_vulns.total.critical >= parseInt(query.minCriticalVulns));
  }

  // Filter by domain name (partial match)
  if (query.domainName) {
    filtered = filtered.filter(d => d.domain_name.toLowerCase().includes(query.domainName.toLowerCase()));
  }

  // Filter by spoofable status
  if (query.spoofable) {
    filtered = filtered.filter(d => d.email_security.spoofable === query.spoofable);
  }

  // Filter by minimum data leaks
  if (query.minDataLeaks) {
    filtered = filtered.filter(d => 
      d.n_dataleak.total.potential_stealer + 
      d.n_dataleak.total.domain_stealer + 
      d.n_dataleak.total.other_stealer >= parseInt(query.minDataLeaks)
    );
  }

  // Sort results
  if (query.sortBy) {
    const sortField = query.sortBy.toLowerCase();
    const sortOrder = query.sortOrder?.toLowerCase() === 'desc' ? -1 : 1;

    filtered.sort((a, b) => {
      let valueA, valueB;

      switch (sortField) {
        case 'risk_score':
          valueA = parseInt(a.risk_score);
          valueB = parseInt(b.risk_score);
          break;
        case 'critical_vulns':
          valueA = a.n_vulns.total.critical;
          valueB = b.n_vulns.total.critical;
          break;
        case 'domain_name':
          valueA = a.domain_name.toLowerCase();
          valueB = b.domain_name.toLowerCase();
          break;
        case 'creation_date':
          valueA = new Date(a.creation_date);
          valueB = new Date(b.creation_date);
          break;
        default:
          valueA = a[sortField];
          valueB = b[sortField];
      }

      if (valueA < valueB) return -1 * sortOrder;
      if (valueA > valueB) return 1 * sortOrder;
      return 0;
    });
  }

  return filtered;
};

// GET all summaries with filtering
router.get('/', (req, res) => {
  const filteredResults = filterDomains(summaries.results, req.query);
  res.json({ status: "success", results: filteredResults });
});

// GET summary by ID
router.get('/:id', (req, res) => {
  const summary = summaries.results.find(s => s.idsummary === req.params.id);
  if (!summary) {
    return res.status(404).json({ message: 'Summary not found' });
  }
  res.json({ status: "success", results: [summary] });
});

// GET summaries statistics
router.get('/stats/overview', (req, res) => {
  const results = summaries.results;
  const stats = {
    total_domains: results.length,
    risk_levels: {
      critical: results.filter(d => parseInt(d.risk_score) >= 80).length,
      high: results.filter(d => parseInt(d.risk_score) >= 60 && parseInt(d.risk_score) < 80).length,
      medium: results.filter(d => parseInt(d.risk_score) >= 40 && parseInt(d.risk_score) < 60).length,
      low: results.filter(d => parseInt(d.risk_score) < 40).length
    },
    total_critical_vulns: results.reduce((sum, d) => sum + d.n_vulns.total.critical, 0),
    total_data_leaks: results.reduce((sum, d) => sum + 
      d.n_dataleak.total.potential_stealer + 
      d.n_dataleak.total.domain_stealer + 
      d.n_dataleak.total.other_stealer, 0),
    domains_with_waf: results.filter(d => d.waf.count > 0).length,
    domains_with_cdn: results.filter(d => d.cdn.count > 0).length
  };
  
  res.json({ status: "success", stats });
});

module.exports = router; 