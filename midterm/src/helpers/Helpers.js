export function capitalizeFirst(word) {
    return word.substr(0,1).toUpperCase() + word.substr(1).toLowerCase();
}

export function capitalizeWords(phrase) {
    return phrase.split(" ").map(i=>capitalizeFirst(i)).join(" ");
}

export function calculateAge(dob) {
    let birthday = new Date(dob);
    let ageDifMs = Date.now() - birthday.getTime();
    let ageDate = new Date(ageDifMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}