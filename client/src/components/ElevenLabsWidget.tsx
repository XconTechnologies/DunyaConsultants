import { useEffect } from 'react';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'elevenlabs-convai': {
        'agent-id': string;
      };
    }
  }
}

export default function ElevenLabsWidget() {
  useEffect(() => {
    // Ensure the script is loaded
    const checkScript = setInterval(() => {
      if (window.customElements && window.customElements.get('elevenlabs-convai')) {
        clearInterval(checkScript);
      }
    }, 100);

    return () => clearInterval(checkScript);
  }, []);

  return (
    <elevenlabs-convai agent-id="agent_2801k4yyfeq3f209wvk3xzbjdpt7" />
  );
}
