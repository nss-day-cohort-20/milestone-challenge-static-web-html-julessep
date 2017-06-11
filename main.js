let blog = [
	{title: "NSS Week One ",
	 copy: "Lorem ipsum dolor sit amet, ad tation indoctum mel, ei eos populo aperiam partiendo, usu no persius blandit assueverit. Sit cu rebum errem repudiandae, sed admodum detracto an, erant quaeque complectitur ut eos. Ius clita perpetua iudicabit ut, id alia quot quo. Pro ne fugit iusto dolores. Mei ei elit inciderint, doming legendos eu est. Essent definiebas omittantur vix ea, sale illum et eos.  ",
	 date: "May 26, 2017"},
	{title: "NSS Week Two ",
	 copy: "Lorem ipsum dolor sit amet, ad tation indoctum mel, ei eos populo aperiam partiendo, usu no persius blandit assueverit. Sit cu rebum errem repudiandae, sed admodum detracto an, erant quaeque complectitur ut eos. Ius clita perpetua iudicabit ut, id alia quot quo. Pro ne fugit iusto dolores. Mei ei elit inciderint, doming legendos eu est. Essent definiebas omittantur vix ea, sale illum et eos.  ",
	 date: "June 2, 2017"},
	{title: "NSS Week Three ",
	 copy: "Lorem ipsum dolor sit amet, ad tation indoctum mel, ei eos populo aperiam partiendo, usu no persius blandit assueverit. Sit cu rebum errem repudiandae, sed admodum detracto an, erant quaeque complectitur ut eos. Ius clita perpetua iudicabit ut, id alia quot quo. Pro ne fugit iusto dolores. Mei ei elit inciderint, doming legendos eu est. Essent definiebas omittantur vix ea, sale illum et eos.  ",
	 date: "June 9, 2017"}
]

let blogPosts = document.getElementById("blogPosts")
for(let i = 0; i <= blog.length; i++){
	blogPosts.innerHTML += 
	"<section>" +
		"<article>" +
			"<h3>" + blog[i].title + "</h3>" +
			"<footer>" + blog[i].date + "</footer>" +
				"<p>" + blog[i].copy + "</p>" +
		"</article>" +
	"</section>"
}