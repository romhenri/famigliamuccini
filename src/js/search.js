const inputSearch = document.querySelector('#inputSearch')
const btnSubmit = document.querySelector('#btnSubmit')

btnSubmit.addEventListener('click', () => {
	var searchTerm = inputSearch.value.toLowerCase()
	searchTerm = searchTerm.replace('ã', 'a')
	searchTerm = searchTerm.replace('õ', 'o')
	searchTerm = searchTerm.replace('á', 'a')
	searchTerm = searchTerm.replace('ó', 'o')
	searchTerm = searchTerm.replace('é', 'e')
	searchTerm = searchTerm.replace('í', 'i')
	searchTerm = searchTerm.replace('ô', 'o')
	searchTerm = searchTerm.replace('á', 'a')

	console.log(searchTerm)
	search(searchTerm)
})

function search(searchTerm) {
	const initial = '#start'
	const initialSection = '#infoFamily'
	const foodSection = '#food'
	const questionsSection = '#questions'
	const infoSection = '#info'

	if (
		searchTerm === 'familia' ||
		searchTerm === 'famila' ||
		searchTerm === 'familha' ||
		searchTerm === 'family' ||
		searchTerm === 'mozzini' ||
		searchTerm === 'muccini' ||
		searchTerm === 'mossini'
	) {
		window.location.href = initialSection
		//
	} else if (
		searchTerm === 'prato' ||
		searchTerm === 'pratos' ||
		searchTerm === 'comida' ||
		searchTerm === 'comidas'
	) {
		window.location.href = foodSection
		//
	} else if (searchTerm === 'restaurante') {
		window.location.href = infoSection
		//
	} else if (searchTerm === 'dúvidas') {
		window.location.href = questionsSection
		//
	} else if (searchTerm === 'horário') {
		window.location.href = infoSection
		//
	} else if (searchTerm === 'romulo' || searchTerm === 'virginia') {
		window.location.href = infoSection
		//
	} else {
		window.location.href = initial
		//
	}
}
