// string related functions here

// sample
export function ucfirst(str: string) {
  return `${str.charAt(0).toUpperCase()}${str.slice(1)}`;
}

export function splitJoinString(
  str: string,
  splitter: string,
  separator: string
) {
  if (str) {
    return str.split(splitter).join(separator);
  }
}

export function titleize(str: string) {
  return splitJoinString(str, '_', ' ');
}

export function getPageUrl(page: string) {
  const component = splitJoinString(page, '_', '-');
  return `../${component}/${component}`;
}
