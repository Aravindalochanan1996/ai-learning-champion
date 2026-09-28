import ContentBlocks from './ContentBlocks'
import InterviewQA from './InterviewQA'

export default function SectionView({ role, section, sectionIndex, onNavigate }) {
  const total = role.sections.length
  const prev = sectionIndex > 0 ? role.sections[sectionIndex - 1] : null
  const next = sectionIndex < total - 1 ? role.sections[sectionIndex + 1] : null

  return (
    <div className="pane">
      <div className="pane-eyebrow">
        {role.title} &middot; Section {sectionIndex + 1} of {total}
      </div>
      <h1 className="pane-title">{section.heading}</h1>
      <p className="pane-tagline">{section.summary}</p>

      <ContentBlocks blocks={section.content} />

      <InterviewQA items={section.interviewQA} />

      <div className="section-nav">
        <button
          className="section-nav-btn"
          disabled={!prev}
          onClick={() => prev && onNavigate(role.id, prev.id)}
        >
          &larr; {prev ? prev.heading : 'Start'}
        </button>
        <button
          className="section-nav-btn"
          disabled={!next}
          onClick={() => next && onNavigate(role.id, next.id)}
        >
          {next ? next.heading : 'End'} &rarr;
        </button>
      </div>
    </div>
  )
}
