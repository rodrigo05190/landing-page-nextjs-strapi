const getDomainName = (url:string) => {
    const urlObject = new URL(url);
    let domainName = urlObject.hostname.replace(/^www\./, '');
    const domainRegex = /(?:https?:\/\/)?(?:www\.)?([a-z]+)(?:\.[a-z]{2,3}(?:\.[a-z]{2})?)?/i;
    const match = domainName.match(domainRegex);
    if (match && match[1]) {
      domainName = match[1];
    }
    return domainName;
  }
  export default getDomainName;
  
  