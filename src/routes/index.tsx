import { createFileRoute } from "@tanstack/react-router";
import cvAsset from "@/assets/cv.pdf.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Usama Shahnawaz | DevOps Engineer" },
      {
        name: "description",
        content:
          "DevOps engineer building reliable, observable infrastructure — CI/CD, Terraform and Ansible across AWS and GCP. AWS Cloud Practitioner certified.",
      },
      { property: "og:title", content: "Usama Shahnawaz | DevOps Engineer" },
      {
        property: "og:description",
        content:
          "DevOps engineer building reliable, observable infrastructure — CI/CD, Terraform and Ansible across AWS and GCP.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const CV_URL = cvAsset.url;

const METRICS = [
  { value: "40%", label: "faster deploys", tone: "text-primary" },
  { value: "30%", label: "lower MTTR", tone: "text-primary" },
  { value: "100+", label: "findings fixed", tone: "text-amber" },
  { value: "5+", label: "prod services", tone: "text-foreground" },
];

const SKILLS: { category: string; items: string[] }[] = [
  {
    category: "CI / CD",
    items: [
      "GitHub Actions",
      "Jenkins",
      "AWS CodePipeline",
      "CodeMagic",
      "GitLab CI",
    ],
  },
  {
    category: "AWS",
    items: [
      "EC2",
      "ECS",
      "S3",
      "CloudFront",
      "IAM",
      "Lambda",
      "VPC",
      "ELB",
      "CloudWatch",
   ],
  },
  {
    category: "IaC",
    items: ["Terraform", "Ansible"],
  },
  {
    category: "Containers",
    items: ["Docker", "Kubernetes", "AWS ECS", "ECR"],
  },
  {
    category: "Observability",
    items: ["Prometheus", "Grafana", "CloudWatch"],
  },
  {
    category: "Security",
    items: ["Snyk", "Cloudflare WAF", "IAM Policies", "Secrets Management"],
  },
  {
    category: "Languages",
    items: ["Python", "Bash", "JavaScript", "Ruby"],
  },
  {
    category: "GCP",
    items: ["Firebase Hosting", "Cloud IAM", "Cloud Storage"],
  },
];

const EXPERIENCE = [
  {
    role: "DevOps Engineer",
    company: "Triotech Systems",
    period: "01/2024 — present",
    location: "Brampton, Canada (Remote)",
    dot: "bg-primary",
    companyTone: "text-primary",
    points: [
      "Own CI/CD pipelines (Jenkins, GitHub Actions, AWS CodePipeline) across 5+ production services — cut deployment time ~40% and eliminated 3–4 hours of manual release work per sprint.",
      "Manage Terraform and Ansible infrastructure as code across AWS and GCP, reducing environment drift incidents to near-zero.",
      "Run the observability stack (Prometheus, Grafana, CloudWatch) — cut MTTR ~30% via automated alerting and post-incident write-ups.",
      "Embedded security with Snyk, Cloudflare WAF and IAM hardening; remediated 100+ critical/high findings within 60 days.",
      "Scaled ECS clusters to absorb 3× traffic spikes without downtime; mentored 2 junior engineers, halving their ramp time.",
    ],
  },
  {
    role: "Trainee DevOps Engineer",
    company: "TechnoDice",
    period: "08/2023 — 11/2023",
    location: "Lahore, Pakistan",
    dot: "bg-amber",
    companyTone: "text-amber",
    points: [
      "Built CI/CD pipelines with Jenkins and GitHub Actions; hands-on Terraform and Ansible for infrastructure automation.",
      "Deployed applications on AWS (ECS, Kubernetes) applying IAM policies and production logging best practices.",
    ],
  },
  {
    role: "Full-Stack Contributor",
    company: "Infinikorn",
    period: "2023",
    location: "Lahore, Pakistan",
    dot: "bg-muted-foreground",
    companyTone: "text-muted-foreground",
    points: [
      "Contributed to full-stack projects in Ruby on Rails across PostgreSQL, MySQL and SQL Server, with GitHub-based version control.",
    ],
  },
];

const PROJECTS = [
  {
    category: "ci/cd",
    name: "Complete Production Pipeline",
    description:
      "End-to-end production CI/CD pipeline — build, test, containerise and deploy with staged rollouts.",
    tags: ["Jenkins", "Docker", "AWS"],
    url: "https://github.com/codeisgoo/Complete-Production-Pipeline",
  },
  {
    category: "observability",
    name: "Observability DevOps",
    description:
      "Monitoring and alerting setup for multi-service environments — metrics, dashboards and alert rules.",
    tags: ["Prometheus", "Grafana", "JavaScript"],
    url: "https://github.com/codeisgoo/Observability-DevOps",
  },
  {
    category: "iac",
    name: "Terraform Modules",
    description:
      "Reusable Terraform modules for AWS infrastructure — networking, compute and storage building blocks.",
    tags: ["Terraform", "AWS"],
    url: "https://github.com/codeisgoo/Terraform-modules",
  },
  {
    category: "containers",
    name: "K8s Voting App",
    description:
      "Distributed voting application deployed on Kubernetes with pod deployments and service configs.",
    tags: ["Kubernetes", "Docker", "C#"],
    url: "https://github.com/codeisgoo/k8-voting-app",
  },
  {
    category: "automation",
    name: "Automate EC2 · S3 · Lambda",
    description:
      "Python automation for AWS provisioning — EC2, S3 and Lambda workflows scripted end to end.",
    tags: ["Python", "Boto3", "AWS"],
    url: "https://github.com/codeisgoo/automate-ec2-s3-lambda",
  },
  {
    category: "devsecops",
    name: "SonarQube Deployment",
    description:
      "Automated SonarQube deployment wired into pipelines for continuous code-quality and security gates.",
    tags: ["SonarQube", "Python", "CI/CD"],
    url: "https://github.com/codeisgoo/SonarQube-Deployment",
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground antialiased">
      {/* sticky nav */}
      <header className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur">
        <div className="mx-auto flex max-w-[1280px] items-center justify-between px-6 py-3">
          <a href="#top" className="flex items-center gap-2 font-mono text-sm">
            <span className="text-primary">shahnawaz@ops</span>
            <span className="text-muted-foreground">:~$</span>
          </a>
          <nav className="hidden items-center gap-7 font-mono text-[13px] text-muted-foreground md:flex">
            <a href="#experience" className="transition-colors hover:text-foreground">
              experience
            </a>
            <a href="#skills" className="transition-colors hover:text-foreground">
              skills
            </a>
            <a href="#projects" className="transition-colors hover:text-foreground">
              projects
            </a>
            <a href="#contact" className="transition-colors hover:text-foreground">
              contact
            </a>
          </nav>
          <a
            href={CV_URL}
            download="Usama_Shahnawaz_DevOps_Resume.pdf"
            className="rounded-md bg-primary px-3 py-2 font-mono text-[13px] font-medium text-primary-foreground transition-colors hover:bg-primary/85"
          >
            Download CV
          </a>
        </div>
      </header>

      <div id="top" className="mx-auto max-w-[1280px] px-6">
        {/* HERO */}
        <section className="grid grid-cols-1 gap-8 py-14 lg:grid-cols-12 lg:py-20">
          <div className="lg:col-span-7">
            <div className="rise mb-6 flex flex-wrap items-center gap-2 font-mono text-[12px]">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-2.5 py-1 text-muted-foreground">
                <span className="size-1.5 rounded-full bg-primary" />
                all systems operational
              </span>
              <span className="rounded-full border border-border bg-card px-2.5 py-1 text-muted-foreground">
                Lahore, PK
              </span>
              <span className="rounded-full border border-border bg-card px-2.5 py-1 text-muted-foreground">
                remote · Canada
              </span>
            </div>
            <h1
              className="rise text-balance font-mono text-[clamp(2.6rem,7vw,5rem)] font-bold leading-[0.95] tracking-tight"
              style={{ animationDelay: "60ms" }}
            >
              SHAHNAWAZ
              <br />
              USAMA
            </h1>
            <p
              className="rise mt-6 max-w-[52ch] text-pretty text-lg text-muted-foreground"
              style={{ animationDelay: "140ms" }}
            >
              DevOps engineer building reliable, observable infrastructure —
              Terraform &amp; Ansible across AWS and GCP, with a bias for things
              that stay up.
            </p>
            <div
              className="rise mt-8 flex flex-wrap items-center gap-3"
              style={{ animationDelay: "220ms" }}
            >
              <a
                href={CV_URL}
                download="Usama_Shahnawaz_DevOps_Resume.pdf"
                className="rounded-md bg-primary px-5 py-3 font-mono text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/85"
              >
                ↓ Download CV
              </a>
              <a
                href="https://github.com/codeisgoo"
                target="_blank"
                rel="noreferrer"
                className="rounded-md border border-border bg-card px-5 py-3 font-mono text-sm text-foreground transition-colors hover:border-primary/50 hover:text-primary"
              >
                github.com/codeisgoo
              </a>
            </div>
            <div
              className="rise mt-8 font-mono text-[13px] text-muted-foreground"
              style={{ animationDelay: "300ms" }}
            >
              <span className="text-primary">$</span> whoami{" "}
              <span className="text-foreground">→ devops · sre · cloud</span>
              <span className="caret ml-1 inline-block h-4 w-2 translate-y-0.5 bg-primary" />
            </div>
          </div>

          {/* metrics panel */}
          <div className="rise lg:col-span-5" style={{ animationDelay: "180ms" }}>
            <div className="relative overflow-hidden rounded-xl border border-border bg-card p-6">
              <div className="pointer-events-none absolute inset-x-0 top-0 h-px overflow-hidden">
                <span className="sweep block h-px w-1/3 bg-primary/70" />
              </div>
              <div className="mb-5 flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                <span>telemetry</span>
                <span className="text-primary">live</span>
              </div>
              <div className="grid grid-cols-2 gap-px overflow-hidden rounded-lg bg-border">
                {METRICS.map((m) => (
                  <div key={m.label} className="bg-secondary p-4">
                    <div className={`font-mono text-3xl font-bold ${m.tone}`}>
                      {m.value}
                    </div>
                    <div className="mt-1 font-mono text-[11px] uppercase tracking-wide text-muted-foreground">
                      {m.label}
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4 flex flex-wrap gap-2 font-mono text-[11px]">
                <span className="rounded border border-primary/30 bg-primary/10 px-2 py-1 text-primary">
                  AWS Cloud Practitioner
                </span>
                <span className="rounded border border-border bg-secondary px-2 py-1 text-muted-foreground">
                  Terraform
                </span>
                <span className="rounded border border-border bg-secondary px-2 py-1 text-muted-foreground">
                  Ansible
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* SPLIT: skills sidebar + experience */}
        <section
          id="skills"
          className="grid grid-cols-1 gap-8 border-t border-border py-14 lg:grid-cols-12"
        >
          {/* skills matrix */}
          <aside className="lg:col-span-4">
            <div className="mb-5 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
              <span className="text-primary">(a)</span> skills matrix
            </div>
            <div className="space-y-5">
              {SKILLS.map((group) => (
                <div key={group.category}>
                  <div className="mb-2 font-mono text-[12px] text-foreground">
                    {group.category}
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="rounded border border-border bg-card px-2 py-1 font-mono text-[11px] text-muted-foreground"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </aside>

          {/* experience timeline */}
          <div id="experience" className="scroll-mt-20 lg:col-span-8">
            <div className="mb-5 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
              <span className="text-primary">(b)</span> experience
            </div>
            <ol className="relative space-y-10 border-l border-border pl-6">
              {EXPERIENCE.map((job) => (
                <li key={job.company} className="relative">
                  <span
                    className={`absolute -left-[27px] top-1.5 size-3 rounded-full border-2 border-background ${job.dot}`}
                  />
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="text-lg font-semibold">{job.role}</h3>
                    <span className="font-mono text-[12px] text-muted-foreground">
                      {job.period}
                    </span>
                  </div>
                  <div className="mt-1 flex flex-wrap items-baseline gap-x-3 font-mono text-[13px]">
                    <span className={job.companyTone}>{job.company}</span>
                    <span className="text-muted-foreground">· {job.location}</span>
                  </div>
                  <ul className="mt-2 max-w-[62ch] space-y-1.5">
                    {job.points.map((point) => (
                      <li
                        key={point}
                        className="text-pretty text-sm leading-relaxed text-muted-foreground"
                      >
                        <span className="mr-2 text-primary">▸</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ol>

            {/* education */}
            <div className="mt-10 rounded-xl border border-border bg-card p-5">
              <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                education
              </div>
              <div className="mt-3 flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-base font-semibold">
                  B.S. Computer System Engineering
                </h3>
                <span className="font-mono text-[12px] text-muted-foreground">
                  2018 — 2022
                </span>
              </div>
              <div className="mt-1 font-mono text-[13px] text-muted-foreground">
                Islamia University of Bahawalpur · Bahawalpur, Pakistan
              </div>
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="scroll-mt-20 border-t border-border py-14">
          <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
            <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
              <span className="text-primary">(c)</span> personal projects
            </div>
            <a
              href="https://github.com/codeisgoo?tab=repositories"
              target="_blank"
              rel="noreferrer"
              className="font-mono text-[12px] text-muted-foreground transition-colors hover:text-primary"
            >
              view all repositories →
            </a>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {PROJECTS.map((project) => (
              <a
                key={project.name}
                href={project.url}
                target="_blank"
                rel="noreferrer"
                className="group rounded-xl border border-border bg-card p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40"
              >
                <div className="mb-3 flex items-center justify-between font-mono text-[11px] uppercase tracking-wide text-muted-foreground">
                  <span>{project.category}</span>
                  <span className="text-primary opacity-0 transition-opacity group-hover:opacity-100">
                    ↗
                  </span>
                </div>
                <h3 className="text-base font-semibold">{project.name}</h3>
                <p className="mt-2 text-sm text-pretty text-muted-foreground">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5 font-mono text-[10px] text-muted-foreground">
                  {project.tags.map((tag) => (
                    <span key={tag} className="rounded bg-secondary px-1.5 py-0.5">
                      {tag}
                    </span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* footer */}
        <footer
          id="contact"
          className="scroll-mt-20 border-t border-border py-10"
        >
          <div className="flex flex-col items-start justify-between gap-4 font-mono text-[13px] text-muted-foreground md:flex-row md:items-center">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-primary">$</span>
              <span>contact</span>
              <a
                href="mailto:shahnawazusama@gmail.com"
                className="text-foreground transition-colors hover:text-primary"
              >
                shahnawazusama@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-4">
              <a
                href="https://github.com/codeisgoo"
                target="_blank"
                rel="noreferrer"
                className="transition-colors hover:text-primary"
              >
                github
              </a>
              <span className="text-border">/</span>
              <a
                href={CV_URL}
                download="Usama_Shahnawaz_DevOps_Resume.pdf"
                className="transition-colors hover:text-primary"
              >
                download cv
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
