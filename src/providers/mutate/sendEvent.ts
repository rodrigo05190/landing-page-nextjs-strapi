import axios from 'axios';
import { EventsProps } from '../@types';


const sendEvents = async ({
  data,
  type,
  user_id,
  lead_id,
}: any) => {
  const customData = type === 'pageview' ? { page: data?.page } : (lead_id ? { lead_id } : data);
  
  return await axios
    .post(
      'https://trisul.controleid360.com.br/api/eventos',
      {
        historico_id: user_id,
        evento: type,
        navegacao: '[' + JSON.stringify(customData) + ']',
        page: typeof window !== 'undefined' ? window.document.location.pathname : '',
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization:
              'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJNT0JJTEUifQ.lnMyKO6Mdt0WJnSNajTznnq2DrGyixH-VWEolJd7Qm7ezWFEdvuwjk22YuaKyFYKfyp3Y4V81rqwcwJGxXVHRQ',
        },
        
      },
    )
    .then((resp: any) => {
        return resp.data.message;
     });
};

export default sendEvents;
