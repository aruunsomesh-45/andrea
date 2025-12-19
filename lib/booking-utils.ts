import { startOfDay, endOfDay, addMinutes, format, isBefore, isEqual, parse, isAfter } from 'date-fns';

export type Availability = {
    start: string; // "09:00"
    end: string;   // "17:00"
    days: number[]; // 1=Mon, 2=Tue...
};

// Types
export type TimeSlot = {
    time: string;
    available: boolean;
};

export const CONFIG = {
    duration: 30, // minutes
    buffer: 0,    // minutes
};
