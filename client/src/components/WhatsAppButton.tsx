import { useEffect } from "react";

export default function WhatsAppButton() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/@elevenlabs/convai-widget-embed';
    script.async = true;
    script.type = 'text/javascript';
    document.body.appendChild(script);

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return (
    <>
      {/* WhatsApp Button */}
      <a 
        href="https://wa.me/923261111947" 
        className="fixed bottom-[26px] right-[26px] z-[1000]" 
        target="_blank" 
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
      >
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" 
          alt="WhatsApp" 
          width="60" 
          height="60"
          className="w-[60px] h-[60px]"
        />
      </a>

      {/* ElevenLabs Convai Widget */}
      <elevenlabs-convai 
        agent-id="agent_2801k4yyfeq3f209wvk3xzbjdpt7"
        style={{
          position: 'fixed',
          bottom: '26px',
          right: '112px',
          zIndex: 999
        }}
      />

      <style>{`
        elevenlabs-convai {
          position: fixed !important;
          bottom: 26px !important;
          right: 112px !important;
          z-index: 999 !important;
        }
      `}</style>
    </>
  );
}
