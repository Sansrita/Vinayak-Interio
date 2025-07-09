"use client"

export default function Offer() {
  return (
    <section className="w-full py-16 bg-black font-cambria">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">What We Offer</h2>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Our Digital Services */}
          <div className="bg-gray-800 rounded-lg p-6">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                <span className="text-purple-600 text-sm">🎨</span>
              </div>
              <h3 className="text-xl font-semibold text-white">Our Digital Services</h3>
            </div>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✅</span>
                <span className="text-gray-300">2D/3D Interior Design</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✅</span>
                <span className="text-gray-300">2D/3D Elevation Design</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✅</span>
                <span className="text-gray-300">2D AutoCad Civil Plan</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✅</span>
                <span className="text-gray-300">2D/3D Floor Plan</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✅</span>
                <span className="text-gray-300">2D/3D Landscape</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✅</span>
                <span className="text-gray-300">Electrical Layout</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✅</span>
                <span className="text-gray-300">Plumbing Layout</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✅</span>
                <span className="text-gray-300">Walk Through Video</span>
              </li>
            </ul>
          </div>

          {/* Warranty */}
          <div className="bg-gray-800 rounded-lg p-6">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                <span className="text-blue-600 text-sm">🛡️</span>
              </div>
              <h3 className="text-xl font-semibold text-white">Warranty</h3>
            </div>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✅</span>
                <span className="text-gray-300 text-sm">
                  Enjoy a flat 10-year warranty – Our service-related products come with long-term protection for your
                  peace of mind.*
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✅</span>
                <span className="text-gray-300 text-sm">
                  Get up to 1 year of on-site service warranty – Covers services like painting, electrical, plumbing,
                  and more for added assurance.*
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✅</span>
                <span className="text-gray-300 text-sm">
                  Enjoy up to 10 years of assured protection with our Damp Proof Work warranty – built to keep your home
                  safe and dry for the long run.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✅</span>
                <span className="text-gray-300 text-sm">
                  Up to 10 years warranty on UPVC Windows – built to last, made for comfort.
                </span>
              </li>
            </ul>
            <p className="text-xs text-gray-400 mt-4">*Note: Starting from the Modern Charm package.</p>
          </div>

          {/* Price Benefits */}
          <div className="bg-gray-800 rounded-lg p-6">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                <span className="text-green-600 text-sm">💰</span>
              </div>
              <h3 className="text-xl font-semibold text-white">Price Benefits</h3>
            </div>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✅</span>
                <span className="text-gray-300 text-sm">
                  Price-Match Guarantee – Found a better quote? We'll match it when compared with a branded provider for
                  the same scope.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✅</span>
                <span className="text-gray-300 text-sm">
                  Flexible Payment Options – Easy EMIs and smart payment plans through top financial partners.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✅</span>
                <span className="text-gray-300 text-sm">
                  No Hidden Costs – 100% transparent pricing with no surprise charges.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✅</span>
                <span className="text-gray-300 text-sm">
                  Transparent Quotation – Honest, detailed, Brand and itemized pricing with no hidden fees, ensuring
                  complete clarity, accurate scope, and fully informed decision-making.
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Our Implementation Services */}
        <div className="bg-gray-800 rounded-lg p-6 mb-8">
          <div className="flex items-center mb-6">
            <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center mr-3">
              <span className="text-orange-600 text-sm">🔧</span>
            </div>
            <h3 className="text-2xl font-semibold text-white">Our Implementation Services</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Modular Wooden Work */}
            <div>
              <h4 className="font-semibold text-white mb-2 flex items-center">
                <span className="text-green-500 mr-2">✅</span>
                Modular Wooden Work
              </h4>
              <ul className="ml-6 space-y-1 text-sm text-gray-300">
                <li>• Kitchen</li>
                <li>• Wardrobes</li>
                <li>• TV Unit</li>
                <li>• Bed & Head Boards</li>
                <li>• Temple (Corian/CNC Based)</li>
                <li>• Wall Panelling</li>
                <li>• Sofa & Sofa Cum Bed</li>
                <li>• Center Table</li>
                <li>• Dining Table</li>
              </ul>
            </div>

            {/* False Ceiling Work */}
            <div>
              <h4 className="font-semibold text-white mb-2 flex items-center">
                <span className="text-green-500 mr-2">✅</span>
                False Ceiling Work
              </h4>
              <ul className="ml-6 space-y-1 text-sm text-gray-300">
                <li>• Gypsum</li>
                <li>• POP</li>
                <li>• PVC</li>
                <li>• CNC Based</li>
                <li>• ACP Based</li>
              </ul>
            </div>

            {/* Elevation & Decoration */}
            <div>
              <h4 className="font-semibold text-white mb-2 flex items-center">
                <span className="text-green-500 mr-2">✅</span>
                Elevation & Decoration
              </h4>
              <ul className="ml-6 space-y-1 text-sm text-gray-300">
                <li>• Wallpaper</li>
                <li>• Louvers (Charcoal/WPC)</li>
                <li>• Grass Matt</li>
                <li>• PU Stone Panel</li>
                <li>• Marble Sheet (UV/Digital)</li>
                <li>• Mosaic Tiles</li>
                <li>• 2D & 3D Wall Decoration</li>
                <li>• Polystyrene Based Panels/Cladding</li>
              </ul>
            </div>

            {/* Flooring & Tiles */}
            <div>
              <h4 className="font-semibold text-white mb-2 flex items-center">
                <span className="text-green-500 mr-2">✅</span>
                Flooring & Tiles
              </h4>
              <ul className="ml-6 space-y-1 text-sm text-gray-300">
                <li>• Epoxy</li>
                <li>• Marble</li>
                <li>• Tiles</li>
                <li>• Wooden</li>
                <li>• PVC</li>
                <li>• Live Stone</li>
                <li>• Granite/Quartz</li>
              </ul>
            </div>

            {/* Electrical Work */}
            <div>
              <h4 className="font-semibold text-white mb-2 flex items-center">
                <span className="text-green-500 mr-2">✅</span>
                Electrical Work
              </h4>
              <ul className="ml-6 space-y-1 text-sm text-gray-300">
                <li>• Lighting Solutions</li>
                <li>• Electrical Home Automation & Innovations</li>
              </ul>
            </div>

            {/* Sanitary Work */}
            <div>
              <h4 className="font-semibold text-white mb-2 flex items-center">
                <span className="text-green-500 mr-2">✅</span>
                Sanitary Work
              </h4>
              <ul className="ml-6 space-y-1 text-sm text-gray-300">
                <li>• Plumbing Connections</li>
                <li>• Bathtub</li>
              </ul>
            </div>

            {/* Window/Shutter/Partition/Railing */}
            <div>
              <h4 className="font-semibold text-white mb-2 flex items-center">
                <span className="text-green-500 mr-2">✅</span>
                Window/Shutter/Partition/Railing
              </h4>
              <ul className="ml-6 space-y-1 text-sm text-gray-300">
                <li>• Shower Cubicle</li>
                <li>• UPVC Windows</li>
                <li>• Aluminium Window & Partition</li>
                <li>• Wooden</li>
                <li>• Steel</li>
                <li>• Iron shades</li>
              </ul>
            </div>

            {/* Painting Work */}
            <div>
              <h4 className="font-semibold text-white mb-2 flex items-center">
                <span className="text-green-500 mr-2">✅</span>
                Painting Work
              </h4>
              <ul className="ml-6 space-y-1 text-sm text-gray-300">
                <li>• Painting Base Work</li>
                <li>• DUCO Paint</li>
                <li>• PU Paint</li>
                <li>• Enamel Paint</li>
                <li>• Stencil Work</li>
                <li>• Hard Painting</li>
              </ul>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center">
              <span className="text-green-500 mr-2">✅</span>
              <span className="font-semibold text-white">Damp Proof Work & Solution</span>
            </div>
            <div className="flex items-center">
              <span className="text-green-500 mr-2">✅</span>
              <span className="font-semibold text-white">Sign Boards</span>
            </div>
          </div>
        </div>

        {/* Technology & Innovations and Future Aspects */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Technology & Innovations */}
          <div className="bg-gray-800 rounded-lg p-6">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                <span className="text-purple-600 text-sm">🚀</span>
              </div>
              <h3 className="text-xl font-semibold text-white">Technology & Innovations</h3>
            </div>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✅</span>
                <span className="text-gray-300 text-sm">
                  Advanced home automation for electrical systems, enabling effortless control and monitoring directly
                  from your mobile device for enhanced convenience and energy management.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✅</span>
                <span className="text-gray-300 text-sm">
                  Hermetically sealed edges provide an airtight barrier, effectively preventing moisture ingress into
                  the panels of your modular cabinetry.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✅</span>
                <span className="text-gray-300 text-sm">
                  Precision-engineered seamless panels, meticulously crafted to eliminate air bubbles, ensuring flawless
                  surfaces for your modular cabinetry.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✅</span>
                <span className="text-gray-300 text-sm">
                  Engineered with a robust structure to deliver exceptional strength and long-lasting durability for
                  your modular cabinets.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✅</span>
                <span className="text-gray-300 text-sm">
                  Modular kitchens designed for enhanced accessibility, streamlining daily tasks to boost efficiency and
                  minimize physical strain.
                </span>
              </li>
            </ul>
          </div>

          {/* Future Aspects */}
          <div className="bg-gray-800 rounded-lg p-6">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center mr-3">
                <span className="text-indigo-600 text-sm">🔮</span>
              </div>
              <h3 className="text-xl font-semibold text-white">Future Aspects</h3>
            </div>
            <p className="text-gray-300 text-sm mb-4 font-medium">
              Our Vision till 2050: We're not just designing for today—we're building for the future.
            </p>

            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-white mb-2 flex items-center">
                  <span className="text-green-500 mr-2">✅</span>
                  2025–2035: Expansion & Innovation
                </h4>
                <ul className="ml-6 space-y-1 text-sm text-gray-300">
                  <li>• Branches in major metro cities.</li>
                  <li>• Integration of smart home and sustainable design with automation.</li>
                  <li>• Dedicated R&D for materials and modular technology with global brands.</li>
                  <li>• Training institute for interior design talent.</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-white mb-2 flex items-center">
                  <span className="text-green-500 mr-2">✅</span>
                  2035–2050: Global Recognition
                </h4>
                <ul className="ml-6 space-y-1 text-sm text-gray-300">
                  <li>• International project portfolio</li>
                  <li>• Strategic partnerships with global design firms</li>
                  <li>• Launch of Vinayak Interio-branded modular furniture</li>
                  <li>• AI-powered design visualization tools for clients</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
