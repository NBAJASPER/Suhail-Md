const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_18_32_07_12_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICA1NixcbiAgICAgICAgNTMsXG4gICAgICAgIDkwLFxuICAgICAgICAxNCxcbiAgICAgICAgMTc4LFxuICAgICAgICAxNzMsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyLFxuICAgICAgICAzMSxcbiAgICAgICAgMjE4LFxuICAgICAgICAyMzMsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTc2LFxuICAgICAgICAxNzEsXG4gICAgICAgIDM1LFxuICAgICAgICAxMjMsXG4gICAgICAgIDU3LFxuICAgICAgICAxMTIsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTAwLFxuICAgICAgICA2LFxuICAgICAgICAxNDEsXG4gICAgICAgIDM0LFxuICAgICAgICAyMjksXG4gICAgICAgIDI0MSxcbiAgICAgICAgOTMsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTEwLFxuICAgICAgICAxODcsXG4gICAgICAgIDk1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzOCxcbiAgICAgICAgNzgsXG4gICAgICAgIDI1MixcbiAgICAgICAgODIsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjQsXG4gICAgICAgIDU5LFxuICAgICAgICAxNTEsXG4gICAgICAgIDk2LFxuICAgICAgICAxMCxcbiAgICAgICAgNjAsXG4gICAgICAgIDUxLFxuICAgICAgICAxNDIsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjA1LFxuICAgICAgICAyMDMsXG4gICAgICAgIDExOSxcbiAgICAgICAgNzgsXG4gICAgICAgIDM0LFxuICAgICAgICAxMzUsXG4gICAgICAgIDI1LFxuICAgICAgICAxNzUsXG4gICAgICAgIDMsXG4gICAgICAgIDExMixcbiAgICAgICAgOTIsXG4gICAgICAgIDE3MSxcbiAgICAgICAgODMsXG4gICAgICAgIDc5LFxuICAgICAgICAxNjYsXG4gICAgICAgIDgwLFxuICAgICAgICAwLFxuICAgICAgICAxNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICAxOTksXG4gICAgICAgIDE3OCxcbiAgICAgICAgODQsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTgzLFxuICAgICAgICA4MyxcbiAgICAgICAgMTQwLFxuICAgICAgICA0MixcbiAgICAgICAgMTI0LFxuICAgICAgICA4LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjgsXG4gICAgICAgIDcxLFxuICAgICAgICAxMzAsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTQxLFxuICAgICAgICAxNjMsXG4gICAgICAgIDY0LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjQ1LFxuICAgICAgICAxOSxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMjMsXG4gICAgICAgIDI3LFxuICAgICAgICAyMzUsXG4gICAgICAgIDg4LFxuICAgICAgICA3NyxcbiAgICAgICAgNDgsXG4gICAgICAgIDY3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMDUsXG4gICAgICAgIDYxLFxuICAgICAgICAxMjQsXG4gICAgICAgIDk5LFxuICAgICAgICAyOSxcbiAgICAgICAgMjI5LFxuICAgICAgICAyNyxcbiAgICAgICAgMCxcbiAgICAgICAgMzgsXG4gICAgICAgIDE1MCxcbiAgICAgICAgOTUsXG4gICAgICAgIDM1LFxuICAgICAgICA3NSxcbiAgICAgICAgMTgsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTkyLFxuICAgICAgICA3NSxcbiAgICAgICAgMjUsXG4gICAgICAgIDIzOCxcbiAgICAgICAgOTgsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNzAsXG4gICAgICAgIDAsXG4gICAgICAgIDE0MixcbiAgICAgICAgNDQsXG4gICAgICAgIDAsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNzQsXG4gICAgICAgIDIxNixcbiAgICAgICAgNzBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk2LFxuICAgICAgICA4MCxcbiAgICAgICAgMTMsXG4gICAgICAgIDcxLFxuICAgICAgICAyMjIsXG4gICAgICAgIDcsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMyxcbiAgICAgICAgODgsXG4gICAgICAgIDYxLFxuICAgICAgICAxNzcsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjA5LFxuICAgICAgICAxOTcsXG4gICAgICAgIDExNCxcbiAgICAgICAgNDIsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTI5LFxuICAgICAgICA3OSxcbiAgICAgICAgNTksXG4gICAgICAgIDE5MSxcbiAgICAgICAgODYsXG4gICAgICAgIDI5LFxuICAgICAgICAxMzEsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNzEsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTgsXG4gICAgICAgIDE3LFxuICAgICAgICAxNzYsXG4gICAgICAgIDY1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExOCxcbiAgICAgICAgMTkyLFxuICAgICAgICA0MSxcbiAgICAgICAgNDYsXG4gICAgICAgIDM5LFxuICAgICAgICA4LFxuICAgICAgICA0LFxuICAgICAgICAxOTAsXG4gICAgICAgIDgwLFxuICAgICAgICAxODgsXG4gICAgICAgIDkwLFxuICAgICAgICA2MSxcbiAgICAgICAgMTIzLFxuICAgICAgICAyNDksXG4gICAgICAgIDExLFxuICAgICAgICAxNTUsXG4gICAgICAgIDM1LFxuICAgICAgICAxMTYsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTY5LFxuICAgICAgICAyNCxcbiAgICAgICAgMjI2LFxuICAgICAgICA1LFxuICAgICAgICAxMTQsXG4gICAgICAgIDg1LFxuICAgICAgICA2NixcbiAgICAgICAgMjAsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTksXG4gICAgICAgIDIzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDMyLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICA4OFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICA3M1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjUyLFxuICAgICAgICAxLFxuICAgICAgICA4MSxcbiAgICAgICAgMjEwLFxuICAgICAgICA1OCxcbiAgICAgICAgMTE0LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNTMsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTUzLFxuICAgICAgICA4MSxcbiAgICAgICAgMCxcbiAgICAgICAgMjI0LFxuICAgICAgICAyMjQsXG4gICAgICAgIDY0LFxuICAgICAgICAyNTEsXG4gICAgICAgIDg0LFxuICAgICAgICAyMDcsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNSxcbiAgICAgICAgMTgyLFxuICAgICAgICAyMzgsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjAwLFxuICAgICAgICAxNDgsXG4gICAgICAgIDMyLFxuICAgICAgICAxOTUsXG4gICAgICAgIDczLFxuICAgICAgICA5MyxcbiAgICAgICAgMTcxLFxuICAgICAgICAyMzUsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMzYsXG4gICAgICAgIDYwLFxuICAgICAgICAxNTcsXG4gICAgICAgIDU0LFxuICAgICAgICAxNDIsXG4gICAgICAgIDgxLFxuICAgICAgICAyNSxcbiAgICAgICAgMTM0LFxuICAgICAgICAyMzksXG4gICAgICAgIDI0NSxcbiAgICAgICAgMzgsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTIyLFxuICAgICAgICAxMDksXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTMwLFxuICAgICAgICAxNjIsXG4gICAgICAgIDIwMixcbiAgICAgICAgOTAsXG4gICAgICAgIDY0LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE2LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjA5LFxuICAgICAgICAyNixcbiAgICAgICAgMTIsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjUwLFxuICAgICAgICA1XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA2NCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJ6Ujc4T0NjTkRXbHczZ2diSHRET3UrNWlwZngwV2lVSFIvL29FMW9rQ2RzPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDgxMTQ3MzY0MDhAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjNBOEQ2QzdDQkYzRTE5MEZCMkE5XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMDgwOTEyNFxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogNjEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogNjEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJqdEtOalNjU1N4eUprMi1CYmt6M3JRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjJiZTUzYjM4LTIyZWEtNDllOS04OTE1LTI5NDI2MzJiODYyYlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNzUsXG4gICAgICAyMyxcbiAgICAgIDIwOCxcbiAgICAgIDEwMCxcbiAgICAgIDc1LFxuICAgICAgMTQyLFxuICAgICAgNjgsXG4gICAgICAxMzUsXG4gICAgICAyMzUsXG4gICAgICA0MCxcbiAgICAgIDI1MSxcbiAgICAgIDgyLFxuICAgICAgNDQsXG4gICAgICAxNzYsXG4gICAgICA1LFxuICAgICAgMTMwLFxuICAgICAgMTcsXG4gICAgICAxNTQsXG4gICAgICAyMDIsXG4gICAgICA0M1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMzksXG4gICAgICAxODAsXG4gICAgICA1MyxcbiAgICAgIDQsXG4gICAgICA5LFxuICAgICAgMTM3LFxuICAgICAgOTYsXG4gICAgICAxNixcbiAgICAgIDE2MCxcbiAgICAgIDEzMixcbiAgICAgIDEyLFxuICAgICAgMjQsXG4gICAgICAyMjQsXG4gICAgICA1MSxcbiAgICAgIDIzNCxcbiAgICAgIDE5MSxcbiAgICAgIDE1NSxcbiAgICAgIDE2NSxcbiAgICAgIDQ4LFxuICAgICAgMTkxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkpXNkxWM0FIXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MTE0NzM2NDA4OjE1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxMzg4NjEwNTc0MjU0OTA6MTVAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwi2KfYqNix2KfZh9mK2YUg2YXYqNin2LHZg1wiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ016Qm1QZ05FSnp0eGJRR0dBSWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiZmZmbjEzR0s0L0hRQlF0SEZNVThxWHl5ZmtlZUROOHZtMEhMdWc0V3J6UT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJQVTUzMWRReWJoajluOGVXL1MvQTNaYTQwaVlIdTNRLzg4OC9QdGlmRWJIRkVUV1IzNnlZa1puWUFTU29JUFhacjEwbGMrTVFaa0pNY2srcGpwWUFCQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJ0YjdTek1ncWlkckNNYWpmNVRjNkRiZjJVa3NQQ3dDN2Y1ZHJEYmNrTmE3dWoyaDYybGtPb1ZweXpYMDd2TTdPbkNQdSthbHR1d0w2c2dXOWNCbjlDQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ4MTE0NzM2NDA4OjE1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDUyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJpcGhvbmVcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDgwOTEyMCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUVRWlwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRVFaLmpzb24iOiAie1wia2V5RGF0YVwiOlwiZS9MZ3YvZnVueFRlOTd1RW8wZEJ3RTk2RFhLMVZqYlVCYkF4OXVZMnJTND1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjozNzQxNzIwNzgwLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMSwwXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjA1NTU3NzkzMTlcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
