"use client"

import type React from "react"
import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { Button } from "../../components/ui/button"
import { Input } from "../../components/ui/input"
import { Label } from "../../components/ui/label"
import { SelfieCapture } from "../../components/selfie-capture"
import { ArrowLeft, Camera, Upload } from "lucide-react"
import Header from "../../components/Header"

export default function RegisterPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  })
  const [image, setImage] = useState<string | null>(null)
  const [showSelfieCapture, setShowSelfieCapture] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader()
      reader.onload = (event) => {
        if (event.target) {
          setImage(event.target.result as string)
        }
      }
      reader.readAsDataURL(e.target.files[0])
    }
  }

  const handleSelfieCapture = (imageSrc: string) => {
    setImage(imageSrc)
    setShowSelfieCapture(false)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Here you would typically send the data to your backend
    console.log({ ...formData, image })

    // Simulate API call with timeout
    setTimeout(() => {
      // Redirect to matched images page with the user's data
      router.push(`/matched-images?name=${encodeURIComponent(formData.name)}`)
    }, 1000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-white to-emerald-50">
      <Header showBackLink={true} hideRegisterLink={true} />

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          {/* Registration Card with Gradient Border */}
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-3xl blur-sm"></div>
            <div className="relative bg-white rounded-3xl overflow-hidden shadow-xl">
              <div className="md:flex">
                {/* Left Side - Image and Info */}
                <div className="md:w-5/12 bg-gradient-to-br from-teal-600 to-emerald-500 text-white p-8 flex flex-col justify-between">
                  <div>
                    <h2 className="text-3xl font-bold mb-4">Get Your Images With A Selfie</h2>
                    <p className="text-teal-100 mb-6">
                      Register now to access your personalized image collection with just a selfie
                    </p>

                    <div className="space-y-6 mt-8">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                          <span className="text-sm font-bold">1</span>
                        </div>
                        <div>
                          <h3 className="font-semibold">Create Account</h3>
                          <p className="text-sm text-teal-100">Fill in your details to register</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                          <span className="text-sm font-bold">2</span>
                        </div>
                        <div>
                          <h3 className="font-semibold">Take a Selfie</h3>
                          <p className="text-sm text-teal-100">Use our camera to capture your selfie</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                          <span className="text-sm font-bold">3</span>
                        </div>
                        <div>
                          <h3 className="font-semibold">Access Your Images</h3>
                          <p className="text-sm text-teal-100">Get instant access to your collection</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Side - Form */}
                <div className="md:w-7/12 p-8">
                  <div className="max-w-md mx-auto">
                    <h3 className="text-2xl font-bold text-teal-800 mb-6">Create Your Account</h3>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-gray-700">
                          Full Name
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          placeholder="Enter your full name"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          className="border-gray-300 focus:border-teal-500 rounded-lg"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-gray-700">
                          Email Address
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="Enter your email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          className="border-gray-300 focus:border-teal-500 rounded-lg"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-gray-700">
                          Phone Number
                        </Label>
                        <Input
                          id="phone"
                          name="phone"
                          placeholder="Enter your phone number"
                          required
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="border-gray-300 focus:border-teal-500 rounded-lg"
                        />
                      </div>

                      <div className="space-y-3">
                        <Label className="text-gray-700">Profile Image (Optional)</Label>

                        <div className="flex flex-col gap-4">
                          {image ? (
                            <div className="flex flex-col items-center">
                              <div className="relative h-32 w-32 rounded-full overflow-hidden border-4 border-gradient-to-r from-teal-500 to-emerald-500">
                                <Image
                                  src={image || "/placeholder.svg"}
                                  alt="Profile Preview"
                                  fill
                                  className="object-cover"
                                />
                              </div>
                              <button
                                type="button"
                                onClick={() => setImage(null)}
                                className="mt-2 text-sm text-teal-600 hover:text-teal-800"
                              >
                                Remove image
                              </button>
                            </div>
                          ) : (
                            <div className="grid grid-cols-2 gap-4">
                              <div className="relative">
                                <Input
                                  id="image"
                                  type="file"
                                  accept="image/*"
                                  onChange={handleImageChange}
                                  className="absolute inset-0 opacity-0 cursor-pointer z-10"
                                />
                                <div className="flex items-center justify-center gap-2 border border-dashed border-gray-300 rounded-lg p-4 text-gray-500 hover:border-teal-500 hover:text-teal-600 transition-colors">
                                  <Upload size={18} />
                                  <span>Upload Image</span>
                                </div>
                              </div>

                              <button
                                type="button"
                                onClick={() => setShowSelfieCapture(true)}
                                className="flex items-center justify-center gap-2 border border-dashed border-gray-300 rounded-lg p-4 text-gray-500 hover:border-teal-500 hover:text-teal-600 transition-colors"
                              >
                                <Camera size={18} />
                                <span>Take Selfie</span>
                              </button>
                            </div>
                          )}
                        </div>
                      </div>

                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-6 rounded-lg bg-gradient-to-r from-teal-600 to-emerald-500 hover:from-teal-700 hover:to-emerald-600 text-white font-medium text-lg"
                      >
                        {isSubmitting ? "Processing..." : "Complete Registration"}
                      </Button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {showSelfieCapture && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-xl blur-sm"></div>
            <div className="relative bg-white rounded-xl max-w-md w-full p-6">
              <SelfieCapture onCapture={handleSelfieCapture} onCancel={() => setShowSelfieCapture(false)} />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}