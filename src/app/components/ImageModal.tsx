import { FC } from 'react'
import Image from 'next/image'

interface ImageModalProps {
  src: string
  alt: string
  onClose: () => void
}

const ImageModal: FC<ImageModalProps> = ({ src, alt, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
      <div className="relative">
        <button
          onClick={onClose}
          className="absolute top-0 right-0 m-4 text-white text-2xl"
        >
          &times;
        </button>
        <Image src={src} alt={alt} width={800} height={800} className="object-contain" />
      </div>
    </div>
  )
}

export default ImageModal