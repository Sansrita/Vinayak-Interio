"use client"

import CountUp from "react-countup"
import { useState } from "react"

const Badge = ({ title, subtitle, endCountNum, endCountText, tooltip, isPrimary = false, highlight = false }) => {
  const [showTooltip, setShowTooltip] = useState(false)

  return (
    <div
      className="flex flex-col items-center relative"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      <div
        className={`
          rounded-full w-40 h-40 flex flex-col items-center justify-center transition-all duration-300 cursor-pointer
          ${isPrimary
            ? "bg-yellow-500 text-white"
            : "border-2 border-gray-200 text-white-700 hover:bg-yellow-500 hover:border-yellow-500 hover:text-white group"
          }
          ${highlight ? "relative" : ""}
          hover:scale-105 hover:shadow-lg transform
        `}
      >

        {highlight && (
          <div className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full font-semibold">
            ✓
          </div>
        )}

        <h3
          className={`font-semibold text-lg text-center px-2 ${isPrimary ? "text-white" : "text-yellow-500 group-hover:text-white"
            }`}
        >
          {title}
        </h3>


        {endCountNum !== undefined ? (
          <p
            className={`text-center px-2 font-bold ${isPrimary ? "text-white" : "text-white group-hover:text-white"
              }`}
          >
            <CountUp end={endCountNum} delay={0.5} duration={3} />
            {endCountText && ` ${endCountText}`}
          </p>
        ) : (
          <p
            className={`text-center px-2 font-bold text-sm ${isPrimary ? "text-white" : "text-white group-hover:text-white"
              }`}
          >
            {subtitle}
          </p>
        )}
      </div>


      {tooltip && showTooltip && (
        <div className="fixed inset-x-4 top-1/2 transform -translate-y-1/2 z-50 pointer-events-none">
          <div className="bg-gray-900 text-white rounded-xl shadow-2xl border border-gray-700 max-w-4xl mx-auto">
            <div className="p-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">✓</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-yellow-400 mb-2">
                    {title} {subtitle}
                  </h4>
                  <div className="text-gray-300 text-base leading-relaxed">
                    {tooltip.includes("||") ? (
                      <div>
                        <p className="mb-2">{tooltip.split("||")[0].trim()}</p>
                        <p className="text-sm text-white-400 italic">
                          {tooltip.split("||")[1].replace("<sup>*", "").replace("</sup>", "").trim()}
                        </p>
                      </div>
                    ) : (
                      <p>{tooltip}</p>
                    )}
                  </div>
                </div>
                <div className="flex-shrink-0">
                  <button
                    className="text-white-400 hover:text-white transition-colors"
                    onClick={() => setShowTooltip(false)}
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2">
              <div className="w-4 h-4 bg-gray-900 border-l border-t border-gray-700 transform rotate-45"></div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Badge
