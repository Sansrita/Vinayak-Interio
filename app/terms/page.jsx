"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import Sidebar from "@/components/Sidebar"

export default function Terms() {
    const [activeSection, setActiveSection] = useState("vinayak-interio")

    const sectionIds = [
        "vinayak-interio",
        "faqs",
        "terms-and-conditions",
        "modular-system",
        "furnitures",
        "home-improvement-solutions",
        "general-terms-and-conditions"
    ]

    const handleSectionClick = (section) => {
        setActiveSection(section)
        const element = document.getElementById(section)
        if (element) {
            element.scrollIntoView({ behavior: "smooth" })
        }
    }

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + 150
            let currentSection = sectionIds[0]

            for (let i = 0; i < sectionIds.length; i++) {
                const section = document.getElementById(sectionIds[i])
                if (section && scrollPosition >= section.offsetTop) {
                    currentSection = sectionIds[i]
                }
            }

            setActiveSection(currentSection)
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <div className="min-h-screen flex flex-col">
            {/* Secondary Navigation */}
            <div className="border-b">
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between">
                        <nav className="flex items-center space-x-6 py-4">
                            <Link href="/about" className="text-sm font-medium">Who are we</Link>
                            <Link href="/privacy" className="text-sm font-medium">Privacy Policies</Link>
                            <Link href="/terms" className="text-sm font-medium">Terms and Conditions</Link>
                        </nav>
                        <div>
                            <a
                                href="https://wa.me/message/A5C4GDLREM33G1"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <button className="inline-flex items-center px-8 py-3 bg-yellow-500 text-white rounded-full shadow-lg hover:bg-gray-800 hover:ring-2 hover:ring-gray-950 ring-offset-2">
                                    GET YOUR QUOTE IN 24hrs
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <main className="flex-1 container mx-auto px-4 py-8">
                <div className="flex flex-col md:flex-row gap-8">
                    {/* Sticky Sidebar */}
                    <div className="md:w-1/4">
                        <div className="sticky top-24">
                            <div className="text-sm text-white-500 uppercase mb-4">TERMS & CONDITIONS</div>
                            <ul className="space-y-4">
                                {[
                                    "An Interio That Reflects You",
                                    "FAQs",
                                    "Terms and Conditions",
                                    "Modular System",
                                    "Furnitures",
                                    "Home Improvement Solutions",
                                    "General Terms and Conditions"
                                ].map((title, index) => {
                                    const id = sectionIds[index]
                                    return (
                                        <li key={id}>
                                            <button
                                                onClick={() => handleSectionClick(id)}
                                                className={`flex items-start ${activeSection === id ? "text-yellow-500 font-medium" : "text-white-700 hover:text-yellow-500"}`}
                                            >
                                                <span className="mr-2">{activeSection === id ? "•" : ""}</span>
                                                <span>{index + 1}. {title}</span>
                                            </button>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>

                    {/* Scrollable Content */}
                    <div className="md:w-3/4">
                        <div className="border-l-4 border-yellow-500 pl-4 mb-12">
                            <h1 className="text-4xl font-bold text-white-700">Vinayak Interio's Quality Promise</h1>
                        </div>

                        {sectionIds.map((id, i) => (
                            <section key={id} id={id} className="mb-12 scroll-mt-24">
                                <h2 className="text-3xl font-bold text-white-700 mb-6">
                                    {i + 1}. {[
                                        "An Interio That Reflects You",
                                        "FAQs",
                                        "Terms and Conditions",
                                        "Modular System",
                                        "Furnitures",
                                        "Home Improvement Solutions",
                                        "General Terms and Conditions"
                                    ][i]}
                                </h2>


                                {id === "vinayak-interio" && (
                                    <p className="text-white-600">
                                        The unparalleled Vinayak Interio warranty assures you a premier home design experience.
                                        Under this, we provide India’s first full home warranty, including modular systems,
                                        furniture, services & more*. With multiple quality checks at every stage, we ensure
                                        all our products are free from any material and manufacturing defects.
                                    </p>
                                )}

                                {id === "faqs" && (
                                    <div className="text-white-600 space-y-6">
                                        <div>
                                            <p className="font-bold">1. Does Vinayak Interio offer warranty on home interiors?</p>
                                            <p>Yes. Vinayak Interio offers India’s first full home warranty, including modular systems, furniture, services & more.</p>
                                        </div>
                                        <div>
                                            <p className="font-bold">2. What products and services does the Vinayak Interio warranty cover?</p>
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border border-yellow-500 p-4 rounded-lg mt-2 bg-gray-800 text-sm">
                                                <div>Modular kitchens (Aarambh & premium)</div>
                                                <div className="font-semibold">Flat 10-year warranty</div>
                                                <div>Modular wardrobes*</div>
                                                <div className="font-semibold">Flat 10-year warranty</div>
                                                <div>Modular storage like TV unit, vanity & more*</div>
                                                <div className="font-semibold">Flat 10-year warranty</div>
                                                <div>Semi-modular products (metal-based)</div>
                                                <div className="font-semibold">Flat 10-year warranty</div>
                                                <div>Vinayak Interio furniture (Hayden Home Collection)</div>
                                                <div className="font-semibold">Flat 3-year warranty</div>
                                                <div>Services</div>
                                                <div className="font-semibold">Up to 3-year warranty*</div>
                                                <div>Home improvement solutions</div>
                                                <div className="font-semibold">Based on the brand</div>
                                            </div>
                                            <p className="mt-4 text-xs text-gray-400">
                                                *Applicable for all PIDs with Full Order Confirmed (FOCs) date of 18th October 2024 or later,
                                                and all PIDs with a Handover with no snags (HONS) date of 1st Jan 2025 or later,
                                                irrespective of the FOC date.
                                            </p>
                                        </div>
                                        <div>
                                            <p className="font-bold mb-2">3. Does Vinayak Interio offer warranty on services? What does it cover?</p>
                                            <p>Vinayak Interio is the only branded player that offers a flat warranty for a period of three years on services like custom woodwork, electrical work, plumbing work, civil and demolition. Services like painting, false ceiling and countertop installation also have an attractive warranty of flat one year. </p>
                                        </div>
                                        <div>
                                            <p className="font-bold mb-2">4. How can I claim warranty?</p>
                                            <p>You can call on 1800-309-0930 or email us at care@Vinayak Interio.com to register your warranty claim. Alternatively, you can raise a service ticket through My Account.</p>
                                        </div>
                                        <div>
                                            <p className="font-bold mb-2">5. What are the prerequisites of the Vinayak Interio warranty?</p>
                                            <p>In the event of repair, Vinayak Interio Warranty is valid only if you possess a digital or physical proof of complete payment, and/ or you have signed the handover document at the time of installation.</p>
                                        </div>
                                        <div>
                                            <p className="font-bold mb-2">6. What if I lose my bill or Vinayak Interio warranty e-book?</p>
                                            <p>Don’t worry! In case you lose your physical customer contract or Vinayak Interio Warranty E-book, you can request the information by contacting Vinayak Interio customer support.</p>
                                        </div>
                                        <div>
                                            <p className="font-bold mb-2">7. Can I renew my warranty once it expires?</p>
                                            <p>No. Currently, we are not offering any extension or renewal of Vinayak Interio Warranty.</p>
                                        </div>
                                        <div>
                                            <p className="font-bold mb-2">8. Will I be charged if I need any services after the end of the Vinayak Interio Warranty period?</p>
                                            <p>We are happy to provide after-sales services even after your Vinayak Interio Warranty period expires. The service charges would be minimal and; material charges may be incurred (if anything needs to be replaced).</p>
                                        </div>
                                        <div>
                                            <p className="font-bold mb-2">9. Are customised products, provided by Vinayak Interio covered under Vinayak Interio Warranty?</p>
                                            <p>Customised products offered by Vinayak Interio are not covered under Vinayak Interio Warranty.</p>
                                        </div>
                                        <div>
                                            <p className="font-bold mb-2">10. Are decor products and accessories provided by Vinayak Interio covered under Vinayak Interio Warranty?</p>
                                            <p>Some decor products and accessories may or may not come under manufacturer warranty, depending on the products. Please speak to a Vinayak Interio authorised representative to find the manufacturer’s warranty period of any such product, not listed above.</p>
                                        </div>
                                        <div>
                                            <p className="font-bold mb-2">11. How should I notify Vinayak Interio regarding any damage?</p>
                                            <p><b>Notify Vinayak Interio via phone (1800-309-0930) or email (care@Vinayak Interio.com) within 3 days </b>of any defect that comes to notice, such as visual damage or malfunctioning component. Notification post the stipulated time, can void the Vinayak Interio warranty.</p>
                                        </div>
                                        <div>
                                            <p className="font-bold mb-2">12. What is the Vinayak Interio warranty governed by?</p>
                                            <p>The Vinayak Interio Warranty is governed by a rigorous 146-point quality standards at different stages like manufacturing, delivery and installation to ensure the delivery of the highest quality home interiors for you.</p>
                                        </div>

                                    </div>
                                )}

                                {id === "modular-system" && (
                                    <div className="text-white-600 space-y-6">
                                        <div>
                                            <p className="font-bold text-2xl mb-2">Modular systems</p>
                                            <p>Flat 10-year warranty on modular and semi-modular kitchens, wardrobes, storage, hardware and accessories.</p>
                                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 border border-yellow-500 p-4 rounded-lg mt-2 bg-gray-800 text-sm">
                                                <div className="font-semibold">Product Terms</div>
                                                <div className="font-semibold">No. of Years</div>
                                                <div className="font-semibold">Claim</div>
                                                <div>Cabinets, shutters, drawers and panels</div>
                                                <div>10 years</div>
                                                <div>100% replacement - free of cost</div>
                                                <div>Hardware and Accessories</div>
                                                <div>10 years</div>
                                                <div>100% replacement - free of cost</div>
                                            </div>

                                        </div>
                                        <div>
                                            <p className="font-bold mb-2">1. Vinayak Interio will honor its warranty when</p>
                                            <ul className="list-disc list-inside marker:text-white text-white-600 space-y-1">
                                                <li>The product supplied and installed is properly maintained and used for normal domestic use.</li>
                                                <li>The product is still owned by the original purchaser.</li>
                                                <li>The product is still at it's original installed position and location.</li>
                                                <li>The warranty has not expired, subject to limitations set forth through Vinayak Interio terms & conditions.</li>

                                            </ul>
                                        </div>
                                        <div>
                                            <p className="font-bold mb-2">2. Vinayak Interio warranty does not include</p>
                                            <ul className="list-disc list-inside marker:text-white text-white-600 space-y-1">
                                                <li>Any labour, installation or transportation costs or any responsibility for damage that Vinayak Interio considers as natural wear and tear of finishes and surfaces.</li>
                                                <li>Any products used or installed in conjugation with Vinayak Interio kitchen/ wardrobe/  modular storage such as electrical & plumbing fixtures, countertops and appliances. Any use of Vinayak Interio cabinetry or component parts which are contrary to instructions furnished by Vinayak Interio will void this warranty.</li>
                                                <li>Any cabinetry or component parts that Vinayak Interio considers to have been subject to alteration, modification, accident, abnormal use, extreme temperatures and continuous contact with water, high moisture levels or use of harsh and/or abrasive cleaning chemicals.</li>
                                                <li>Normal incidental deterioration like nicks, cuts, scratches and abrasions which are resulting from normal use during the standard life of the product.</li>

                                            </ul>
                                        </div>
                                        <div>
                                            <p className="mb-2">3. Vinayak Interio will not be held responsible for any claims arising out of defects due to material or workmanship of products not listed under claim terms.</p>
                                        </div>
                                        <div>
                                            <p className="mb-2">4. Vinayak Interio warranty does not cover natural wear and tear or damage caused by rough handling or using the product beyond its intended use.</p>
                                        </div>
                                        <div>
                                            <p className="mb-2">5. Vinayak Interio reserves the right to alter specifications in keeping with its policy of continuous product evaluation and improvement.</p>
                                        </div>
                                        <div>
                                            <p className="mb-2">6. The scope of Vinayak Interio warranty cannot be changed or broadened by any authorized representative of Vinayak Interio. </p>
                                        </div>
                                        <div>
                                            <p className="mb-2">7. Repair(s) and/or replacement(s) are subject to the current product offerings of styles and construction options within the Vinayak Interio product line, at the time of the claim. If a claim is filed after a Vinayak Interio product becomes obsolete or discontinued, Vinayak Interio will replace the affected component with a replacement component of a similar style based on availability at the time of the claim.</p>
                                        </div>
                                        <div>
                                            <p className="mb-2">8. Notify Vinayak Interio via phone or email within 10 days of any defect that comes to notice, such as visual damage or malfunctioning component. Notification post the stipulated time, will void the Vinayak Interio warranty.</p>
                                        </div>
                                        <div>
                                            <p className="mb-2">9. Any decision regarding repair of the said component (in part or whole) solely lies with the authorized Vinayak Interio representative. The decision will be made following an inspection by the representative whether to repair at site, or return product to the factory for refurbishing/ replacement.</p>
                                        </div>
                                        <div>
                                            <p className="mb-2">10. Liability: Vinayak Interio will make all efforts to replace/ repair the said defect within a reasonable period of time. Vinayak Interio will not be liable for any direct/indirect loss to the user due to the defect or delay in providing the service, or any fault arising due to design, application or installation. In no event shall the  liability of Vinayak Interio, under this warranty, exceed the purchase price of the product or its replacement.</p>
                                        </div>
                                        <div>
                                            <p className="mb-2">11. The warranty is not renewed in cases where the Vinayak Interio modular cabinets or components are replaced in part or whole during the said warranty period. The replaced parts will continue to be covered under our warranty only till the remainder of the period as indicated in its respective table. Barring components which carry a lifetime warranty, the warranty for any product under any circumstances will not exceed a period of 10 years (for modular wardrobes & storage) and 10 years (for kitchens) from the date of possession.</p>
                                        </div>
                                        <div>
                                            <p className="mb-2">12. The terms and conditions are governed by the laws of India. Bengaluru courts shall have exclusive jurisdiction to settle any claim or dispute which might arise out of or in connection with these terms and conditions.</p>
                                        </div>

                                    </div>
                                )}

                                {id === "furnitures" && (
                                    <div className="text-white-600 space-y-6">
                                        <div>
                                            <p className="font-bold text-2xl mb-4">Sofas</p>
                                            <p className="font-normal mb-2">1. To know the brand of your product, please refer to the products attributes/information or speak to your authorized Vinayak Interio representative.</p>
                                            <p className="font-normal mb-2">2.  Vinayak Interio warranty does not cover upholstery, normal wear and tear, softening or flattening of cushions and foam, color fading from sunlight, damage caused by rough handling and use of abrasives, corrosive materials, cleaning agents or improper use and maintenance.</p>
                                            <p className="font-normal mb-2">3. This warranty is applicable on sofas including but not limited to 1,2, 3 seater sofas, sectionals, ottomans and sofa cum beds.</p>
                                            <p className="font-normal mb-2">4. Lifetime warranty on any borer/termite issues in solid wood furniture by the brand 'Vinayak Interio'.</p>
                                            <p className="font-normal mb-2">5. Notify Vinayak Interio within 10 days of detecting any defect via phone or email.</p>
                                        </div>
                                        <div>
                                            <p className="font-bold text-2xl mb-4">All other furniture</p>
                                            <p className="font-normal mb-2">1. This warranty is applicable on all other furniture by the brand  ‘Vinayak Interio’ and Brand Partners. To know the brand of your product, please refer to the product attributes/information, or speak to your authorized Vinayak Interio representative.</p>
                                            <p className="font-normal mb-2">2.  Vinayak Interio warranty does not cover upholstery, normal wear and tear, softening or flattening of cushions and foam, color fading from sunlight, damage caused by rough handling and use of abrasives, corrosive materials, cleaning agents, or improper use and maintenance.</p>
                                            <p className="font-normal mb-2">3. The following are not considered as defects: natural wood characteristics such as variations in grain, color, mineral streaks and knots.</p>
                                            <p className="font-normal mb-2">4. This warranty is applicable for furniture including but not limited to upholstered furniture, solid wood furniture, coffee tables, beds, headboards, dining tables and chairs, accent chairs, metal furniture and outdoor furniture.</p>
                                            <p className="font-normal mb-2">5. Brand Partners may offer additional warranty on certain products or parts of the furniture. Please contact an authorized Vinayak Interio representative to know more.</p>
                                            <p className="font-normal mb-2">6. Lifetime warranty on any borer/termite issues in solid wood furniture by the brand ‘Vinayak Interio’.</p>
                                            <p className="font-normal mb-2">7.  Notify Vinayak Interio within 10 days of detecting any defect via phone or email.</p>
                                        </div>
                                        <div>
                                            <p className="font-bold text-2xl mb-4">Services</p>
                                            <p className="mb-4">Vinayak Interio provides India’s first and only service warranty* for up to 3 years! This warranty is governed by Vinayak Interio’s 146-point Quality Standards.</p>
                                            <p>*Applicable for all PIDs with Full Order Conversions (FOCs) date of 18th October 2024 or later and all PIDs with a HONS date of 1 Jan 2025 or later irrespective of the FOC date.</p>
                                        </div>
                                        <div>
                                            <p className="font-bold mb-4">Custom Woodwork</p>
                                            <p className="mb-4">Vinayak Interio warranty protects your custom woodwork against any defects in the product or workmanship for a period of up to 3 years from the date of possession. The warranty will be </p>
                                            <p className="mb-4">applicable to the following products:</p>
                                            <ul className="list-disc list-inside marker:text-white text-white-600 space-y-1">
                                                <li>Custom beds, storage units, study tables, centre tables and side tables, etc.</li>
                                                <li>Cushion work</li>
                                                <li>Door frame (wood)</li>
                                                <li>Door new and refurbishment</li>
                                                <li>Frame & shutter work</li>
                                                <li>Glass work</li>
                                                <li>Headboard</li>
                                                <li>Ledge/floating shelves</li>
                                                <li>Mandir unit</li>
                                                <li>Mirror panelling</li>
                                                <li>Mirror work</li>
                                                <li>Pelmet</li>
                                                <li>Ply boxing</li>
                                                <li>Ply packing</li>
                                                <li>Rafter installation</li>
                                                <li>Sliding wardrobe</li>
                                                <li>Swing Wardrobe</li>
                                                <li>Trims</li>
                                                <li>Vanity unit</li>
                                                <li>Wall framing</li>
                                                <li>Wall panel installation</li>
                                                <li>Wooden partitions</li>
                                                <li>Wooden laminated ceiling</li>

                                            </ul>
                                        </div>
                                        <div>
                                            <p className="font-bold mb-4">Warranty Coverage</p>
                                            <p className="mb-4">The following manufacturing and workmanship failures are covered under this warranty:</p>
                                            <ul className="list-disc list-inside marker:text-white text-white-600 space-y-1">
                                                <li><b>Bulging of Core Material:</b> Any unnatural swelling or expansion of core materials.</li>
                                                <li><b>Bubble Formation in Top Finish:</b> Surface bubbles resulting from manufacturing or material defects.</li>
                                                <li><b>Surface Peeling:</b> Unintended peeling of the finish layers.</li>
                                                <li><b>Patch Formation in Polish:</b> Any inconsistency or patchiness in polish due to manufacturing errors.</li>
                                                <li><b>Malfunctioning Hardware:</b> Issues with hinges, handles, or other hardware affecting functionality.</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <p className="font-bold mb-4">Warranty Limitations and Exclusions</p>
                                            <p className="mb-4">This warranty does not cover certain natural characteristics of wood, normal wear, or damage from external factors, including but not limited to the following:</p>
                                            <p className="font-semibold mb-2">1. Natural Wood Characteristics:</p>
                                            <ul className="list-disc list-inside marker:text-white text-white-600 space-y-1">
                                                <li><b>Wood Traits:</b>Variations in grain, colour, mineral streaks, and knots are inherent in wood and highlight its natural beauty.</li>
                                                <li><b>Seasonal Wood Movement:</b> Surface bubbles resulting from manufacturing or materiWood expands and contracts with humidity changes, leading to minor adjustments like hairline cracks at door joints or slight panel movements. These traits are typical for wood cabinetry and do not qualify as defects. To support wood stability, maintain relative humidity at 40-50% year-round.</li>
                                                <li><b>Colour Changes Over Time:</b> Sunlight, smoke, cleaning agents, and environmental factors may alter wood’s colour or texture gradually over time. These changes are expected and are not defects.</li>
                                            </ul>
                                            <p className="font-semibold mb-2">2. Moisture and Water Damage: Damage due to water exposure from leaks, high humidity, seepage, or prolonged contact with water from any source, including user negligence (e.g., unaddressed spills or wet conditions), is excluded.</p>
                                            <p className="font-semibold mb-2">3. Pest Infestation: Damage caused by termites, ants, fungal infestations, wood borers, or similar pests.</p>
                                            <p className="font-semibold mb-2">4. Rust or Corrosion: Corrosion of hardware or metal parts due to high moisture, exposure to improper chemicals, or lack of maintenance.</p>
                                            <p className="font-semibold mb-2">5. Incorrect Use or Unauthorised Modifications:</p>
                                            <ul className="list-disc list-inside marker:text-white text-white-600 space-y-1">
                                                <li>Alterations, repairs, or modifications by unauthorised personnel.</li>
                                                <li>Use of cabinetry or parts for unintended purposes or in extreme conditions.</li>
                                                <li>Damage from using abrasive or corrosive cleaning agents or any cleaning chemicals not approved by Vinayak Interio.</li>
                                            </ul>
                                            <p className="font-semibold mb-2">6. External Installations and Modifications:</p>
                                            <ul className="list-disc list-inside marker:text-white text-white-600 space-y-1">
                                                <li>Non-Vinayak Interio Accessories: Issues related to non-Vinayak Interio accessories (e.g., countertops, lighting, plumbing) used with cabinetry.</li>
                                                <li>Post-Installation Adjustments: Any structural changes or cabinet removal following the initial installation can void the warranty.</li>
                                            </ul>
                                            <p className="font-semibold mb-2">7. Outdoor and Weathering Effects:</p>
                                            <ul className="list-disc list-inside marker:text-white text-white-600 space-y-1">
                                                <li>Exterior Woodwork: Custom wood installations exposed to sunlight, rain, or outdoor conditions.</li>
                                                <li>Stone Countertops: Stones like granite used for countertops are excluded from this warranty.</li>
                                            </ul>
                                            <p className="font-semibold mb-2">8. Uncontrollable or External Factors:</p>
                                            <ul className="list-disc list-inside marker:text-white text-white-600 space-y-1">
                                                <li>Cosmetic damage, such as small cuts, scratches, or dents is not covered.</li>
                                                <li>Damage from external or uncontrollable events, such as Acts of God (e.g., fire, floods, extreme weather), improper storage, accidents, or vandalism, is excluded.</li>
                                            </ul>
                                            <p className="font-semibold mb-2">9. Wear and Tear:</p>
                                            <ul className="list-disc list-inside marker:text-white text-white-600 space-y-1">
                                                <li>Cushion Wear: Softening or flattening of cushions and foam with regular use.</li>
                                                <li>Colour Fading: Fading or discolouration of finishes or upholstery from sunlight exposure.</li>
                                                <li>Cosmetic Damage: Cuts, scratches, dents, and abrasions from regular use or accidental impacts are considered natural wear and tear and are not covered under warranty.</li>
                                            </ul>
                                        </div>

                                    </div>
                                )}

                                {id === "home-improvement-solutions" && (
                                    <div className="text-white-600 space-y-6">
                                        <div>
                                            <p className="font-bold text-2xl mb-2">Vinayak Interio assures best quality for your full home</p>
                                            <p>Vinayak Interio warranty protects your home improvement solutions against any defects as per the warranty cover provided by the Brand Partner.</p>
                                            <p>The warranty claims shall be processed in accordance with the terms and conditions of the respective brand. Please contact your Vinayak Interio authorised representative to know more.</p>
                                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 border border-yellow-500 p-4 rounded-lg mt-2 bg-gray-800 text-sm">
                                                <div className="font-semibold">Home Improvement Solutions</div>
                                                <div className="font-semibold">No. of Years</div>
                                                <div className="font-semibold">Claim</div>
                                                <div>Bath space</div>
                                                <div className="font-semibold">3-10 years</div>
                                                <div>As per brand warranty</div>
                                                <div>Curtains accessories</div>
                                                <div className="font-semibold">1-3 years</div>
                                                <div>As per brand warranty</div>
                                                <div>General lights</div>
                                                <div className="font-semibold">Up to 1 year</div>
                                                <div>As per brand warranty</div>
                                                <div>Home automation & securities</div>
                                                <div className="font-semibold">Up to 1 years</div>
                                                <div>As per brand warranty</div>
                                                <div>Wooden flooring</div>
                                                <div className="font-semibold">10-25 years</div>
                                                <div>As per brand warranty</div>
                                            </div>

                                        </div>
                                        <div>
                                            <p className="font-bold mb-2">1. Wooden flooring warranty exclusions:</p>
                                            <ul className="list-disc list-inside marker:text-white text-white-600 space-y-1">
                                                <li>Any changes or repairs made without the manufacturer's approval. </li>
                                                <li>Damages from high moisture or standing water, unless the area is properly sealed.</li>
                                                <li>Usage of harsh chemicals or abrasive cleaners.</li>
                                                <li>If the flooring is used outside recommended/ or in extreme temperature and humidity levels.</li>
                                                <li>Scratches or damage from nails or any sharp objects on the wooden flooring leading to scratch marks or discolouration of the product.</li>
                                                <li>Any discolouration, fading, or wear of the fabric due to sunlight, washing, or other environmental factors.</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <p className="font-bold mb-2">2. Bath Spaces/Shower Enclosures warranty exclusions:</p>
                                            <ul className="list-disc list-inside marker:text-white text-white-600 space-y-1">
                                                <li>Misuse, mishandling, or neglect, such as failure to dry the enclosure, improper storage, or failure to clean using recommended methods.</li>
                                                <li>Usage of corrosive, ammonia-based, or abrasive cleaners.</li>
                                                <li>Damages due to sharp objects, extreme heat, excessive vibration, or other adverse conditions.</li>
                                                <li>Products bought from unauthorised sellers or those with modifications (e.g., altered wiring or connectors).</li>

                                            </ul>
                                        </div>
                                        <div>
                                            <p className="font-bold mb-2">3. General lights and home automation products</p>
                                            <ul className="list-disc list-inside marker:text-white text-white-600 space-y-1">
                                                <li>If the product is installed incorrectly, misused, neglected, altered, or abused.</li>
                                                <li>Failure to adhere to the instructional documents or user manual will also invalidate the warranty.</li>
                                                <li>Any damage caused by extreme weather or other acts of nature.</li>
                                                <li>Damages caused by power surges or improper voltage input. Ensuring the correct voltage and surge protection is the customer’s/ user’s responsibility.</li>
                                                <li>Unapproved incorporation/ inclusion of unapproved replacement parts, connections, or unauthorised services. Only Havells lighting-approved parts and services should be used.</li>
                                                <li>Damage resulting from normal wear and tear, lack of regular maintenance, or improper cleaning practices. Maintenance routines specified by Havells lighting must be followed to maintain warranty validity.</li>

                                            </ul>
                                        </div>
                                        <div>
                                            <p className="mb-2">4. Replacement of a product would be subject to availability of the same with the OEM. In case the product is discontinued/unavailable with the manufacturer, Vinayak Interio would provide alternate options for the replacement.</p>
                                        </div>
                                        <div>
                                            <p className="mb-2">5. For branded material, standard T&C for warranty claim specified as per the brand will be applicable, even if it not explicitly mentioned in this document.</p>
                                        </div>
                                        <div>
                                            <p className="mb-2">6. Installation - If installation of any of the Vinayak Interio Home Improvement Solution products  is taken care under services, relevant warranty would be applicable on the installation part only. Vinayak Interio will rectify any installation failure subject to terms and conditions mentioned in the relevant section. </p>
                                        </div>

                                    </div>
                                )}

                                {id === "general-terms-and-conditions" && (
                                    <div className="text-white-600 space-y-6">
                                        <div>
                                            <p className="font-bold text-2xl mb-2">Vinayak Interio Warranty Policy</p>
                                            <p>1. This warranty begins on the date the consumer registers the warranty telephonically with Vinayak Interio by calling +91-91484 84666 and providing all required purchase and personal details. Registration must be completed within 7 days of handover or move-in, whichever is earlier. The warranty applies to projects booked after December 13, 2019.</p>
                                            <p>2. Warranty duration will not reset after a claim is settled.</p>
                                            <p>3. This warranty adheres to Vinayak Interio's 146-point Quality Standards.</p>
                                            <p>4. Replacement is subject to inspection by Vinayak Interio.</p>
                                            <p>5. Vinayak Interio is not responsible for alternative accommodation during repair work.</p>
                                            <p>6. Exclusions include issues due to:</p>
                                            <ul className="list-disc list-inside marker:text-white text-white-600 space-y-1">
                                                <li>Natural calamities (e.g., earthquakes, cyclones)</li>
                                                <li>Vandalism or Acts of God</li>
                                                <li>Customer negligence or abuse</li>
                                                <li>Normal wear and tear</li>
                                                <li>Contaminated surfaces</li>
                                                <li>Structural or prior coating failure</li>
                                                <li>External factors beyond Vinayak Interio’s control</li>
                                            </ul>
                                            <p>7. Vinayak Interio reserves the right to inspect/test the product; no tampering is allowed before this.</p>
                                            <p>8. Repairs will be carried out promptly but Vinayak Interio is not liable for delays.</p>
                                            <p>9. Vinayak Interio may control/monitor repairs and appoint/approve contractors.</p>
                                            <p>10. Genuine repair or replacement requests will be handled within the warranty timeline.</p>
                                            <p>11. Any additional services beyond defect repair will be chargeable.</p>
                                            <p>12. No additional warranties exist beyond this document.</p>
                                            <p>13. Legal proceedings cannot begin before the full evaluation process is completed.</p>
                                            <p>14. Legal disputes fall under the jurisdiction of the respective city courts.</p>
                                            <p>15. Both parties must keep all dispute details confidential.</p>
                                            <p>16. Customers must provide basic tools (stool/ladder, bucket, water) during service.</p>
                                            <p>17. All repair decisions rest with Vinayak Interio after inspection.</p>
                                            <p>18. Dismantling/reassembly/relocation costs are borne by the customer. Vinayak Interio will use protective coverings.</p>
                                            <p>19. Warranty is only for the original purchaser and is non-transferable.</p>
                                            <p>20. Repairs are subject to available product offerings. Obsolete parts will be replaced with similar alternatives.</p>
                                            <p>21. For validity, customers must pay in full, retain invoice, and ensure site access for Vinayak Interio representatives.</p>
                                            <p className="font-bold">22. Sole and Exclusive Remedy:</p>
                                            <p>In case of defects, Vinayak Interio may repair, replace, refund, or offer credit. The remedies do not cover:</p>
                                            <ul className="list-disc list-inside marker:text-white text-white-600 space-y-1">
                                                <li>Labour for installation/removal/reinstallation</li>
                                                <li>Costs for replacing or refinishing surrounding materials</li>
                                            </ul>
                                            <p>Vinayak Interio may change product design/materials without obligation to match old products exactly. Replacement finishes may differ.</p>
                                            <p className="font-bold">23. Limitation of Liability:</p>
                                            <p>Vinayak Interio disclaims all implied warranties except those legally unavoidable. It is not liable for description inaccuracies, property damage, personal injury, or consequential damages. Responsibility is limited to the product purchase price.</p>
                                            <p>24. Vinayak Interio cannot guarantee color/texture matches or finish uniformity.</p>
                                            <p>25. Defects must be reported within 30 days of discovery and no later than one year to maintain validity.</p>
                                            <p className="font-bold">26. Disclaimer of Warranty:</p>
                                            <p>This is the only express warranty from Vinayak Interio. No implied warranties of merchantability or fitness apply.</p>
                                            <p>27. Warranty is void if:</p>
                                            <ul className="list-disc list-inside marker:text-white text-white-600 space-y-1">
                                                <li>There is misuse, negligence, or unauthorised repairs</li>
                                                <li>Normal maintenance isn’t performed</li>
                                                <li>Acts of God or unusual wear/tear occur</li>
                                            </ul>
                                            <p className="mt-4">*Applicable on modular systems, furniture and services</p>
                                        </div>
                                    </div>

                                )}

                                {id !== "vinayak-interio" && id !== "faqs" && (
                                    <p className="text-white-600">
                                        {[
                                            "Vinayak Interio",
                                            "FAQs",
                                            "Terms and Conditions",
                                            "Modular System",
                                            "Furnitures",
                                            "Home Improvement Solutions",
                                            "General Terms and Conditions"
                                        ][i]}.
                                    </p>
                                )}
                            </section>
                        ))}
                    </div>
                </div>
            </main>

            {/* Sidebar Button */}
            <Sidebar />
        </div>
    )
}
