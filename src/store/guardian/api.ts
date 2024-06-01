import { httpGuardianService } from '../../services';

export const getGuardianData = (value?:string) => {
    const search = value ? `&q=${value}` :''
    return httpGuardianService.get(`/search?page=1${search}&api-key=f00667d7-6940-435f-8d7e-de4d135651ef`);
};