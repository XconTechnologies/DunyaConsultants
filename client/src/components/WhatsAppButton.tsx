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
      <style>{`
        .whatsapp-button {
          position: fixed;
          bottom: 26px;
          right: 26px;
          z-index: 1000;
        }

        .whatsapp-button img {
          width: 60px;
          height: 60px;
        }

        .convai-widget {
          position: fixed;
          bottom: 26px;
          right: calc(26px + 60px + 26px);
          z-index: 999;
        }
      `}</style>

      <a 
        href="https://wa.me/923261111947" 
        className="whatsapp-button" 
        target="_blank" 
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
      >
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" 
          alt="WhatsApp" 
          width="60" 
          height="60" 
        />
      </a>

      <div className="convai-widget">
        <elevenlabs-convai agent-id="agent_2801k4yyfeq3f209wvk3xzbjdpt7"></elevenlabs-convai>
      </div>
    </>
  );
}
