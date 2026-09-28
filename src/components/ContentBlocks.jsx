function Paragraph({ text }) {
  return <p className="block-paragraph">{text}</p>
}

function ListBlock({ items }) {
  return (
    <ul className="block-list">
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  )
}

function TableBlock({ headers, rows }) {
  return (
    <div className="block-table-wrap">
      <table className="block-table">
        <thead>
          <tr>
            {headers.map((h, i) => (
              <th key={i}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i}>
              {row.map((cell, j) => (
                <td key={j}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function CodeBlock({ language, code }) {
  return (
    <div className="block-code">
      <div className="block-code-lang">{language || 'code'}</div>
      <pre>
        <code>{code}</code>
      </pre>
    </div>
  )
}

export default function ContentBlocks({ blocks }) {
  if (!blocks?.length) return null
  return (
    <div className="content-blocks">
      {blocks.map((block, i) => {
        switch (block.type) {
          case 'paragraph':
            return <Paragraph key={i} text={block.text} />
          case 'list':
            return <ListBlock key={i} items={block.items} />
          case 'table':
            return <TableBlock key={i} headers={block.headers} rows={block.rows} />
          case 'code':
            return <CodeBlock key={i} language={block.language} code={block.code} />
          default:
            return null
        }
      })}
    </div>
  )
}
