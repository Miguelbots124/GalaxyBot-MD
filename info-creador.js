import fetch from 'node-fetch'; 
 const handler = async (m, {conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems}) => { 
   if (usedPrefix == 'a' || usedPrefix == 'A') return; 
   try { 
     const pp = imagen1; 
     // let vn = './media/menu.mp3' 
     const img = './Menu2.jpg'; 
     const d = new Date(new Date + 3600000); 
     const locale = 'es'; 
     const week = d.toLocaleDateString(locale, {weekday: 'long'}); 
     const date = d.toLocaleDateString(locale, {day: 'numeric', month: 'long', year: 'numeric'}); 
     const _uptime = process.uptime() * 1000; 
     const uptime = clockString(_uptime); 
     const user = global.db.data.users[m.sender]; 
     const {money, joincount} = global.db.data.users[m.sender]; 
     const {exp, limit, level, role} = global.db.data.users[m.sender]; 
     const rtotalreg = Object.values(global.db.data.users).filter((user) => user.registered == true).length; 
     const more = String.fromCharCode(8206); 
     const readMore = more.repeat(850); 
     const url = global.md 
     const taguser = '@' + m.sender.split('@s.whatsapp.net')[0]; 
     const doc = ['pdf', 'zip', 'vnd.openxmlformats-officedocument.presentationml.presentation', 'vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'vnd.openxmlformats-officedocument.wordprocessingml.document']; 
     const document = doc[Math.floor(Math.random() * doc.length)]; 
     const str = `𝐂𝐑𝐄𝐀𝐃𝐎𝐑𝐄𝐒 𝐃𝐄 GALAXY𝐁𝐎𝐓 ♓

• 𝐂𝐫𝐞𝐚𝐝𝐨𝐫 𝐨𝐟𝐜: Miguel (￣▽￣)~*

𝐈𝐠: Instagram.com/
𝐍𝐮𝐦𝐞𝐫𝐨: https://Wa.me/529373853455


• 𝐒𝐨𝐩𝐨𝐫𝐭𝐞 𝐨𝐟𝐜: 𝗦𝗼𝗽𝗶𝗶 🧸

𝐈𝐠: Instagram.com/sophziix/
𝐍𝐮𝐦𝐞𝐫𝐨: Wa.me/51977835959

• 𝐂𝐨𝐥𝐚𝐛𝐨𝐫𝐚𝐝𝐨𝐫 𝐨𝐟𝐜: 𝗔𝘅 ⚜

𝐈𝐠: Instagram.com/Litopeax
𝐍𝐮𝐦𝐞𝐫𝐨: Wa.me/51929972576
  `.trim(); 
     if (m.isGroup) { 
       // await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true}) 
       const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'}; 
       conn.sendMessage(m.chat, {image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: m}); 
     } else { 
       // await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true}) 
       const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'}; 
       conn.sendMessage(m.chat, {image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: fkontak2}); 
     } 
   } catch { 
     conn.reply(m.chat, '[❕] 𝗔𝗹𝗴𝗼 𝘀𝗮𝗹𝗶𝗼 𝗺𝗮𝗹, 𝗽𝗼𝗿 𝗳𝗮𝘃𝗼𝗿 𝗿𝗲𝗽𝗼𝗿𝘁𝗲𝗹𝗼 𝗮𝗹 𝗦𝘁𝗮𝗳𝗳', m); 
   } 
 }; 
 handler.command = /^(owner|colaboradores)$/i; 
 handler.exp = 50; 
 handler.fail = null; 
 export default handler; 
 function clockString(ms) { 
   const h = isNaN(ms) ? '--' : Math.floor(ms / 3600000); 
   const m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60; 
   const s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60; 
   return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(':'); 
       }
