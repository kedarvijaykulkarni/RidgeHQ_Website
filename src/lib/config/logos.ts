/**
 * Client/partner logo content for the `LogoBand` component (#43). RidgeHQ has no
 * client logos to show yet — this ships with zero entries by design. Every entry
 * must be a real logo the client/partner has given permission to display; never
 * add a placeholder or illustrative logo to fill this out.
 */
export interface ClientLogo {
  name: string;
  src: string;
  href?: string;
}

export const clientLogos: ClientLogo[] = [];
