const GLOBAL_VALS = {
	renderer: {
		width: 800,
		height: 600
	},
	map: {
		sceneGraph: [
			[
				"A",
				"B",
				null
			],
			[
				"B",
				"C",
				null
			],
			[
				"C",
				null,
				null
			]
		],
		start: "A"
	},
	Scenes: {
		A: {
			entities: [
				[
					"LockerOpenFlippedGray",
					175,
					195
				],
				[
					"LockerClosedFlippedGray",
					175,
					195
				],
				[
					"LockerOpenFlippedGray",
					230,
					195
				],
				[
					"LockerClosedFlippedGray",
					230,
					195
				],
				[
					"LockerOpenFlippedGray",
					285,
					195
				],
				[
					"LockerClosedFlippedGray",
					285,
					195
				],
				[
					"LockerOpenFlippedGray",
					340,
					195
				],
				[
					"LockerClosedFlippedGray",
					340,
					195
				],
				[
					"LockerOpenFlippedGray",
					395,
					195
				],
				[
					"LockerClosedFlippedGray",
					395,
					195
				],
				[
					"doorBlood",
					500,
					201
				],
				[
					"LockerOpenRed",
					755,
					195
				],
				[
					"LockerClosedRed",
					755,
					195
				],
				[
					"LockerOpenRed",
					700,
					195
				],
				[
					"LockerClosedRed",
					700,
					195
				],
				[
					"LockerOpenRed",
					645,
					195
				],
				[
					"LockerClosedRed",
					645,
					195
				],
				[
					"lightingSchoolDoor",
					0,
					0
				],
				[
					"picoRunningLeft",
					300,
					300
				],
				[
					"rightSceneButton",
					700,
					500
				]
			],
			Background: "Resources\\HallwayBg\\hallway_sketch.png"
		},
		B: {
			entities: [
				[
					"LockerOpenFlippedRed",
					0,
					195
				],
				[
					"LockerClosedFlippedRed",
					0,
					195
				],
				[
					"LockerOpenFlippedRed",
					55,
					195
				],
				[
					"LockerClosedFlippedRed",
					55,
					195
				],
				[
					"LockerOpenFlippedRed",
					110,
					195
				],
				[
					"LockerClosedFlippedRed",
					110,
					195
				],
				[
					"LockerOpenFlippedRed",
					165,
					195
				],
				[
					"LockerClosedFlippedRed",
					165,
					195
				],
				[
					"door",
					252,
					201
				],
				[
					"LockerOpenGreen",
					547,
					195
				],
				[
					"LockerClosedGreen",
					547,
					195
				],
				[
					"LockerOpenGreen",
					492,
					195
				],
				[
					"LockerClosedGreen",
					492,
					195
				],
				[
					"LockerOpenGreen",
					437,
					195
				],
				[
					"LockerClosedGreen",
					437,
					195
				],
				[
					"LockerOpenGreen",
					382,
					195
				],
				[
					"LockerClosedGreen",
					382,
					195
				],
				[
					"ExCase",
					620,
					225
				],
				[
					"LockerOpenGray",
					780,
					195
				],
				[
					"LockerClosedGray",
					780,
					195
				],
				[
					"LockerOpenGray",
					725,
					195
				],
				[
					"LockerClosedGray",
					725,
					195
				],
				[
					"LockerOpenGray",
					670,
					195
				],
				[
					"LockerClosedGray",
					670,
					195
				],
				[
					"picoRunningLeft",
					300,
					300
				],
				[
					"leftSceneButton",
					0,
					500
				],
				[
					"rightSceneButton",
					700,
					500
				]
			],
			Background: "Resources\\HallwayBg\\hallway_gen.png"
		},
		C: {
			entities: [
				[
					"LockerOpenFlippedGray",
					0,
					195
				],
				[
					"LockerClosedFlippedGray",
					0,
					195
				],
				[
					"LockerOpenFlippedGray",
					55,
					195
				],
				[
					"LockerClosedFlippedGray",
					55,
					195
				],
				[
					"LockerOpenFlippedGreen",
					130,
					195
				],
				[
					"LockerClosedFlippedGreen",
					130,
					195
				],
				[
					"LockerOpenFlippedGreen",
					185,
					195
				],
				[
					"LockerClosedFlippedGreen",
					185,
					195
				],
				[
					"LockerOpenFlippedGreen",
					240,
					195
				],
				[
					"LockerClosedFlippedGreen",
					240,
					195
				],
				[
					"LockerOpenFlippedGreen",
					295,
					195
				],
				[
					"LockerClosedFlippedGreen",
					295,
					195
				],
				[
					"LockerOpenFlippedGreen",
					350,
					195
				],
				[
					"LockerClosedFlippedGreen",
					350,
					195
				],
				[
					"door",
					437,
					201
				],
				[
					"LockerOpenRed",
					732,
					195
				],
				[
					"LockerClosedRed",
					732,
					195
				],
				[
					"LockerOpenRed",
					677,
					195
				],
				[
					"LockerClosedRed",
					677,
					195
				],
				[
					"LockerOpenRed",
					622,
					195
				],
				[
					"LockerClosedRed",
					622,
					195
				],
				[
					"LockerOpenRed",
					567,
					195
				],
				[
					"LockerClosedRed",
					567,
					195
				],
				[
					"leftSceneButton",
					0,
					500
				]
			],
			Background: "Resources\\HallwayBg\\hallway_gen.png"
		}
	},
	entities: {
		picoRunningLeft: {
			class: "picoRunningLeft",
			texturePath: "Resources\\runningPicoLeft\\",
			width: 250,
			height: 220,
			interactible: false,
			animatedSpecs: {
				frameCount: 8,
				animationSpeed: .2,
				fileExtention: ".png"
			}
		},
		lightingSchoolDoor: {
			class: "lightingSchoolDoor",
			texturePath: "Resources\\HallwayBg\\hallway_1_light.png",
			width: 800,
			height: 600,
			interactible: false
		},
		LockerOpenFlippedRed: {
			class: "LockerOpenFlippedRed",
			texturePath: "Resources\\Lockers\\open_locker_red_flipped.png",
			width: 70,
			height: 210,
			interactible: false
		},
		LockerClosedFlippedRed: {
			class: "LockerClosedFlippedRed",
			texturePath: "Resources\\Lockers\\closed_locker_red_flipped.png",
			width: 70,
			height: 210,
			interactible: true
		},
		LockerOpenRed: {
			class: "LockerOpenRed",
			texturePath: "Resources\\Lockers\\open_locker_red.png",
			width: 70,
			height: 210,
			interactible: false
		},
		LockerClosedRed: {
			class: "LockerClosedRed",
			texturePath: "Resources\\Lockers\\closed_locker_red.png",
			width: 70,
			height: 210,
			interactible: true
		},
		LockerOpenGreen: {
			class: "LockerOpenGreen",
			texturePath: "Resources\\Lockers\\open_locker_green.png",
			width: 70,
			height: 210,
			interactible: false
		},
		LockerClosedFlippedGreen: {
			class: "LockerClosedGreen",
			texturePath: "Resources\\Lockers\\closed_locker_green_flipped.png",
			width: 70,
			height: 210,
			interactible: true
		},
		LockerOpenFlippedGreen: {
			class: "LockerOpenGreen",
			texturePath: "Resources\\Lockers\\open_locker_green_flipped.png",
			width: 70,
			height: 210,
			interactible: false
		},
		LockerClosedGreen: {
			class: "LockerClosedGreen",
			texturePath: "Resources\\Lockers\\closed_locker_green.png",
			width: 70,
			height: 210,
			interactible: true
		},
		LockerClosedFlippedGray: {
			class: "LockerClosedFlippedGray",
			texturePath: "Resources\\Lockers\\closed_locker_gray_flipped.png",
			width: 70,
			height: 210,
			interactible: true
		},
		LockerOpenFlippedGray: {
			class: "LockerOpenFlippedGray",
			texturePath: "Resources\\Lockers\\open_locker_gray_flipped.png",
			width: 70,
			height: 210,
			interactible: false
		},
		LockerClosedGray: {
			class: "LockerClosedGray",
			texturePath: "Resources\\Lockers\\closed_locker_gray.png",
			width: 70,
			height: 210,
			interactible: true
		},
		LockerOpenGray: {
			class: "LockerOpenGray",
			texturePath: "Resources\\Lockers\\open_locker_gray.png",
			width: 70,
			height: 210,
			interactible: false
		},
		doorBlood: {
			class: "doorBlood",
			texturePath: "Resources\\Doorway\\closed_door_blood.png",
			width: 116,
			height: 192,
			interactible: true
		},
		door: {
			class: "door",
			texturePath: "Resources\\Doorway\\closed_door.png",
			width: 116,
			height: 192,
			interactible: true
		},
		ExCase: {
			class: "ExCase",
			texturePath: "Resources\\FireEx\\fire_box_full.png",
			width: 46,
			height: 100,
			interactible: false
		},
		rightSceneButton: {
			class: "rightSceneButton",
			texturePath: "Resources\\Directions\\east_pointer.png",
			width: 100,
			height: 20,
			interactible: true
		},
		leftSceneButton: {
			class: "leftSceneButton",
			texturePath: "Resources\\Directions\\west_pointer.png",
			width: 100,
			height: 20,
			interactible: true
		},
		blunt: {
			texturePath: "",
			width: 0,
			height: 0,
			interactible: false
		}
	}
};