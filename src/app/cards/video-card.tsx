export function VideoCard({
  title,
  videoUrl,
  description,
  isActive,
}: {
  title: string
  videoUrl: string
  description: string
  isActive: boolean
}) {
  return (
    <div className="h-full flex flex-col gap-4">
      <h2 className="text-2xl font-bold">{title}</h2>
      <div className="relative aspect-video rounded-lg overflow-hidden bg-muted">
        <video className="w-full h-full object-cover" src={videoUrl} controls autoPlay={isActive} playsInline />
      </div>
      <p className="text-muted-foreground text-blue-600">{description}</p>
    </div>
  )
}

