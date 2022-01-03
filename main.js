// local reviews data
const reviews = [
	{
		id: 1,
		name: "susan smith",
		job: "Front-end developer",
		img:
		"https://media.istockphoto.com/photos/studio-shot-of-cheerful-beautiful-asian-woman-in-white-tshirt-and-on-picture-id1310365826?k=20&m=1310365826&s=612x612&w=0&h=iUnf2VsakIKe4b6snBNe5rGxoBNKhKshsvofaViLaDs=",
		text:
		"I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
	},
	{
		id: 2,
		name: "anna johnson",
		job: "web designer",
		img:
		"https://media.istockphoto.com/photos/successful-smiling-woman-wearing-eyeglasses-on-grey-wall-picture-id1289220949?b=1&k=20&m=1289220949&s=170667a&w=0&h=kcyWAYnE9XbNA2vP9-E0xQt8sHU4oCA_tvyZ811roGc=",
		text:
		"Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
	},
	{
		id: 3,
		name: "peter jones",
		job: "intern",
		img:
		"https://media.istockphoto.com/photos/smiling-mixed-race-mature-man-on-grey-background-picture-id1319763895?b=1&k=20&m=1319763895&s=170667a&w=0&h=jhqKyg62cQVZ-NjDQjpcenCdHDrprkN4caRjk4K76E8=",
		text:
		"Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
	},
	{
		id: 4,
		name: "bill anderson",
		job: "the boss",
		img:
		"https://media.istockphoto.com/photos/portrait-of-a-smiling-young-businessman-picture-id1297832726?k=20&m=1297832726&s=612x612&w=0&h=9pvxBBxZecuuRsmnCOKNrOpwTtm7U_3KYZBRCsTMkic=",
		text:
		"Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
	},
];

// select items
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

// set starting item
let currentItem = 0;

// load initial
window.addEventListener("DOMContentLoaded", function() {
	const item = reviews[currentItem];
	img.src = item.img;
	author.textContent = item.name;
	job.textContent = item.job;
	info.textContent = item.text;
})

// Show info person
function showInfoUser(index) {
	const item = reviews[index];
	img.src = item.img;
	author.textContent = item.name;
	job.textContent = item.job;
	info.textContent = item.text;
}

// next button
nextBtn.addEventListener("click", function() {
	currentItem++ ;
	if(currentItem > reviews.length - 1) {
		currentItem = 0
	}

	showInfoUser(currentItem)
})
// prev button
prevBtn.addEventListener("click", function() {
	currentItem-- ;
	if(currentItem < 0) {
		currentItem = reviews.length - 1;
	}

	showInfoUser(currentItem)
})

// Random info user
randomBtn.addEventListener("click", function(){
	currentItem = Math.floor(Math.random() * reviews.length);
	showInfoUser(currentItem)
})
