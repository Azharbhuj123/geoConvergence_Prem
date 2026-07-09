/**
 * Calculates the SHA-256 hash of a given string message using standard Web Crypto API.
 * This is lightweight and has zero external dependencies.
 * 
 * @param {string} message - The plaintext string to hash
 * @returns {Promise<string>} The SHA-256 hash as a hex string
 */
export async function sha256(message) {
  const msgBuffer = new TextEncoder().encode(message);
  const hashBuffer = await crypto.subtle.digest("SHA-256", msgBuffer);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, "0")).join("");
}
