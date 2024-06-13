/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';

const API_URL = 'http://localhost:8080';

export type MenuItem = {
    ID: number;
    Category: string;
    Name: string | null;
    Price: number | null;
    ImageURL: string | null;
}

export type BookingItem = {
    ID: number;
    Name: string;
    Phone: string;
    Datetime: string;
    Status: string;
}

export const fetchBookings = async (): Promise<BookingItem[]> => {
    const { data } = await axios.get<BookingItem[]>(`${API_URL}/bookings`);
    return data;
};

export const fetchMenuItems = async () => {
  const { data } = await axios.get<MenuItem[]>(`${API_URL}/menu`);
  return data;
};

export const createBooking = async (booking: BookingItem): Promise<BookingItem> => {
    const { data } = await axios.post<BookingItem>(`${API_URL}/bookings`, booking);
    return data;
};

export const updateBookingStatus = async ({ id, status }: { id: number; status: string }): Promise<BookingItem> => {
    const { data } = await axios.put<BookingItem>(`${API_URL}/bookings/${id}`, { status });
    return data;
};

export const deleteBooking = async (id: number): Promise<BookingItem> => {
    const { data } = await axios.delete<BookingItem>(`${API_URL}/bookings/${id}`);
    return data;
};
