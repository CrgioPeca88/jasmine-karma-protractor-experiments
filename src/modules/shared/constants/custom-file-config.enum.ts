export const ExtensionsFile = {
    excel: '.xlsx',
    pdf: '.pdf',
    image: 'jpeg'
};
Object.freeze(ExtensionsFile);

export const EXCEL_FILE = [{
    type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8',
    extension: ExtensionsFile.excel
}];
Object.freeze(EXCEL_FILE);
