const nilai = [85, 90 , 75, 60, 95];

const remedial = (nilai) => nilai < 75;
if (remedial) {
    console.log("ada nilai yang harus remedial")
} else {
    console.log("tidak ada nilai yang harus remedial")  
}
console.log(nilai.some(remedial)); 

