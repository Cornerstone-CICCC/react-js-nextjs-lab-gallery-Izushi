import Photo from "@/types/photo.type"
import Image from "next/image"
import Link from "next/link"

const fetchPhotos = async (): Promise<Photo[]> => {
  const res = await fetch('https://jsonplaceholder.typicode.com/photos', {
    next: { revalidate: 3600 * 24 * 7 }
  })
  if (!res.ok) {
    throw new Error('Failed to fetch photos')
  }
  const data = await res.json()

  const photosWithNewUrls = data.map((photo: Photo) => ({
    ...photo,
    url: 'https://placehold.co/1000x1000',
    thumbnailUrl: 'https://placehold.co/300x300'
  }))
  return photosWithNewUrls
}

const GalleryPage = async () => {
  const photos = await fetchPhotos()

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
        Photo Gallery
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {photos.map((photo) => (
          <Link
            key={photo.id}
            href={`/gallery/${photo.id}`}
            className="group block"
          >
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="aspect-square overflow-hidden">
                <Image
                  src={photo.thumbnailUrl}
                  alt={photo.title}
                  width={300}
                  height={300}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-3">
                <p className="text-sm text-gray-600 line-clamp-2 group-hover:text-gray-800 transition-colors">
                  {photo.title}
                </p>
                <p className="text-xs text-gray-400 mt-1">
                  Photo #{photo.id}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default GalleryPage