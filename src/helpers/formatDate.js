export const formatDate = (messageDate) => {
    const date = new Date(messageDate);
    const options = { 
        month: 'long', 
        day: 'numeric' 
    };
    let h = date.getHours();
    let m = date.getMinutes();
    let time = h + ":" + m;

    const newDate = date.toLocaleDateString('en-US', options);
    return `${newDate} - ${time}`
}