'use client';
import CountUp from "react-countup";

const Badge = ({
  title,
  subtitle,
  endCountNum,
  endCountText,
  isPrimary = false,
}) => {
  return (
    <div className="flex flex-col items-center">
      <div
        className={`
          rounded-full w-40 h-40 flex flex-col items-center justify-center transition-colors duration-300
          ${
            isPrimary
              ? "bg-yellow-500 text-white"
              : "border-2 border-gray-200 text-gray-700 hover:bg-yellow-500 hover:border-yellow-500 hover:text-yellow-500 group"
          }
        `}
      >
        <h3
          className={`font-semibold text-xl ${
            isPrimary ? "text-white" : "text-yellow-500 group-hover:text-white"
          }`}
        >
          {title}
        </h3>

        {/* Conditional CountUp or subtitle */}
        {endCountNum !== undefined ? (
          <p className="text-center px-2 font-bold text-white">
            <CountUp end={endCountNum} delay={0.5} duration={3} />
            {endCountText && ` ${endCountText}`}
          </p>
        ) : (
          <p className="text-center px-2 font-bold text-white">{subtitle}</p>
        )}
      </div>
    </div>
  );
};

export default Badge;
