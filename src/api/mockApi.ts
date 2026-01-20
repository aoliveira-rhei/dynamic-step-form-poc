export async function fetchRoot(path: string) {
  console.log(`[API] Fetching: ${path}`);

  const apiPath = path === '/' ? '/' : path;
  const url = `/api/skills-root${apiPath}`;

  console.log(`[API] Full URL: ${url}`);

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const data = await response.json();
  return data;
}
