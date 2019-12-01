function dataHandling2(input2){
    input2.splice(1,2, "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung");
    input2.splice(4,1, "Pria", "SMA Internasional Metro");
    console.log(input2);
    date = input2[3].split("/");        //Split using / as separator
    mm = date[1];
    switch(mm){
        case "01":
            console.log("Januari"); break;
        case "02":
            console.log("Februari"); break;
        case "03":
            console.log("Maret"); break;
        case "04":
            console.log("April"); break;
        case "05":
            console.log("Mei"); break;
        case "06":
            console.log("Juni"); break;
        case "07":
            console.log("Juli"); break;
        case "08":
            console.log("Agustus"); break;
        case "09":
             console.log("September"); break;
        case "10":
            console.log("Oktober"); break;
        case "11":
            console.log("November"); break;
        case "12":
            console.log("Desember"); break;                                         
    }
    console.log(date.sort(function(a,b){return b-a}));  //sort descending array string
    console.log(input2[3].split("/").join("-")); //join with - separator
    console.log(input2[1].slice(0,15)); //display only first 15 char
}


var input2 = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];
dataHandling2(input2);

/**
 * keluaran yang diharapkan (pada console)
 *
 * ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
 * Mei
 * ["1989", "21", "05"]
 * 21-05-1989
 * Roman Alamsyah
 */