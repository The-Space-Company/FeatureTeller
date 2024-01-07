export const pagesConfig = {
  "/suggestions/new": {
    hideMainNav: true,
  },
} as const;

export const getPageOptions = (pagePath: string) => {
  const optionPatterns = Object.keys(pagesConfig);

  for (const optionPatternAsString of optionPatterns) {
    const optionPatternAsRegex = new RegExp(
      "^" + optionPatternAsString.replace("*", "[a-zA-Z0-9-_]+") + "$",
    );
    if (pagePath.match(optionPatternAsRegex)) {
      return pagesConfig[optionPatternAsString as keyof typeof pagesConfig];
    }
  }
};
