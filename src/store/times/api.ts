import { httpTimesService } from '../../services';

export const getTimesData = () => {
    return httpTimesService.get('/svc/mostpopular/v2/emailed/7.json?api-key=vwjNDWt6gDLhcFNaeuzhCUcQpdI1FAOP');
};