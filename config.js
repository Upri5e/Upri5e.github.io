// EDIT THIS FILE: empty values stay hidden. No accounts or build tools needed.
window.PORTFOLIO = {
  email: "Hassan.khazaal.drive@gmail.com", // e.g. "you@example.com"
  linkedin: "https://www.linkedin.com/in/hassankhazaal/", // full https:// URL
  github: "https://github.com/Upri5e", // full https:// URL
  cv: "assets/Hassan_Khazal.pdf", // e.g. "assets/Hassan-Khazal-CV.pdf" (add that PDF yourself)
  // Your two game jams. Use the 11-character YouTube ID (not the whole URL).
  gameJams: [
    { 
		title: "Friction (Global Game Jam 2022)", 
		description: "Rolling ball with Rough and Smooth surface that  changes the way the ball reacts to the world and can be switched at anytime by the player. The world is also built with those two materials and is filled with hurdles and interactive components based on what material is currently being active on the ball.", 
		videoId: "ASJd2Th75Vo" , 
			links: [
				{ label: "Github", url: "https://github.com/Upri5e/Friction" }
			]
	},
    { 
		title: "Lost Souls (Global Game Jam 2021)", 
		videoId: "ZKh4n-wpZko",
		links: [
				{ label: "Google Drive", url: "https://drive.google.com/drive/folders/1FnQbTyMlbeFi2EeD6euNIHMTCyOlDzp1" }
			]	
	},
	{
		title: "Wall running demo",
		videoId: "vGSPe43t9P0",
		links: []
	}
  ],
  // Paths are relative to the website root. Add your own approved screenshots.
  posters: {
    "plastic-battlegrounds": "assets/PBG.png",
    "minimap-plugin": "",
    "vehicles": "",
    "pixoul": "assets/pixoul.png",
    "cry-of-athena": "",
    "actor-pooling": ""
  },
  // Paste the 11-character YouTube video ID, NOT the entire URL.
  videos: {
    "plastic-battlegrounds": "9bYM4bq0iPI",
    "minimap-plugin": "",
    "vehicles": "",
    "pixoul": "rr8bqWuVRLE",
    "cry-of-athena": "4oG5KPVsmxs",
    "actor-pooling": ""
  },
  // Multiple videos/screenshots: one entry per item. Empty arrays render nothing.
  // section: copy an exact section heading to place media beside that contribution.
  // Omit section to put the item below the main project video.
  media: {
    "pixoul": [
      { type: "youtube", id: "0Qql4vEDw1U", section: "Player interaction and weapons", caption: "Protube VR in pixoul planet." },
      { type: "youtube", id: "g7y5F0zfn9I", section: "Enemy AI and behaviours", caption: "Operation B players vs Enemy drones."},
      { type: "youtube", id: "mxEdw94qOuM", section: "Enemy AI and behaviours", caption: "The lift, 4 player co-op."},
    ],
    "plastic-battlegrounds": [
		  { type: "youtube", id: "mZaQuuAFshs", section: "Multiplayer and online services", caption: "Plastic Battlegrounds Early Multiplayer." },
      { type: "youtube", id: "hI1XESFooEk", section: "Multiplayer and online services", caption: "Multiplayer 1.0 release." },
      { type: "youtube", id: "uWc6U8BTcI8", section: "Vehicle and tank gameplay", caption: "PBG T34 Tank release." }
	],
    "minimap-plugin": [],
    "vehicles": [
      { type: "youtube", id: "OAW0iNrgDpw", section: "Tank steering", caption: "First look at PBG Tank steering." },
    ],
    "cry-of-athena": [
		{ type: "youtube", id: "koQxKfsUEAM", section: "Vehicles and bullet interactions", caption: "Vehicle AI Behavior." },
	],
    "actor-pooling": []
  },
  // These replace the suggested-clip captions when a video is configured.
  videoCaptions: {
    "plastic-battlegrounds": "Gameplay and systems showcase — Plastic Battlegrounds VR.",
    "minimap-plugin": "HK Diegetic Dynamic Map — plugin demonstration.",
    "vehicles": "Vehicle and tank gameplay demonstration.",
    "pixoul": "AI, encounters and gameplay from Pixoul Planet.",
    "cry-of-athena": "Cry of Athena — physical catapult demonstration.",
    "actor-pooling": "C++ actor pooling plugin — work-in-progress demonstration."
  }
};
