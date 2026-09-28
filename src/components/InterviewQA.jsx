import { useState } from 'react'

export default function InterviewQA({ items }) {
  const [openIndex, setOpenIndex] = useState(0)

  if (!items?.length) return null

  return (
    <div className="qa-section">
      <h3 className="qa-heading">
        <span className="qa-heading-icon">Q</span>
        Likely interview questions
      </h3>
      <div className="qa-list">
        {items.map((item, i) => {
          const isOpen = openIndex === i
          return (
            <div key={i} className={`qa-item${isOpen ? ' qa-item-open' : ''}`}>
              <button
                className="qa-question"
                onClick={() => setOpenIndex(isOpen ? -1 : i)}
                aria-expanded={isOpen}
              >
                <span className="qa-chevron">{isOpen ? '−' : '+'}</span>
                {item.q}
              </button>
              {isOpen && <div className="qa-answer">{item.a}</div>}
            </div>
          )
        })}
      </div>
    </div>
  )
}
