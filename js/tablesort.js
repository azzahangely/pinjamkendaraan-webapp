const tableData = {
    originalRows: [],
    sortedColumn: null,
    sortOrder: "asc",
};

function storeOriginalRows(table) {
    if (tableData.originalRows.length === 0) {
        const tBody = table.tBodies[0];
        tableData.originalRows = [...tBody.querySelectorAll("tr")];
    }
}

function restoreOriginalRows(table) {
    const tBody = table.tBodies[0];
    while (tBody.firstChild) {
        tBody.removeChild(tBody.firstChild);
    }
    tBody.append(...tableData.originalRows);
}

function sortTableByColumn(table, column, sortOrder) {
    const tBody = table.tBodies[0];
    const rows = Array.from(tBody.querySelectorAll("tr"));

    const sortedRows = rows.sort((a, b) => {
        const aColText = a.querySelector(`td:nth-child(${column + 1})`).textContent.trim();
        const bColText = b.querySelector(`td:nth-child(${column + 1})`).textContent.trim();

        return aColText.localeCompare(bColText) * (sortOrder === "asc" ? 1 : -1);
    });

    while (tBody.firstChild) {
        tBody.removeChild(tBody.firstChild);
    }

    tBody.append(...sortedRows);
}

document.querySelectorAll(".table-sortable th").forEach(headerCell => {
    headerCell.addEventListener("click", () => {
        const tableElement = headerCell.parentElement.parentElement.parentElement;
        const headerIndex = Array.prototype.indexOf.call(headerCell.parentElement.children, headerCell);

        if (tableData.sortedColumn === headerIndex) {
            if (tableData.sortOrder === "asc") {
                sortTableByColumn(tableElement, headerIndex, "desc");
                tableData.sortOrder = "desc";
            } else {
                restoreOriginalRows(tableElement);
                tableData.sortedColumn = null;
                tableData.sortOrder = "asc";
            }
        } else {
            storeOriginalRows(tableElement);
            sortTableByColumn(tableElement, headerIndex, "asc");
            tableData.sortedColumn = headerIndex;
            tableData.sortOrder = "asc";
        }
    });
});
