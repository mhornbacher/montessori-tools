/**
 * Generate GUID strings with Math.Random
 * @return {string}
 */
export const LegacyGuid = () => 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    let r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
});

/**
 * Generate GUID strings with crypto
 * @return {string}
 */
export const SecureGuid = () => ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
    (c ^ window.crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
);

/**
 * Generate GUID strings
 * @return {string}
 */
const Guid = () => typeof window !== 'undefined' && window.crypto ? SecureGuid() : LegacyGuid();

export default Guid;