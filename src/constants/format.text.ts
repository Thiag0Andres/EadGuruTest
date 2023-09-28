export const boldRegex = /\*\*(.*?)\*\*/g;
export const matchBoldRegex = /(\*\*.+?\*\*)|([^*]+)/g;
export const isAsterisks = /\*\*\*\*/g;
export const verifyAsterisks = /\*\*/g;
export const linkRegex = /\[.*?\]\(.*?\)/g;
export const addFormattingText = (
  sentence: string
): RegExpMatchArray | string[] | null => {
  if (typeof sentence === "string") {
    const count = (sentence.match(verifyAsterisks) || []).length;
    if (count > 1) {
      if (sentence.match(isAsterisks)) {
        return [sentence];
      }
      return splitLinks(sentence.match(matchBoldRegex) as RegExpMatchArray);
    }
    if (sentence.match(linkRegex)) {
      return splitLinks([sentence]);
    }
    return [sentence];
  }
  return sentence;
};
const splitLinks = (array: string[]): string[] => {
  const result: string[] = [];
  for (let i = 0; i < array.length; i += 1) {
    const current = array[i];
    const linkMatches = current.match(linkRegex);
    const asterisks = current.match(verifyAsterisks);
    if (linkMatches && linkMatches.length > 0) {
      const parts = current.split(linkRegex);
      const linkCount = linkMatches.length;
      for (let j = 0; j < parts.length; j += 1) {
        result.push(parts[j]);
        if (j < linkCount) {
          if (asterisks && asterisks.length > j) {
            const linkWithAsterisks = `${asterisks[j]}${linkMatches[j]}${asterisks[j]}`;
            result.push(linkWithAsterisks);
          } else {
            result.push(linkMatches[j]);
          }
        }
      }
    } else if (asterisks && asterisks.length > 0) {
      result.push(current);
    } else {
      result.push(current.replace(/\*\*/g, "**"));
    }
  }
  return result.filter((item) => item !== "**");
};
