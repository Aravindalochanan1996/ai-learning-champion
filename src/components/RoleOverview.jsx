export default function RoleOverview({ role, onSelectSection }) {
  return (
    <div className="pane">
      <div className="pane-eyebrow">Role overview</div>
      <h1 className="pane-title">{role.title}</h1>
      <p className="pane-tagline">{role.tagline}</p>

      {role.keyTools?.length > 0 && (
        <div className="tool-chip-row">
          {role.keyTools.map((tool, i) => (
            <span className="tool-chip" key={i}>
              {tool}
            </span>
          ))}
        </div>
      )}

      <p className="pane-overview-text">{role.overview}</p>

      <h2 className="pane-subheading">Study sections</h2>
      <div className="section-card-grid">
        {role.sections.map((section, i) => (
          <button
            key={section.id}
            className="section-card"
            onClick={() => onSelectSection(role.id, section.id)}
          >
            <span className="section-card-index">{String(i + 1).padStart(2, '0')}</span>
            <span className="section-card-heading">{section.heading}</span>
            <span className="section-card-summary">{section.summary}</span>
          </button>
        ))}
      </div>
    </div>
  )
}
