const inputSearch = document.querySelector('#inputSearch')
const btnSubmit = document.querySelector('#btnSubmit')

btnSubmit.addEventListener('click', () => {
	var searchTerm = inputSearch.value.toLowerCase()

	search(searchTerm)
})

function search(searchTerm) {
	if (
		searchTerm === 'família' ||
		searchTerm === 'famila' ||
		searchTerm === 'famílha' ||
		searchTerm === 'familha' ||
		searchTerm === 'family' ||
		searchTerm === 'mozzini' ||
		searchTerm === 'muccini' ||
		searchTerm === 'mossini'
	) {
		window.location.href = '#infoFamily'
	} else if (searchTerm === 'pratos') {
		window.location.href = '#food'
	} else if (searchTerm === 'restaurante') {
		window.location.href = '#info'
	} else if (searchTerm === 'dúvidas') {
		window.location.href = '#questions'
	} else if (searchTerm === 'horário') {
		window.location.href = '#info'
	} else {
		window.location.href = '#start'
	}
}
