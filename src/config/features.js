/**
 * Feature flags — controls which screens are live.
 *
 * DEV MODE (only you can see new screens):
 *   Turn ON  → visit:  https://your-app.vercel.app?dev=true
 *   Turn OFF → visit:  https://your-app.vercel.app?dev=false
 *   Dev mode persists in your browser until you turn it off.
 *   Owner always uses the normal URL — they never see ?dev=true.
 *
 * RELEASE a screen to everyone:
 *   Change its flag below from false → true, then push.
 */

// Read ?dev=true / ?dev=false from URL and persist in localStorage
const devParam = new URLSearchParams(window.location.search).get('dev');
if (devParam === 'true')  localStorage.setItem('mg360_dev', 'true');
if (devParam === 'false') localStorage.removeItem('mg360_dev');

const DEV_MODE = localStorage.getItem('mg360_dev') === 'true';

// Per-screen release flags (set true when ready to ship to everyone)
const released = {
  explore:      false,
  profile:      false,
  journey:      false,
  whyIndia:     false,
  whyMedGlobal: false,
  contact:      false,
};

// In dev mode you see everything; otherwise only released screens
export const FEATURES = Object.fromEntries(
  Object.entries(released).map(([key, val]) => [key, DEV_MODE || val])
);

export { DEV_MODE };
