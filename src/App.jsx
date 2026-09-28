import { useState } from 'react'
import { roles, getRole } from './data'
import Sidebar from './components/Sidebar'
import Welcome from './components/Welcome'
import RoleOverview from './components/RoleOverview'
import SectionView from './components/SectionView'
import './App.css'

export default function App() {
  const [activeRoleId, setActiveRoleId] = useState(null)
  const [activeSectionId, setActiveSectionId] = useState(null)
  const [expandedRoleId, setExpandedRoleId] = useState(null)

  function handleSelectRole(roleId) {
    const alreadyExpanded = expandedRoleId === roleId
    setExpandedRoleId(alreadyExpanded ? null : roleId)
    setActiveRoleId(roleId)
    setActiveSectionId('overview')
  }

  function handleSelectSection(roleId, sectionId) {
    setExpandedRoleId(roleId)
    setActiveRoleId(roleId)
    setActiveSectionId(sectionId)
  }

  const activeRole = activeRoleId ? getRole(activeRoleId) : null
  const activeSection =
    activeRole && activeSectionId && activeSectionId !== 'overview'
      ? activeRole.sections.find((s) => s.id === activeSectionId)
      : null
  const activeSectionIndex = activeSection
    ? activeRole.sections.findIndex((s) => s.id === activeSectionId)
    : -1

  return (
    <div className="app-shell">
      <Sidebar
        roles={roles}
        activeRoleId={activeRoleId}
        activeSectionId={activeSectionId}
        expandedRoleId={expandedRoleId}
        onSelectRole={handleSelectRole}
        onSelectSection={handleSelectSection}
      />
      <main className="app-content">
        {!activeRole && <Welcome roles={roles} onSelectRole={handleSelectRole} />}
        {activeRole && activeSectionId === 'overview' && (
          <RoleOverview role={activeRole} onSelectSection={handleSelectSection} />
        )}
        {activeRole && activeSection && (
          <SectionView
            role={activeRole}
            section={activeSection}
            sectionIndex={activeSectionIndex}
            onNavigate={handleSelectSection}
          />
        )}
      </main>
    </div>
  )
}
