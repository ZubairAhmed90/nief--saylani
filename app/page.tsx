import Image from "next/image"
import Link from "next/link"
import { PartnerScroll } from "../components/partner-scroll"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header with gradient */}
      <header className="bg-gradient-to-r from-teal-700 via-teal-600 to-emerald-500 text-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-3">
              <div className="relative h-10 w-10 bg-white rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/logo.png"
                  alt="NIEF SAYLANI Logo"
                  fill
                  className="object-cover"
                />
              </div>
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-teal-100">
                NIEF SAYLANI
              </span>
            </div>
            <Link
              href="/register"
              className="px-6 py-2 bg-white text-teal-600 rounded-full font-medium hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              Register
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section with gradient */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-b from-teal-50 to-white">
        <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-teal-700/10 to-transparent h-100vh"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16  h-[530px] mt-20">
            <div className="inline-block mb-4 px-6 py-2 bg-gradient-to-r from-teal-500 to-emerald-400 rounded-full text-white text-sm font-medium">
              Simple & Fast
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-teal-800 via-teal-600 to-emerald-500">
              Get Your Images With A Selfie
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Capture your perfect selfie and instantly access your personalized image collection
            </p>
            <Link
              href="/register"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white rounded-full bg-gradient-to-r from-teal-600 to-emerald-500 hover:from-teal-700 hover:to-emerald-600 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Get Started
            </Link>
          </div>

          <div className="relative mx-auto max-w-4xl">
            <div className="absolute -inset-1 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-2xl blur-sm"></div>
            <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl w-full">
              <Image
                src="/bannerpic.jpg"
                alt="Vision 2025"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-teal-900/70 to-transparent flex items-end">
                <div className="p-8 text-white">
                  <h2 className="text-2xl font-bold mb-2">Vision 2025</h2>
                  <p className="text-teal-100">Take a selfie and get your images instantly</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* L-shaped Picture Gallery */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-teal-800 to-emerald-600">
            Our Picture Gallery
          </h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-16">
            Explore our collection of stunning images available through our platform
          </p>

          {/* L-shaped Gallery Layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {/* Large featured image (top of the L) */}
            <div className="md:col-span-3 relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-xl blur-sm opacity-70 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative h-[300px] rounded-xl overflow-hidden">
                <Image
                  src="/grouppic1.jpeg"
                  alt="Featured Image"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-teal-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                  <div className="p-6 text-white">
                    <h3 className="text-xl font-bold">Featured Collection</h3>
                    <p className="text-sm text-teal-100">Premium quality images</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Vertical part of the L (left column) */}
            <div className="space-y-4">
              {[1, 2, 3].map((item) => (
                <div key={item} className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-lg blur-sm opacity-70 group-hover:opacity-100 transition-opacity"></div>
                  <div className="relative h-[180px] rounded-lg overflow-hidden">
                    <Image
                      src={`/placeholder.svg?height=360&width=360&text=Image\ ${item}`}
                      alt={`Gallery Image ${item}`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-teal-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                      <div className="p-4 text-white">
                        <h3 className="text-sm font-bold">Collection {item}</h3>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Horizontal part of the L (middle and right columns) */}
            <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
              {[4, 5, 6, 7].map((item) => (
                <div key={item} className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-lg blur-sm opacity-70 group-hover:opacity-100 transition-opacity"></div>
                  <div className="relative h-[180px] rounded-lg overflow-hidden">
                    <Image
                      src={`/placeholder.svg?height=360&width=360&text=Image ${item}`}
                      alt={`Gallery Image ${item}`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-teal-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                      <div className="p-4 text-white">
                        <h3 className="text-sm font-bold">Collection {item}</h3>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works with gradient numbers */}
      <section className="py-20 bg-gradient-to-b from-white to-teal-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-teal-800 to-emerald-600">
            How It Works
          </h2>

          <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { step: "1", title: "Register", description: "Create your account in seconds" },
              { step: "2", title: "Take a Selfie", description: "Use our easy selfie capture tool" },
              { step: "3", title: "Get Access", description: "Instantly access your image collection" },
              { step: "4", title: "Download", description: "Save and share your favorite images" },
            ].map((item, index) => (
              <div key={index} className="text-center group">
                <div className="relative mx-auto mb-4">
                  <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-teal-500 to-emerald-400 opacity-70 blur-sm group-hover:opacity-100 transition-opacity"></div>
                  <div className="relative w-16 h-16 rounded-full bg-gradient-to-r from-teal-600 to-emerald-500 text-white flex items-center justify-center text-2xl font-bold">
                    {item.step}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-teal-800 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-10 bg-clip-text text-transparent bg-gradient-to-r from-teal-800 to-emerald-600">
            Our Technology Partners
          </h2>
          <PartnerScroll />
        </div>
      </section>
    </div>
  )
}
