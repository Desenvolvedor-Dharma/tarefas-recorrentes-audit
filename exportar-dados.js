const XLSX = require('xlsx')
const { efdContribuicoes1, efdIcmsIpi1 } = require('./data/fiscal1')
const { efdContribuicoes2, efdIcmsIpi2 } = require('./data/fiscal2')

function createFileXlsx (name, data) {
    const workbook = XLSX.utils.book_new()
    const worksheet = XLSX.utils.aoa_to_sheet(data)
    
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Itens Removidos')
    
    XLSX.writeFile(workbook, name)
}

createFileXlsx('./out/efd-contribuicoes-1.xlsx', efdContribuicoes1)
createFileXlsx('./out/efd-icms-ipi-1.xlsx', efdIcmsIpi1)
createFileXlsx('./out/efd-contribuicoes-2.xlsx', efdContribuicoes2)
createFileXlsx('./out/efd-icms-ipi-2.xlsx', efdIcmsIpi2)
