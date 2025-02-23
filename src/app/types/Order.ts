import dayjs, { Dayjs } from "dayjs";

export default interface Order {
    orderid: number,
    registrationDate: Dayjs,
    vendorType: string,
    dressSize?: number,
    dressSizeCount: number,
    kolusuSize?: number,
    kolusuSizeCount: number,
    bangleSize?: number,
    bangleSizeCount: number,
    neededByDate: Dayjs,
    orderStatus: string
}