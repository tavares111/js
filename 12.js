function checkValidUrl(url) {
    const urlRegex = /^(?:ftp|https?):\/\/(?!$|0\.0\.0\.0)(?:(?:(?:1?\d\d?|2[0-4]\d|25[0-5])(?:\.(?!$))?){4}|(?:[a-z\d]\.|[a-z\d](?:(?![-.]{2})[a-z\d-]){0,63}?[a-z\d]\.){1,63}?[a-z]{2,63})(?:[:/].*?)?$/;
    return urlRegex.test(url);
}

checkValidUrl('http://www.google.com');