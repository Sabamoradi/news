import { httpNewsApiService } from '../../services';

export const getNewsApiData = () => {
    return httpNewsApiService.get('/top-headlines?country=us&pageSize=2&apiKey=1038e30893ee46d296c0e6e36a8bdbfc');
};