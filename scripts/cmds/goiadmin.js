module.exports = {
	config: {
		name: "goiadmin",
		author: "𝗔𝗺𝗶𝗻𝘂𝗹 𝗦𝗼𝗿𝗱𝗮𝗿",
		role: 0,
		shortDescription: " ",
		longDescription: "",
		category: "BOT",
		guide: "{pn}"
	},

onChat: function({ api, event }) {
	if (event.senderID !== "61565513061548") {
		var aid = ["61565513061548"];
		for (const id of aid) {
		if ( Object.keys(event.mentions) == id) {
			var msg = ["𝐌𝐀𝐃𝐄 𝐁𝐘 𝐍𝐄𝐇𝐀 𝐓𝐇𝐀𝐊𝐔𝐑"];
			return api.sendMessage({body: msg[Math.floor(Math.random()*msg.length)]}, event.threadID, event.messageID);
		}
		}}
},
onStart: async function({}) {
	}
};
