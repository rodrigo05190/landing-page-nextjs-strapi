import getDomainName from './getDomainName';

const getOriginFromReferrer = () => {
  let origin = 'Acesso Direto';
  const location = document.location.href;
  const referrer = document.referrer;

  switch (true) {
    case location.includes('gclid'):
      origin = 'Google Adwords';
    case location.includes('fbclid'):
      origin = 'Facebook Ads';
    case location.includes('utm_source'):
      const urlObject = new URL(location);
      const searchParams = new URLSearchParams(urlObject.search);
      origin = searchParams.get('utm_source') || origin;
  }

  if (
    referrer.includes('google.com') &&
    origin === 'Acesso Direto'
  ) {
    origin = 'Google Orgânico';
  } else {
    origin = referrer ? getDomainName(referrer) : origin;
  } 

  return origin;
};

export default getOriginFromReferrer;