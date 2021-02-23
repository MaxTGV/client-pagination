export const fetchImages = (page, limit = 50) => {
  return fetch(
    `https://api.creativecommons.engineering/v1/images?page=${page}&page_size=${limit}`
  ).then((res) => res.json());
};
