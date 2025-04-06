import dayjs, { Dayjs } from "dayjs";

export default interface Registration {
    regId?: number;
    regStatus: string;
    approvalStatus: string;
    registeredAt: Dayjs;
    regType: string;
}