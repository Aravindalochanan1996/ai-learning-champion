export default function Welcome({ roles, onSelectRole }) {
  return (
    <div className="pane">
      <div className="pane-eyebrow">AI Center of Excellence</div>
      <h1 className="pane-title">Interview Prep Companion</h1>
      <p className="pane-overview-text">
        Five role tracks for the XYZ Bank AI Center of Excellence hiring line-up &mdash; each broken into
        the responsibility areas interviewers actually probe, with concrete tooling detail,
        comparison tables, and likely interview questions with model answers. Pick a role on the
        left to start, or jump straight into a track below.
      </p>

      <div className="section-card-grid">
        {roles.map((role) => (
          <button key={role.id} className="section-card" onClick={() => onSelectRole(role.id)}>
            <span className="section-card-heading">{role.title}</span>
            <span className="section-card-summary">{role.tagline}</span>
          </button>
        ))}
      </div>

      {roles.length === 0 && (
        <p className="pane-overview-text" style={{ marginTop: '2rem', opacity: 0.7 }}>
          Content is still being researched and generated for these roles &mdash; check back in a
          few minutes.
        </p>
      )}
    </div>
  )
}
