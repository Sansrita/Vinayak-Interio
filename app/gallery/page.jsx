import GalleryHeader from "@/components/gallery/gallery-header"
import GalleryGrid from "@/components/gallery/gallery-grid"

export default function GalleryPage() {
  return (
    <main className="min-h-screen">
      <GalleryHeader />
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-12">Interior Gallery</h1>
        <GalleryGrid />
      </div>
    </main>
  )
}
