function ValidURL(str) {
    var pattern = new RegExp('^(https?:\/\/)?'+ // protocol
      '((([a-z\d]([a-z\d-]*[a-z\d])*)\.)+[a-z]{2,}|'+ // domain name
      '((\d{1,3}\.){3}\d{1,3}))'+ // OR ip (v4) address
      '(\:\d+)?(\/[-a-z\d%_.~+]*)*'+ // port and path
      '(\?[;&a-z\d%_.~+=-]*)?'+ // query string
      '(\#[-a-z\d_]*)?$','i'); // fragment locater
    if(!pattern.test(str)) {
      // alert("Please enter a valid URL.");
      return false;
    } else {
      return true;
    }
  }

//http://forums.devshed.com/javascript-development-115/regexp-match-url-pattern-493764.html

function linkify(inputText) {
    var replacedText, replacePattern1, replacePattern2, replacePattern3;

    //URLs starting with http://, https://, or ftp://
    replacePattern1 = /(\b(https?|ftp):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gim;
    replacedText = inputText.replace(replacePattern1, '<a href="$1" target="_blank">$1</a>');

    //URLs starting with "www." (without // before it, or it'd re-link the ones done above).
    replacePattern2 = /(^|[^\/])(www\.[\S]+(\b|$))/gim;
    replacedText = replacedText.replace(replacePattern2, '$1<a href="http://$2" target="_blank">$2</a>');

    //Change email addresses to mailto:: links.
    replacePattern3 = /(([a-zA-Z0-9\-\_\.])+@[a-zA-Z\_]+?(\.[a-zA-Z]{2,6})+)/gim;
    replacedText = replacedText.replace(replacePattern3, '<a href="mailto:$1">$1</a>');

    return replacedText;
}

//https://stackoverflow.com/a/3890175