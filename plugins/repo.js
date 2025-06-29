import config from '../../config.cjs';
import fetch from 'node-fetch'; // Ensure you have this installed

const repo = async (m, sock) => {
  const prefix = config.PREFIX;
  const cmd = m.body.startsWith(prefix) ? m.body.slice(prefix.length).split(' ')[0].toLowerCase() : '';

  if (cmd === "repo") {
    await m.React('💫'); // A gem for a precious repo!
    const repoUrl = 'https://github.com/kawaki2000/Makima-MD';
    const imageUrl = 'https://files.catbox.moe/yov3lg.png'; // ❗ REPLACE WITH YOUR ACTUAL IMAGE URL

    try {
      const apiUrl = `https://api.github.com/repos/kawaki2000/Makima-MD`;
      const response = await fetch(apiUrl);
      const data = await response.json();

      if (data && data.forks_count !== undefined && data.stargazers_count !== undefined) {
        const stylishMessage = {
          image: { url: imageUrl },
          caption: `
╭───『 𝒎𝒂𝒌𝒊𝒎𝒂-𝒎𝒅🌹 REPO 』───⳹
│
│🚀 *Explore the Innovation Hub!*
│
│ 📦 *Repository*: ${repoUrl}   
│ 👑 *Owner*: KAWAKI227
│ ⭐ *Stars*: \`${data.stargazers_count}\` 
│ ⑂ *Forks*: \`${data.forks_count}\`  
│ 🔗 *URL*: https://chat.whatsapp.com/Jlb1pobu4GGK0UZwi4toSe
│
│ 📝 *Description*: This is ultimate AI powered multi device third party whatsapp bot
│ 🤝 *Join the Community!* 
│   Contribute & Shape the Future!  
│𝙺𝙰𝚆𝙰𝙺𝙸²²7
╰────────────────⳹
> *© Powered By 𝒎𝒂𝒌𝒊𝒎𝒂-𝒎𝒅🌹
`.trim(),
        };

        sock.sendMessage(m.from, stylishMessage, { quoted: m });
      } else {
        sock.sendMessage(m.from, { text: '⚠️ Could not retrieve full repo details. Please try again later. 🥺', quoted: m });
      }
    } catch (error) {
      console.error("Error fetching repo info:", error);
      sock.sendMessage(m.from, { text: '🚨 Error encountered while fetching repo data. 😢', quoted: m });
    } finally {
      await m.React('✅');
    }
  }
};

export default repo;
