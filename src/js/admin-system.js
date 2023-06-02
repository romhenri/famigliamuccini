const btnAdmin = document.querySelector('.btnAdmin')

btnAdmin.addEventListener('click', () => {
	const triedWord = prompt('Senha de Acesso:')

	if (triedWord == 'mamma' || triedWord == 'mozzini') {
		window.location.href =
			'https://romhenri.github.io/javascript/muccini-admin/'
	} else {
		alert('Acesso Negado.')
	}
})
