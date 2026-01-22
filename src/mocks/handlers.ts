import { http, HttpResponse, delay } from 'msw';
import {
  rootResponse,
  imageEngineResponse,
  formatPickerResponse,
  youtubeAvatarResponse,
  youtubeAvatarStyleResponse,
  shortcustResponse,
  youtubeAvatarShortcutResponse
} from '../mockData';

export const handlers = [
  http.get('/api/skills-root/', async () => {
    await delay(500); // Simula delay de rede
    return HttpResponse.json(rootResponse);
  }),

  http.get('/api/skills-root/image_engine', async () => {
    await delay(500);
    return HttpResponse.json(imageEngineResponse);
  }),

  http.get('/api/skills-root/image_engine/format_picker', async () => {
    await delay(500);
    return HttpResponse.json(formatPickerResponse);
  }),

  http.get('/api/skills-root/image_engine/social_media/yt_avatar', async () => {
    await delay(500);
    return HttpResponse.json(youtubeAvatarResponse);
  }),

  http.get('/api/skills-root/image_engine/format_picker/youtube_avatar/youtube_avatar_style', async () => {
    await delay(500);
    return HttpResponse.json(youtubeAvatarStyleResponse);
  }),

  http.get('/api/shortcuts', async () => {
    await delay(500);
    return HttpResponse.json(shortcustResponse);
  }),

  http.get('/api/shortcuts/:id', async ({ params }) => {
    await delay(500);
    const { id } = params;
    if (id === 'create_youtube_avatar') {
      return HttpResponse.json(youtubeAvatarShortcutResponse);
    }
    return new HttpResponse(null, { status: 404 });
  }),
];
