import { http, HttpResponse, delay } from 'msw';
import {
  rootResponse,
  imageEngineResponse,
  formatPickerResponse,
  youtubeAvatarResponse,
  youtubeAvatarStyleResponse
} from '../mockData';

export const handlers = [
  http.get('/api/form-steps/', async () => {
    await delay(500); // Simula delay de rede
    return HttpResponse.json(rootResponse);
  }),

  http.get('/api/form-steps/image_engine', async () => {
    await delay(500);
    return HttpResponse.json(imageEngineResponse);
  }),

  http.get('/api/form-steps/image_engine/format_picker', async () => {
    await delay(500);
    return HttpResponse.json(formatPickerResponse);
  }),

  http.get('/api/form-steps/image_engine/social_media/yt_avatar', async () => {
    await delay(500);
    return HttpResponse.json(youtubeAvatarResponse);
  }),

  http.get('/api/form-steps/image_engine/format_picker/youtube_avatar/youtube_avatar_style', async () => {
    await delay(500);
    return HttpResponse.json(youtubeAvatarStyleResponse);
  }),
];
