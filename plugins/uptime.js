import pkg, { prepareWAMessageMedia } from '@whiskeysockets/baileys';
const { generateWAMessageFromContent, proto } = pkg;

const alive = async (m, Matrix) => {
  const uptimeSeconds = process.uptime();
  const days = Math.floor(uptimeSeconds / (24 * 3600));
  const hours = Math.floor((uptimeSeconds % (24 * 3600)) / 3600);
  const minutes = Math.floor((uptimeSeconds % 3600) / 60);
  const seconds = Math.floor(uptimeSeconds % 60);

  const prefix = /^[\\/!#.]/gi.test(m.body) ? m.body.match(/^[\\/!#.]/gi)[0] : '/';
  const cmd = m.body.trim().toLowerCase().startsWith(prefix)
    ? m.body.trim().slice(prefix.length).toLowerCase()
    : '';

  if (['alive', 'uptime', 'runtime'].includes(cmd)) {
    const shortReply = `
*─❏─〔🌹 𝒎𝒂𝒌𝒊𝒎𝒂-𝐌ᴅ 𝐁ᴏᴛ 𝐒ᴛᴀᴛᴜꜱ 🌹 〕─❏─*
*✅ Status:* *Online & Active*
*⏱️ Uptime:* *${days}d* ${hours}h ${minutes}m ${seconds}s
*🛠️ Engine:* *MAKIMA-MD-panel*

  *⏺️𝙼𝙰𝙺𝙸𝙼𝙰 ᴜᴘᴛɪᴍᴇ⏺️*
*─❏──────────────────────❏─*
    `.trim();

    m.reply(shortReply);
  }
};

export default alive;
