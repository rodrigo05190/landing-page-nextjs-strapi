import getOriginFromReferrer from './getOriginFromReferrer';


interface OriginProps {
  referencia: string,
  referencia_raw: string,
  pagina: string,
  origem: string,

};

const sendOrigin = ():OriginProps => 
{
  const referrer = document.referrer;
  const href = window.location.href;
  const pagina = window.location.pathname;

  const origin = {
    referencia:referrer,
    referencia_raw:href,
    pagina:pagina,
    origem:getOriginFromReferrer(),
  }

  return origin;
}

export default sendOrigin;
