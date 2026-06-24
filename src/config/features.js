/**
 * DEV MODE — controls which screen registry you see.
 *
 *   Turn ON  → visit:  https://your-app.vercel.app?dev=true
 *   Turn OFF → visit:  https://your-app.vercel.app?dev=false
 *   Persists in your browser until you explicitly turn it off.
 *   Owner always uses the normal URL — they never see DEV MODE badge.
 *
 * REFLECT to owner → say "reflect dev to owner"
 *   Assistant updates owner-screens.js to match dev-screens.js.
 *   One file. Done.
 */

const devParam = new URLSearchParams(window.location.search).get('dev');
if (devParam === 'true')  localStorage.setItem('mg360_dev', 'true');
if (devParam === 'false') localStorage.removeItem('mg360_dev');

export const DEV_MODE = localStorage.getItem('mg360_dev') === 'true';
