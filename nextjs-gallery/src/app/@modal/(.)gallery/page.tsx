import { fetchPhoto } from "@/components/PhotoDetail"
import Image from "next/image"

type Props = {
  params: Promise<{ id: string }>
}

const page = async ({ params }: Props) => {
  const { id } = await params
  const photo = await fetchPhoto(id)

  return (
    <div className="fixed w-screen h-screen top-0 left-0 bg-black/70 flex items-center justify-center">
      <div className="bg-white text-black p-3 w-1/3">
        <h3>{photo.title}</h3>
        <Image src={photo.url} alt={photo.title} width={700} height={700} />
      </div>
    </div>
  )
}

export default page