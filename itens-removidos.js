function clickBtnCarregarMais () { document.querySelector('.ladda-button').click() }

function colherDados () {
    const items = new Array()
    
    for (const elScope of document.querySelectorAll('[audit-list] [data-id]')) {
        if (elScope.querySelector('div.REMOVE_RELATIONSHIP')) {
            const elDate = elScope.querySelector('span.history-action-accomplished_at')
            if (elDate.textContent.includes('Ter 14 Mar')) {
                items.push(elScope)
            }
        }
    }

    const dados = new Array(['Empresa', 'Usuário', 'Data'])

    for (const item of items) {
        const cliente = item.querySelector('.history-action strong').textContent.replace('Cliente ', '')
        const usuario = item.querySelector('strong.history-emphasis').textContent
        const data = item.querySelector('span.history-action-accomplished_at').textContent

        dados.push([cliente, usuario, data])
    }

    console.log(dados)
}

function carregarItems14Marco (oldLength = 0) {
    const spanItems = document.querySelectorAll('[audit-list] [data-id] span.history-action-accomplished_at')
    
    const newLength = Array.from(spanItems).filter(element => {
        return element.textContent.includes("Ter 14 Mar")
    }).length

    if (newLength > oldLength) {
        setTimeout(() => {
            clickBtnCarregarMais()
            carregarItems14Marco(newLength)
        }, 3000)
    } else {
        colherDados()
    }
}

function carregar14Marco () {
    const hists = new Array()

    const histItems = document.querySelectorAll('strong.history-time-separator-text')

    for (const el of histItems) hists.push(el.textContent)

    if (!(hists.find(item => item == '14 de Março de 2023'))) {
        setTimeout(() => {
            clickBtnCarregarMais()
            carregar14Marco()
        }, 3000)
    } else {
        carregarItems14Marco()
    }
}
