# Gallery
A gallery based on [{JSON} Placeholder](https://jsonplaceholder.typicode.com/)

## Prerequisites
No library has been pre-configured for API calls. You can install any library (axios, react-query, node-fetch) to do so. You are also free to create an instance/service/hook if you want.
## Tasks
1. Fetch data from the [`/albums` endpoint](https://jsonplaceholder.typicode.com/albums).
2. When an album is clicked, fetch the respective album's photo data from the [`/albums/:id/photos` endpoint](https://jsonplaceholder.typicode.com/albums/1/photos)

### Bonus
- Show loading indicator when fetching new album photos.
- Handle possible network errors.
- Make use of the existing `VITE_BASE_URL` from the `.env` file for your API calls.
---

[:arrow_left: Go back to main branch](https://github.com/OttrTechnology/react-assessment#getting-started)
