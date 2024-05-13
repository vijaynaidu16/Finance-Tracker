import express, {Request , Response } from 'express';
import FinancialRecordModel from '../Schema/financial-record';

const router = express.Router( );

router.get('/getAllByUserID/:userId', async(req: Request, res: Response) => {
    try {
        const userId = req.params.userId;
        const records = await FinancialRecordModel.find({userId: userId});
        if (records.length === 0) {
            return res.status(400).send({msg: "No reecords found"});
        }
        return res.status(200).send(records);
    } catch (error) {
        res.status(500).send(error);
    }
});

router.post('/', async(req: Request, res: Response) => {
    try {
        const newRecordBody = req.body;
        const newRecord = new FinancialRecordModel(newRecordBody);
        const savedRecord = await newRecord.save();
        return res.status(200).send(savedRecord);
    } catch (error) {
        res.status(500).send(error);
    }
});

router.put('/:id', async(req: Request, res: Response) => {
    try {
        const id = req.params.id;
        const newRecordBody = req.body;
        const record = await FinancialRecordModel.findByIdAndUpdate(
            id,
            newRecordBody
        )
        if(!record) return res.status(404).send();
        return res.status(200).send(record);
    } catch (error) {
        res.status(500).send(error);
    }
});

router.delete('/:id', async(req: Request, res: Response) => {
    try {
        
    } catch (err) {
        res.status(500).send(err);
    }
})


export default router;