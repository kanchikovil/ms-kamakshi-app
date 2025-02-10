import { Dayjs } from "dayjs";

export default interface Settings {
    id?: number,
    eventStartDate: Dayjs,
    eventEndDate: Dayjs,
    dateForLocals: Dayjs,
    tailorName: string,
    tailorEmail: string,
    tailorPhone: string,
    tailorAddress: string,
    bangleVendorName: string,
    bangleVendorEmail: string,
    bangleVendorPhone: string,
    bangleVendorAddress: string,
    kolusuVendorName: string,
    kolusuVendorEmail: string,
    kolusuVendorPhone: string,
    kolusuVendorAddress: string,
}