# BHR Code Global Platform — Enterprise Architecture Plan

## 1) Platform Scope

This architecture delivers five integrated products as a unified enterprise digital platform:

1. **Corporate Website** — brand, offerings, case studies, thought leadership.
2. **Enterprise Client Portal** — secure client workspace, delivery dashboards, project updates, documents.
3. **Talent Network Platform** — talent onboarding, skills graph, opportunities, interview workflow.
4. **Partner Ecosystem Portal** — partner onboarding, co-sell workflows, incentives, certifications.
5. **Knowledge & Insights CMS** — editorial pipeline, taxonomy, publishing, search and analytics.

---

## 2) Recommended Repository & Folder Structure (Monorepo)

```txt
bhr-code-global-platform/
├─ apps/
│  ├─ web-corporate/                # Next.js corporate site
│  ├─ web-client-portal/            # Next.js enterprise client portal
│  ├─ web-talent-network/           # Next.js talent platform
│  ├─ web-partner-portal/           # Next.js partner ecosystem portal
│  ├─ web-knowledge-cms/            # Next.js authoring/admin + public knowledge
│  └─ api-gateway/                  # Edge/API gateway (BFF + routing)
├─ services/
│  ├─ identity-service/             # AuthN/AuthZ, SSO, RBAC/ABAC
│  ├─ account-service/              # Tenants, organizations, user profiles
│  ├─ client-engagement-service/    # Projects, milestones, deliverables
│  ├─ talent-service/               # Talent profiles, skills, pipelines
│  ├─ partner-service/              # Partner onboarding, tiers, incentives
│  ├─ content-service/              # CMS content, taxonomies, publishing
│  ├─ search-service/               # Elasticsearch indexing + query APIs
│  ├─ ai-service/                   # GenAI, ML inference, recommendations
│  ├─ integration-service/          # SAP/Oracle/Workday/cloud integrations
│  ├─ notification-service/         # Email/SMS/push/in-app notifications
│  ├─ file-service/                 # Document storage, signing, lifecycle
│  ├─ analytics-service/            # KPI events, aggregations, dashboards
│  └─ audit-compliance-service/     # Immutable audit trail, retention policies
├─ packages/
│  ├─ ui-kit/                       # Shared React design system
│  ├─ config/                       # Shared lint/build/runtime configs
│  ├─ types/                        # Shared TypeScript contracts
│  ├─ sdk/                          # API clients for internal services
│  └─ observability/                # Logging, tracing, metrics helpers
├─ infra/
│  ├─ terraform/                    # IaC for cloud resources
│  ├─ kubernetes/                   # K8s manifests/Helm charts
│  ├─ ci-cd/                        # Pipelines, quality gates, release flows
│  ├─ policies/                     # OPA/policy-as-code, security baselines
│  └─ scripts/                      # Ops scripts (migrations, backups, restores)
├─ data/
│  ├─ schemas/                      # SQL DDL, migration baselines
│  ├─ seed/                         # Seed/reference data
│  └─ ml-features/                  # Feature views, offline/online specs
├─ docs/
│  ├─ architecture/                 # ADRs, C4 diagrams, sequence diagrams
│  ├─ api/                          # OpenAPI specs + event contracts
│  ├─ runbooks/                     # SRE and incident docs
│  └─ compliance/                   # Controls mapping (ISO/SOC2/GDPR)
└─ tests/
   ├─ contract/                     # Consumer/provider contract tests
   ├─ e2e/                          # Cross-app end-to-end tests
   ├─ performance/                  # Load/stress/soak tests
   └─ security/                     # SAST/DAST/IAST + dependency scans
```

---

## 3) Service Architecture (Node.js Microservices)

### 3.1 Core Patterns

- **Architecture style:** Domain-oriented microservices + event-driven integrations.
- **Communication:**
  - Synchronous: REST/GraphQL through API Gateway.
  - Asynchronous: event bus (Kafka or cloud equivalent).
- **Data ownership:** Each microservice owns its schema; cross-domain reads via APIs/events.
- **Identity:** Central identity service with enterprise SSO (SAML/OIDC), RBAC and ABAC.
- **Resilience:** Retries, circuit breakers, idempotency keys, dead-letter queues.

### 3.2 Suggested Service Responsibilities

- **identity-service**: login, MFA, SSO federation, token issuance, policy checks.
- **account-service**: multi-tenant organization model, users, roles, profile management.
- **client-engagement-service**: client projects, statements of work, milestones, risks.
- **talent-service**: candidate and consultant profiles, skills matrix, assignment lifecycle.
- **partner-service**: partner registration, compliance checks, tiers and performance scores.
- **content-service**: article/page lifecycle, moderation, versioning, localization.
- **search-service**: indexing pipeline and domain-specific search endpoints.
- **ai-service**: GenAI copilots, summarization, semantic retrieval, recommendations.
- **integration-service**: connectors for SAP, Oracle, Workday, AWS/Azure/GCP services.
- **notification-service**: transactional notifications with template management.
- **file-service**: secure document handling, metadata extraction, retention.
- **analytics-service**: event capture and KPI modeling for dashboards.
- **audit-compliance-service**: immutable logs, regulatory exports, policy evidence.

---

## 4) API Architecture

### 4.1 API Gateway/BFF

- Single gateway (`/api/v1`) for all channels.
- Per-frontend BFF adapters for optimized payloads.
- Security controls: WAF, JWT validation, mTLS for internal traffic, rate limiting.

### 4.2 Example REST API Surface

#### Identity & Access

- `POST /api/v1/auth/login`
- `POST /api/v1/auth/sso/callback`
- `POST /api/v1/auth/refresh`
- `GET /api/v1/users/me`
- `GET /api/v1/tenants/:tenantId/policies`

#### Corporate & CMS

- `GET /api/v1/content/pages/:slug`
- `GET /api/v1/content/articles`
- `POST /api/v1/content/articles` (editor role)
- `POST /api/v1/content/publish/:contentId` (publisher role)

#### Client Portal

- `GET /api/v1/clients/:clientId/projects`
- `GET /api/v1/projects/:projectId/milestones`
- `POST /api/v1/projects/:projectId/documents`
- `GET /api/v1/projects/:projectId/risks`

#### Talent Network

- `GET /api/v1/talent/profiles`
- `POST /api/v1/talent/profiles`
- `GET /api/v1/talent/opportunities`
- `POST /api/v1/talent/match` (AI-assisted matching)

#### Partner Ecosystem

- `POST /api/v1/partners/onboard`
- `GET /api/v1/partners/:partnerId/performance`
- `GET /api/v1/partners/:partnerId/incentives`
- `POST /api/v1/partners/:partnerId/certifications`

#### Search & AI

- `GET /api/v1/search?q=&domain=`
- `POST /api/v1/ai/summarize`
- `POST /api/v1/ai/recommend`
- `POST /api/v1/ai/rag/query`

### 4.3 Event Contracts (Examples)

- `user.created`
- `client.project.updated`
- `talent.profile.updated`
- `partner.tier.changed`
- `content.published`
- `document.uploaded`
- `ai.recommendation.generated`

---

## 5) PostgreSQL Data Model (High-Level)

### 5.1 Shared Cross-Cutting Tables

- `tenants(id, name, industry, region, created_at)`
- `users(id, tenant_id, email, status, created_at)`
- `roles(id, name)`
- `user_roles(user_id, role_id, scope, created_at)`
- `audit_logs(id, tenant_id, actor_id, action, entity_type, entity_id, payload_json, created_at)`

### 5.2 Corporate/CMS Domain

- `content_items(id, tenant_id, type, slug, title, body_json, status, locale, version, author_id, published_at)`
- `content_tags(id, name)`
- `content_item_tags(content_item_id, tag_id)`

### 5.3 Client Portal Domain

- `clients(id, tenant_id, name, segment, owner_user_id)`
- `projects(id, client_id, name, status, start_date, end_date, delivery_model)`
- `milestones(id, project_id, name, due_date, status, progress_pct)`
- `project_risks(id, project_id, severity, description, mitigation_plan, status)`
- `documents(id, tenant_id, project_id, path, checksum, classification, uploaded_by, uploaded_at)`

### 5.4 Talent Domain

- `talent_profiles(id, tenant_id, user_id, primary_role, years_experience, location, availability_status)`
- `skills(id, name, category)`
- `talent_skills(talent_profile_id, skill_id, proficiency, years_used)`
- `opportunities(id, tenant_id, title, description, required_skills_json, location, work_mode, status)`
- `talent_matches(id, opportunity_id, talent_profile_id, score, rationale_json, created_at)`

### 5.5 Partner Domain

- `partners(id, tenant_id, legal_name, partner_type, tier, onboarding_status, compliance_status)`
- `partner_contacts(id, partner_id, name, email, role)`
- `partner_incentives(id, partner_id, program_name, period, amount, status)`
- `partner_certifications(id, partner_id, platform, level, issued_at, expires_at)`

### 5.6 Indexing & Performance

- Multi-tenant partition strategy (`tenant_id` keying where applicable).
- Composite indexes for high-volume lookups (e.g., `(tenant_id, status)`, `(project_id, due_date)`).
- CDC stream from PostgreSQL to Elasticsearch for near-real-time search indexes.

---

## 6) Elasticsearch Search Design

- Separate indexes by domain:
  - `content_index`
  - `talent_index`
  - `partner_index`
  - `project_index`
- Mappings include:
  - keyword fields (IDs, codes)
  - full-text fields with analyzers (title, descriptions)
  - vector fields for semantic search (AI embeddings)
- Query model:
  - Hybrid retrieval = BM25 + vector similarity + access-filter clauses.

---

## 7) Technology Capability Showcases

Embed dedicated solution narratives, assets, and service accelerators for:

- **.NET Core**: modernization and API interoperability patterns.
- **DevOps**: CI/CD maturity model, release automation, SRE practices.
- **AI / GenAI / ML**: copilots, RAG pipelines, recommendation systems.
- **Cloud Engineering**: landing zones, reliability, cost optimization.
- **Data Engineering**: lakehouse patterns, streaming, governance.

Enterprise platform accelerators/content tracks:

- **SAP**, **Oracle**, **Workday** integration blueprints.
- **AWS**, **Azure**, **Google Cloud** reference architectures and migration pathways.

---

## 8) Deployment Architecture

### 8.1 Runtime Topology

- **Containerized workloads** on Kubernetes (EKS/AKS/GKE or OpenShift).
- **Ingress + API Gateway** for edge routing and security policy enforcement.
- **Service Mesh** (optional) for mTLS, traffic shaping, policy.
- **Managed PostgreSQL** for OLTP, read replicas for scale.
- **Managed Elasticsearch/OpenSearch** for search and analytics.
- **Object storage** for files, media, and export artifacts.
- **Message broker** (Kafka/Event Hubs/PubSub) for async events.

### 8.2 Environment Strategy

- `dev` → `qa` → `stage` → `prod` with promotion gates.
- Per-environment isolated cloud resources and secrets.
- Blue/green or canary deployments for high-confidence releases.

### 8.3 CI/CD & DevSecOps

- Trunk-based development with short-lived feature branches.
- Pipeline stages: lint → unit tests → integration tests → SAST/dependency scan → container scan → deploy.
- Policy-as-code gates (OPA), IaC drift detection, signed artifacts.
- Observability stack with OpenTelemetry, logs, metrics, traces, SLOs.

### 8.4 Security & Compliance

- Zero-trust service access, least privilege IAM, secret rotation.
- Data encryption at rest and in transit.
- PII controls, retention policies, legal hold support.
- Auditability for SOC2/ISO/GDPR-aligned evidence trails.

---

## 9) Delivery Roadmap (Suggested)

### Phase 1 — Foundation (8–12 weeks)

- Monorepo setup, CI/CD baseline, identity, account service, shared UI kit.
- Corporate website + initial CMS + search baseline.

### Phase 2 — Core Business Portals (10–14 weeks)

- Client portal service set + talent network MVP.
- PostgreSQL core schemas, event bus, observability and audit.

### Phase 3 — Ecosystem & Intelligence (10–14 weeks)

- Partner portal, integration service connectors (SAP/Oracle/Workday).
- AI-service for recommendations and RAG search augmentation.

### Phase 4 — Scale & Optimization (ongoing)

- Performance hardening, multi-region DR, advanced analytics.
- MLOps lifecycle governance and cost/reliability optimization.

---

## 10) Non-Functional Targets (Initial)

- Availability: **99.9%** (business critical services), higher for identity and gateway.
- API p95 latency: **<300ms** for read APIs (excluding heavy AI workflows).
- RPO/RTO: **RPO ≤ 15 min**, **RTO ≤ 2 hours** for tier-1 workloads.
- Security baseline: SSO + MFA, RBAC/ABAC, centralized audit logging.

This blueprint is implementation-ready as a starting point for architecture decision records (ADRs), epics, and sprint-level technical design.
