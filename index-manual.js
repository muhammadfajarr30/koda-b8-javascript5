const examScores = [85, 90 , 60, 70, 95];

function isRemedial (examScores) {
    for (let i = 0; i < examScores.length; i++) {
        if (examScores[i] < 75) {
            console.log("ada nilai yang harus remedial")
            return true;
        }
    }
    console.log("tidak ada nilai yang harus remedial")
    return false;
}

const result = isRemedial(examScores);
console.log(result);