export interface DomainSummary {
  idsummary: string;
  domain_name: string;
  risk_score: string;
  creation_date: string;
  last_edit: string;
  
  // Scores
  servizi_esposti_score: number;
  dataleak_score: number;
  rapporto_leak_email_score: number;
  spoofing_score: number;
  open_ports_score: number;
  blacklist_score: number;
  vulnerability_score_active: number;
  vulnerability_score_passive: number;
  certificate_score: number;

  // Ports
  n_port: {
    [key: string]: {
      n: number;
    };
  };

  // Certificates
  n_cert_attivi: number;
  n_cert_scaduti: number;

  // Assets
  n_asset: number;
  n_similar_domains: number;

  // Email Security
  email_security: {
    spoofable: string;
    dmarc_policy: string;
    blacklist_detections: number;
    blacklist_total_list: number;
    blacklist_detected_list: string[];
  };

  // Data Leaks
  n_dataleak: {
    total: DataLeakCounts;
    resolved: DataLeakCounts;
    unresolved: DataLeakCounts;
    enumeration: number;
  };

  // Vulnerabilities
  n_vulns: {
    total: VulnerabilityCounts;
    active: VulnerabilityCounts;
    passive: VulnerabilityCounts;
  };

  // Infrastructure
  waf: {
    count: number;
    assets: string[];
  };
  cdn: {
    count: number;
    assets: string[];
  };
  unique_ipv4: number;
  unique_ipv6: number;

  // Summary
  summary_text: string;
  summary_text_en: string;
}

interface DataLeakCounts {
  vip: number;
  domain_stealer: number;
  potential_stealer: number;
  other_stealer: number;
  general_leak: number;
}

interface VulnerabilityCounts {
  critical: number;
  high: number;
  medium: number;
  low: number;
  info: number;
}

export interface FilterState {
  // Search and domain filters
  domainName: string;
  searchTerm: string;
  
  // Risk score filters
  minRiskScore: string;
  maxRiskScore: string;
  riskLevel: string;
  
  // Vulnerability filters
  minCriticalVulns: string;
  
  // Date filters
  dateRange: string;
  
  // Sorting
  sortBy: string;
  sortOrder: 'asc' | 'desc';
}

export interface VulnerabilityCount {
  critical: number;
  high: number;
  medium: number;
  low: number;
  info: number;
}

// Alias DomainDetail to DomainSummary since they share the same structure
export type DomainDetail = DomainSummary; 