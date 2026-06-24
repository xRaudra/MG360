/**
 * Feature flags — controls which screens are live for the owner.
 *
 * false = show current (old) screen  ← owner sees this
 * true  = show redesigned screen     ← flip when ready, push, done
 *
 * To release a screen:
 *   1. Change false → true
 *   2. git add + commit + push
 *   3. Vercel auto-deploys in ~60s
 */
export const FEATURES = {
  explore:     false,  // 🔧 in redesign
  profile:     false,  // 🔧 in redesign
  journey:     false,  // 🔧 in redesign
  whyIndia:    false,  // 🔧 in redesign
  whyMedGlobal: false, // 🔧 in redesign
  contact:     false,  // 🔧 in redesign
};
