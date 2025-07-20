import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import axios from 'axios';
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
import { Doughnut, Bar } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { RiShieldLine, RiAlertLine, RiTimeLine, RiMailLine, RiLockLine, RiServerLine, RiCloseLine } from 'react-icons/ri';
import { DomainDetail as IDomainDetail } from '../../interfaces/domain.interfaces';
import CertificatesPanel from '../../components/Certificates/CertificatesPanel';
import NetworkInfrastructurePanel from '../../components/Infrastructure/NetworkInfrastructurePanel';
import EmailSecurityPanel from '../../components/Email/EmailSecurityPanel';

ChartJS.register(
  ArcElement,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartDataLabels
);

const DomainDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [domain, setDomain] = useState<IDomainDetail | null>(null);
  const [activeTab, setActiveTab] = useState('overview');
  const [showCertificatesModal, setShowCertificatesModal] = useState(false);
  const [showInfrastructureModal, setShowInfrastructureModal] = useState(false);
  const [showEmailSecurityModal, setShowEmailSecurityModal] = useState(false);

  useEffect(() => {
    const fetchDomain = async () => {
      try {
        const response = await axios.get(`http://localhost:5001/api/summaries/${id}`);
        setDomain(response.data.results[0]);
      } catch (error) {
        console.error('Error fetching domain details:', error);
      }
    };

    fetchDomain();
  }, [id]);

  if (!domain) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-primary-500"></div>
      </div>
    );
  }

  const getRiskColor = (score: number): string => {
    if (score > 66) return 'bg-security-critical-bg text-security-critical-text';
    if (score >= 35) return 'bg-security-warning-bg text-security-warning-text';
    return 'bg-security-success-bg text-security-success-text';
  };

  const scoreChartData = {
    labels: [
      'Services Exposed',
      'Data Leak',
      'Email Leak Ratio',
      'Spoofing',
      'Open Ports',
      'Blacklist',
      'Active Vulnerabilities',
      'Passive Vulnerabilities',
      'Certificates'
    ],
    datasets: [{
      data: [
        domain.servizi_esposti_score,
        domain.dataleak_score,
        domain.rapporto_leak_email_score,
        domain.spoofing_score,
        domain.open_ports_score,
        domain.blacklist_score,
        domain.vulnerability_score_active,
        domain.vulnerability_score_passive,
        domain.certificate_score
      ],
      backgroundColor: [
        '#FF6384',
        '#36A2EB',
        '#FFCE56',
        '#4BC0C0',
        '#9966FF',
        '#FF9F40',
        '#FF6384',
        '#36A2EB',
        '#4BC0C0'
      ]
    }]
  };

  const vulnerabilitiesChartData = {
    labels: ['Critical', 'High', 'Medium', 'Low', 'Info'],
    datasets: [
      {
        label: 'Active',
        data: [
          domain.n_vulns.active.critical,
          domain.n_vulns.active.high,
          domain.n_vulns.active.medium,
          domain.n_vulns.active.low,
          domain.n_vulns.active.info
        ],
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Passive',
        data: [
          domain.n_vulns.passive.critical,
          domain.n_vulns.passive.high,
          domain.n_vulns.passive.medium,
          domain.n_vulns.passive.low,
          domain.n_vulns.passive.info
        ],
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      }
    ]
  };

  const dataLeakChartData = {
    labels: ['VIP', 'Domain', 'Potential', 'Other', 'General'],
    datasets: [
      {
        label: 'Unresolved',
        data: [
          domain.n_dataleak.unresolved.vip,
          domain.n_dataleak.unresolved.domain_stealer,
          domain.n_dataleak.unresolved.potential_stealer,
          domain.n_dataleak.unresolved.other_stealer,
          domain.n_dataleak.unresolved.general_leak
        ],
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Resolved',
        data: [
          domain.n_dataleak.resolved.vip,
          domain.n_dataleak.resolved.domain_stealer,
          domain.n_dataleak.resolved.potential_stealer,
          domain.n_dataleak.resolved.other_stealer,
          domain.n_dataleak.resolved.general_leak
        ],
        backgroundColor: 'rgba(75, 192, 192, 0.5)',
      }
    ]
  };

  const portsChartData = {
    labels: Object.keys(domain.n_port),
    datasets: [{
      label: 'Port Usage',
      data: Object.values(domain.n_port).map(p => p.n),
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    }]
  };

  return (
    <div className="min-h-screen bg-ui-background">
      {/* Top Navigation Bar */}
      <div className="bg-ui-backgroundLight shadow-sm">
        <div className="mx-auto px-8 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <button
              onClick={() => navigate('/domains')}
              className="flex items-center text-ui-text-secondary hover:text-ui-text-primary transition-colors"
            >
              <RiTimeLine className="mr-2" />
              Back to Domains
            </button>
            <div className={`px-4 py-2 rounded-full ${getRiskColor(parseInt(domain.risk_score))} flex items-center`}>
              <span className="mr-2">Risk Score</span>
              <span className="text-xl font-bold">{domain.risk_score}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-8 mx-auto pt-8 sm:px-6 lg:px-8 py-8">
        {/* Header Section */}
        <div className="bg-ui-backgroundLight rounded-lg shadow-sm p-6 mb-8">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-3xl font-bold text-ui-text-primary mb-2">{domain.domain_name}</h1>
              <div className="flex items-center space-x-4 text-sm text-ui-text-secondary">
                <span className="flex items-center">
                  <RiTimeLine className="mr-1" />
                  Created: {new Date(domain.creation_date).toLocaleDateString()}
                </span>
                <span className="flex items-center">
                  <RiTimeLine className="mr-1" />
                  Last Updated: {new Date(domain.last_edit).toLocaleDateString()}
                </span>
              </div>
            </div>
            <div className="flex space-x-4">
              <div className="text-center">
                <div className="text-sm text-ui-text-secondary">Assets</div>
                <div className="text-xl font-semibold text-ui-text-primary">{domain.n_asset}</div>
              </div>
              <div className="text-center">
                <div className="text-sm text-ui-text-secondary">WAF</div>
                <div className="text-xl font-semibold text-ui-text-primary">{domain.waf.count}</div>
              </div>
              <div className="text-center">
                <div className="text-sm text-ui-text-secondary">CDN</div>
                <div className="text-xl font-semibold text-ui-text-primary">{domain.cdn.count}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex space-x-1 mb-8 bg-ui-backgroundLight rounded-lg shadow-sm p-1">
          <button
            onClick={() => setActiveTab('overview')}
            className={`flex-1 px-4 py-2 rounded-md transition-colors ${
              activeTab === 'overview' 
                ? 'bg-ui-accent-primary text-ui-text-primary' 
                : 'text-ui-text-secondary hover:bg-ui-backgroundAlt hover:text-ui-text-primary'
            }`}
          >
            Overview
          </button>
          <button
            onClick={() => setActiveTab('vulnerabilities')}
            className={`flex-1 px-4 py-2 rounded-md transition-colors ${
              activeTab === 'vulnerabilities' 
                ? 'bg-ui-accent-primary text-ui-text-primary' 
                : 'text-ui-text-secondary hover:bg-ui-backgroundAlt hover:text-ui-text-primary'
            }`}
          >
            Vulnerabilities
          </button>
          <button
            onClick={() => setActiveTab('security')}
            className={`flex-1 px-4 py-2 rounded-md transition-colors ${
              activeTab === 'security' 
                ? 'bg-ui-accent-primary text-ui-text-primary' 
                : 'text-ui-text-secondary hover:bg-ui-backgroundAlt hover:text-ui-text-primary'
            }`}
          >
            Security
          </button>
        </div>

        {/* Tab Content */}
        <div className="space-y-8">
          {activeTab === 'overview' && (
            <>
              {/* Summary Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-ui-backgroundLight rounded-lg shadow-sm p-6"
              >
                <h2 className="text-xl font-semibold text-ui-text-primary mb-4">Executive Summary</h2>
                <div className="prose max-w-none">
                  {domain.summary_text_en.split('\n').map((paragraph, index) => (
                    <p key={index} className="mb-4 text-ui-text-secondary">{paragraph}</p>
                  ))}
                </div>

                <h2 className="text-xl font-semibold text-ui-text-primary mb-4">Sommario esecutivo</h2>
                <div className="prose max-w-none">
                  {domain.summary_text.split('\n').map((paragraph, index) => (
                    <p key={index} className="mb-4 text-ui-text-secondary">{paragraph}</p>
                  ))}
                </div>
              </motion.div>

              {/* Score Overview and Port Usage */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="bg-ui-backgroundLight rounded-lg shadow-sm p-6"
                >
                  <h2 className="text-xl font-semibold text-ui-text-primary mb-4">Score Overview</h2>
                  <Doughnut
                    data={scoreChartData}
                    options={{
                      plugins: {
                        legend: {
                          position: 'right',
                          labels: {
                            boxWidth: 12,
                            padding: 20,
                            color: '#94A3B8' // text-ui-text-secondary
                          }
                        },
                        datalabels: {
                          color: '#FFFFFF',
                          font: { weight: 'bold' }
                        }
                      }
                    }}
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="bg-ui-backgroundLight rounded-lg shadow-sm p-6"
                >
                  <h2 className="text-xl font-semibold text-ui-text-primary mb-4">Port Usage</h2>
                  <Bar
                    data={portsChartData}
                    options={{
                      plugins: {
                        legend: { display: false },
                        datalabels: {
                          color: '#FFFFFF',
                          font: { weight: 'bold' }
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
                </motion.div>
              </div>
            </>
          )}

          {activeTab === 'vulnerabilities' && (
            <>
              {/* Vulnerabilities Overview */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="bg-ui-backgroundLight rounded-lg shadow-sm p-6"
                >
                  <h2 className="text-xl font-semibold text-ui-text-primary mb-4">Vulnerabilities Distribution</h2>
                  <Bar
                    data={vulnerabilitiesChartData}
                    options={{
                      plugins: {
                        legend: { 
                          position: 'top',
                          labels: {
                            color: '#94A3B8' // text-ui-text-secondary
                          }
                        },
                        datalabels: {
                          color: '#FFFFFF',
                          font: { weight: 'bold' }
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
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="bg-ui-backgroundLight rounded-lg shadow-sm p-6"
                >
                  <h2 className="text-xl font-semibold text-ui-text-primary mb-4">Data Leaks Overview</h2>
                  <Bar
                    data={dataLeakChartData}
                    options={{
                      plugins: {
                        legend: { 
                          position: 'top',
                          labels: {
                            color: '#94A3B8' // text-ui-text-secondary
                          }
                        },
                        datalabels: {
                          color: '#FFFFFF',
                          font: { weight: 'bold' }
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
                </motion.div>
              </div>

              {/* Vulnerability Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
              >
                {Object.entries(domain.n_vulns.total).map(([key, value]) => (
                  <div key={key} className="bg-ui-backgroundLight rounded-lg shadow-sm p-6">
                    <div className="text-sm text-ui-text-secondary capitalize">{key} Vulnerabilities</div>
                    <div className="text-2xl font-bold text-ui-text-primary mt-2">{value}</div>
                    <div className="text-sm text-ui-text-secondary mt-2">
                      Active: {domain.n_vulns.active[key as keyof typeof domain.n_vulns.active]}
                    </div>
                    <div className="text-sm text-ui-text-secondary">
                      Passive: {domain.n_vulns.passive[key as keyof typeof domain.n_vulns.passive]}
                    </div>
                  </div>
                ))}
              </motion.div>
            </>
          )}

          {activeTab === 'security' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Email Security */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-ui-backgroundLight rounded-lg shadow-sm p-6 cursor-pointer hover:shadow-md transition-shadow"
                onClick={() => setShowEmailSecurityModal(true)}
              >
                <div className="flex items-center mb-4">
                  <RiMailLine className="text-2xl text-features-email-text mr-2" />
                  <h2 className="text-xl font-semibold text-ui-text-primary">Email Security</h2>
                </div>
                <div className="space-y-4">
                  <div>
                    <div className="text-sm text-ui-text-secondary">Spoofing Status</div>
                    <div className="font-medium text-ui-text-primary">{domain.email_security.spoofable}</div>
                  </div>
                  <div>
                    <div className="text-sm text-ui-text-secondary">DMARC Policy</div>
                    <div className="font-medium text-ui-text-primary">{domain.email_security.dmarc_policy}</div>
                  </div>
                  <div>
                    <div className="text-sm text-ui-text-secondary">Blacklist Detections</div>
                    <div className="font-medium text-ui-text-primary">
                      {domain.email_security.blacklist_detections} / {domain.email_security.blacklist_total_list}
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* SSL/TLS Certificates */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-ui-backgroundLight rounded-lg shadow-sm p-6 cursor-pointer hover:shadow-md transition-shadow"
                onClick={() => setShowCertificatesModal(true)}
              >
                <div className="flex items-center mb-4">
                  <RiLockLine className="text-2xl text-features-certificates-text mr-2" />
                  <h2 className="text-xl font-semibold text-ui-text-primary">SSL/TLS Certificates</h2>
                </div>
                <div className="space-y-4">
                  <div>
                    <div className="text-sm text-ui-text-secondary">Certificate Score</div>
                    <div className="font-medium text-ui-text-primary">{domain.certificate_score}</div>
                  </div>
                  <div>
                    <div className="text-sm text-ui-text-secondary">Active Certificates</div>
                    <div className="font-medium text-ui-text-primary">{domain.n_cert_attivi}</div>
                  </div>
                  <div>
                    <div className="text-sm text-ui-text-secondary">Expired Certificates</div>
                    <div className="font-medium text-ui-text-primary">{domain.n_cert_scaduti}</div>
                  </div>
                </div>
              </motion.div>

              {/* Infrastructure */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-ui-backgroundLight rounded-lg shadow-sm p-6 cursor-pointer hover:shadow-md transition-shadow"
                onClick={() => setShowInfrastructureModal(true)}
              >
                <div className="flex items-center mb-4">
                  <RiServerLine className="text-2xl text-features-infrastructure-text mr-2" />
                  <h2 className="text-xl font-semibold text-ui-text-primary">Infrastructure</h2>
                </div>
                <div className="space-y-4">
                  <div>
                    <div className="text-sm text-ui-text-secondary">Total Assets</div>
                    <div className="font-medium text-ui-text-primary">{domain.n_asset}</div>
                  </div>
                  <div>
                    <div className="text-sm text-ui-text-secondary">WAF Protection</div>
                    <div className="font-medium text-ui-text-primary">{domain.waf.count} assets protected</div>
                  </div>
                  <div>
                    <div className="text-sm text-ui-text-secondary">CDN Usage</div>
                    <div className="font-medium text-ui-text-primary">{domain.cdn.count} assets using CDN</div>
                  </div>
                  <div>
                    <div className="text-sm text-ui-text-secondary">IP Addresses</div>
                    <div className="font-medium text-ui-text-primary">IPv4: {domain.unique_ipv4} | IPv6: {domain.unique_ipv6}</div>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </div>
      </div>

      {/* Modals */}
      <AnimatePresence>
        {showCertificatesModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-ui-overlay flex items-center justify-center z-50"
            onClick={() => setShowCertificatesModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-ui-backgroundLight rounded-lg shadow-xl max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto"
              onClick={e => e.stopPropagation()}
            >
              <div className="flex justify-between items-center p-6 border-b border-ui-border">
                <h2 className="text-2xl font-bold text-ui-text-primary">SSL/TLS Certificates Details</h2>
                <button
                  onClick={() => setShowCertificatesModal(false)}
                  className="text-ui-text-tertiary hover:text-ui-text-primary transition-colors"
                >
                  <RiCloseLine className="text-2xl" />
                </button>
              </div>
              <div className="p-6">
                <CertificatesPanel
                  certificateScore={domain.certificate_score}
                  activeCertificates={domain.n_cert_attivi}
                  expiredCertificates={domain.n_cert_scaduti}
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Infrastructure Modal */}
      <AnimatePresence>
        {showInfrastructureModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-ui-overlay flex items-center justify-center z-50"
            onClick={() => setShowInfrastructureModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-ui-backgroundLight rounded-lg shadow-xl max-w-6xl w-full mx-4 max-h-[90vh] overflow-y-auto"
              onClick={e => e.stopPropagation()}
            >
              <NetworkInfrastructurePanel
                ports={domain.n_port}
                ipv4={domain.unique_ipv4}
                ipv6={domain.unique_ipv6}
                waf={domain.waf}
                cdn={domain.cdn}
                onClose={() => setShowInfrastructureModal(false)}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Email Security Modal */}
      <AnimatePresence>
        {showEmailSecurityModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-ui-overlay flex items-center justify-center z-50"
            onClick={() => setShowEmailSecurityModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-ui-backgroundLight rounded-lg shadow-xl max-w-6xl w-full mx-4 max-h-[90vh] overflow-y-auto"
              onClick={e => e.stopPropagation()}
            >
              <EmailSecurityPanel
                spoofable={domain.email_security.spoofable}
                dmarc_policy={domain.email_security.dmarc_policy}
                blacklist_detections={domain.email_security.blacklist_detections}
                blacklist_total_list={domain.email_security.blacklist_total_list}
                blacklist_detected_list={domain.email_security.blacklist_detected_list}
                onClose={() => setShowEmailSecurityModal(false)}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default DomainDetail; 