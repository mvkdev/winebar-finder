const mongoose 			= require('mongoose'),
	  bar				= require('./models/winebars'),
	  comment			= require('./models/comment'),
	  user				= require('./models/user');


const data = [
		{
			name: "Dvine Wine Bar",
			image: "https://images.unsplash.com/photo-1516997121675-4c2d1684aa3e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=05a9553334b4978f4bc9f1dfec285452&auto=format&fit=crop&w=1952&q=80",
			tagline: "Good Wine, nice snacks, cool people",
			address: {
				line1: "Fürstenwall 33",
				line2: "40215 Düsseldorf",
				line3: "NRW Deutschland"
			},
			rating: 4.7,
			description: "All of it. alright everyone. big mistake. crush your enemies, to see them driven before you, and to hear the lamentations of their women. do it now! fugettit, i'm not going to sit on your lap. get down. hey light head. i like you. i'm a cybernetic organizm. i'm a terminator. i've seen you before. in a damn minivan. it's not a tumor. my nipples are very sensitive. remember, i can break your neck like a chicken's. stick around. the first time in my life i am. when the governor get's here, call me. who is your daddy"

		},
		{
			name: "Johnny's Wine Dive",
			image: "https://images.unsplash.com/photo-1467857499683-7c766c8c1f15?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f2668aa862ca834ac22d61bb79dfdfce&auto=format&fit=crop&w=1950&q=80",
			tagline: "Really trashy but funky music",
			address: {
				line1: "Bananen Weg 99",
				line2: "40123 Düsseldorf",
				line3: "NRW Deutschland"
			},
			rating: 3.5,
			description: "All of it. alright everyone. big mistake. crush your enemies, to see them driven before you, and to hear the lamentations of their women. do it now! fugettit, i'm not going to sit on your lap. get down. hey light head. i like you. i'm a cybernetic organizm. i'm a terminator. i've seen you before. in a damn minivan. it's not a tumor. my nipples are very sensitive. remember, i can break your neck like a chicken's. stick around. the first time in my life i am. when the governor get's here, call me. who is your daddy"

		},
		{
			name: "Banana Mama",
			image: "https://images.unsplash.com/photo-1529119348378-b7a288d63479?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=90ee4005ae0ec2a810af9cbb48c362e1&auto=format&fit=crop&w=2799&q=80",
			tagline: "Crappy Wines but oooh the banana snacks",
			address: {
				line1: "Bla St.",
				line2: "RH08 E63 London",
				line3: "East Sussex, England"
			},
			rating: 3,
			description: "All of it. alright everyone. big mistake. crush your enemies, to see them driven before you, and to hear the lamentations of their women. do it now! fugettit, i'm not going to sit on your lap. get down. hey light head. i like you. i'm a cybernetic organizm. i'm a terminator. i've seen you before. in a damn minivan. it's not a tumor. my nipples are very sensitive. remember, i can break your neck like a chicken's. stick around. the first time in my life i am. when the governor get's here, call me. who is your daddy"

		},
		{
			name: "Drink now, Wine later",
			image: "https://images.unsplash.com/photo-1517159906085-dd4f2277d4d0?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bb646c5ced26da6b0097bc9a848d0155&auto=format&fit=crop&w=1950&q=80",
			tagline: "People live up to its name...",
			address: {
				line1: "Bolker Straße 13",
				line2: "40215 Düsseldorf",
				line3: "NRW Deutschland"
			},
			rating: 4.2,
			description: "All of it. alright everyone. big mistake. crush your enemies, to see them driven before you, and to hear the lamentations of their women. do it now! fugettit, i'm not going to sit on your lap. get down. hey light head. i like you. i'm a cybernetic organizm. i'm a terminator. i've seen you before. in a damn minivan. it's not a tumor. my nipples are very sensitive. remember, i can break your neck like a chicken's. stick around. the first time in my life i am. when the governor get's here, call me. who is your daddy"

		},
		{
			name: "The Wine Studio",
			image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=fada82e527ef9eeaa1faed34043b425b&auto=format&fit=crop&w=1567&q=80",
			tagline: "Lovely selection, crowded on weekends",
			address: {
				line1: "Carlsplatz",
				line2: "40215 Düsseldorf",
				line3: "NRW Deutschland"
			},
			rating: 5,
			description: "All of it. alright everyone. big mistake. crush your enemies, to see them driven before you, and to hear the lamentations of their women. do it now! fugettit, i'm not going to sit on your lap. get down. hey light head. i like you. i'm a cybernetic organizm. i'm a terminator. i've seen you before. in a damn minivan. it's not a tumor. my nipples are very sensitive. remember, i can break your neck like a chicken's. stick around. the first time in my life i am. when the governor get's here, call me. who is your daddy"
			
		}
]

const seedDataBase = () => {
	bar.remove({}, (err) => {
		if(err)
			console.log("Error removing data... ",err);
		else {
			console.log("All Entries removed!");
			data.forEach((el,i) => {
				bar.create(el, (err,createdBar) => {
					if(err)
						console.log("Error creating Bar... ",err);
					else
					{
						console.log("Bar created!");
						comment.create({
							author: "Johnny",
							text: "Great Bar, will come again"
						}, (err, comment) => {
							if(err)
								console.log('Error creating comment...', err);
							else{
								createdBar.comments.push(comment);
								createdBar.save();
								console.log('Comment added');
							}
						}

						)
					}
				})
			})
		}
	})
}

module.exports = seedDataBase();





