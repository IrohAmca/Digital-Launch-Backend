
import { Request, Response } from 'express';
import { updatePlacementService } from '../../services/launch/launchUpdate';

async function updatePlacement(req: Request, res: Response) {
    try {
        const { data, id } = req.body;

        if (!data || !id) {
            return res.status(400).send('Bad Request: Data and ID are required');
        }

        const result = await updatePlacementService(data, id);

        if (typeof result === 'boolean' && result) {
            return res.status(200).send('Updated Component');
        } else {
            return res.status(500).send('Failed to update component');
        }
    } catch (err) {
        console.error("Error in updatePlacement:", err);
        return res.status(500).send((err as Error).message || 'Internal Server Error');
    }
}

export { updatePlacement };