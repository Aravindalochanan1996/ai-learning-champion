function RoleTag({ text }) {
  return <span className="role-tag">{text}</span>
}

export default function Sidebar({ roles, activeRoleId, activeSectionId, expandedRoleId, onSelectRole, onSelectSection }) {
  return (
    <nav className="sidebar">
      <div className="sidebar-brand">
        <div className="sidebar-brand-title">XYZ Bank AI CoE</div>
        <div className="sidebar-brand-subtitle">Interview Prep Companion</div>
      </div>

      <div className="sidebar-roles">
        {roles.map((role) => {
          const isExpanded = expandedRoleId === role.id
          const isActiveRole = activeRoleId === role.id

          return (
            <div key={role.id} className={`sidebar-role${isExpanded ? ' expanded' : ''}`}>
              <button
                className={`sidebar-role-header${isActiveRole ? ' active' : ''}`}
                onClick={() => onSelectRole(role.id)}
              >
                <span className="sidebar-role-caret">{isExpanded ? '▾' : '▸'}</span>
                <span className="sidebar-role-title">{role.title}</span>
              </button>

              {isExpanded && (
                <div className="sidebar-sections">
                  <button
                    className={`sidebar-section${isActiveRole && activeSectionId === 'overview' ? ' active' : ''}`}
                    onClick={() => onSelectSection(role.id, 'overview')}
                  >
                    Overview
                  </button>
                  {role.sections.map((section) => (
                    <button
                      key={section.id}
                      className={`sidebar-section${isActiveRole && activeSectionId === section.id ? ' active' : ''}`}
                      onClick={() => onSelectSection(role.id, section.id)}
                    >
                      {section.heading}
                    </button>
                  ))}
                </div>
              )}
            </div>
          )
        })}
      </div>

      {roles.length === 0 && (
        <div className="sidebar-empty">Content is still being generated&hellip;</div>
      )}
    </nav>
  )
}

export { RoleTag }
