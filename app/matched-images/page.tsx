"use client";

import { useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"
import { ArrowLeft, Download, Share2 } from "lucide-react"
import { Button } from "../../components/ui/button"
import { ImageModal } from "../../components/image-modal"
import Image from "next/image"
import Header from "../../components/header"

interface MatchedImage {
  id: number
  title: string
  category: string
  url: string
}

export default function MatchedImagesPage() {
  const searchParams = useSearchParams()
  const userName = searchParams.get("name") || "User"
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [selectedImage, setSelectedImage] = useState<MatchedImage | null>(null)

  const matchedImages: MatchedImage[] = [
    {
      id: 1,
      title: "Mountain Landscape",
      category: "Nature",
      url: "/placeholder.svg?height=600&width=800&text=Image+1",
    },
    {
      id: 2,
      title: "Urban Architecture",
      category: "City",
      url: "/placeholder.svg?height=600&width=800&text=Image+2",
    },
    {
      id: 3,
      title: "Beach Sunset",
      category: "Nature",
      url: "/placeholder.svg?height=600&width=800&text=Image+3",
    },
    {
      id: 4,
      title: "Mountain Lake",
      category: "Nature",
      url: "/placeholder.svg?height=600&width=800&text=Image+4",
    },
    {
      id: 5,
      title: "City Skyline",
      category: "City",
      url: "/placeholder.svg?height=600&width=800&text=Image+5",
    },
    {
      id: 6,
      title: "Forest Path",
      category: "Nature",
      url: "/placeholder.svg?height=600&width=800&text=Image+6",
    },
    {
      id: 7,
      title: "Desert Landscape",
      category: "Nature",
      url: "/placeholder.svg?height=600&width=800&text=Image+7",
    },
    {
      id: 8,
      title: "Historic Building",
      category: "Architecture",
      url: "/placeholder.svg?height=600&width=800&text=Image+8",
    },
    {
      id: 9,
      title: "Waterfall",
      category: "Nature",
      url: "/placeholder.svg?height=600&width=800&text=Image+9",
    },
    {
      id: 10,
      title: "Modern Building",
      category: "Architecture",
      url: "/placeholder.svg?height=600&width=800&text=Image+10",
    },
    {
      id: 11,
      title: "Ocean View",
      category: "Nature",
      url: "/placeholder.svg?height=600&width=800&text=Image+11",
    },
    {
      id: 12,
      title: "Night City",
      category: "City",
      url: "/placeholder.svg?height=600&width=800&text=Image+12",
    },
  ]

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  const openImageModal = (image: MatchedImage) => {
    setSelectedImage(image)
  }

  const closeImageModal = () => {
    setSelectedImage(null)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-white to-emerald-50">
      <Header showBackLink={true} hideRegisterLink={true} backLinkText="Home" />

      <main className="container mx-auto px-3 py-6">
        <div className="relative mb-6">
          <div className="absolute -inset-1 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-xl blur-sm"></div>
          <div className="relative bg-white rounded-xl overflow-hidden shadow-lg">
            <div className="p-4 md:p-6">
              <h1 className="text-2xl md:text-3xl font-bold text-teal-800 mb-2">Welcome, {userName}!</h1>
              <p className="text-sm md:text-base text-gray-600">
                Based on your selfie, we've matched you with these images. Tap any image to view or download.
              </p>
            </div>
          </div>
        </div>

        {isLoading ? (
          <div className="flex flex-col items-center justify-center py-12">
            <div className="w-12 h-12 border-3 border-teal-500 border-t-transparent rounded-full animate-spin mb-3"></div>
            <p className="text-teal-800 text-sm font-medium">Matching images...</p>
          </div>
        ) : (
          <>
            <h2 className="text-2xl font-bold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-teal-800 to-emerald-600">
              Your Matched Images
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-4">
              {matchedImages.map((image) => (
                <div key={image.id} className="group relative" onClick={() => openImageModal(image)}>
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-lg blur-[1px] opacity-70 group-hover:opacity-100 transition-opacity"></div>
                  <div className="relative bg-white rounded-lg overflow-hidden shadow-md">
                    <div className="relative aspect-square overflow-hidden">
                      <Image
                        src={image.url}
                        alt={image.title}
                        width={800}
                        height={600}
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-2">
                        <h3 className="font-medium text-white text-sm truncate">{image.title}</h3>
                        <p className="text-xs text-teal-100">{image.category}</p>
                      </div>
                    </div>
                    <div className="p-2 flex justify-between">
                      <button
                        className="text-teal-600 hover:text-teal-800 transition-colors"
                        onClick={(e) => {
                          e.stopPropagation()
                          // Download logic
                        }}
                      >
                        <Download size={14} />
                      </button>
                      <button
                        className="text-teal-600 hover:text-teal-800 transition-colors"
                        onClick={(e) => {
                          e.stopPropagation()
                          // Share logic
                        }}
                      >
                        <Share2 size={14} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <Button className="bg-gradient-to-r from-teal-600 to-emerald-500 hover:from-teal-700 hover:to-emerald-600 text-white">
                View More Images
              </Button>
            </div>
          </>
        )}
      </main>

      {selectedImage && <ImageModal isOpen={!!selectedImage} onClose={closeImageModal} image={selectedImage} />}
    </div>
  )
}
