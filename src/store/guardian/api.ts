import { httpGuardianService } from '../../services';

export const getGuardianData = () => {
    return httpGuardianService.get('/search?page=1&api-key=f00667d7-6940-435f-8d7e-de4d135651ef');
};