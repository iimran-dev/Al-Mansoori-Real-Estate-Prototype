import ZAI from 'z-ai-web-dev-sdk';
import fs from 'fs';
import path from 'path';

const out = '/home/z/my-project/public/images';

const tasks: { name: string; size: string; prompt: string }[] = [
  { name: 'founder-portrait', size: '768x1344', prompt: 'Editorial portrait photograph of a distinguished Emirati businessman in his early 40s wearing a crisp white kandura robe and matching white ghutra headdress, confident calm expression, well groomed short dark beard, against a deep charcoal black studio backdrop with subtle warm champagne gold rim lighting, cinematic luxury magazine photography, shallow depth of field, ultra sharp eyes, premium private wealth advisor aesthetic, refined and authoritative, high detail, 85mm lens' },
  { name: 'dubai-skyline-night', size: '1536x864', prompt: 'Cinematic wide aerial photograph of Dubai skyline at dusk blue hour, Burj Khalifa towering prominently in center, illuminated skyscrapers, warm golden city lights, deep charcoal sky transitioning to deep blue, luxury real estate photography, moody dramatic cinematic atmosphere, ultra high detail, professional, no text no watermark' },
  { name: 'founder-editorial', size: '768x1344', prompt: 'Cinematic editorial portrait of a distinguished Emirati businessman in white kandura and ghutra headdress, standing in a modern dark luxury Dubai office with floor to ceiling windows, Dubai skyline blurred behind glass at blue hour, warm champagne gold accent lighting, contemplative confident pose looking toward window, luxury investment magazine photography, deep charcoal tones, premium, cinematic, 85mm, no text' },
  { name: 'property-penthouse', size: '1344x768', prompt: 'Luxury penthouse interior at dusk, floor to ceiling windows overlooking Dubai skyline, modern minimal furniture in warm neutral tones, champagne gold accents, marble floors, cinematic warm lighting, ultra premium real estate photography, deep charcoal and cream palette, high detail, no text' },
  { name: 'property-villa', size: '1344x768', prompt: 'Luxury waterfront villa in Dubai Palm Jumeiray at golden hour, modern architecture, infinity pool overlooking the sea, private beach, warm sunset light, cinematic real estate photography, premium, deep blue water and warm gold tones, high detail, no text' },
  { name: 'property-offplan', size: '1344x768', prompt: 'Architectural render of a new luxury Dubai off-plan twin tower development at blue hour, sleek modern glass facade illuminated, reflecting pool in foreground, dramatic dusk sky, premium real estate visualization, cinematic, high detail, no text' },
  { name: 'property-commercial', size: '1344x768', prompt: 'Modern premium commercial building and labour accommodation complex in Dubai, clean architectural lines, warm evening lighting, landscaped surroundings, professional real estate photography, charcoal and warm gold tones, high detail, no text' },
  { name: 'dubai-future', size: '1536x864', prompt: 'Futuristic aerial visualization of Dubai in 2035, sleek towers, development corridors with glowing gold connection lines and nodes over a dark stylized city map, emerging investment zones highlighted in gold, AI inspired minimal motion graphics aesthetic, deep charcoal background, champagne gold accents, premium, no text' },
  { name: 'testimonial-1', size: '768x1344', prompt: 'Professional portrait of a confident Middle Eastern businessman in his 40s in a dark charcoal tailored suit, neutral dark background, warm rim light, premium investor headshot, calm authoritative expression, luxury magazine photography, high detail' },
  { name: 'testimonial-2', size: '768x1344', prompt: 'Professional portrait of a distinguished South Asian businessman in his 50s in a navy tailored suit, neutral dark background, warm light, premium investor headshot, confident subtle smile, luxury magazine photography, high detail' },
  { name: 'testimonial-3', size: '768x1344', prompt: 'Professional portrait of an elegant European businesswoman in her 40s in a dark blazer, neutral dark background, warm rim light, premium investor headshot, confident calm expression, luxury magazine photography, high detail' },
  { name: 'article-featured', size: '1344x768', prompt: 'Editorial photograph of Dubai Marina skyline at dusk, modern towers reflected in calm water, warm golden lights, cinematic luxury real estate magazine cover style, deep charcoal and gold palette, high detail, no text' },
];

const sleep = (ms: number) => new Promise(r => setTimeout(r, ms));

async function genOne(zai: any, t: { name: string; size: string; prompt: string }, attempt = 1): Promise<boolean> {
  try {
    const r = await zai.images.generations.create({ prompt: t.prompt, size: t.size });
    const b64 = r.data[0].base64;
    fs.writeFileSync(path.join(out, `${t.name}.png`), Buffer.from(b64, 'base64'));
    console.log(`OK ${t.name}`);
    return true;
  } catch (e: any) {
    const msg = String(e.message || e);
    if (msg.includes('429') && attempt < 6) {
      const wait = 9000 * attempt;
      console.log(`RETRY ${t.name} (429) waiting ${wait}ms attempt ${attempt}`);
      await sleep(wait);
      return genOne(zai, t, attempt + 1);
    }
    console.log(`FAIL ${t.name}: ${msg}`);
    return false;
  }
}

async function run() {
  const zai = await ZAI.create();
  const results: string[] = [];
  for (const t of tasks) {
    const ok = await genOne(zai, t);
    results.push(`${ok ? 'OK' : 'FAIL'} ${t.name}`);
    await sleep(3000);
  }
  console.log('SUMMARY:\n' + results.join('\n'));
}
run();
