// Pick a URL like (https://dev04-storexyz.demandware.net/s/xyz/product/dr.martens.-- rakim&mens&&boots/320100.html?dwvar_3200_color=100)
// now replace the hyphens, ampersand and dots with spaces and then remove spaces also

function formatUrl(url) {
    let formatedUrl = url.replace(/[.\-&]/gm, ' ').replaceAll(' ','');
    return formatedUrl;
}

console.log(formatUrl('https://dev04-storexyz.demandware.net/s/xyz/product/dr.martens.-- rakim&mens&&boots/320100.html?dwvar_3200_color=100'));