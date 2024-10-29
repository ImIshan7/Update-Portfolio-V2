import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Zap } from 'lucide-react';

// Keyframes for animations
const flash = keyframes`
  0%, 100% { opacity: 1; transform: scale(1); }
  20%, 80% { opacity: 0.4; transform: scale(1.1); }
  40%, 60% { opacity: 0.8; transform: scale(0.95); }
`;

const lightning = keyframes`
  0%, 100% { opacity: 1; }
  25%, 75% { opacity: 0.2; }
  40%, 60% { opacity: 0.8; }
`;

// Styled component for the lightning icon
const LightningIcon = styled(Zap)`
  animation: ${lightning} 1.5s infinite ease-in-out, ${flash} 0.8s infinite alternate;
  color: #FFD700; /* Yellow color */
  filter: drop-shadow(0 4px 6px rgba(255, 223, 0, 0.7)); /* Filter instead of drop-shadow for better compatibility */
`;

const LogoLoader: React.FC = () => {
    return (
        <div className="min-h-screen bg-[radial-gradient(circle_at_center,_#222_0%,_#000_100%)] flex flex-col items-center justify-center p-4 space-y-4">
            {/* Main container with glass effect */}
            <div className="relative p-4 xs:p-6 sm:p-8 md:p-12 lg:p-16 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 flex items-center justify-center">

                {/* Lightning Strike Icon with Flashing Effect */}
                <div className="relative flex items-center justify-center">
                    <LightningIcon
                        className="w-12 h-12 xs:w-14 xs:h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24"
                        strokeWidth={1.5}
                    />
                </div>
            </div>

            {/* Loading text below the thunder box */}
            <div className="text-yellow-200 font-light tracking-[0.3em] text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl">
                ISHAN
            </div>
        </div>
    );
};

export default LogoLoader;
