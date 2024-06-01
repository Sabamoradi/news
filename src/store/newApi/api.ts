import { httpNewsApiService } from '../../services';

export const getNewsApiData = () => {
    return httpNewsApiService.get('/everything?domains=wsj.com&apiKey=1038e30893ee46d296c0e6e36a8bdbfc');
};