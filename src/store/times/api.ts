import { httpTimesService } from '../../services';

export const getTimesData = () => {
    return httpTimesService.get('/svc/mostpopular/v2/emailed/1.json?api-key=vwjNDWt6gDLhcFNaeuzhCUcQpdI1FAOP');
};

export const getTimesSearchData = (data:string) => {
    return httpTimesService.get(`/svc/search/v2/articlesearch.json?q=${data}&api-key=vwjNDWt6gDLhcFNaeuzhCUcQpdI1FAOP`);
};