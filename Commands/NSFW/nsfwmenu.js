module.exports = {
    name: "nsfwmenu",
    alias: ["nsfwlist","hentaimenu","nmenu"],
    desc: "Get full NSFW List", 
    category: "Nsfw",
    usage: `hmaid`,
    react: "🍁",
    start: async (Miku, m, { prefix,NSFWstatus }) => {
  
      if (NSFWstatus == "false") return m.reply(`This group is not NSFW enabled!\n\nTo configure NSFW mode, type:\n\n*${prefix}nsfw*`);

      let ntext = `\n╭────ꕥ NSFW Menu ꕥ────╮
├
├・ 💦 ᴘᴜꜱꜱʏ, ꜱᴘʀᴇᴀᴅᴘᴜꜱꜱʏ,
├・ 💦 ɢᴇɴꜱʜɪɴ, ꜱQᴜɪʀᴛ,
├・ 💦 ɢʟᴀꜱꜱᴇꜱ, ꜱᴜɴɢʟᴀꜱꜱᴇꜱ,
├・ 💦 ꜱᴡɪᴍꜱᴜɪᴛ, ꜱᴄʜᴏᴏʟꜱᴡɪᴍꜱᴜɪᴛ,
├・ 💦 ʜᴏʟᴏ ʟɪᴠᴇ, ᴀꜱꜱ,
├・ 💦 ᴜɴᴅᴇʀᴡᴇᴀʀ, ɴɪᴘᴘʟᴇꜱ,
├・ 💦 ᴜɴᴄᴇɴꜱᴏʀᴇᴅ, ɴɪᴘᴘʟᴇꜱ,
├・ 💦 ᴜɴᴄᴇɴꜱᴏʀᴇᴅ, ꜱᴇx,
├・ 💦 ꜱᴇx2, ꜱᴇx3,
├・ 💦 ʙʟᴏɴᴅᴇ, ᴛᴡɪɴᴛᴀɪʟꜱ,
├・ 💦 ʙʀᴇᴀꜱᴛꜱ, ᴛʜɪɢʜʜɪɢʜꜱ,
├・ 💦 ꜱᴋɪʀᴛ, ɢᴀᴍᴇᴄɢ,
├・ 💦 ᴀɴɪᴍᴀʟᴇᴀʀꜱ, ꜰᴏxɢɪʀʟ,
├・ 💦 ᴅʀᴇꜱꜱ, ꜱᴄʜᴏᴏʟᴜɴɪꜰᴏʀᴍ,
├・ 💦 ᴛᴡᴏɢɪʀʟꜱ, ɢʟᴏᴠᴇꜱ,
├・ 💦 ᴠᴏᴄᴀʟᴏɪᴅ, ᴛᴏᴜʜᴏᴜ,
├・ 💦 ᴡᴇᴀᴘᴏɴ, ᴡɪᴛʜꜰʟᴏᴡᴇʀꜱ,
├・ 💦 ᴘɪɴᴋʜᴀɪʀ, ᴄʟᴏᴜᴅꜱᴠɪᴇᴡ,
├・ 💦 ᴡʜɪᴛᴇ, ᴀɴɪᴍᴀʟ,
├・ 💦 ᴛᴀɪʟ, ɴᴜᴅᴇ,
├・ 💦 ᴘᴏɴʏᴛᴀɪʟ, ʙᴇᴅ,
├・ 💦 ᴡʜɪᴛᴇ ʜᴀɪʀ, ʀɪʙʙᴏɴꜱ,
├・ 💦 ᴊᴀᴘᴀɴᴇꜱᴇᴄʟᴏᴛʜꜱ, 
├・ 💦 ʜᴀᴛꜱᴜɴᴇᴍɪᴋᴜ,
├・ 💦 ʙɪᴋɪɴɪ, ʙᴀʀᴇꜰᴏᴏᴛ,
├・ 💦 ɴᴏʙʀᴀ, ꜰᴏᴏᴅ,
├・ 💦 ᴡɪɴɢꜱ, ᴘᴀɴᴛʏʜᴏꜱᴇ,
├・ 💦 ᴏᴘᴇɴꜱʜɪʀᴛ, ʜᴇᴀᴅʙᴀɴᴅ,
├・ 💦 ᴘᴇɴɪꜱ, ᴄʟᴏꜱᴇ,
├・ 💦 ᴡᴇᴛ, ᴄᴀᴛɢɪʀʟ,
├・ 💦 ᴡᴏʟꜰɢɪʀʟ, ɴᴇᴋᴏ,
├・ 💦 ʟᴏʟɪ, ꜱᴘʀᴇᴀᴅʟᴇɢꜱ,
├・ 💦 ʙʀᴀ, ꜰᴀᴛᴇꜱᴇʀɪᴇꜱ,
├・ 💦 ᴛʀᴇᴇ, ᴇʟʙᴏᴡɢʟᴏᴠᴇꜱ,
├・ 💦 ɢʀᴇᴇɴʜᴀɪʀ, ʜᴏʀɴꜱ,
├・ 💦 ᴡɪᴛʜᴘᴇᴛᴀʟꜱ, ᴅʀᴜɴᴋ,
├・ 💦 ᴄᴜᴍ, ʜᴇᴀᴅ ᴅʀᴇꜱꜱ,
├・ 💦 ᴛɪᴇ, ꜱʜᴏʀᴛꜱ,
├・ 💦 ᴍᴀɪᴅ, ʜᴇᴀᴅᴘʜᴏɴᴇꜱ,
├・ 💦 ᴀɴᴜꜱᴠɪᴇᴡ, ɪᴅᴏʟ,
├・ 💦 ɢᴜɴ, ꜱᴛᴏᴄᴋɪɴɢꜱ,
├・ 💦 ᴛᴇᴀʀꜱ, ʙʀᴇᴀꜱᴛʜᴏʟᴅ,
├・ 💦 ɴᴇᴄᴋʟᴀᴄᴇ, ꜱᴇᴇᴛʜʀᴏᴜɢʜ,
├・ 💦 ʙᴜɴɴʏᴇᴀʀꜱ, ʙᴜɴɴʏɢɪʀʟ,
├・ 💦 ᴛᴏᴘʟᴇꜱꜱ, ʙᴇᴀᴄʜ,
├・ 💦 ᴇʀᴇᴄᴛɴɪᴘᴘʟᴇꜱ, ʏᴜʀɪ,
├・ 💦 ᴠᴀᴍᴘɪʀᴇ, ꜱʜɪʀᴛ,
├・ 💦 ᴘᴀɴᴛʏᴘᴜʟʟ, ᴛᴏʀɴᴄʟᴏᴛʜᴇꜱ,
├・ 💦 ʙᴏɴᴅᴀɢᴇ, ᴅᴇᴍᴏɴ,
├・ 💦 ʙᴇʟʟ, ꜱʜɪʀᴛʟɪꜰᴛ,
├・ 💦 ᴛᴀᴛᴛᴏᴏ, ᴄʜᴀɪɴ,
├・ 💦 ꜰʟᴀᴛᴄʜᴇꜱᴛ, ꜰɪɴɢᴇʀɪɴɢ 
├
╰──────────────────╯\n\n

 Powered By: *FantoX APIs* \n\n* API link:* \nhttps://fantox-api.vercel.app\n`

await Miku.sendMessage(m.from, {image: {url: botImage5}, caption: ntext}, { quoted: m })
    }
}