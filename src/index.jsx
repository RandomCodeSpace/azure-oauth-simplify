import {InteractionType, PublicClientApplication} from '@azure/msal-browser';
import {MsalAuthenticationTemplate, MsalProvider} from '@azure/msal-react';

export const AzureOAuthProvider = ({clientId, tenantId, children}) => {
    const authority = `https://login.microsoftonline.com/${tenantId}`;
    const publicClientApplication = new PublicClientApplication({
        auth: {
            clientId: clientId, authority: authority,
        },
    });


    return (<MsalProvider instance={publicClientApplication}>
        <AppAuth children={children}/>
    </MsalProvider>);
};
const AppInternal = ({children}) => {
    return (<>{children}</>);
};

const AppAuth = ({children}) => {
    return (<MsalAuthenticationTemplate interactionType={InteractionType.Redirect}>
        <AppInternal children={children}/>
    </MsalAuthenticationTemplate>);
};

