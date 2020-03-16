export const getRepoApi = name =>
  `https://api.github.com/users/${name}/repos?per_page=100&page=1`;

export const getUserApi = name => `https://api.github.com/users/${name}`;

export function getAllLanguages(response) {
  return Array.isArray(response)
    ? response.map(repo => repo.language).filter(Boolean)
    : null;
}

export function countLanguageTimes(allLang) {
  let getCountedObject;
  if (allLang) {
    getCountedObject = allLang.reduce((acc, dec) => {
      if (acc[dec]) {
        acc[dec]++;
        return acc;
      }
      acc[dec] = 1;
      return acc;
    }, {});
  }
  return getCountedObject;
}

export function calculateLanguagePercentage(langList) {
  const filteredLang = getAllLanguages(langList);
  const countedObject = countLanguageTimes(filteredLang);
  let finalResult;
  if (filteredLang) {
    finalResult = Object.keys(countedObject).map(lan => ({
      name: lan,
      percentage: ((countedObject[lan] / filteredLang.length) * 100).toFixed()
    }));
  }
  return finalResult;
}

export function sortOnRankBase(first, second) {
  return second.rank - first.rank;
}

export const getYearFromDate = date => {
  return new Date(date).getFullYear();
};

export function getPopularRepos(repoList) {
  const getRankedRepos = repoList
    ? repoList
        .map(repo => {
          const {
            fork,
            forks,
            watchers,
            stargazers_count,
            created_at,
            updated_at
          } = repo;
          let rank;
          if (fork !== true) {
            rank = forks + watchers + stargazers_count;
            return {
              ...repo,
              rank,
              created_at: getYearFromDate(created_at),
              updated_at: getYearFromDate(updated_at)
            };
          }
        })
        .filter(Boolean)
    : [];
  const sorted = getRankedRepos.sort(sortOnRankBase);
  //let's get top five repos
  return sorted.slice(0, 6);
}
