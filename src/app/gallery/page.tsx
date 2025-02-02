'use client'

import { useState, useCallback, useEffect } from 'react'
import Image from 'next/image'
import PhotoSlider from '../components/PhotoSlider'
import ImageModal from '../components/ImageModal'

export default function Gallery() {
  const [currentPage, setCurrentPage] = useState(0)
  const imagesPerPage = 9
  const [isLoading, setIsLoading] = useState(false)
  const [displayedImages, setDisplayedImages] = useState<string[]>([])
  const [images, setImages] = useState<string[]>([])
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  // 画像リストをAPIから取得
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch('/api/images')
        if (!response.ok) {
          throw new Error('Failed to fetch images')
        }
        const data = await response.json()
        setImages(data)
      } catch (error) {
        console.error('Error fetching images:', error)
      }
    }
    fetchImages()
  }, [])

  const loadMoreImages = useCallback(() => {
    if (!isLoading && images.length > 0) {
      setIsLoading(true)
      const nextImages = images.slice(
        currentPage * imagesPerPage,
        (currentPage + 1) * imagesPerPage
      )
      setDisplayedImages(prev => [...prev, ...nextImages])
      setCurrentPage(prev => prev + 1)
      setIsLoading(false)
    }
  }, [currentPage, images, isLoading])

  // 初期ロード時の画像読み込み
  useEffect(() => {
    if (images.length > 0 && displayedImages.length === 0) {
      loadMoreImages()
    }
  }, [images, loadMoreImages, displayedImages.length])

  // スクロール検知
  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 100
        && !isLoading
      ) {
        loadMoreImages()
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [loadMoreImages, isLoading])

  return (
    <div className="container mx-auto px-4 md:px-6 lg:px-12 py-6 space-y-12">
      <section className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-black">My Gallery</h1>
        <div className="mt-6 flex justify-center">
          <div className="w-full max-w-3xl">
            <PhotoSlider />
          </div>
        </div>
      </section>

      {/* 追加するグリッドギャラリー */}
      <section className="max-w-4xl mx-auto mt-12">
        <h2 className="text-2xl font-bold mb-6">Photo Collection</h2>
        <p className="mb-6 text-black">
          Here you can view photos taken with my favorite camera, the Leica Q.
          Many of the photos are in monochrome, which I believe brings out the true essence of Leica.
          Please take a look and enjoy.
        </p>
        <div className="grid grid-cols-3 gap-4">
          {displayedImages.map((src, index) => (
            <div
              key={index}
              className="aspect-square relative rounded-lg overflow-hidden shadow-lg cursor-pointer"
              onClick={() => setSelectedImage(src)}
            >
              <Image
                src={src}
                alt={`Gallery image ${index + 1}`}
                fill
                className="object-cover"
                loading="lazy"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          ))}
        </div>
        <div className="text-center mt-6">
          {isLoading && (
            <div className="animate-spin h-8 w-8 border-4 border-blue-500 rounded-full border-t-transparent mx-auto"></div>
          )}
        </div>
      </section>

      {selectedImage && (
        <ImageModal
          src={selectedImage}
          alt="Selected image"
          onClose={() => setSelectedImage(null)}
        />
      )}
    </div>
  )
}