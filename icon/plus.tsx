const PlusIcon = (props:React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={62}
    height={62}
    fill="none"
    {...props}
  >
    <g filter="url(#a)">
      <circle cx={31} cy={27} r={12} fill="url(#b)" />
    </g>
    <rect
      width={5.217}
      height={13.565}
      x={28.391}
      y={20.218}
      fill="#fff"
      rx={0.783}
    />
    <rect
      width={13.565}
      height={5.217}
      x={24.217}
      y={24.391}
      fill="#fff"
      rx={0.783}
    />
    <defs>
      <linearGradient
        id="b"
        x1={17.132}
        x2={71.678}
        y1={5.588}
        y2={11.457}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#3A8EF6" />
        <stop offset={1} stopColor="#6F3AFA" />
      </linearGradient>
      <filter
        id="a"
        width={62}
        height={62}
        x={0}
        y={0}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy={4} />
        <feGaussianBlur stdDeviation={9.5} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0.0862745 0 0 0 0 0.470588 0 0 0 0 0.94902 0 0 0 0.2 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_2_1794" />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_2_1794"
          result="shape"
        />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy={4} />
        <feGaussianBlur stdDeviation={2} />
        <feComposite in2="hardAlpha" k2={-1} k3={1} operator="arithmetic" />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" />
        <feBlend in2="shape" result="effect2_innerShadow_2_1794" />
      </filter>
    </defs>
  </svg>
)
export default PlusIcon;
