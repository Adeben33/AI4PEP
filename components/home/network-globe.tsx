'use client';

import {ExternalLink} from 'lucide-react';
import {useState} from 'react';

type Team = {
  id: string;
  region: 'Africa' | 'Asia' | 'LAC' | 'MENA';
  country: string;
  name: string;
  website: string;
  linkedin?: string;
  lat: number;
  lon: number;
  color: string;
};

const teams: Team[] = [
  {id: 'cabo-verde', region: 'Africa', country: 'Cabo Verde', name: 'AI4PEP Cabo Verde', website: 'https://ai4pep.org/cabo-verde/', lat: 16, lon: -24, color: '#2D6A3F'},
  {id: 'cameroon', region: 'Africa', country: 'Cameroon', name: 'Digicare', website: 'https://www.ai4d.ai/innovations/digicare', lat: 6, lon: 12, color: '#2D6A3F'},
  {id: 'ethiopia', region: 'Africa', country: 'Ethiopia', name: 'Haqila', website: 'https://haqila.org', lat: 9, lon: 40, color: '#2D6A3F'},
  {id: 'ghana-1', region: 'Africa', country: 'Ghana - Team 1', name: 'Rapid VBP', website: 'https://rapid-vbp.org/', lat: 7.9, lon: -1, color: '#2D6A3F'},
  {id: 'ghana-2', region: 'Africa', country: 'Ghana - Team 2', name: 'AI4Inclusive Ghana', website: 'https://ai4inclusiveghana.org/', lat: 5.8, lon: -0.2, color: '#2D6A3F'},
  {id: 'nigeria', region: 'Africa', country: 'Nigeria', name: 'AI for One Health', website: 'https://aia4onehealth.org/', lat: 9.1, lon: 8.7, color: '#2D6A3F'},
  {id: 'senegal', region: 'Africa', country: 'Senegal', name: 'Plateforme 3S One Health', website: 'https://www.plateforme3sonehealth.sn/', lat: 14.5, lon: -14.5, color: '#2D6A3F'},
  {id: 'south-africa', region: 'Africa', country: 'South Africa', name: 'SACAQM', website: 'https://www.sacaqm.org/', lat: -30.6, lon: 22.9, color: '#2D6A3F'},
  {id: 'indonesia', region: 'Asia', country: 'Indonesia', name: 'Center for Tropical Medicine UGM', website: 'https://centertropmed-ugm.org/project/ai4pep', lat: -2.5, lon: 118, color: '#2D6A3F'},
  {id: 'malaysia', region: 'Asia', country: 'Malaysia', name: 'Sunway AI4PEP', website: 'https://sunwayuniversity.edu.my/global-south-artificial-intelligence-pandemic-epidemic-preparedness-response-ai4pep/global-south', lat: 4.2, lon: 102, color: '#2D6A3F'},
  {id: 'philippines', region: 'Asia', country: 'Philippines', name: 'AI4PEP Philippines', website: 'https://ai4pep.org/philippines/', lat: 12.9, lon: 122, color: '#2D6A3F'},
  {id: 'mongolia', region: 'Asia', country: 'Mongolia', name: 'AI Zoom', website: 'http://aizoom.mn', lat: 46.9, lon: 103.8, color: '#2D6A3F'},
  {id: 'brazil', region: 'LAC', country: 'Brazil', name: 'Inteligente Hub', website: 'https://inteligentehub.com.br/', lat: -14.2, lon: -51.9, color: '#2D6A3F'},
  {id: 'dominican-republic', region: 'LAC', country: 'Dominican Republic', name: 'AI4PEP Dominican Republic', website: 'https://ai4pep.org/dominican-republic/', lat: 18.7, lon: -70.2, color: '#2D6A3F'},
  {id: 'pan-caribbean', region: 'LAC', country: 'Pan-Caribbean', name: 'University of the West Indies (UWI)', website: 'https://ai4pep.org/pan-caribbean/', lat: 13.2, lon: -61.2, color: '#2D6A3F'},
  {id: 'peru', region: 'LAC', country: 'Peru', name: 'InnovaLab AI4PEP', website: 'https://www.innovalab.info/en/ai4pep', lat: -9.2, lon: -75, color: '#2D6A3F'},
  {id: 'lebanon', region: 'MENA', country: 'Lebanon', name: 'AI4PEP Lebanon', website: 'https://ai4pep.org/lebanon/', linkedin: 'https://www.emergent-lebanon.org', lat: 33.9, lon: 35.9, color: '#B8312F'},
  {id: 'morocco', region: 'MENA', country: 'Morocco', name: 'AI4TB', website: 'https://sites.google.com/ump.ac.ma/ai4tb/home', linkedin: 'https://www.linkedin.com/in/ai4tb/?locale=en', lat: 31.8, lon: -7.1, color: '#B8312F'},
  {id: 'tunisia', region: 'MENA', country: 'Tunisia', name: 'INTERACT', website: 'https://www.ai4d.ai/innovations/interact', lat: 34, lon: 9.5, color: '#B8312F'},
  {id: 'west-bank-palestine', region: 'MENA', country: 'West Bank / Palestine', name: 'BCITE', website: 'https://www.ad.bcite.org/', lat: 31.9, lon: 35.2, color: '#B8312F'}
];

const map = {
  left: 40,
  top: 98,
  width: 560,
  height: 420
};

function project(lon: number, lat: number) {
  return {
    x: map.left + ((lon + 180) / 360) * map.width,
    y: map.top + ((82 - lat) / 164) * map.height
  };
}

type GeoPoint = [number, number];

const landMasses: GeoPoint[][] = [
  [
    [-168, 71], [-145, 72], [-126, 59], [-123, 49], [-111, 44],
    [-102, 25], [-90, 18], [-82, 25], [-73, 41], [-59, 47],
    [-52, 59], [-73, 68], [-101, 73], [-132, 74]
  ],
  [
    [-52, 83], [-25, 80], [-20, 70], [-38, 61], [-57, 62], [-70, 72]
  ],
  [
    [-92, 18], [-78, 10], [-80, -5], [-70, -16], [-65, -35],
    [-55, -54], [-42, -38], [-35, -12], [-47, 2], [-58, 8], [-70, 12]
  ],
  [
    [-17, 36], [3, 51], [28, 56], [43, 42], [50, 23], [43, 11],
    [32, -5], [31, -29], [20, -35], [8, -33], [-5, -12], [-16, 5]
  ],
  [
    [-10, 58], [8, 71], [32, 70], [45, 58], [29, 45], [8, 44], [-8, 50]
  ],
  [
    [35, 70], [72, 72], [102, 61], [134, 55], [154, 46], [151, 30],
    [130, 18], [118, 1], [99, 9], [78, 6], [62, 18], [44, 24], [33, 43]
  ],
  [
    [94, 24], [108, 20], [121, 14], [124, 2], [110, -7], [99, 1]
  ],
  [
    [113, -11], [134, -10], [153, -25], [146, -41], [120, -38], [112, -25]
  ],
  [
    [166, -35], [178, -38], [176, -47], [162, -46], [156, -40]
  ],
  [
    [-180, -62], [-120, -66], [-60, -64], [0, -67], [60, -64],
    [120, -66], [180, -62], [180, -78], [-180, -78]
  ]
];

function pathFromGeo(points: GeoPoint[]) {
  return points
    .map(([lon, lat], index) => {
      const point = project(lon, lat);
      return `${index === 0 ? 'M' : 'L'}${point.x.toFixed(1)} ${point.y.toFixed(1)}`;
    })
    .join(' ') + ' Z';
}

export function NetworkGlobe() {
  const [activeTeam, setActiveTeam] = useState(teams[0]);
  const [rotation, setRotation] = useState({x: 0, y: 0});

  const renderWorld = (offset = 0) => (
    <g transform={`translate(${offset} 0)`}>
      {landMasses.map((points, index) => (
        <path
          key={`${offset}-land-${index}`}
          d={pathFromGeo(points)}
          fill="url(#continent)"
          opacity="0.96"
          stroke="#F2C94C"
          strokeOpacity="0.42"
          strokeWidth="1"
        />
      ))}

      {Array.from({length: 54}).map((_, index) => {
        const x = map.left + 10 + ((index * 79) % 520);
        const y = map.top + 18 + ((index * 53) % 360);
        return (
          <g key={`circuit-${offset}-${index}`} opacity="0.48">
            <path d={`M${x} ${y}h${28 + (index % 4) * 16}v${14 + (index % 5) * 8}`} fill="none" stroke="#F0A21A" strokeWidth="2" strokeLinecap="round" />
            <circle cx={x} cy={y} r="3.8" fill="#F0A21A" />
          </g>
        );
      })}

      {teams.map((team) => {
        const isActive = activeTeam.id === team.id;
        const pin = project(team.lon, team.lat);

        return (
          <a
            key={`${offset}-${team.id}`}
            href={team.website}
            target="_blank"
            rel="noreferrer"
            onMouseEnter={() => setActiveTeam(team)}
            onFocus={() => setActiveTeam(team)}
            onClick={() => setActiveTeam(team)}
            aria-label={`${team.country}: ${team.name}`}
          >
            <g
              className="cursor-pointer outline-none"
              transform={`translate(${pin.x} ${pin.y})`}
            >
              <title>{`${team.country}: ${team.name}`}</title>
              <circle
                r={isActive ? 19 : 11}
                fill={team.color}
                stroke="#ffffff"
                strokeWidth={isActive ? 5 : 3}
                opacity="0.98"
                className="transition-all duration-200"
              />
              <circle
                r={isActive ? 28 : 18}
                fill="none"
                stroke={team.color}
                strokeOpacity={isActive ? 0.28 : 0.18}
                strokeWidth="4"
                className="transition-all duration-200"
              />
              <path
                d="M0 -6C-5 -6-9 -2-9 3c0 8 9 17 9 17S9 11 9 3c0-5-4-9-9-9Zm0 12a4 4 0 1 1 0-8 4 4 0 0 1 0 8Z"
                fill="#ffffff"
                transform={isActive ? 'scale(1.08)' : 'scale(0.74)'}
              />
              {isActive ? (
                <g transform="translate(22 -38)">
                  <rect
                    x="0"
                    y="0"
                    width="156"
                    height="42"
                    rx="10"
                    fill="rgba(255,255,255,0.92)"
                    stroke="rgba(45,106,63,0.22)"
                  />
                  <text x="12" y="17" fill="#B8312F" fontSize="9" fontWeight="800">
                    {team.region}
                  </text>
                  <text x="12" y="32" fill="#1C2419" fontSize="12" fontWeight="900">
                    {team.country}
                  </text>
                </g>
              ) : null}
            </g>
          </a>
        );
      })}
    </g>
  );

  return (
    <div
      className="relative mx-auto aspect-square w-full max-w-[800px]"
      onMouseMove={(event) => {
        const bounds = event.currentTarget.getBoundingClientRect();
        const x = (event.clientX - bounds.left) / bounds.width - 0.5;
        const y = (event.clientY - bounds.top) / bounds.height - 0.5;
        setRotation({x: y * -9, y: x * 12});
      }}
      onMouseLeave={() => setRotation({x: 0, y: 0})}
    >
      <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_38%_32%,rgba(255,255,255,0.98),rgba(245,240,232,0.76)_52%,rgba(242,201,76,0.16)_72%,transparent_73%)] dark:bg-[radial-gradient(circle_at_38%_32%,rgba(255,255,255,0.22),rgba(45,106,63,0.20)_48%,rgba(242,201,76,0.12)_72%,transparent_73%)]" />
      <div
        className="absolute inset-0 transition-transform duration-300 ease-out"
        style={{
          transform: `perspective(900px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`
        }}
      >
        <svg
          viewBox="0 0 640 640"
          className="h-full w-full drop-shadow-[0_34px_50px_rgba(45,106,63,0.16)] dark:drop-shadow-[0_34px_58px_rgba(242,201,76,0.12)]"
          role="img"
          aria-label="Interactive rotating world map showing AI4PEP teams"
        >
          <style>
            {`
              @keyframes ai4pep-world-rotate {
                from { transform: translateX(0); }
                to { transform: translateX(-560px); }
              }

              .ai4pep-world-layer {
                animation: ai4pep-world-rotate 42s linear infinite;
                transform-box: fill-box;
              }

              .ai4pep-world-layer:hover {
                animation-play-state: paused;
              }
            `}
          </style>
          <defs>
            <clipPath id="globe-clip">
              <circle cx="320" cy="320" r="278" />
            </clipPath>
            <linearGradient id="continent" x1="0" x2="1" y1="0" y2="1">
              <stop offset="0%" stopColor="#2D6A3F" />
              <stop offset="100%" stopColor="#16752E" />
            </linearGradient>
            <radialGradient id="globe-shade" cx="35%" cy="28%" r="76%">
              <stop offset="0%" stopColor="rgba(255,255,255,0.72)" />
              <stop offset="62%" stopColor="rgba(255,255,255,0.12)" />
              <stop offset="100%" stopColor="rgba(45,106,63,0.16)" />
            </radialGradient>
          </defs>

          <circle cx="320" cy="320" r="278" fill="rgba(255,255,255,0.44)" stroke="#F2C94C" strokeOpacity="0.38" strokeWidth="2" className="dark:fill-white/10" />
          <g clipPath="url(#globe-clip)">
            {Array.from({length: 13}).map((_, index) => (
              <ellipse
                key={`lat-${index}`}
                cx="320"
                cy="320"
                rx="278"
                ry={24 + index * 20}
                fill="none"
                stroke="#F2C94C"
                strokeOpacity="0.24"
                strokeWidth="1.2"
              />
            ))}
            {Array.from({length: 13}).map((_, index) => (
              <ellipse
                key={`lng-${index}`}
                cx="320"
                cy="320"
                rx={30 + index * 20}
                ry="278"
                fill="none"
                stroke="#F2C94C"
                strokeOpacity="0.23"
                strokeWidth="1.2"
              />
            ))}

            <g className="ai4pep-world-layer">
              {renderWorld(0)}
              {renderWorld(560)}
            </g>

            <circle cx="320" cy="320" r="278" fill="url(#globe-shade)" pointerEvents="none" />
          </g>
          <circle cx="320" cy="320" r="278" fill="none" stroke="#F0A21A" strokeOpacity="0.24" strokeWidth="8" />
        </svg>
      </div>

      <div className="absolute bottom-4 left-1/2 w-[min(92%,430px)] -translate-x-1/2 rounded-xl border border-brand-green/15 bg-white/90 p-4 shadow-lg backdrop-blur-md dark:border-white/10 dark:bg-brand-dark/85">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-xs font-bold uppercase text-brand-red dark:text-brand-yellow">
              {activeTeam.region}
            </p>
            <p className="mt-1 text-sm font-black text-brand-ink dark:text-brand-cream">
              {activeTeam.country}
            </p>
            <p className="mt-1 text-xs leading-5 text-brand-ink/65 dark:text-brand-cream/65">
              {activeTeam.name}
            </p>
          </div>
          <a
            href={activeTeam.website}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-green text-white transition hover:bg-brand-red"
            aria-label={`Open ${activeTeam.name}`}
          >
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>
        {activeTeam.linkedin ? (
          <a
            href={activeTeam.linkedin}
            target="_blank"
            rel="noreferrer"
            className="mt-3 inline-flex text-xs font-bold text-brand-green underline-offset-4 hover:underline dark:text-brand-yellow"
          >
            LinkedIn
          </a>
        ) : null}
      </div>
    </div>
  );
}
