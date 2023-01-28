

export const getAvatarN = (email ) => {
    const array = email.split("");
    const first = array[0].charCodeAt(0) - 65;
    //console.log("first: ", first);
    //console.log("first22: ",String(first)[1]); 
    return String(first)[1];
}