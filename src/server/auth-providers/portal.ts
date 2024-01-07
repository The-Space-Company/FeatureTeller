import { OAuthConfig, OAuthUserConfig } from "next-auth/providers/index";
import WorkOS, { User } from "@workos-inc/node";
import { SignJWT, jwtVerify } from "jose";

export interface PortalProfile extends Record<string, any> {
  id: string;
  email: string;
  name: string;
  first_name: string;
  last_name: string;
}

export default function PortalProvider<P extends PortalProfile>(
  options: OAuthUserConfig<P>,
): OAuthConfig<P> {
  return {
    id: "portal",
    name: "The Space Portal",
    type: "oauth",
    authorization:
      "https://portal.thespace.company/oauth2/v1/authorize?scope=auth",
    token: "https://portal.thespace.company/oauth2/v1/token",
    userinfo: "https://portal.thespace.company/oauth2/v1/userinfo",
    profile(profile) {
      return {
        id: profile.id,
        name: profile.name,
        email: profile.email,
      };
    },
    options,
  };
}

// export default function PortalProvider<P extends PortalProfile>(
//   options: OAuthUserConfig<P>,
// ): OAuthConfig<P> {
//   return {
//     id: "portal",
//     name: "The Space Portal",
//     type: "oauth",
//     wellKnown: "https://portal.thespace.company/.well-known/openid-configuration",
//     idToken: true,
//     profile(profile) {
//       return {
//         id: profile.sub,
//         name: profile.name,
//         email: profile.email,
//       };
//     },
//     options,
//   };
// }
