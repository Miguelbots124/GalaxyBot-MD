let media = './media/menus/Menu4paypal.jpg'
let handler = async (m, { conn, command }) => {
let pp = './src/apoyo.jpg'
/*
//await conn.sendButton(m.chat, wm, `https://paypal.me/OficialGD`, pp, m)
await conn.sendButton(m.chat, ``, `https://paypal.me/OficialGD`, pp, [['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ ☘️', `/menu`]], m) //[['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ ☘️', `/menu`]]
  */
let name = await conn.getName(m.sender)
await conn.sendMessage(m.chat, { 
text: `*╭╼╼╼╼╼╼[ 👑 DONACION 👑 ]╾╾╾╾╾╾╾*
*┇ 👑 𝘏𝘰𝘭𝘢 ${name} 👋*
*┇ 𝘛𝘦 𝘢𝘨𝘳𝘢𝘥𝘦𝘻𝘤𝘰, 𝘱𝘰𝘳 𝘢𝘺𝘶𝘥𝘢𝘳𝘮𝘦 𝘺 𝘱𝘰𝘳 𝘶𝘴𝘢𝘳 𝘮𝘪 𝘣𝘰𝘵*
*┇ 𝘴𝘪 𝘲𝘶𝘪𝘦𝘳𝘦 𝘢𝘱𝘰𝘺𝘢𝘳 𝘢 𝘦𝘴𝘵𝘦 𝘱𝘳𝘰𝘺𝘦𝘤𝘵𝘰 𝘱𝘢𝘳𝘢 𝘲𝘶𝘦 𝘴𝘪𝘨𝘢𝘯 𝘢𝘤𝘵𝘶𝘢𝘭𝘪𝘻𝘢𝘥𝘰 𝘴𝘦𝘳*
*┇ 𝘭𝘰𝘴 𝘱𝘶𝘦𝘥𝘦 𝘩𝘢𝘤𝘦𝘳 𝘢𝘤𝘭𝘢𝘷𝘦 𝘥𝘦 𝘮𝘦𝘳𝘤𝘢𝘥𝘰 𝘱𝘢𝘨𝘰 𝘢𝘳𝘨*
*┇ • 𝘈𝘭𝘪𝘢𝘴 :* galaxybot
*┇ • 𝘊𝘝𝘜 :* 
*┇*
*┇ 𝘘𝘶𝘪𝘦𝘳𝘦 𝘢𝘱𝘰𝘺𝘢𝘳 𝘥𝘦 𝘰𝘵𝘳𝘢 𝘧𝘰𝘳𝘮𝘢 𝘱𝘶𝘦𝘥𝘦 𝘥𝘰𝘯𝘢𝘳 𝘶𝘯 𝘯𝘶́𝘮𝘦𝘳𝘰*
*┇ 𝘱𝘢𝘳𝘢 𝘲𝘶𝘦 𝘴𝘦𝘢 𝘣𝘰𝘵, 𝘩𝘢𝘣𝘭𝘢𝘳 𝘤𝘰𝘯 𝘮𝘪 𝘤𝘳𝘦𝘢𝘥𝘰𝘳.*https://wa.me/529373853455
*┇ 𝘛𝘢𝘮𝘣𝘪𝘦́𝘯 𝘱𝘶𝘦𝘥𝘦 𝘢𝘱𝘰𝘺𝘢𝘳 𝘯𝘶𝘦𝘴𝘵𝘳𝘢 𝘳𝘦𝘥𝘦𝘴 𝘴𝘰𝘤𝘪𝘢𝘭𝘦𝘴 👇*
*┃* ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
*┃* *ʏᴏᴜᴛᴜʙᴇ | sᴜsᴄʀɪʙɪʀᴛᴇ 🔕*
*┃*  *$
*┃* ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
*┃*  *ɢɪᴛʜᴜʙ 🌟*
*┃*  *${
*┃* ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
*┃*  *ᴛɪᴋᴛᴏᴋ* 
*┃*  *${
*┃* ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
*┃*   *ғᴀᴄᴇʙᴏᴏᴋ*
*┃* *
*┃* ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
*┃*  *ᴀɢʀᴀᴄɪᴍɪᴇɴᴛᴏs:*
*┃* *ɢᴀʟᴀxʏʙᴏᴛ-ᴍᴅ ᴛɪᴇɴᴇ ғᴜɴᴄɪᴏɴᴇs ǫᴜᴇ*
*┃* *ᴘᴇʀᴛᴇɴᴇᴢᴄᴀɴ ᴀ ʟᴀs sɪɢᴜᴇɴᴛᴇs ᴇᴍᴘʀᴇsᴀs*
*┃* *ᴏʀɢᴀɴɪᴢᴀᴄɪᴏɴ(ᴇs) ᴘᴇʀsᴏɴᴀ(s):*
*┃* ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
*┃* *ᴛʜᴇ-ᴍʏsᴛɪᴄʙᴏᴛ-ᴍᴅ*
*┃* *https://github.com/BrunoSobrino*
*┃* ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
*┃* *ɢᴀᴛᴀʙᴏᴛ-ᴍᴅ*
*┃* *https://github.com/GataNina-Li/GataBot-MD*
*┃* *ɢʀᴀᴄɪᴀs!!*
*┗ ┅ ━━━━━━━━━ ┅ ━*`, 
contextInfo:{
forwardingScore: 9999999,
isForwarded: true, 
mentionedJid:[m.sender],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"thumbnail": imagen3, 
"title": 'ᴾᵘᵉᵈᵉ ᵃᵖᵒʸᵃʳᵐᵉ ᶜᵒᵐᵖᵃʳᵗᶦᵉⁿᵈᵒ ᵉˢᵗᵒˢ ʸ ˢᶦ ᵗᵉ ᵃᵍʳᵃᵈᵃ ᵉˡ ᴮᵒᵗ ʳᵉᵍᵃˡᵃʳᵐᵉ ᵘⁿᵃ ⭐ ᴳʳᵃᶜᶦᵃˢ', 
"containsAutoReply": true,
"mediaType": 1, 
"mediaUrl": md, 
"sourceUrl": md, 
}}}, { quoted: m })
// await conn.sendButton(m.chat, `a`, `https://paypal.me/OficialGD`, pp, [['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ ☘️', `/menu`]], m) //[['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ ☘️', `/menu`]]
/*await conn.sendHydrated(m.chat, str, wm, media, 'https://github.com/elrebelde21/The-LoliBot-MD', 'ɢɪᴛʜᴜʙ', null, null, [
['𝙂𝙧𝙪𝙥𝙤𝙨 𝙊𝙛𝙞𝙘𝙞𝙖𝙡𝙚𝙨 🔰', '.grupos'],
['𝘾𝙧𝙚𝙖𝙙𝙤𝙧 💗', '#owner'],
['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ ☘️', '/menu']
], m,)}*/
}
handler.command = /^dona(te|si)|donar|apoyar|paypal|donating|creditos$/i
handler.exp = 80
handler.register = true
export default handler
