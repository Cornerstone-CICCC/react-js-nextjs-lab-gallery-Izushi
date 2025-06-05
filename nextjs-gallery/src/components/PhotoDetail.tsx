import Image from 'next/image'
import Photo from '@/types/photo.type'

interface PhotoDetailProps {
  id: string
}

export async function fetchPhoto(id: string): Promise<Photo> {
  const res = await fetch(`https://jsonplaceholder.typicode.com/photos/${id}`, {
    next: { revalidate: 3600 * 24 }
  })
  if (!res.ok) {
    throw new Error('Failed to fetch photo')
  }
  const photo = await res.json()

  return {
    ...photo,
    url: 'https://placehold.co/1000x1000',
    thumbnailUrl: 'https://placehold.co/300x300'
  }
}

export default async function PhotoDetail({ id }: PhotoDetailProps) {
  const photo = await fetchPhoto(id)

  return (
    <div className="p-6 space-y-4">
      <div className="flex justify-center">
        <Image
          src={photo.url}
          alt={photo.title}
          width={600}
          height={600}
          className="rounded-lg shadow-lg"
        />
      </div>
      <div className="text-center space-y-2">
        <h1 className="text-2xl font-bold text-gray-800">{photo.title}</h1>
        <p className="text-gray-600">
          Photo #{photo.id} from Album #{photo.albumId}
        </p>
      </div>
    </div>
  )
}