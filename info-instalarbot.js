import { generateWAMessageFromContent } from '@whiskeysockets/galaxyBot'
let handler  = async (m, { conn }) => {
let texto = `
╭─────────────┈⊷
│ *No seas rata bro , para comprar el bot o saber los precios comunícate con mi creador https://wa.me/9373853455*
╰┬────────────┈⊷` 
let aa = { quoted: m, userJid: conn.user.jid }
let prep = generateWAMessageFromContent(m.chat, { extendedTextMessage: { text: `${texto}`.trim(), contextInfo: { externalAdReply: { title: 'galaxy𝐁𝐨𝐭 ', body: null, thumbnail: imagen2, sourceUrl: 'https://whatsapp.com/channel/0029VaBpO8M3rZZdwkGFIP33' }, mentionedJid: [m.sender] }}}, aa)
conn.relayMessage(m.chat, prep.message, { messageId: prep.key.id, mentions: [m.sender] })  
}
handler.tags = ['main']
handler.command = /^(instalarbot)/i
export default handler
