' use server';

import { redirect } from 'next/navigation';
import type { SacramentMeeting } from './types';
import { 
    createMeeting,
    updateMeeting,
    deleteMeeting } from './meetings_db';
import { z } from 'zod';

const meetingTypes = z.enum(["testimony", "regular", "stake", "general"]);

const hymnSchema = z.object({
    number: z.number(),
    title: z.string().min(10, 'Title must be at least 10 characters long'),
});

const speakerItemSchema = z.object({
    name: z.string().min(10, 'Name must be at least 10 characters long'),
    topic: z.string().min(3, 'Topic must be at least 10 characters long'),
    type: z.enum(['speaker', 'musical-number']),
});

const wardBusinessItemSchema = z.object({
    description: z.string().min(10, 'Description must be at least 10 characters long'),
});

const meetingFormSchema = z.object({ 
    id: z.number(),
    date: z.string().min(6, 'Date must be at least 10 characters long'),
    meetingType: meetingTypes,
    presiding: z.string().min(10, 'Presiding must be at least 10 characters long'),
    conducting: z.string().min(10, 'Conducting must be at least 10 characters long'),
    announcements: z.array(z.string()).optional(),
    openingHymn: hymnSchema,
    openingPrayer: z.string().min(10, 'Opening Prayer must be at least 10 characters long'),
    wardBusiness: z.array(wardBusinessItemSchema),
    stakeBusiness: z.boolean(),
    sacramentHymn: hymnSchema,
    speakers: z.array(speakerItemSchema),
    closingHymn: hymnSchema,
    closingPrayer: z.string().min(10, 'Closing Prayer must be at least 10 characters long'),    
});

export async function createMeetingAction(formData: FormData): Promise<void> {
    const rawData = formData.get('data');
    const validatedData: SacramentMeeting = meetingFormSchema.parse(rawData);
    const meeting = await createMeeting(validatedData);
    redirect(`/meetings/${meeting.id}`)
}

export async function updateMeetingAction(id: number, data: unknown) {
    const validatedData: SacramentMeeting = meetingFormSchema.parse(data);
    return updateMeeting(id, validatedData);
}

export async function deleteMeetingAction(id: number) {
    return deleteMeeting(id);
}