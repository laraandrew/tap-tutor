export function TextCard({
  title,
  content,
}: {
  title: string
  content: string
}) {
  return (
    <div className="h-full flex flex-col gap-4">
      <h2 className="text-2xl font-bold">{title}</h2>
      <div className="prose dark:prose-invert">
        <p>{content}</p>
      </div>
    </div>
  )
}

