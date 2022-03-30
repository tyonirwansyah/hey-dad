import intlDad from "./intl-dad";

export function heyDad(fatherName?: string, lang: string = "en"): any {
  if (!lang || !intlDad.hasOwnProperty(lang)) {
    throw new Error("Language not yet supported, but hey dadz!");
  }

  const re: RegExp = /{{([\s\S]+)}}/;
  const greeting: any = intlDad[lang as keyof typeof intlDad];
  const dad: string = greeting.match(re)[0].slice(2, -2);

  return greeting.replace(re, fatherName || dad);
}
