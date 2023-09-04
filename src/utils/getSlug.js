/* 주어진 URL 경로를 소문자로 변환하고, 공백을 하이픈('-')으로 대체한 후, 문자열의 시작과 끝에 위치한 하이픈을 제거 */

export function getSlug(urlPath) {
  return urlPath.toLowerCase().replace(/\s+/g, "-").replace(/^-|-$/g, "");
}
