
export const getAvatarN = (email ) => {
    const array = email.split("");
    const first = array[0].charCodeAt(0) - 65;
    return String(first)[0];
}