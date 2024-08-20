import { saveGeneralInfo } from '../services/inserstData';

async function submitGeneral(data: any) {
    try {
        const objID = await saveGeneralInfo(data);
        return objID;
    } catch (err) {
        console.log("Error in saveData:", err);
        throw err;
    }
}

export { submitGeneral };