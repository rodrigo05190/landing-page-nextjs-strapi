
import React, { ReactNode, createContext, useEffect, useState } from "react";
import Cookie from "js-cookie";
import sendEvents from "../../providers/mutate/sendEvent";

const id_produto = "f2d1e9c7b6a3224";

interface HubidContextData {
  historico_id: string | null;
  referencia: string | null;
  referencia_raw: string | null;
  pagina: string | null;
  origem: string | null;
  id_produto: string | null;
}

export const HubidContext = createContext<HubidContextData>({
  historico_id: null,
  referencia: null,
  referencia_raw: null,
  pagina: null,
  origem: null,
  id_produto
});

interface HubidProviderProps {
  children: ReactNode;
}

export const HubidProvider: React.FC<HubidProviderProps> = ({ children }) => {
  const [contextValue, setContextValue] = useState<HubidContextData>({
    historico_id: null,
    referencia: null,
    referencia_raw: null,
    pagina: null,
    origem: null,
    id_produto
  });

  useEffect(() => {
    const checkCookie = () => {
      const hubidUser = Cookie.get("hubid_user");
      if (hubidUser) {
        try {
          // Tente decodificar o cookie antigo
          const decodedHubidUser = JSON.parse(window.atob(hubidUser));
    
          // Se a decodificação for bem-sucedida, continue com o restante do código
          const hubid_rawref = Cookie.get("hubid_rawref");
          const decodedValueHubidRawref = hubid_rawref
            ? JSON.parse(window.atob(hubid_rawref))
            : {};
    
          setContextValue((prevContext) => ({
            ...prevContext,
            historico_id: decodedHubidUser.history_id
              ? `${decodedHubidUser.history_id}`
              : null,
            referencia_raw: decodedValueHubidRawref.url || null,
            referencia: decodedValueHubidRawref.referrer || null,
            pagina: document.location.pathname || null,
            origem: decodedValueHubidRawref.origem || null,
          }));
        } catch (error) {
          // Se ocorrer um erro durante a decodificação, limpe os cookies e recarregue a página
          clearCookiesAndReload();
        }
      } else {
        setTimeout(checkCookie, 1000); // Espera 1 segundo e verifica novamente
      }
    };

    function clearCookiesAndReload() {
      document.cookie.split(";").forEach((cookie) => {
        const eqPos = cookie.indexOf("=");
        const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
      });
    
      setTimeout(() => {
        location.reload();
      }, 1000); // Aguarde 1 segundo e recarregue a página
    }

    checkCookie(); // Inicializa a verificação do cookie

    }, []);

    useEffect(() => {
      // Certifica-se de que as variáveis foram definidas antes de usá-las
      if (contextValue.pagina && contextValue.historico_id) {
        const customData = { page: contextValue.pagina };
        sendEvents({
          type: 'pageview',
          data: customData,
          user_id: contextValue.historico_id,
        });
      }
    }, [contextValue.pagina, contextValue.historico_id]);

  return (
    <HubidContext.Provider value={contextValue}>
      {children}
    </HubidContext.Provider>
  );
};
