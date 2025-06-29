import pkg, { prepareWAMessageMedia } from '@whiskeysockets/baileys';
const { generateWAMessageFromContent, proto } = pkg;

const alive = async (m, Matrix) => {
  const uptimeSeconds = process.uptime();
  const days = Math.floor(uptimeSeconds / (24 * 3600));
  const hours = Math.floor((uptimeSeconds % (24 * 3600)) / 3600);
  const minutes = Math.floor((uptimeSeconds % 3600) / 60);
  const seconds = Math.floor(uptimeSeconds % 60);
  
  const prefix = /^[\\/!#.]/gi.test(m.body) ? m.body.match(/^[\\/!#.]/gi)[0] : '/';
  const cmd = m.body.startsWith(prefix) ? m.body.slice(prefix.length).toLowerCase() : '';
    if (['command', 'comman', 'commands'].includes(cmd)) {

  const uptimeMessage = `╭─────═━┈┈━═──━┈⊷
┇ ʙᴏᴛ ɴᴀᴍᴇ: *<| 𝒎𝒂𝒌𝒊𝒎𝒂-𝒎𝒅🌹*
┇ ᴠᴇʀꜱɪᴏɴ: *1*     
┇ ᴅᴇᴠᴇʟᴏᴘᴇʀ: *<| 𝙺𝙰𝚆𝙰𝙺𝙸²²7*
╰─────═━┈┈━═──━┈⊷ 

> *📄 𝒎𝒂𝒌𝒊𝒎𝒂-𝒎𝒅🌹 𝗖𝗢𝗠𝗠𝗔𝗡𝗗𝗦*

 *This command will guide*
 *You how to use me..?*
 
━━━━━📡━━━━━━ 
   *𝐒𝐘𝐒𝐓𝐄𝐌*
❏ ${prefix}𝙿𝚒𝚗𝚐
❏ ${prefix}𝙰𝚕𝚒𝚟𝚎
❏ ${prefix}𝙾𝚠𝚗𝚎𝚛
❏ ${prefix}𝙼𝚎𝚗𝚞
━━━━━📡━━━━━━ 
❏
━━━━━👨‍💻━━━━━━ 
   *𝐎𝐖𝐍𝐄𝐑*
❏${prefix}𝙹𝚘𝚒𝚗
❏${prefix}𝙻𝚎𝚊𝚟𝚎
❏${prefix}𝙱𝚕𝚘𝚌𝚔 
❏${prefix}𝚄𝚗𝚋𝚕𝚘𝚌𝚔
❏${prefix}𝚂𝚎𝚝𝚙𝚙𝚋𝚘𝚝
❏${prefix}𝙰𝚗𝚝𝚒𝚌𝚊𝚕𝚕
❏${prefix}𝚂𝚎𝚝𝚜𝚝𝚊𝚝𝚞𝚜
❏${prefix}𝚂𝚎𝚝𝚗𝚊𝚖𝚎𝚋𝚘𝚝
❏${prefix}𝙰𝚞𝚝𝚘𝚃𝚢𝚙𝚒𝚗𝚐
❏${prefix}𝙰𝚕𝚠𝚊𝚢𝚜𝙾𝚗𝚕𝚒𝚗𝚎
❏${prefix}𝙰𝚞𝚝𝚘𝚁𝚎𝚊𝚍
❏${prefix}𝙰𝚞𝚝𝚘𝚜𝚟𝚒𝚎𝚠
━━━━━👨‍💻━━━━━━ 
❏
━━━━━🌐━━━━━━ 
   *𝐆𝐏𝐓*
❏ ${prefix}𝙰𝚒
❏ ${prefix}𝙱𝚞𝚐
❏ ${prefix}𝚁𝚎𝚙𝚘𝚛𝚝
❏ ${prefix}𝙶𝚙𝚝
❏ ${prefix}𝚇𝚎𝚘𝚗
❏ ${prefix}𝙲𝚑𝚊𝚝𝚋𝚘𝚝
❏ ${prefix}𝙶𝚎𝚖𝚒𝚗𝚒
━━━━━🌐━━━━━━ 
❏ 
━━━━━🔁━━━━━━ 
  *𝐂𝐎𝐍𝐕𝐄𝐑𝐓𝐄𝐑*
❏ ${prefix}𝙰𝚃𝚃𝙿
❏ ${prefix}𝙰𝚃𝚃𝙿2
❏ ${prefix}𝙰𝚃𝚃𝙿3
❏ ${prefix}𝙴𝙱𝙸𝙽𝙰𝚁𝚈
❏ ${prefix}𝙳𝙱𝙸𝙽𝙰𝚁𝚈
❏ ${prefix}𝙴𝙼𝙾𝙹𝙸𝙼𝙸𝚇
❏ ${prefix}𝙼𝙿3
━━━━━🔁━━━━━━ 
❏
━━━━━🔠━━━━━━ 
   *𝐆𝐑𝐎𝐔𝐏* 
❏ ${prefix}𝙻𝚒𝚗𝚔𝙶𝚛𝚘𝚞𝚙
❏ ${prefix}𝚂𝚎𝚝𝚙𝚙𝚐𝚌
❏ ${prefix}𝚂𝚎𝚝𝚗𝚊𝚖𝚎
❏ ${prefix}𝚂𝚎𝚝𝚍𝚎𝚜𝚌
❏ ${prefix}𝙶𝚛𝚘𝚞𝚙
❏ ${prefix}𝙶𝚌𝚜𝚎𝚝𝚝𝚒𝚗𝚐
❏ ${prefix}𝚆𝚎𝚕𝚌𝚘𝚖𝚎
❏ ${prefix}𝙰𝚍𝚍
❏ ${prefix}𝙺𝚒𝚌𝚔
❏ ${prefix}𝙷𝚒𝚍𝚎𝚃𝚊𝚐
❏ ${prefix}𝚃𝚊𝚐𝚊𝚕𝚕
❏ ${prefix}𝙰𝚗𝚝𝚒𝙻𝚒𝚗𝚔
❏ ${prefix}𝙰𝚗𝚝𝚒𝚃𝚘𝚡𝚒𝚌
❏ ${prefix}𝙿𝚛𝚘𝚖𝚘𝚝𝚎
❏ ${prefix}𝙳𝚎𝚖𝚘𝚝𝚎
❏ ${prefix}𝙶𝚎𝚝𝚋𝚒𝚘
━━━━━🔠━━━━━━ 
❏
━━━━━📥━━━━━━ 
 *𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃𝐄𝐑𝐒*
❏${prefix}𝙰𝚙𝚔
❏${prefix}𝙵𝚊𝚌𝚎𝚋𝚘𝚘𝚔
❏${prefix}𝙼𝚎𝚍𝚒𝚊𝚏𝚒𝚛𝚎
❏${prefix}𝙿𝚒𝚗𝚝𝚎𝚛𝚎𝚜𝚝𝚍𝚕
❏${prefix}𝙶𝚒𝚝𝚌𝚕𝚘𝚗𝚎
❏${prefix}𝙶𝚍𝚛𝚒𝚟𝚎
❏${prefix}𝙸𝚗𝚜𝚝𝚊
❏${prefix}𝚈𝚝𝚖𝚙3
❏${prefix}𝚈𝚝𝚖𝚙4
❏${prefix}𝙿𝚕𝚊𝚢
❏${prefix}𝚂𝚘𝚗𝚐
❏${prefix}𝚅𝚒𝚍𝚎𝚘
❏${prefix}𝚈𝚝𝚖𝚙3𝚍𝚘𝚌
❏${prefix}𝚈𝚝𝚖𝚙4𝚍𝚘𝚌
❏${prefix}𝚃𝚒𝚔𝚝𝚘𝚔
❏${prefix}𝙷𝚠𝚊𝚒𝚏𝚞/𝚜𝚎𝚡/𝚡𝚡𝚡
━━━━━📥━━━━━━ 

━━━━━🔬━━━━━━ 
 *𝐒𝐄𝐀𝐑𝐂𝐇*
❏${prefix}𝙿𝚕𝚊𝚢
❏${prefix}𝚈𝚝𝚜
❏${prefix}𝙼𝚘𝚟𝚒𝚎
❏${prefix}𝙲𝚑𝚊𝚝𝚋𝚘𝚝
❏${prefix}𝙶𝚒𝚖𝚊𝚐𝚎
❏${prefix}𝙻𝚢𝚛𝚒𝚌𝚜
━━━━━🔬━━━━━━ 
❏
*MORE COMMANDS*
*WILL BE ADDED*
*SOON...⏰*

▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄
▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄
▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄
▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄
- 𝒎𝒂𝒌𝒊𝒎𝒂-𝒎𝒅🌹 𝙰𝚕𝙸𝚟𝙴 𝚗𝙾𝚠 -
▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄
▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄
▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄
▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄
`;

  const buttons = [
      {
        "name": "quick_reply",
        "buttonParamsJson": JSON.stringify({
          display_text: "📁 REPO",
          id: `${prefix}repo`
        })
      }
    ];

  const msg = generateWAMessageFromContent(m.from, {
    viewOnceMessage: {
      message: {
        messageContextInfo: {
          deviceListMetadata: {},
          deviceListMetadataVersion: 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: uptimeMessage
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: "> *© Powered By 𝒎𝒂𝒌𝒊𝒎𝒂-𝒎𝒅🌹*"
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            title: "",
            gifPlayback: true,
            subtitle: "",
            hasMediaAttachment: false 
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363402220977044@newsletter',
                  newsletterName: "<| 𝒎𝒂𝒌𝒊𝒎𝒂-𝒎𝒅🌹",
                  serverMessageId: 143
                }
              }
        }),
      },
    },
  }, {});

  await Matrix.relayMessage(msg.key.remoteJid, msg.message, {
    messageId: msg.key.id
  });
    }
};

export default alive;
