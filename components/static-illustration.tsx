export default function StaticIllustration() {
  return (
    <svg viewBox="0 0 600 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Background neural network */}
      <g opacity="0.2">
        <circle cx="100" cy="100" r="3" fill="#c4b5fd" />
        <circle cx="200" cy="150" r="2" fill="#c4b5fd" />
        <circle cx="300" cy="80" r="4" fill="#c4b5fd" />
        <circle cx="400" cy="120" r="3" fill="#c4b5fd" />
        <circle cx="500" cy="200" r="2" fill="#c4b5fd" />
        <circle cx="150" cy="250" r="3" fill="#c4b5fd" />
        <circle cx="250" cy="300" r="2" fill="#c4b5fd" />
        <circle cx="350" cy="220" r="4" fill="#c4b5fd" />
        <circle cx="450" cy="280" r="3" fill="#c4b5fd" />
        <circle cx="120" cy="180" r="2" fill="#c4b5fd" />

        <line x1="100" y1="100" x2="200" y2="150" stroke="#c4b5fd" strokeWidth="0.5" />
        <line x1="200" y1="150" x2="300" y2="80" stroke="#c4b5fd" strokeWidth="0.5" />
        <line x1="300" y1="80" x2="400" y2="120" stroke="#c4b5fd" strokeWidth="0.5" />
        <line x1="400" y1="120" x2="500" y2="200" stroke="#c4b5fd" strokeWidth="0.5" />
        <line x1="150" y1="250" x2="250" y2="300" stroke="#c4b5fd" strokeWidth="0.5" />
        <line x1="250" y1="300" x2="350" y2="220" stroke="#c4b5fd" strokeWidth="0.5" />
        <line x1="350" y1="220" x2="450" y2="280" stroke="#c4b5fd" strokeWidth="0.5" />
        <line x1="120" y1="180" x2="200" y2="150" stroke="#c4b5fd" strokeWidth="0.5" />
        <line x1="120" y1="180" x2="150" y2="250" stroke="#c4b5fd" strokeWidth="0.5" />
        <line x1="300" y1="80" x2="350" y2="220" stroke="#c4b5fd" strokeWidth="0.5" />
      </g>

      {/* Human figure */}
      <g>
        <circle cx="150" cy="180" r="30" fill="#7c3aed" />
        <path d="M120 220 L180 220 L150 300 Z" fill="#7c3aed" />
      </g>

      {/* AI/Robot figure */}
      <g>
        <rect x="400" y="150" width="60" height="50" rx="10" fill="#2dd4bf" />
        <line x1="410" y1="150" x2="410" y2="180" stroke="#1e293b" strokeWidth="2" />
        <line x1="430" y1="150" x2="430" y2="180" stroke="#1e293b" strokeWidth="2" />
        <line x1="450" y1="150" x2="450" y2="180" stroke="#1e293b" strokeWidth="2" />
        <line x1="400" y1="165" x2="460" y2="165" stroke="#1e293b" strokeWidth="2" />
        <rect x="410" y="220" width="40" height="30" rx="5" fill="#2dd4bf" />
        <circle cx="420" cy="235" r="3" fill="#7c3aed" />
        <circle cx="430" cy="235" r="3" fill="#c4b5fd" />
        <circle cx="440" cy="235" r="3" fill="#7c3aed" />
      </g>

      {/* Connection elements */}
      <g>
        {/* Human chat bubble */}
        <rect x="180" y="130" width="90" height="40" rx="10" fill="#7c3aed" />
        <text x="225" y="155" textAnchor="middle" fill="white" fontFamily="Arial" fontSize="12">
          Create AI model
        </text>

        {/* AI chat bubble */}
        <rect x="330" y="170" width="90" height="40" rx="10" fill="#2dd4bf" />
        <text x="375" y="195" textAnchor="middle" fill="white" fontFamily="Arial" fontSize="12">
          Analyzing data...
        </text>

        {/* Connection line */}
        <path d="M270 150 C290 140, 310 180, 330 190" stroke="#1e293b" strokeWidth="1" fill="none" />

        {/* Data particles */}
        <circle cx="280" cy="155" r="3" fill="#7c3aed" />
        <circle cx="295" cy="165" r="3" fill="#7c3aed" opacity="0.7" />
        <circle cx="310" cy="175" r="3" fill="#2dd4bf" opacity="0.5" />
        <circle cx="325" cy="185" r="3" fill="#2dd4bf" opacity="0.7" />
      </g>

      {/* Central connecting element - representing the DeepLabs platform */}
      <g>
        <circle cx="300" cy="200" r="25" fill="#7c3aed" opacity="0.2" />
        <circle cx="300" cy="200" r="15" fill="#7c3aed" opacity="0.5" />
        <circle cx="300" cy="200" r="5" fill="#7c3aed" />
      </g>
    </svg>
  )
}
