import { ApiConstants, ApiContats } from '../contants';


const getFlagIcon = (
    code = 'IN',
    style = ApiContats.COUNTRY_FLAG.STYLE.FLAT,
    size = ApiContats.COUNTRY_FLAG.SIZE[64],
  ) => `${ApiContats.COUNTRY_FLAG.BASE_URL}/${code}/${style}/${size}.png`;
  
export default {getFlagIcon};
