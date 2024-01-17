import {OAuthService} from "angular-oauth2-oidc";
import {inject} from "@angular/core";

export const baseAuthGuard = async(): Promise<boolean> => {
  const oauth = inject(OAuthService);
  await oauth.loadDiscoveryDocumentAndLogin();
  return oauth.hasValidAccessToken() && oauth.hasValidIdToken();
}
