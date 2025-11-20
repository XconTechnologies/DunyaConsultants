import type { ConsultationBlock, WhatsAppChannelBlock, TipBlock, FAQBlock } from "@shared/schema";

// Hardcoded default values for each block type
export const HARDCODED_DEFAULTS = {
  consultation: {
    title: 'Book Your Free Consultation',
    description: 'Ready to start your study abroad journey? Schedule a personalized consultation with our expert advisors.',
    // Primary button - WHITE background
    buttonText: 'Book Free Consultation',
    buttonUrl: '/consultation',
    buttonBgColor: '#FFFFFF',
    buttonTextColor: '#1D50C9',
    buttonBorderRadius: 12,
    // Secondary button - Orange with white text
    button2Text: 'Connect now',
    button2Url: '/contact',
    button2BgColor: '#f97316',
    button2TextColor: '#FFFFFF',
    button2BorderRadius: 12,
    button2BorderWidth: 0,
    button2BorderColor: '#f97316',
  } as Partial<ConsultationBlock['data']>,
  
  whatsappChannel: {
    title: 'Stay Updated with Our WhatsApp Channel',
    description: 'Get instant updates on visa news, and study abroad opportunities!',
    channelUrl: 'https://whatsapp.com/channel/0029VbAnwfe8qIzremjcqn2V',
    buttonText: 'Join Channel',
    buttonBgColor: '#FFFFFF',
    buttonTextColor: '#1D50C9',
    buttonHoverColor: '#EAF0FB',
    buttonBorderRadius: 8,
  } as Partial<WhatsAppChannelBlock['data']>,
  
  tip: {
    prefix: 'Tip:',
    text: '',
  } as Partial<TipBlock['data']>,
  
  faq: {
    questions: [],
  } as Partial<FAQBlock['data']>,
};

export type BlockType = keyof typeof HARDCODED_DEFAULTS;

/**
 * Merges defaults from multiple sources in priority order:
 * 1. Current block data (highest priority)
 * 2. Global defaults from DB
 * 3. Upcoming defaults from DB
 * 4. Hardcoded defaults (lowest priority)
 */
export function mergeBlockDefaults<T extends Record<string, any>>(
  blockType: BlockType,
  currentData: T | undefined,
  upcomingDefaults: Record<string, any> | undefined,
  globalDefaults: Record<string, any> | undefined
): T {
  const hardcoded = HARDCODED_DEFAULTS[blockType] || {};
  
  // Merge in priority order (last wins)
  const merged = {
    ...hardcoded,
    ...(upcomingDefaults || {}),
    ...(globalDefaults || {}),
    ...(currentData || {}),
  };
  
  return merged as T;
}

/**
 * Apply defaults only to missing/undefined fields (preserve existing values)
 */
export function fillMissingDefaults<T extends Record<string, any>>(
  current: T,
  defaults: Partial<T>
): T {
  const result = { ...current };
  
  for (const key in defaults) {
    if (result[key] === undefined || result[key] === null || result[key] === '') {
      result[key] = defaults[key] as any;
    }
  }
  
  return result;
}
