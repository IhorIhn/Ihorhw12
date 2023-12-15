"use strict";
window.fineList = {
    searchFines : searchFines
}

//Ця зміна містить всі дані які в нас зберігаються у файлі data
let DB = data.finesData;

function searchFines(searchKey){
    if (!searchKey) {
        return [];
    }

    const filteredFines = DB.filter(fine => {
        return (
            fine.номер === searchKey ||
            fine.тип.toLowerCase() === searchKey.toLowerCase()
        );
    });

    return filteredFines;
}

