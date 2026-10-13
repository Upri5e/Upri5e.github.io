// EDIT THIS FILE: empty values stay hidden. No accounts or build tools needed.
window.PORTFOLIO = {
  email: "Hassan.khazaal.drive@gmail.com", // e.g. "you@example.com"
  linkedin: "https://www.linkedin.com/in/hassankhazaal/", // full https:// URL
  github: "https://github.com/Upri5e", // full https:// URL
  cv: "assets/Hassan_Khazal.pdf", // e.g. "assets/Hassan-Khazal-CV.pdf" (add that PDF yourself)
  projects: [
    {
      id: "plastic-battlegrounds",
      title: "Plastic Battlegrounds VR",
      category: "Professional work",
      engine: "Unreal Engine 4.27",
      description:
        "VR gameplay development spanning multiplayer, vehicles, spawning, player progression, teams and online services.",
      tags: ["VR", "Multiplayer", "C++"],
      colour: "lime",
      symbol: "◇"
    },
    {
      id: "pixoul",
      title: "Pixoul Planet / RobocomVR",
      category: "Professional work · 2020–2023",
      engine: "Unity",
      description:
        "Enemy AI, boss encounters and vehicle combat, plus development leadership and encounter design for Pixoul Recon.",
      tags: ["AI & combat", "VR", "Development leadership"],
      colour: "purple",
      symbol: "⊞"
    },
    {
      id: "minimap-plugin",
      title: "HK Diegetic Dynamic Map",
      category: "Personal plugin · Coming soon to Fab",
      engine: "Unreal Engine · C++",
      description:
        "A reusable minimap plugin with scene capture, points of interest and spline routes in a world-space display.",
      tags: ["C++ plugin", "UI", "Tools"],
      colour: "blue",
      symbol: "◎"
    },
    {
      id: "cry-of-athena",
      title: "Cry of Athena",
      category: "Professional work · Simulated Minds",
      engine: "Unreal Engine",
      description:
        "Enemy and vehicle AI, bullet interactions, save/load functionality and a physical catapult built with physics constraints.",
      tags: ["AI", "Physics", "Gameplay"],
      colour: "orange",
      symbol: "◇"
    },
    {
      id: "vehicles",
      title: "Vehicle & Tank Systems",
      category: "Professional work · Simulated Minds · Personal",
      engine: "Unreal Engine · Unity",
      description:
        "Fully physical, component based vehicles. Driven by AI and player controllers, with options for side wheel steering (Tanks).",
      tags: ["AI", "Physics", "Gameplay"],
      colour: "lime",
      symbol: "◎"
    },
    {
      id: "actor-pooling",
      title: "C++ Actor Pooling Plugin",
      category: "Work in progress · Coming soon to Fab",
      engine: "Unreal Engine · C++",
      description:
        "An actor pooling plugin with configurable pre-spawn counts. Replication is planned.",
      tags: ["C++ plugin", "Actor pooling", "WIP"],
      colour: "blue",
      symbol: "⊞"
    }
  ],
  // Your two game jams. Use the 11-character YouTube ID (not the whole URL).
  gameJams: [
    {
      title: "Data driven, Comic book style cutscene (UE5.2)",
      description: "Using Unreal Engines 5.2 Data tables to store the required data displayed in the cutscenes along with every scene settings(Layout directions, delays, fade in/out and many more options). This coupled with Unreal engines Slate and UMG, that displays and manipulates the data received from the data tables to the viewport based on the settings provided for each scene.",
      videoId: "XdBuWkSlWyE",
      links: []
    },
    {
      title: "Friction (Global Game Jam 2022)",
      description: "Rolling ball with Rough and Smooth surface that  changes the way the ball reacts to the world and can be switched at anytime by the player. The world is also built with those two materials and is filled with hurdles and interactive components based on what material is currently being active on the ball.",
      videoId: "ASJd2Th75Vo",
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
    "vehicles": "assets/vehicles.jpg",
    "pixoul": "assets/pixoul.png",
    "cry-of-athena": "assets/coa.jpeg",
    "actor-pooling": ""
  },
  // Paste the 11-character YouTube video ID, NOT the entire URL.
  videos: {
    "plastic-battlegrounds": "9bYM4bq0iPI",
    "minimap-plugin": "",
    "vehicles": "TcbZ5bvRLuE",
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
      { type: "youtube", id: "g7y5F0zfn9I", section: "Enemy AI and behaviours", caption: "Operation B players vs Enemy drones." },
      { type: "youtube", id: "mxEdw94qOuM", section: "Enemy AI and behaviours", caption: "The lift, 4 player co-op." },
    ],
    "plastic-battlegrounds": [
      { type: "youtube", id: "mZaQuuAFshs", section: "Multiplayer and online services", caption: "Plastic Battlegrounds Early Multiplayer." },
      { type: "youtube", id: "hI1XESFooEk", section: "Multiplayer and online services", caption: "Multiplayer 1.0 release." },
      { type: "youtube", id: "uWc6U8BTcI8", section: "Vehicle and tank gameplay", caption: "PBG T34 Tank release." }
    ],
    "minimap-plugin": [],
    "vehicles": [
      { type: "youtube", id: "OAW0iNrgDpw", section: "Tank steering", caption: "First look at PBG Tank steering." },
      { type: "youtube", id: "SEBb_NNEhAc", section: "Component-based vehicles", caption: "Vehicle obstacle avoidance in COA." },
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
