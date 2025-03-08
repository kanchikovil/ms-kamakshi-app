import dayjs, { Dayjs } from "dayjs";

export default interface Registration {
    regId?: number;
    approvalStatus: string;
    registeredDate: Dayjs;
}