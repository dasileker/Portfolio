import { journeySteps, roadmapSteps } from "@/content/caseStudies";

const signalNodes = [
  { label: "Requirements", x: 48, y: 74, color: "teal" },
  { label: "Risk", x: 190, y: 40, color: "blue" },
  { label: "API / Data", x: 330, y: 94, color: "cyan" },
  { label: "Automation", x: 180, y: 168, color: "teal" },
  { label: "CI / CD", x: 340, y: 226, color: "green" },
  { label: "Performance", x: 180, y: 290, color: "orange" },
  { label: "Observability", x: 45, y: 236, color: "blue" },
  { label: "Feedback", x: 48, y: 150, color: "violet" },
];

export function QualitySignalGraph() {
  return (
    <div className="signal-graph" aria-label="Quality signal graph">
      <svg viewBox="0 0 420 340" role="img" aria-labelledby="signal-title signal-desc">
        <title id="signal-title">Quality signal moving through an engineering system</title>
        <desc id="signal-desc">
          Requirements flow through risk, APIs and data, automation, delivery, performance,
          observability, and feedback.
        </desc>
        <path
          className="signal-path"
          d="M48 74 L190 40 L330 94 L180 168 L340 226 L180 290 L45 236 L48 150 Z"
        />
        <circle className="traveling-signal" r="4">
          <animateMotion
            dur="9s"
            repeatCount="indefinite"
            path="M48 74 L190 40 L330 94 L180 168 L340 226 L180 290 L45 236 L48 150 Z"
          />
        </circle>
        {signalNodes.map((node) => (
          <g key={node.label} className={`signal-node ${node.color}`}>
            <circle cx={node.x} cy={node.y} r="17" />
            <circle cx={node.x} cy={node.y} r="4" className="signal-node-core" />
            <text x={node.x} y={node.y + 31} textAnchor="middle">
              {node.label}
            </text>
          </g>
        ))}
      </svg>
      <div className="signal-readout" aria-hidden="true">
        <span>API ✓</span>
        <span>CI GATE</span>
        <span>p95</span>
      </div>
    </div>
  );
}

export function CareerSignal() {
  const stages = ["Testing", "Development", "Automation", "Leadership", "Quality Engineering"];
  return (
    <ol className="career-signal" aria-label="Career progression">
      {stages.map((stage, index) => (
        <li key={stage} className={index === stages.length - 1 ? "is-current" : ""}>
          <span>{String(index + 1).padStart(2, "0")}</span>
          <strong>{stage}</strong>
        </li>
      ))}
    </ol>
  );
}

export function RiskMatrix() {
  const cells = [
    ["Monitor", "Validate", "Validate"],
    ["Validate", "Automate", "Gate"],
    ["Automate", "Gate", "Gate"],
  ];
  return (
    <div className="risk-visual">
      <p className="axis-label axis-top">Business impact →</p>
      <p className="axis-label axis-side">Likelihood →</p>
      <div className="risk-matrix" role="group" aria-label="Interactive risk matrix">
        {cells.flatMap((row, rowIndex) =>
          row.map((label, columnIndex) => (
            <button
              key={`${rowIndex}-${columnIndex}`}
              type="button"
              aria-label={`${label}: likelihood ${rowIndex + 1}, impact ${columnIndex + 1}`}
              data-level={rowIndex + columnIndex}
            >
              <span>{label}</span>
              <small>
                {label === "Gate"
                  ? "Release-critical validation"
                  : label === "Automate"
                    ? "Repeatable high-value check"
                    : label === "Validate"
                      ? "Targeted evidence"
                      : "Observe and reassess"}
              </small>
            </button>
          )),
        )}
      </div>
    </div>
  );
}

export function ApiDataFlow() {
  const nodes = ["Client", "Frontend", "API", "Service", "Database"];
  return (
    <div className="flow-visual" aria-label="API and data validation flow">
      <div className="flow-nodes">
        {nodes.map((node, index) => (
          <div className="flow-step" key={node}>
            <span>{node}</span>
            {index < nodes.length - 1 && <i aria-hidden="true">→</i>}
          </div>
        ))}
      </div>
      <p>Validate ↔ Contract ↔ Business data</p>
    </div>
  );
}

export function LoadCurve() {
  return (
    <figure className="load-visual">
      <svg viewBox="0 0 640 230" role="img" aria-labelledby="load-title load-desc">
        <title id="load-title">Performance test load curve</title>
        <desc id="load-desc">A baseline rises through ramp to a plateau before recovery.</desc>
        <defs>
          <linearGradient id="load-fill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#ffd65a" stopOpacity=".35" />
            <stop offset="100%" stopColor="#ff9b50" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path className="load-grid" d="M20 45H620 M20 95H620 M20 145H620 M20 195H620" />
        <path
          className="load-area"
          d="M20 185 L135 185 C190 185 190 65 250 65 L485 65 C540 65 540 185 620 185 L620 210 L20 210 Z"
        />
        <path
          className="load-line"
          d="M20 185 L135 185 C190 185 190 65 250 65 L485 65 C540 65 540 185 620 185"
        />
        {[
          ["Baseline", 70],
          ["Ramp", 190],
          ["Plateau", 365],
          ["Recovery", 555],
        ].map(([label, x]) => (
          <text key={label} x={x} y="225" textAnchor="middle">
            {label}
          </text>
        ))}
      </svg>
    </figure>
  );
}

export function CiPipeline() {
  return (
    <ol className="pipeline-visual" aria-label="Continuous delivery quality pipeline">
      {["Commit", "MR", "Build", "Test", "Quality gate", "Deploy"].map((stage) => (
        <li key={stage}>
          <span aria-hidden="true" />
          {stage}
        </li>
      ))}
    </ol>
  );
}

export function E2EJourneyMap() {
  return (
    <ol className="journey-map" aria-label="Marketplace end-to-end journey">
      {journeySteps.map((step, index) => (
        <li key={step}>
          <span>{String(index + 1).padStart(2, "0")}</span>
          {step}
        </li>
      ))}
    </ol>
  );
}

export function AutomationRoadmap() {
  return (
    <ol className="roadmap" aria-label="Automation roadmap">
      {roadmapSteps.map((step, index) => (
        <li key={step}>
          <span>{index + 1}</span>
          <strong>{step}</strong>
        </li>
      ))}
    </ol>
  );
}
