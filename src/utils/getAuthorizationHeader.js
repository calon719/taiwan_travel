import jsSHA from 'jssha';

function getAuthorizationHeader() {
  const GMTString = new Date().toGMTString();
  const ShaObj = new jsSHA('SHA-1', 'TEXT'); //eslint-disable-line

  ShaObj.setHMACKey(process.env.VUE_APP_PTX_KEY, 'TEXT');
  ShaObj.update(`x-date: ${GMTString}`);

  const HMAC = ShaObj.getHMAC('B64');
  const Authorization = `hmac username="${process.env.VUE_APP_PTX_ID}", algorithm="hmac-sha1", headers="x-date", signature="${HMAC}"`;
  return { Authorization, 'x-date': GMTString };
}

export default getAuthorizationHeader;
