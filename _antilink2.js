let linkRegex = /https:/i
export async function before(m, { isAdmin, isBotAdmin, text }) {
if (m.isBaileys && m.fromMe)
return !0
if (!m.isGroup) return !1
let chat = global.db.data.chats[m.chat]
let delet = m.key.participant
let bang = m.key.id
const user = `@${m.sender.split`@`[0]}`;
let bot = global.db.data.settings[this.user.jid] || {}
const isGroupLink = linkRegex.exec(m.text)
if (chat.antiLink2 && isGroupLink && !isAdmin) {
if (isBotAdmin) {
const linkThisGroup = `https://chat.whatsapp.com/${await this.groupInviteCode(m.chat)}`
const linkThisGroup2 = `https://www.youtube.com/`
const linkThisGroup3 = `https://youtu.be/`
if (m.text.includes(linkThisGroup)) return !0
if (m.text.includes(linkThisGroup2)) return !0
if (m.text.includes(linkThisGroup3)) return !0
}    
await conn.sendMessage(m.chat, {text: `*「 LINK DETECTADO 」*\n\n${user} 🤨 Rompiste las reglas del Grupo seras exterminado ☠️....`, mentions: [m.sender]}, {quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
//await conn.reply(m.chat, `*「 𝘼𝙉𝙏𝙄 𝙇𝙄𝙉𝙆𝙎 」*\n\n*𝘾𝙝𝙚, ${await this.getName(m.sender)} 𝙀𝙨𝙤 𝙣𝙤 𝙨𝙚 𝙥𝙚𝙧𝙢𝙞𝙩𝙚 𝙧𝙖𝙩𝙖, 𝙧𝙤𝙢𝙥𝙞𝙨𝙩𝙚 𝙡𝙖 𝙧𝙚𝙜𝙡𝙖𝙨 𝙙𝙚𝙡 𝙜𝙧𝙪𝙥𝙤 𝙨𝙚𝙧𝙖́ 𝙚𝙡𝙞𝙢𝙞𝙣𝙖𝙙𝙤 🤑....!!*${isBotAdmin ? '' : '\n\n*[❗𝐈𝐍𝐅𝐎❗] 𝑯𝒆𝒚 𝒒𝒖𝒆 𝒔𝒂𝒍𝒗𝒂𝒓𝒕𝒆 puto 𝒆𝒍 𝒃𝒐𝒕 𝒏𝒐 𝒆𝒔 𝒂𝒅𝒎𝒊𝒏 :v*'}`, null, { mentions: [m.sender] } ) 
if (!isBotAdmin) return m.reply('*Te salvaste puto, no soy admin no te puedo eliminar*')  
if (isBotAdmin) {
await conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})
let responseb = await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
if (responseb[0].status === "404") return
} else if (!bot.restrict) return m.reply('*esta ves te salvaste, mi creador no tiene activo el (enable restrict)*')
}
return !0
}
