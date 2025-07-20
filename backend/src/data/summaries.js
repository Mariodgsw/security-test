const summaries = {
  status: "success",
  results: [
    {
      "idsummary": "d1923479-e084-4ade-b18c-0c2262b8fb6a",
      "summary_text": "**Riepilogo Esecutivo della Vulnerabilità per \"cybersonar.demo\"**\n\nIl dominio \"cybersonar.demo\" attualmente presenta una situazione di sicurezza altamente critica...",
      "summary_text_en": "**Executive Summary of Vulnerability for \"cybersonar.demo\"**\n\nThe domain \"cybersonar.demo\" currently has a highly critical security situation...",
      "risk_score": "99",
      "creation_date": "2024-03-07 18:08:41",
      "last_edit": "2024-03-08 14:09:44",
      "domain_name": "cybersonar.demo",
      "servizi_esposti_score": 99,
      "dataleak_score": 100,
      "rapporto_leak_email_score": 50,
      "spoofing_score": 50,
      "open_ports_score": 1,
      "blacklist_score": 70,
      "vulnerability_score_active": 54,
      "vulnerability_score_passive": 99,
      "certificate_score": 61,
      "n_port": {
        "53": { "n": 3 },
        "80": { "n": 68 },
        "443": { "n": 42 },
        "6667": { "n": 9 },
        "6697": { "n": 9 },
        "8080": { "n": 6 },
        "8800": { "n": 21 }
      },
      "n_cert_attivi": 15,
      "n_cert_scaduti": 18,
      "n_asset": 102,
      "n_similar_domains": 13,
      "email_security": {
        "spoofable": "Spoofing possible.",
        "dmarc_policy": "quarantine",
        "blacklist_detections": 0,
        "blacklist_total_list": 60,
        "blacklist_detected_list": []
      },
      "n_dataleak": {
        "total": {
          "vip": 0,
          "domain_stealer": 1,
          "potential_stealer": 826,
          "other_stealer": 11,
          "general_leak": 0
        },
        "resolved": {
          "vip": 0,
          "domain_stealer": 0,
          "potential_stealer": 0,
          "other_stealer": 0,
          "general_leak": 0
        },
        "unresolved": {
          "vip": 0,
          "domain_stealer": 1,
          "potential_stealer": 826,
          "other_stealer": 11,
          "general_leak": 0
        },
        "enumeration": 2
      },
      "n_vulns": {
        "total": {
          "critical": 2,
          "high": 18,
          "medium": 52,
          "low": 0,
          "info": 90
        },
        "active": {
          "critical": 2,
          "high": 0,
          "medium": 3,
          "low": 0,
          "info": 90
        },
        "passive": {
          "critical": 0,
          "high": 18,
          "medium": 49,
          "low": 0,
          "info": 0
        }
      },
      "waf": {
        "count": 4,
        "assets": [
          "128f92aa-85c1-486f-acbf-c1b43e8b33ba",
          "ec87e3bd-3de2-477c-b52b-b93a70814ed0",
          "b909c3b2-56e6-40e5-98c1-814fa0b85bb7",
          "175e40e8-33af-4db3-9617-a3be04103d6f"
        ]
      },
      "cdn": {
        "count": 0,
        "assets": []
      },
      "unique_ipv4": 30,
      "unique_ipv6": 23
    },
    {
      "idsummary": "e2934580-f195-5bdf-c29d-1d3373c9fc7b",
      "summary_text": "**Riepilogo Esecutivo della Vulnerabilità per \"securitytest.local\"**\n\nIl dominio presenta vulnerabilità di livello medio...",
      "summary_text_en": "**Executive Summary of Vulnerability for \"securitytest.local\"**\n\nThe domain has medium-level vulnerabilities...",
      "risk_score": "75",
      "creation_date": "2024-03-08 10:15:22",
      "last_edit": "2024-03-09 09:30:15",
      "domain_name": "securitytest.local",
      "servizi_esposti_score": 65,
      "dataleak_score": 80,
      "rapporto_leak_email_score": 40,
      "spoofing_score": 30,
      "open_ports_score": 45,
      "blacklist_score": 20,
      "vulnerability_score_active": 35,
      "vulnerability_score_passive": 70,
      "certificate_score": 85,
      "n_port": {
        "80": { "n": 25 },
        "443": { "n": 18 },
        "8080": { "n": 3 }
      },
      "n_cert_attivi": 8,
      "n_cert_scaduti": 5,
      "n_asset": 45,
      "n_similar_domains": 7,
      "email_security": {
        "spoofable": "Not spoofable",
        "dmarc_policy": "reject",
        "blacklist_detections": 0,
        "blacklist_total_list": 60,
        "blacklist_detected_list": []
      },
      "n_dataleak": {
        "total": {
          "vip": 0,
          "domain_stealer": 0,
          "potential_stealer": 156,
          "other_stealer": 5,
          "general_leak": 0
        },
        "resolved": {
          "vip": 0,
          "domain_stealer": 0,
          "potential_stealer": 100,
          "other_stealer": 3,
          "general_leak": 0
        },
        "unresolved": {
          "vip": 0,
          "domain_stealer": 0,
          "potential_stealer": 56,
          "other_stealer": 2,
          "general_leak": 0
        },
        "enumeration": 1
      },
      "n_vulns": {
        "total": {
          "critical": 0,
          "high": 8,
          "medium": 25,
          "low": 12,
          "info": 45
        },
        "active": {
          "critical": 0,
          "high": 2,
          "medium": 10,
          "low": 5,
          "info": 30
        },
        "passive": {
          "critical": 0,
          "high": 6,
          "medium": 15,
          "low": 7,
          "info": 15
        }
      },
      "waf": {
        "count": 2,
        "assets": [
          "a45b92cd-12e4-487f-bcde-f1b43e8b33cd",
          "b67c34ef-56f7-498g-defg-h2c54f9c44ef"
        ]
      },
      "cdn": {
        "count": 1,
        "assets": ["c89d45gh-78i9-509h-ghij-i3d65g0d55fg"]
      },
      "unique_ipv4": 15,
      "unique_ipv6": 8
    },
    {
      "idsummary": "f3045691-g206-6ceg-d30e-2e4484d0gd8c",
      "summary_text": "**Riepilogo Esecutivo della Vulnerabilità per \"ecommerce.test\"**\n\nIl dominio presenta vulnerabilità critiche nel sistema di pagamento...",
      "summary_text_en": "**Executive Summary of Vulnerability for \"ecommerce.test\"**\n\nThe domain has critical vulnerabilities in the payment system...",
      "risk_score": "95",
      "creation_date": "2024-03-09 08:30:00",
      "last_edit": "2024-03-10 11:45:30",
      "domain_name": "ecommerce.test",
      "servizi_esposti_score": 90,
      "dataleak_score": 95,
      "rapporto_leak_email_score": 60,
      "spoofing_score": 45,
      "open_ports_score": 75,
      "blacklist_score": 30,
      "vulnerability_score_active": 85,
      "vulnerability_score_passive": 80,
      "certificate_score": 70,
      "n_port": {
        "80": { "n": 35 },
        "443": { "n": 28 },
        "8080": { "n": 12 },
        "3306": { "n": 2 }
      },
      "n_cert_attivi": 12,
      "n_cert_scaduti": 8,
      "n_asset": 75,
      "n_similar_domains": 15,
      "email_security": {
        "spoofable": "Spoofing possible.",
        "dmarc_policy": "none",
        "blacklist_detections": 1,
        "blacklist_total_list": 60,
        "blacklist_detected_list": ["blacklist1"]
      },
      "n_dataleak": {
        "total": {
          "vip": 2,
          "domain_stealer": 3,
          "potential_stealer": 450,
          "other_stealer": 25,
          "general_leak": 15
        },
        "resolved": {
          "vip": 1,
          "domain_stealer": 1,
          "potential_stealer": 200,
          "other_stealer": 10,
          "general_leak": 5
        },
        "unresolved": {
          "vip": 1,
          "domain_stealer": 2,
          "potential_stealer": 250,
          "other_stealer": 15,
          "general_leak": 10
        },
        "enumeration": 3
      },
      "n_vulns": {
        "total": {
          "critical": 3,
          "high": 25,
          "medium": 40,
          "low": 15,
          "info": 65
        },
        "active": {
          "critical": 3,
          "high": 15,
          "medium": 20,
          "low": 8,
          "info": 35
        },
        "passive": {
          "critical": 0,
          "high": 10,
          "medium": 20,
          "low": 7,
          "info": 30
        }
      },
      "waf": {
        "count": 3,
        "assets": [
          "d56e45fg-89h0-512i-ijkl-j4e76h1e66gh",
          "e67f56gh-90i1-623j-jklm-k5f87i2f77hi",
          "f78g67hi-01j2-734k-klmn-l6g98j3g88ij"
        ]
      },
      "cdn": {
        "count": 2,
        "assets": [
          "g89h78ij-12k3-845l-lmno-m7h09k4h99jk",
          "h90i89jk-23l4-956m-mnop-n8i10l5i00kl"
        ]
      },
      "unique_ipv4": 25,
      "unique_ipv6": 15
    },
    {
      "idsummary": "g4156702-h317-7dfh-e41f-3f5595e1he9d",
      "summary_text": "**Riepilogo Esecutivo della Vulnerabilità per \"bank.secure\"**\n\nIl dominio mantiene un alto livello di sicurezza con minime vulnerabilità...",
      "summary_text_en": "**Executive Summary of Vulnerability for \"bank.secure\"**\n\nThe domain maintains a high level of security with minimal vulnerabilities...",
      "risk_score": "15",
      "creation_date": "2024-03-10 09:45:00",
      "last_edit": "2024-03-11 16:20:45",
      "domain_name": "bank.secure",
      "servizi_esposti_score": 20,
      "dataleak_score": 10,
      "rapporto_leak_email_score": 5,
      "spoofing_score": 5,
      "open_ports_score": 15,
      "blacklist_score": 0,
      "vulnerability_score_active": 10,
      "vulnerability_score_passive": 15,
      "certificate_score": 95,
      "n_port": {
        "443": { "n": 8 },
        "8443": { "n": 2 }
      },
      "n_cert_attivi": 6,
      "n_cert_scaduti": 0,
      "n_asset": 25,
      "n_similar_domains": 3,
      "email_security": {
        "spoofable": "Not spoofable",
        "dmarc_policy": "reject",
        "blacklist_detections": 0,
        "blacklist_total_list": 60,
        "blacklist_detected_list": []
      },
      "n_dataleak": {
        "total": {
          "vip": 0,
          "domain_stealer": 0,
          "potential_stealer": 5,
          "other_stealer": 1,
          "general_leak": 0
        },
        "resolved": {
          "vip": 0,
          "domain_stealer": 0,
          "potential_stealer": 5,
          "other_stealer": 1,
          "general_leak": 0
        },
        "unresolved": {
          "vip": 0,
          "domain_stealer": 0,
          "potential_stealer": 0,
          "other_stealer": 0,
          "general_leak": 0
        },
        "enumeration": 0
      },
      "n_vulns": {
        "total": {
          "critical": 0,
          "high": 1,
          "medium": 5,
          "low": 8,
          "info": 25
        },
        "active": {
          "critical": 0,
          "high": 0,
          "medium": 2,
          "low": 3,
          "info": 15
        },
        "passive": {
          "critical": 0,
          "high": 1,
          "medium": 3,
          "low": 5,
          "info": 10
        }
      },
      "waf": {
        "count": 5,
        "assets": [
          "i91j90kl-34m5-067n-nopq-o9j21m6j11lm",
          "j02k01lm-45n6-178o-opqr-p0k32n7k22mn",
          "k13l12mn-56o7-289p-pqrs-q1l43o8l33no",
          "l24m23no-67p8-390q-qrst-r2m54p9m44op",
          "m35n34op-78q9-401r-rstu-s3n65q0n55pq"
        ]
      },
      "cdn": {
        "count": 3,
        "assets": [
          "n46o45pq-89r0-512s-stuv-t4o76r1o66qr",
          "o57p56qr-90s1-623t-tuvw-u5p87s2p77rs",
          "p68q67rs-01t2-734u-uvwx-v6q98t3q88st"
        ]
      },
      "unique_ipv4": 8,
      "unique_ipv6": 4
    },
    {
      "idsummary": "h5267813-i428-8egi-f52g-4g6606f2if0e",
      "summary_text": "**Riepilogo Esecutivo della Vulnerabilità per \"social.network\"**\n\nIl dominio presenta vulnerabilità significative nella gestione degli accessi...",
      "summary_text_en": "**Executive Summary of Vulnerability for \"social.network\"**\n\nThe domain shows significant vulnerabilities in access management...",
      "risk_score": "85",
      "creation_date": "2024-03-11 11:20:00",
      "last_edit": "2024-03-12 14:35:20",
      "domain_name": "social.network",
      "servizi_esposti_score": 85,
      "dataleak_score": 90,
      "rapporto_leak_email_score": 75,
      "spoofing_score": 60,
      "open_ports_score": 70,
      "blacklist_score": 40,
      "vulnerability_score_active": 75,
      "vulnerability_score_passive": 85,
      "certificate_score": 75,
      "n_port": {
        "80": { "n": 45 },
        "443": { "n": 35 },
        "8080": { "n": 15 },
        "27017": { "n": 3 }
      },
      "n_cert_attivi": 18,
      "n_cert_scaduti": 12,
      "n_asset": 95,
      "n_similar_domains": 25,
      "email_security": {
        "spoofable": "Spoofing possible.",
        "dmarc_policy": "none",
        "blacklist_detections": 2,
        "blacklist_total_list": 60,
        "blacklist_detected_list": ["blacklist1", "blacklist2"]
      },
      "n_dataleak": {
        "total": {
          "vip": 5,
          "domain_stealer": 8,
          "potential_stealer": 750,
          "other_stealer": 45,
          "general_leak": 30
        },
        "resolved": {
          "vip": 2,
          "domain_stealer": 3,
          "potential_stealer": 300,
          "other_stealer": 20,
          "general_leak": 15
        },
        "unresolved": {
          "vip": 3,
          "domain_stealer": 5,
          "potential_stealer": 450,
          "other_stealer": 25,
          "general_leak": 15
        },
        "enumeration": 5
      },
      "n_vulns": {
        "total": {
          "critical": 4,
          "high": 35,
          "medium": 60,
          "low": 25,
          "info": 85
        },
        "active": {
          "critical": 2,
          "high": 20,
          "medium": 35,
          "low": 15,
          "info": 45
        },
        "passive": {
          "critical": 2,
          "high": 15,
          "medium": 25,
          "low": 10,
          "info": 40
        }
      },
      "waf": {
        "count": 4,
        "assets": [
          "q79r78st-12u3-845v-vwxy-w7r09u4r99tu",
          "r80s89tu-23v4-956w-wxyz-x8s10v5s00uv",
          "s91t90uv-34w5-067x-xyz1-y9t21w6t11vw",
          "t02u01vw-45x6-178y-yz12-z0u32x7u22wx"
        ]
      },
      "cdn": {
        "count": 2,
        "assets": [
          "u13v12wx-56y7-289z-z123-a1v43y8v33xy",
          "v24w23xy-67z8-390a-a234-b2w54z9w44yz"
        ]
      },
      "unique_ipv4": 35,
      "unique_ipv6": 20
    },
    {
      "idsummary": "i6378924-j539-9fhj-g63h-5h7717g3jg1f",
      "summary_text": "**Riepilogo Esecutivo della Vulnerabilità per \"cloud.service\"**\n\nIl dominio mostra alcune vulnerabilità nella configurazione del cloud...",
      "summary_text_en": "**Executive Summary of Vulnerability for \"cloud.service\"**\n\nThe domain shows some vulnerabilities in cloud configuration...",
      "risk_score": "45",
      "creation_date": "2024-03-12 13:40:00",
      "last_edit": "2024-03-13 17:55:10",
      "domain_name": "cloud.service",
      "servizi_esposti_score": 50,
      "dataleak_score": 40,
      "rapporto_leak_email_score": 35,
      "spoofing_score": 25,
      "open_ports_score": 55,
      "blacklist_score": 10,
      "vulnerability_score_active": 45,
      "vulnerability_score_passive": 40,
      "certificate_score": 80,
      "n_port": {
        "80": { "n": 15 },
        "443": { "n": 12 },
        "8080": { "n": 5 }
      },
      "n_cert_attivi": 10,
      "n_cert_scaduti": 3,
      "n_asset": 35,
      "n_similar_domains": 8,
      "email_security": {
        "spoofable": "Not spoofable",
        "dmarc_policy": "quarantine",
        "blacklist_detections": 0,
        "blacklist_total_list": 60,
        "blacklist_detected_list": []
      },
      "n_dataleak": {
        "total": {
          "vip": 0,
          "domain_stealer": 1,
          "potential_stealer": 85,
          "other_stealer": 8,
          "general_leak": 5
        },
        "resolved": {
          "vip": 0,
          "domain_stealer": 1,
          "potential_stealer": 60,
          "other_stealer": 5,
          "general_leak": 3
        },
        "unresolved": {
          "vip": 0,
          "domain_stealer": 0,
          "potential_stealer": 25,
          "other_stealer": 3,
          "general_leak": 2
        },
        "enumeration": 1
      },
      "n_vulns": {
        "total": {
          "critical": 0,
          "high": 5,
          "medium": 15,
          "low": 20,
          "info": 40
        },
        "active": {
          "critical": 0,
          "high": 2,
          "medium": 8,
          "low": 12,
          "info": 25
        },
        "passive": {
          "critical": 0,
          "high": 3,
          "medium": 7,
          "low": 8,
          "info": 15
        }
      },
      "waf": {
        "count": 3,
        "assets": [
          "w35x34yz-78a9-401b-b345-c3x65a0x55za",
          "x46y45za-89b0-512c-c456-d4y76b1y66ab",
          "y57z56ab-90c1-623d-d567-e5z87c2z77bc"
        ]
      },
      "cdn": {
        "count": 2,
        "assets": [
          "z68a67bc-01d2-734e-e678-f6a98d3a88cd",
          "a79b78cd-12e3-845f-f789-g7b09e4b99de"
        ]
      },
      "unique_ipv4": 12,
      "unique_ipv6": 6
    },
    {
      "idsummary": "j7489035-k640-0gik-h74i-6i8828h4kh2g",
      "summary_text": "**Riepilogo Esecutivo della Vulnerabilità per \"gaming.platform\"**\n\nIl dominio presenta rischi moderati nella gestione delle sessioni utente...",
      "summary_text_en": "**Executive Summary of Vulnerability for \"gaming.platform\"**\n\nThe domain shows moderate risks in user session management...",
      "risk_score": "60",
      "creation_date": "2024-03-13 15:25:00",
      "last_edit": "2024-03-14 12:40:55",
      "domain_name": "gaming.platform",
      "servizi_esposti_score": 65,
      "dataleak_score": 55,
      "rapporto_leak_email_score": 45,
      "spoofing_score": 35,
      "open_ports_score": 60,
      "blacklist_score": 15,
      "vulnerability_score_active": 55,
      "vulnerability_score_passive": 65,
      "certificate_score": 75,
      "n_port": {
        "80": { "n": 28 },
        "443": { "n": 22 },
        "8080": { "n": 8 },
        "27015": { "n": 5 }
      },
      "n_cert_attivi": 14,
      "n_cert_scaduti": 6,
      "n_asset": 55,
      "n_similar_domains": 12,
      "email_security": {
        "spoofable": "Spoofing possible.",
        "dmarc_policy": "none",
        "blacklist_detections": 1,
        "blacklist_total_list": 60,
        "blacklist_detected_list": ["blacklist3"]
      },
      "n_dataleak": {
        "total": {
          "vip": 1,
          "domain_stealer": 2,
          "potential_stealer": 250,
          "other_stealer": 15,
          "general_leak": 10
        },
        "resolved": {
          "vip": 1,
          "domain_stealer": 1,
          "potential_stealer": 150,
          "other_stealer": 8,
          "general_leak": 5
        },
        "unresolved": {
          "vip": 0,
          "domain_stealer": 1,
          "potential_stealer": 100,
          "other_stealer": 7,
          "general_leak": 5
        },
        "enumeration": 2
      },
      "n_vulns": {
        "total": {
          "critical": 1,
          "high": 12,
          "medium": 28,
          "low": 18,
          "info": 55
        },
        "active": {
          "critical": 1,
          "high": 7,
          "medium": 15,
          "low": 10,
          "info": 30
        },
        "passive": {
          "critical": 0,
          "high": 5,
          "medium": 13,
          "low": 8,
          "info": 25
        }
      },
      "waf": {
        "count": 3,
        "assets": [
          "b80c89de-23f4-956g-g890-h8c10f5c00ef",
          "c91d90ef-34g5-067h-h901-i9d21g6d11fg",
          "d02e01fg-45h6-178i-i012-j0e32h7e22gh"
        ]
      },
      "cdn": {
        "count": 1,
        "assets": ["e13f12gh-56i7-289j-j123-k1f43i8f33hi"]
      },
      "unique_ipv4": 20,
      "unique_ipv6": 12
    },
    {
      "idsummary": "k8590146-l751-1hjl-i85j-7j9939i5li3h",
      "summary_text": "**Riepilogo Esecutivo della Vulnerabilità per \"education.portal\"**\n\nIl dominio mostra una buona sicurezza generale con alcune aree di miglioramento...",
      "summary_text_en": "**Executive Summary of Vulnerability for \"education.portal\"**\n\nThe domain shows good overall security with some areas for improvement...",
      "risk_score": "35",
      "creation_date": "2024-03-14 16:50:00",
      "last_edit": "2024-03-15 10:25:30",
      "domain_name": "education.portal",
      "servizi_esposti_score": 40,
      "dataleak_score": 30,
      "rapporto_leak_email_score": 25,
      "spoofing_score": 20,
      "open_ports_score": 35,
      "blacklist_score": 5,
      "vulnerability_score_active": 30,
      "vulnerability_score_passive": 35,
      "certificate_score": 85,
      "n_port": {
        "80": { "n": 18 },
        "443": { "n": 15 },
        "8080": { "n": 4 }
      },
      "n_cert_attivi": 9,
      "n_cert_scaduti": 2,
      "n_asset": 30,
      "n_similar_domains": 5,
      "email_security": {
        "spoofable": "Not spoofable",
        "dmarc_policy": "reject",
        "blacklist_detections": 0,
        "blacklist_total_list": 60,
        "blacklist_detected_list": []
      },
      "n_dataleak": {
        "total": {
          "vip": 0,
          "domain_stealer": 0,
          "potential_stealer": 45,
          "other_stealer": 5,
          "general_leak": 3
        },
        "resolved": {
          "vip": 0,
          "domain_stealer": 0,
          "potential_stealer": 35,
          "other_stealer": 4,
          "general_leak": 2
        },
        "unresolved": {
          "vip": 0,
          "domain_stealer": 0,
          "potential_stealer": 10,
          "other_stealer": 1,
          "general_leak": 1
        },
        "enumeration": 1
      },
      "n_vulns": {
        "total": {
          "critical": 0,
          "high": 3,
          "medium": 12,
          "low": 15,
          "info": 35
        },
        "active": {
          "critical": 0,
          "high": 1,
          "medium": 5,
          "low": 8,
          "info": 20
        },
        "passive": {
          "critical": 0,
          "high": 2,
          "medium": 7,
          "low": 7,
          "info": 15
        }
      },
      "waf": {
        "count": 2,
        "assets": [
          "f24g23hi-67j8-390k-k234-l2g54j9g44ij",
          "g35h34ij-78k9-401l-l345-m3h65k0h55jk"
        ]
      },
      "cdn": {
        "count": 1,
        "assets": ["h46i45jk-89l0-512m-m456-n4i76l1i66kl"]
      },
      "unique_ipv4": 10,
      "unique_ipv6": 5
    },
    {
      "idsummary": "l9601257-m862-2ikm-j96k-8k0040j6mj4i",
      "summary_text": "**Riepilogo Esecutivo della Vulnerabilità per \"healthcare.system\"**\n\nIl dominio richiede attenzione immediata per diverse vulnerabilità critiche...",
      "summary_text_en": "**Executive Summary of Vulnerability for \"healthcare.system\"**\n\nThe domain requires immediate attention for several critical vulnerabilities...",
      "risk_score": "90",
      "creation_date": "2024-03-15 14:15:00",
      "last_edit": "2024-03-16 09:30:25",
      "domain_name": "healthcare.system",
      "servizi_esposti_score": 85,
      "dataleak_score": 95,
      "rapporto_leak_email_score": 80,
      "spoofing_score": 70,
      "open_ports_score": 75,
      "blacklist_score": 45,
      "vulnerability_score_active": 90,
      "vulnerability_score_passive": 85,
      "certificate_score": 65,
      "n_port": {
        "80": { "n": 55 },
        "443": { "n": 45 },
        "8080": { "n": 18 },
        "3306": { "n": 4 },
        "27017": { "n": 2 }
      },
      "n_cert_attivi": 22,
      "n_cert_scaduti": 15,
      "n_asset": 120,
      "n_similar_domains": 18,
      "email_security": {
        "spoofable": "Spoofing possible.",
        "dmarc_policy": "none",
        "blacklist_detections": 3,
        "blacklist_total_list": 60,
        "blacklist_detected_list": ["blacklist1", "blacklist2", "blacklist4"]
      },
      "n_dataleak": {
        "total": {
          "vip": 8,
          "domain_stealer": 12,
          "potential_stealer": 950,
          "other_stealer": 65,
          "general_leak": 40
        },
        "resolved": {
          "vip": 3,
          "domain_stealer": 5,
          "potential_stealer": 400,
          "other_stealer": 25,
          "general_leak": 15
        },
        "unresolved": {
          "vip": 5,
          "domain_stealer": 7,
          "potential_stealer": 550,
          "other_stealer": 40,
          "general_leak": 25
        },
        "enumeration": 6
      },
      "n_vulns": {
        "total": {
          "critical": 5,
          "high": 45,
          "medium": 75,
          "low": 35,
          "info": 95
        },
        "active": {
          "critical": 3,
          "high": 25,
          "medium": 40,
          "low": 20,
          "info": 50
        },
        "passive": {
          "critical": 2,
          "high": 20,
          "medium": 35,
          "low": 15,
          "info": 45
        }
      },
      "waf": {
        "count": 4,
        "assets": [
          "i57j56kl-90m1-623n-n567-o5j87m2j77lm",
          "j68k67lm-01n2-734o-o678-p6k98n3k88mn",
          "k79l78mn-12o3-845p-p789-q7l09o4l99no",
          "l80m89no-23p4-956q-q890-r8m10p5m00op"
        ]
      },
      "cdn": {
        "count": 3,
        "assets": [
          "m91n90op-34q5-067r-r901-s9n21q6n11pq",
          "n02o01pq-45r6-178s-s012-t0o32r7o22qr",
          "o13p12qr-56s7-289t-t123-u1p43s8p33rs"
        ]
      },
      "unique_ipv4": 45,
      "unique_ipv6": 25
    },
    {
      "idsummary": "m0712368-n973-3jln-k07l-9l1151k7nk5j",
      "summary_text": "**Riepilogo Esecutivo della Vulnerabilità per \"media.stream\"**\n\nIl dominio presenta rischi moderati nella gestione dei contenuti multimediali...",
      "summary_text_en": "**Executive Summary of Vulnerability for \"media.stream\"**\n\nThe domain shows moderate risks in multimedia content management...",
      "risk_score": "55",
      "creation_date": "2024-03-16 12:30:00",
      "last_edit": "2024-03-17 15:45:40",
      "domain_name": "media.stream",
      "servizi_esposti_score": 60,
      "dataleak_score": 50,
      "rapporto_leak_email_score": 45,
      "spoofing_score": 40,
      "open_ports_score": 55,
      "blacklist_score": 25,
      "vulnerability_score_active": 50,
      "vulnerability_score_passive": 55,
      "certificate_score": 70,
      "n_port": {
        "80": { "n": 32 },
        "443": { "n": 25 },
        "8080": { "n": 10 },
        "1935": { "n": 6 }
      },
      "n_cert_attivi": 16,
      "n_cert_scaduti": 8,
      "n_asset": 65,
      "n_similar_domains": 10,
      "email_security": {
        "spoofable": "Spoofing possible.",
        "dmarc_policy": "quarantine",
        "blacklist_detections": 1,
        "blacklist_total_list": 60,
        "blacklist_detected_list": ["blacklist2"]
      },
      "n_dataleak": {
        "total": {
          "vip": 1,
          "domain_stealer": 3,
          "potential_stealer": 180,
          "other_stealer": 12,
          "general_leak": 8
        },
        "resolved": {
          "vip": 0,
          "domain_stealer": 2,
          "potential_stealer": 120,
          "other_stealer": 8,
          "general_leak": 5
        },
        "unresolved": {
          "vip": 1,
          "domain_stealer": 1,
          "potential_stealer": 60,
          "other_stealer": 4,
          "general_leak": 3
        },
        "enumeration": 2
      },
      "n_vulns": {
        "total": {
          "critical": 1,
          "high": 8,
          "medium": 22,
          "low": 15,
          "info": 45
        },
        "active": {
          "critical": 0,
          "high": 5,
          "medium": 12,
          "low": 8,
          "info": 25
        },
        "passive": {
          "critical": 1,
          "high": 3,
          "medium": 10,
          "low": 7,
          "info": 20
        }
      },
      "waf": {
        "count": 3,
        "assets": [
          "p24q23rs-67t8-390u-u234-v2q54t9q44st",
          "q35r34st-78u9-401v-v345-w3r65u0r55tu",
          "r46s45tu-89v0-512w-w456-x4s76v1s66uv"
        ]
      },
      "cdn": {
        "count": 2,
        "assets": [
          "s57t56uv-90w1-623x-x567-y5t87w2t77vw",
          "t68u67vw-01x2-734y-y678-z6u98x3u88wx"
        ]
      },
      "unique_ipv4": 28,
      "unique_ipv6": 16
    }
  ]
};

module.exports = summaries; 