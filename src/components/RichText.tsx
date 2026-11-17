// Met en forme le Markdown en ligne des contenus : **gras**, *italique* et `code`.
export function RichText({ text }: { text: string }) {
  return text
    .split(/(\*\*[^*]+\*\*|\*[^*]+\*|`[^`]+`)/g)
    .filter(Boolean)
    .map((part, index) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return (
          <strong key={index} className="font-semibold text-goth-rose">
            {part.slice(2, -2)}
          </strong>
        )
      }
      if (part.startsWith('`') && part.endsWith('`')) {
        return (
          <code
            key={index}
            className="rounded border border-goth-violet/25 bg-goth-violet/10 px-1.5 py-0.5 font-mono text-[0.85em] text-neutral-200"
          >
            {part.slice(1, -1)}
          </code>
        )
      }
      if (part.startsWith('*') && part.endsWith('*') && part.length > 2) {
        return <em key={index}>{part.slice(1, -1)}</em>
      }
      return part
    })
}
