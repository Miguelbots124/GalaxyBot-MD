import { sticker } from '../lib/sticker.js'
import uploadFile from '../lib/uploadFile.js'
import uploadImage from '../lib/uploadImage.js'
import { webp2png } from '../lib/webp2mp4.js'

let handler = async (m, { conn, args, usedPrefix, command, text }) => {
let stiker = false
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let autor = await conn.getName(who)
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || q.mediaType || ''

if (!/webp|image|video/g.test(mime) && !text) return m.reply(`*❌ 𝖤𝖱𝖱𝖮𝖱 ❌*\n*(𝖭𝗈 𝗌𝖾 𝗉𝗎𝖽𝗈 𝖼𝗋𝖾𝖺𝗋 𝗍𝗎 𝗌𝗍𝗂𝖼𝗄𝖾𝗋)*\n\n*⚠️ 𝖨𝗇𝗍𝖾𝗇𝗍𝖺 𝗋𝖾𝗌𝗉𝗈𝗇𝖽𝗂𝖾𝗇𝖽𝗈 𝖺 𝗎𝗇𝖺 𝖿𝗈𝗍𝗈, 𝗏𝗂𝖽𝖾𝗈 𝗈 𝗀𝗂𝖿𝗍 𝖼𝗈𝗇 “.𝗌”*`)
if (/video/g.test(mime)) if ((q.msg || q).seconds > 10) return m.reply('*⚠️ El Video No Puede Durar Mas De 6 Segundos*')

if (/webp|image|video/g.test(mime)) {
let img = await q.download?.()
let out
stiker = await sticker(img, false, global.packname, global.author)
await conn.reply(m.chat, `‼️ 𝖢𝖠𝖫𝖬𝖠 𝖡𝖱𝖮 ‼️

🤖🔧 𝖣𝖺𝗆𝖾 𝗎𝗇 𝗆𝗈𝗆𝖾𝗇𝗍𝗈, 𝖾𝗌𝗍𝗈𝗒 𝖼𝗋𝖾𝖺𝗇𝖽𝗈 𝗍𝗎 𝗌𝗍𝗂𝖼𝗄𝖾𝗋…

☁️ 𝖤𝗏𝗂𝗍𝖺 𝖾𝗅 𝗌𝗉𝖺𝗆 ✋🏻`, m)

if (!stiker) {
if (/webp/g.test(mime)) out = await webp2png(img)
else if (/image/g.test(mime)) out = await uploadImage(img)
else if (/video/g.test(mime)) out = await uploadFile(img)
if (typeof out !== 'string') out = await uploadImage(img)
stiker = await sticker(false, out, global.packname, global.author)

if (!stiker) errorMessage = 'ERROR'
}} else if (args[0]) {
if (isUrl(args[0])) stiker = await sticker(false, args[0], global.packname, global.author)
else return m.reply('*⚠️ EL ENLACE / URL / LINK NO ES VÁLIDO*')}

if (stiker) {
conn.sendFile(m.chat, stiker, 'sticker.webp', '', m)
} else {
console.log(stiker)
}}

handler.command = /^(s(tickers?)?(image|video|gif|img)?)$/i
export default handler

const isUrl = (text) => {
return text.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)(jpe?g|gif|png)/, 'gi'))}
