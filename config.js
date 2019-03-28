// This is client side config only - don't put anything in here that shouldn't be public!

// GraphQL server url yoga.dokku.nmowhanau.nz
export const endpoint =
  process.env.NODE_ENV === "production"
    ? `https://yoga.dokku.kina.nz`
    : `http://localhost:4444`;
