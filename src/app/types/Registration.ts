import dayjs, { Dayjs } from "dayjs";

export default interface Registration {
    regId?: number;
    regStatus: string;
    approvalStatus: string;
    registeredDate: Dayjs;
}