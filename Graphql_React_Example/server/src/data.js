let data = { users: [], posts: [], comments: [] };
data.users = [
	{
		id: 1,
		fullName: "Ilario Eggle",
		photoUrl: "https://randomuser.me/api/portraits/men/55.jpg",
	},
	{
		id: 2,
		fullName: "Ernst Maron",
		photoUrl: "https://randomuser.me/api/portraits/men/46.jpg",
	},
	{
		id: 3,
		fullName: "Ruthy Jeff",
		photoUrl: "https://randomuser.me/api/portraits/men/69.jpg",
	},
	{
		id: 4,
		fullName: "Chelsae Climar",
		photoUrl: "https://randomuser.me/api/portraits/men/73.jpg",
	},
	{
		id: 5,
		fullName: "Dorena Mapam",
		photoUrl: "https://randomuser.me/api/portraits/men/16.jpg",
	},
	{
		id: 6,
		fullName: "Aggi Whiscard",
		photoUrl: "https://randomuser.me/api/portraits/women/28.jpg",
	},
	{
		id: 7,
		fullName: "Billie Brear",
		photoUrl: "https://randomuser.me/api/portraits/women/32.jpg",
	},
	{
		id: 8,
		fullName: "Philippa Scurry",
		photoUrl: "https://randomuser.me/api/portraits/women/32.jpg",
	},
	{
		id: 9,
		fullName: "Obie Bool",
		photoUrl: "https://randomuser.me/api/portraits/women/12.jpg",
	},
	{
		id: 10,
		fullName: "Eirena Caslett",
		photoUrl: "https://randomuser.me/api/portraits/women/53.jpg",
	},
];

data.posts = [
	{
		id: 1,
		title: "Ice Quake ",
		description:
			"Beneath the Alaskan landscape, the melting permafrost is about to drastically alter the tranquil scenery. As the permafrost thaws, underground rivers of volatile liquid Methane are created, causing a succession of violent and destructive earthquakes. It's a race against time to stop the deadly rivers before they lead to a catastrophic explosion that threatens the planet.",
		user_id: 6,
	},
	{
		id: 2,
		title: "Lentsu",
		user_id: 1,
		description:
			"Beneath the Alaskan landscape, the melting permafrost is about to drastically alter the tranquil scenery. As the permafrost thaws, underground rivers of volatile liquid Methane are created, causing a succession of violent and destructive earthquakes. It's a race against time to stop the deadly rivers before they lead to a catastrophic explosion that threatens the planet.",
	},
	{
		id: 3,
		title: "To Be or Not to Be",
		user_id: 10,
		description:
			"Beneath the Alaskan landscape, the melting permafrost is about to drastically alter the tranquil scenery. As the permafrost thaws, underground rivers of volatile liquid Methane are created, causing a succession of violent and destructive earthquakes. It's a race against time to stop the deadly rivers before they lead to a catastrophic explosion that threatens the planet.",
	},
	{
		id: 4,
		title: "Patrice O'Neal: Elephant in the Room",
		user_id: 3,
		description:
			"Beneath the Alaskan landscape, the melting permafrost is about to drastically alter the tranquil scenery. As the permafrost thaws, underground rivers of volatile liquid Methane are created, causing a succession of violent and destructive earthquakes. It's a race against time to stop the deadly rivers before they lead to a catastrophic explosion that threatens the planet.",
	},
	{
		id: 5,
		title: "Soul Men",
		user_id: 5,
		description:
			"Beneath the Alaskan landscape, the melting permafrost is about to drastically alter the tranquil scenery. As the permafrost thaws, underground rivers of volatile liquid Methane are created, causing a succession of violent and destructive earthquakes. It's a race against time to stop the deadly rivers before they lead to a catastrophic explosion that threatens the planet.",
	},
	{
		id: 6,
		title: "The Red Inn",
		user_id: 8,
		description:
			"Beneath the Alaskan landscape, the melting permafrost is about to drastically alter the tranquil scenery. As the permafrost thaws, underground rivers of volatile liquid Methane are created, causing a succession of violent and destructive earthquakes. It's a race against time to stop the deadly rivers before they lead to a catastrophic explosion that threatens the planet.",
	},
	{
		id: 7,
		title: "28 Days",
		user_id: 9,
		description:
			"Beneath the Alaskan landscape, the melting permafrost is about to drastically alter the tranquil scenery. As the permafrost thaws, underground rivers of volatile liquid Methane are created, causing a succession of violent and destructive earthquakes. It's a race against time to stop the deadly rivers before they lead to a catastrophic explosion that threatens the planet.",
	},
	{
		id: 8,
		title: "Sparks",
		user_id: 6,
		description:
			"Beneath the Alaskan landscape, the melting permafrost is about to drastically alter the tranquil scenery. As the permafrost thaws, underground rivers of volatile liquid Methane are created, causing a succession of violent and destructive earthquakes. It's a race against time to stop the deadly rivers before they lead to a catastrophic explosion that threatens the planet.",
	},
	{
		id: 9,
		title: "Maniacts",
		user_id: 9,
		description:
			"Beneath the Alaskan landscape, the melting permafrost is about to drastically alter the tranquil scenery. As the permafrost thaws, underground rivers of volatile liquid Methane are created, causing a succession of violent and destructive earthquakes. It's a race against time to stop the deadly rivers before they lead to a catastrophic explosion that threatens the planet.",
	},
	{
		id: 10,
		title: "Last Sunset, The",
		user_id: 8,
		description:
			"Beneath the Alaskan landscape, the melting permafrost is about to drastically alter the tranquil scenery. As the permafrost thaws, underground rivers of volatile liquid Methane are created, causing a succession of violent and destructive earthquakes. It's a race against time to stop the deadly rivers before they lead to a catastrophic explosion that threatens the planet.",
	},
	{
		id: 11,
		title: "Good News",
		user_id: 1,
		description:
			"Beneath the Alaskan landscape, the melting permafrost is about to drastically alter the tranquil scenery. As the permafrost thaws, underground rivers of volatile liquid Methane are created, causing a succession of violent and destructive earthquakes. It's a race against time to stop the deadly rivers before they lead to a catastrophic explosion that threatens the planet.",
	},
	{
		id: 12,
		title: "Express, The",
		user_id: 9,
		description:
			"Beneath the Alaskan landscape, the melting permafrost is about to drastically alter the tranquil scenery. As the permafrost thaws, underground rivers of volatile liquid Methane are created, causing a succession of violent and destructive earthquakes. It's a race against time to stop the deadly rivers before they lead to a catastrophic explosion that threatens the planet.",
	},
	{
		id: 13,
		title: "Somebody to Love",
		user_id: 4,
		description:
			"Beneath the Alaskan landscape, the melting permafrost is about to drastically alter the tranquil scenery. As the permafrost thaws, underground rivers of volatile liquid Methane are created, causing a succession of violent and destructive earthquakes. It's a race against time to stop the deadly rivers before they lead to a catastrophic explosion that threatens the planet.",
	},
	{
		id: 14,
		title: "Strange Case of the End of Civilization as We Know It, The",
		user_id: 4,
		description:
			"Beneath the Alaskan landscape, the melting permafrost is about to drastically alter the tranquil scenery. As the permafrost thaws, underground rivers of volatile liquid Methane are created, causing a succession of violent and destructive earthquakes. It's a race against time to stop the deadly rivers before they lead to a catastrophic explosion that threatens the planet.",
	},
	{
		id: 15,
		title: "Woman on the Beach, The",
		user_id: 8,
		description:
			"Beneath the Alaskan landscape, the melting permafrost is about to drastically alter the tranquil scenery. As the permafrost thaws, underground rivers of volatile liquid Methane are created, causing a succession of violent and destructive earthquakes. It's a race against time to stop the deadly rivers before they lead to a catastrophic explosion that threatens the planet.",
	},
	{
		id: 16,
		title: "Three Steps Above Heaven (Tres metros sobre el cielo)",
		user_id: 4,
		description:
			"Beneath the Alaskan landscape, the melting permafrost is about to drastically alter the tranquil scenery. As the permafrost thaws, underground rivers of volatile liquid Methane are created, causing a succession of violent and destructive earthquakes. It's a race against time to stop the deadly rivers before they lead to a catastrophic explosion that threatens the planet.",
	},
	{
		id: 17,
		title: "Loves of a Blonde (Lásky jedné plavovlásky)",
		user_id: 10,
		description:
			"Beneath the Alaskan landscape, the melting permafrost is about to drastically alter the tranquil scenery. As the permafrost thaws, underground rivers of volatile liquid Methane are created, causing a succession of violent and destructive earthquakes. It's a race against time to stop the deadly rivers before they lead to a catastrophic explosion that threatens the planet.",
	},
	{
		id: 18,
		title: "Fresh",
		user_id: 8,
		description:
			"Beneath the Alaskan landscape, the melting permafrost is about to drastically alter the tranquil scenery. As the permafrost thaws, underground rivers of volatile liquid Methane are created, causing a succession of violent and destructive earthquakes. It's a race against time to stop the deadly rivers before they lead to a catastrophic explosion that threatens the planet.",
	},
	{
		id: 19,
		title: "Vendetta",
		user_id: 7,
		description:
			"Beneath the Alaskan landscape, the melting permafrost is about to drastically alter the tranquil scenery. As the permafrost thaws, underground rivers of volatile liquid Methane are created, causing a succession of violent and destructive earthquakes. It's a race against time to stop the deadly rivers before they lead to a catastrophic explosion that threatens the planet.",
	},
	{
		id: 20,
		title: "Diary of a Lost Girl (Tagebuch einer Verlorenen)",
		user_id: 4,
		description:
			"Beneath the Alaskan landscape, the melting permafrost is about to drastically alter the tranquil scenery. As the permafrost thaws, underground rivers of volatile liquid Methane are created, causing a succession of violent and destructive earthquakes. It's a race against time to stop the deadly rivers before they lead to a catastrophic explosion that threatens the planet.",
	},
	{
		id: 21,
		title: "Bush's Brain",
		user_id: 6,
		description:
			"Beneath the Alaskan landscape, the melting permafrost is about to drastically alter the tranquil scenery. As the permafrost thaws, underground rivers of volatile liquid Methane are created, causing a succession of violent and destructive earthquakes. It's a race against time to stop the deadly rivers before they lead to a catastrophic explosion that threatens the planet.",
	},
	{
		id: 22,
		title: "Jungle Holocaust (Ultimo mondo cannibale)",
		user_id: 6,
		description:
			"Beneath the Alaskan landscape, the melting permafrost is about to drastically alter the tranquil scenery. As the permafrost thaws, underground rivers of volatile liquid Methane are created, causing a succession of violent and destructive earthquakes. It's a race against time to stop the deadly rivers before they lead to a catastrophic explosion that threatens the planet.",
	},
	{
		id: 23,
		title: "Lassie Come Home",
		user_id: 1,
		description:
			"Beneath the Alaskan landscape, the melting permafrost is about to drastically alter the tranquil scenery. As the permafrost thaws, underground rivers of volatile liquid Methane are created, causing a succession of violent and destructive earthquakes. It's a race against time to stop the deadly rivers before they lead to a catastrophic explosion that threatens the planet.",
	},
	{
		id: 24,
		title: "Body Snatchers",
		user_id: 2,
		description:
			"Beneath the Alaskan landscape, the melting permafrost is about to drastically alter the tranquil scenery. As the permafrost thaws, underground rivers of volatile liquid Methane are created, causing a succession of violent and destructive earthquakes. It's a race against time to stop the deadly rivers before they lead to a catastrophic explosion that threatens the planet.",
	},
	{
		id: 25,
		title: "Lemon Tree",
		user_id: 4,
		description:
			"Beneath the Alaskan landscape, the melting permafrost is about to drastically alter the tranquil scenery. As the permafrost thaws, underground rivers of volatile liquid Methane are created, causing a succession of violent and destructive earthquakes. It's a race against time to stop the deadly rivers before they lead to a catastrophic explosion that threatens the planet.",
	},
	{
		id: 26,
		title: "Company Men, The",
		user_id: 6,
		description:
			"Beneath the Alaskan landscape, the melting permafrost is about to drastically alter the tranquil scenery. As the permafrost thaws, underground rivers of volatile liquid Methane are created, causing a succession of violent and destructive earthquakes. It's a race against time to stop the deadly rivers before they lead to a catastrophic explosion that threatens the planet.",
	},
	{
		id: 27,
		title: "Halls of Montezuma",
		user_id: 1,
		description:
			"Beneath the Alaskan landscape, the melting permafrost is about to drastically alter the tranquil scenery. As the permafrost thaws, underground rivers of volatile liquid Methane are created, causing a succession of violent and destructive earthquakes. It's a race against time to stop the deadly rivers before they lead to a catastrophic explosion that threatens the planet.",
	},
	{
		id: 28,
		title: "Newton Boys, The",
		user_id: 1,
		description:
			"Beneath the Alaskan landscape, the melting permafrost is about to drastically alter the tranquil scenery. As the permafrost thaws, underground rivers of volatile liquid Methane are created, causing a succession of violent and destructive earthquakes. It's a race against time to stop the deadly rivers before they lead to a catastrophic explosion that threatens the planet.",
	},
	{
		id: 29,
		title: "Source, The",
		user_id: 2,
		description:
			"Beneath the Alaskan landscape, the melting permafrost is about to drastically alter the tranquil scenery. As the permafrost thaws, underground rivers of volatile liquid Methane are created, causing a succession of violent and destructive earthquakes. It's a race against time to stop the deadly rivers before they lead to a catastrophic explosion that threatens the planet.",
	},
	{
		id: 30,
		title: "Daddy Long Legs",
		user_id: 6,
		description:
			"Beneath the Alaskan landscape, the melting permafrost is about to drastically alter the tranquil scenery. As the permafrost thaws, underground rivers of volatile liquid Methane are created, causing a succession of violent and destructive earthquakes. It's a race against time to stop the deadly rivers before they lead to a catastrophic explosion that threatens the planet.",
	},
];

data.comments = [
	{
		id: 1,
		text: "redefine visionary supply-chains",
		post_id: 25,
	},
	{
		id: 2,
		text: "benchmark holistic metrics",
		post_id: 26,
	},
	{
		id: 3,
		text: "redefine end-to-end methodologies",
		post_id: 11,
	},
	{
		id: 4,
		text: "synergize strategic communities",
		post_id: 29,
	},
	{
		id: 5,
		text: "seize robust interfaces",
		post_id: 3,
	},
	{
		id: 6,
		text: "engage cutting-edge functionalities",
		post_id: 3,
	},
	{
		id: 7,
		text: "recontextualize distributed interfaces",
		post_id: 16,
	},
	{
		id: 8,
		text: "optimize killer niches",
		post_id: 5,
	},
	{
		id: 9,
		text: "enable intuitive networks",
		post_id: 7,
	},
	{
		id: 10,
		text: "envisioneer 24/365 platforms",
		post_id: 10,
	},
	{
		id: 11,
		text: "expedite distributed web-readiness",
		post_id: 24,
	},
	{
		id: 12,
		text: "scale e-business interfaces",
		post_id: 12,
	},
	{
		id: 13,
		text: "engineer next-generation interfaces",
		post_id: 3,
	},
	{
		id: 14,
		text: "reinvent global e-business",
		post_id: 11,
	},
	{
		id: 15,
		text: "productize 24/365 e-commerce",
		post_id: 16,
	},
	{
		id: 16,
		text: "envisioneer distributed methodologies",
		post_id: 26,
	},
	{
		id: 17,
		text: "embrace cross-platform functionalities",
		post_id: 27,
	},
	{
		id: 18,
		text: "utilize vertical e-commerce",
		post_id: 15,
	},
	{
		id: 19,
		text: "generate mission-critical e-commerce",
		post_id: 27,
	},
	{
		id: 20,
		text: "streamline transparent deliverables",
		post_id: 29,
	},
	{
		id: 21,
		text: "transition frictionless supply-chains",
		post_id: 17,
	},
	{
		id: 22,
		text: "envisioneer robust markets",
		post_id: 18,
	},
	{
		id: 23,
		text: "evolve leading-edge e-business",
		post_id: 29,
	},
	{
		id: 24,
		text: "transition bricks-and-clicks schemas",
		post_id: 16,
	},
	{
		id: 25,
		text: "drive revolutionary functionalities",
		post_id: 26,
	},
	{
		id: 26,
		text: "seize vertical architectures",
		post_id: 30,
	},
	{
		id: 27,
		text: "monetize customized synergies",
		post_id: 8,
	},
	{
		id: 28,
		text: "transform global metrics",
		post_id: 19,
	},
	{
		id: 29,
		text: "reintermediate interactive content",
		post_id: 21,
	},
	{
		id: 30,
		text: "reintermediate rich mindshare",
		post_id: 8,
	},
	{
		id: 31,
		text: "incubate seamless deliverables",
		post_id: 17,
	},
	{
		id: 32,
		text: "matrix world-class initiatives",
		post_id: 8,
	},
	{
		id: 33,
		text: "engineer plug-and-play initiatives",
		post_id: 30,
	},
	{
		id: 34,
		text: "empower bricks-and-clicks e-tailers",
		post_id: 25,
	},
	{
		id: 35,
		text: "enable real-time e-commerce",
		post_id: 15,
	},
	{
		id: 36,
		text: "disintermediate out-of-the-box markets",
		post_id: 24,
	},
	{
		id: 37,
		text: "streamline seamless e-services",
		post_id: 19,
	},
	{
		id: 38,
		text: "synthesize mission-critical methodologies",
		post_id: 28,
	},
	{
		id: 39,
		text: "productize world-class solutions",
		post_id: 12,
	},
	{
		id: 40,
		text: "iterate proactive solutions",
		post_id: 27,
	},
	{
		id: 41,
		text: "maximize interactive supply-chains",
		post_id: 26,
	},
	{
		id: 42,
		text: "streamline customized functionalities",
		post_id: 15,
	},
	{
		id: 43,
		text: "syndicate best-of-breed communities",
		post_id: 17,
	},
	{
		id: 44,
		text: "scale sticky architectures",
		post_id: 26,
	},
	{
		id: 45,
		text: "scale open-source portals",
		post_id: 26,
	},
	{
		id: 46,
		text: "envisioneer impactful networks",
		post_id: 18,
	},
	{
		id: 47,
		text: "target sticky bandwidth",
		post_id: 5,
	},
	{
		id: 48,
		text: "target viral e-tailers",
		post_id: 4,
	},
	{
		id: 49,
		text: "grow bricks-and-clicks infrastructures",
		post_id: 8,
	},
	{
		id: 50,
		text: "facilitate strategic ROI",
		post_id: 11,
	},
	{
		id: 51,
		text: "enhance open-source communities",
		post_id: 19,
	},
	{
		id: 52,
		text: "integrate end-to-end bandwidth",
		post_id: 26,
	},
	{
		id: 53,
		text: "empower leading-edge web-readiness",
		post_id: 14,
	},
	{
		id: 54,
		text: "aggregate rich communities",
		post_id: 16,
	},
	{
		id: 55,
		text: "scale collaborative e-services",
		post_id: 6,
	},
	{
		id: 56,
		text: "maximize mission-critical metrics",
		post_id: 29,
	},
	{
		id: 57,
		text: "extend best-of-breed e-tailers",
		post_id: 22,
	},
	{
		id: 58,
		text: "generate efficient applications",
		post_id: 25,
	},
	{
		id: 59,
		text: "generate viral markets",
		post_id: 24,
	},
	{
		id: 60,
		text: "seize sexy channels",
		post_id: 7,
	},
	{
		id: 61,
		text: "extend collaborative e-markets",
		post_id: 11,
	},
	{
		id: 62,
		text: "maximize proactive solutions",
		post_id: 7,
	},
	{
		id: 63,
		text: "repurpose dynamic communities",
		post_id: 22,
	},
	{
		id: 64,
		text: "utilize B2B systems",
		post_id: 24,
	},
	{
		id: 65,
		text: "integrate real-time systems",
		post_id: 7,
	},
	{
		id: 66,
		text: "iterate compelling portals",
		post_id: 10,
	},
	{
		id: 67,
		text: "empower value-added networks",
		post_id: 29,
	},
	{
		id: 68,
		text: "grow innovative architectures",
		post_id: 10,
	},
	{
		id: 69,
		text: "e-enable customized eyeballs",
		post_id: 11,
	},
	{
		id: 70,
		text: "integrate killer technologies",
		post_id: 25,
	},
	{
		id: 71,
		text: "target value-added relationships",
		post_id: 9,
	},
	{
		id: 72,
		text: "mesh viral infomediaries",
		post_id: 6,
	},
	{
		id: 73,
		text: "unleash B2B eyeballs",
		post_id: 30,
	},
	{
		id: 74,
		text: "cultivate innovative methodologies",
		post_id: 18,
	},
	{
		id: 75,
		text: "architect vertical users",
		post_id: 3,
	},
	{
		id: 76,
		text: "engineer bricks-and-clicks mindshare",
		post_id: 14,
	},
	{
		id: 77,
		text: "synthesize vertical e-business",
		post_id: 21,
	},
	{
		id: 78,
		text: "reintermediate next-generation e-services",
		post_id: 5,
	},
	{
		id: 79,
		text: "scale rich e-business",
		post_id: 30,
	},
	{
		id: 80,
		text: "deploy turn-key models",
		post_id: 2,
	},
	{
		id: 81,
		text: "implement vertical convergence",
		post_id: 4,
	},
	{
		id: 82,
		text: "synthesize real-time initiatives",
		post_id: 1,
	},
	{
		id: 83,
		text: "monetize one-to-one convergence",
		post_id: 17,
	},
	{
		id: 84,
		text: "evolve strategic web services",
		post_id: 11,
	},
	{
		id: 85,
		text: "synthesize transparent bandwidth",
		post_id: 23,
	},
	{
		id: 86,
		text: "scale synergistic niches",
		post_id: 23,
	},
	{
		id: 87,
		text: "mesh transparent e-tailers",
		post_id: 19,
	},
	{
		id: 88,
		text: "evolve viral channels",
		post_id: 7,
	},
	{
		id: 89,
		text: "streamline ubiquitous experiences",
		post_id: 2,
	},
	{
		id: 90,
		text: "maximize ubiquitous metrics",
		post_id: 18,
	},
	{
		id: 91,
		text: "unleash one-to-one interfaces",
		post_id: 5,
	},
	{
		id: 92,
		text: "leverage bricks-and-clicks platforms",
		post_id: 2,
	},
	{
		id: 93,
		text: "seize value-added e-tailers",
		post_id: 29,
	},
	{
		id: 94,
		text: "incubate 24/365 niches",
		post_id: 4,
	},
	{
		id: 95,
		text: "maximize collaborative e-markets",
		post_id: 3,
	},
	{
		id: 96,
		text: "envisioneer extensible mindshare",
		post_id: 19,
	},
	{
		id: 97,
		text: "unleash interactive communities",
		post_id: 9,
	},
	{
		id: 98,
		text: "synergize B2C functionalities",
		post_id: 11,
	},
	{
		id: 99,
		text: "integrate user-centric eyeballs",
		post_id: 14,
	},
	{
		id: 100,
		text: "recontextualize mission-critical technologies",
		post_id: 5,
	},
];

module.exports = data;
