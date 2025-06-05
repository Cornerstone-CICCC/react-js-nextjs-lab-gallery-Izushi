import PhotoDetail from '@/components/PhotoDetail'

const GalleryPhotoPage = ({ params }: { params: { id: string } }) => {
  return (
    <div className="container mx-auto px-4 py-8">
      <PhotoDetail id={params.id} />
    </div>
  )
}

export default GalleryPhotoPage