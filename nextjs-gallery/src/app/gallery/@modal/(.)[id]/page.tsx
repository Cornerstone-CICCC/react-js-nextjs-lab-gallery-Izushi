import Modal from '@/components/Modal'
import PhotoDetail from '@/components/PhotoDetail'

const PhotoModal = ({ params }: { params: { id: string } }) => {
  return (
    <Modal>
      <PhotoDetail id={params.id} />
    </Modal>
  )
}

export default PhotoModal