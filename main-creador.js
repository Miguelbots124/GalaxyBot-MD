let handler = async (m, { conn, usedPrefix, isOwner }) => {
let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:Miguel 🇦🇱\nFN:Miguel 🇦🇱\nORG:Miguel 🇦🇱\nTITLE:\nitem1.TEL;waid=51907913096:51907913096\nitem1.X-ABLabel:Miguel 🇦🇱\nX-WA-BIZ-DESCRIPTION:\nX-WA-BIZ-NAME:Miguel 🇦🇱⁩\nEND:VCARD`
await conn.sendMessage(m.chat, { contacts: { displayName: 'Miguel 🇦🇱', contacts: [{ vcard }] }}, {quoted: m})
}
handler.help = ['owner']
handler.tags = ['main']
handler.command = ['creadores', 'creator', 'creador', 'dueño'] 

export default handler
