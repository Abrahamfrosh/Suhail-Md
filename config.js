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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349035247189";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_21_47_08_07_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICAxMDksXG4gICAgICAgIDgyLFxuICAgICAgICAyMDksXG4gICAgICAgIDE3MixcbiAgICAgICAgMjI3LFxuICAgICAgICAxMTIsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTM0LFxuICAgICAgICAyMjcsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjUxLFxuICAgICAgICA1MyxcbiAgICAgICAgODEsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjUyLFxuICAgICAgICA3NixcbiAgICAgICAgMTEsXG4gICAgICAgIDcyLFxuICAgICAgICAyMzEsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjQwLFxuICAgICAgICAxNTAsXG4gICAgICAgIDM1LFxuICAgICAgICA2MyxcbiAgICAgICAgMjIyLFxuICAgICAgICAxOCxcbiAgICAgICAgNDcsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNzIsXG4gICAgICAgIDgwLFxuICAgICAgICA5NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODMsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMzQsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTEzLFxuICAgICAgICAxNTYsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjI0LFxuICAgICAgICA2OCxcbiAgICAgICAgMzYsXG4gICAgICAgIDY5LFxuICAgICAgICAxMDcsXG4gICAgICAgIDIxLFxuICAgICAgICA4OSxcbiAgICAgICAgMjIwLFxuICAgICAgICA2NSxcbiAgICAgICAgMTAyLFxuICAgICAgICA0OSxcbiAgICAgICAgMjI4LFxuICAgICAgICAxMjUsXG4gICAgICAgIDExNixcbiAgICAgICAgMjQ2LFxuICAgICAgICAyOCxcbiAgICAgICAgMTExLFxuICAgICAgICAxNDcsXG4gICAgICAgIDY0LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjUsXG4gICAgICAgIDIzNixcbiAgICAgICAgOCxcbiAgICAgICAgNDlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyNCxcbiAgICAgICAgODYsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjI2LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE2MCxcbiAgICAgICAgOTEsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTMyLFxuICAgICAgICAzMCxcbiAgICAgICAgMjUzLFxuICAgICAgICAyMTEsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTY3LFxuICAgICAgICAyMzgsXG4gICAgICAgIDk1LFxuICAgICAgICA3NyxcbiAgICAgICAgOTQsXG4gICAgICAgIDExOSxcbiAgICAgICAgNDYsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMDcsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjA0LFxuICAgICAgICAyNDEsXG4gICAgICAgIDYzLFxuICAgICAgICA5MyxcbiAgICAgICAgNzUsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTM4LFxuICAgICAgICAyMzgsXG4gICAgICAgIDg0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxMixcbiAgICAgICAgMixcbiAgICAgICAgMjE3LFxuICAgICAgICAxMjcsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTU0LFxuICAgICAgICAyNDIsXG4gICAgICAgIDgyLFxuICAgICAgICA1MixcbiAgICAgICAgMTAxLFxuICAgICAgICA2OCxcbiAgICAgICAgMTg3LFxuICAgICAgICA3LFxuICAgICAgICA4NyxcbiAgICAgICAgNTYsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjM3LFxuICAgICAgICAxNixcbiAgICAgICAgMTYwLFxuICAgICAgICAxMDksXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTc1LFxuICAgICAgICA2LFxuICAgICAgICAxODEsXG4gICAgICAgIDgsXG4gICAgICAgIDMwLFxuICAgICAgICAxODAsXG4gICAgICAgIDc0LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNTMsXG4gICAgICAgIDY1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjAsXG4gICAgICAgIDQ3LFxuICAgICAgICA2LFxuICAgICAgICA5MSxcbiAgICAgICAgMTcwLFxuICAgICAgICA1NSxcbiAgICAgICAgOTIsXG4gICAgICAgIDgzLFxuICAgICAgICAyNDEsXG4gICAgICAgIDE3MixcbiAgICAgICAgNzUsXG4gICAgICAgIDU0LFxuICAgICAgICAxNTYsXG4gICAgICAgIDg1LFxuICAgICAgICA1NyxcbiAgICAgICAgMTY1LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjAzLFxuICAgICAgICAyMyxcbiAgICAgICAgMTUyLFxuICAgICAgICAyMTcsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTA5LFxuICAgICAgICA1NSxcbiAgICAgICAgMTI3LFxuICAgICAgICA0NCxcbiAgICAgICAgMTA5LFxuICAgICAgICAyMyxcbiAgICAgICAgMjE3LFxuICAgICAgICA2NixcbiAgICAgICAgMTIyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjE5LFxuICAgICAgICAxODgsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjQ1LFxuICAgICAgICA1MyxcbiAgICAgICAgNjUsXG4gICAgICAgIDU5LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE3NixcbiAgICAgICAgNTMsXG4gICAgICAgIDU5LFxuICAgICAgICAyMTAsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMzUsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTEzLFxuICAgICAgICA1NixcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTUyLFxuICAgICAgICAyMTYsXG4gICAgICAgIDUzLFxuICAgICAgICAyOSxcbiAgICAgICAgMTIzLFxuICAgICAgICAxMjAsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNDksXG4gICAgICAgIDI1MSxcbiAgICAgICAgNjMsXG4gICAgICAgIDIxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxMTRcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAzNSxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxMixcbiAgICAgICAgICA0MCxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxOFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMDQsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMyxcbiAgICAgICAgMzMsXG4gICAgICAgIDgsXG4gICAgICAgIDQwLFxuICAgICAgICAxODksXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjA3LFxuICAgICAgICA2NixcbiAgICAgICAgNzMsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTE4LFxuICAgICAgICAzMyxcbiAgICAgICAgMjUzLFxuICAgICAgICAxNDksXG4gICAgICAgIDksXG4gICAgICAgIDIwNixcbiAgICAgICAgNTEsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNTQsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTg2LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTEwLFxuICAgICAgICA3LFxuICAgICAgICA3NyxcbiAgICAgICAgMTcwLFxuICAgICAgICAxOSxcbiAgICAgICAgODQsXG4gICAgICAgIDEyLFxuICAgICAgICAyMSxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNTcsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTkyLFxuICAgICAgICAyMzcsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMzgsXG4gICAgICAgIDkyLFxuICAgICAgICAxNzEsXG4gICAgICAgIDg3LFxuICAgICAgICAyOSxcbiAgICAgICAgOTgsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTgxLFxuICAgICAgICAxODksXG4gICAgICAgIDM1LFxuICAgICAgICAxMTAsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTM3LFxuICAgICAgICA5MyxcbiAgICAgICAgMTcxLFxuICAgICAgICA4MCxcbiAgICAgICAgNTgsXG4gICAgICAgIDQ1LFxuICAgICAgICAyOSxcbiAgICAgICAgMTk1LFxuICAgICAgICAyNyxcbiAgICAgICAgM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMzQsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiODV6T0U0eXVKcHozRkQvYzdLRVZuTmR4WDY3aFFVd1haNitoaG1hbjlhRT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiQXd6REZhU2xRb3lMcFNudnJVN1Y0UVwiLFxuICBcInBob25lSWRcIjogXCIxMWM1OGYyMi03NTA2LTQyNTQtODhlMC1iN2U1MWFiOWQxYWZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjIwLFxuICAgICAgMTM0LFxuICAgICAgMTA5LFxuICAgICAgMjQzLFxuICAgICAgODIsXG4gICAgICAxNTcsXG4gICAgICA3MCxcbiAgICAgIDE1OCxcbiAgICAgIDIxNixcbiAgICAgIDEwOSxcbiAgICAgIDE4NixcbiAgICAgIDE5MyxcbiAgICAgIDIxOSxcbiAgICAgIDIwOCxcbiAgICAgIDEzNSxcbiAgICAgIDEyNixcbiAgICAgIDIzOSxcbiAgICAgIDIyOCxcbiAgICAgIDIxOSxcbiAgICAgIDI0OFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNTUsXG4gICAgICAzOSxcbiAgICAgIDIwOCxcbiAgICAgIDExNSxcbiAgICAgIDk4LFxuICAgICAgODEsXG4gICAgICA2OSxcbiAgICAgIDE4NyxcbiAgICAgIDEyMixcbiAgICAgIDY5LFxuICAgICAgMTQ4LFxuICAgICAgMTA1LFxuICAgICAgODcsXG4gICAgICAxMTcsXG4gICAgICAyMDksXG4gICAgICA4NCxcbiAgICAgIDMsXG4gICAgICAyMDcsXG4gICAgICA1NixcbiAgICAgIDI5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkxXRllaQlc0XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MDM1MjQ3MTg5OjRAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE4MTQ0NTYyNDY1NjA3MDo0QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0lmRzBMOENFT0hXejdVR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwibzZ2eGljb3ZYNU10ME5IcUNFb1JPVDZoQnlPWU03Snk0bmpDRlhmU2FXST1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJqekdGRVJiVnBGTXF2dHRRR3haY1pxSGZTbUo4SmhUeGcydlhtWm5LTG1oRHdxTUtDTXNyMUF3Yy9HOGYzdHBmak1zcEl1R3RZTEtKU1ptYXpFSnhBdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJ1WjhTQWFDQkV0czZ4QTBDaFpmVFlHQjM3aHE5MmgwSDZhOEtxTVdtazBIcjFISzh2RS9DTG5qdU5Zcm55Z2FzZHRmTDc1cTREOEJsR0dBMW1WWHBDdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MDM1MjQ3MTg5OjRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDk4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjMwNjcyMzZcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


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
