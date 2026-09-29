'use server';

import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';
import { 
    createMeeting,
    updateMeeting,
    deleteMeeting } from './meetings_db';
import { z } from 'zod';

const MeetingTypes = z.enum(["testimony", "regular", "stake", "general"]);

const HymnSchema = z.object({
    number: z.number(),
    title: z.string().min(6, 'Title must be at least 6 characters long'),
});

const SpeakerItemSchema = z.object({
    name: z.string().min(6, 'Name must be at least 6 characters long'),
    topic: z.string().min(6, 'Topic must be at least 6 characters long'),
    type: z.enum(['speaker', 'musical-number']),
});

const WardBusinessItemSchema = z.object({
    description: z.string().min(10, 'Description must be at least 10 characters long'),
});

const MeetingFormSchema = z.object({ 
    id: z.number(),
    date: z.string().min(6, 'You must choose a valid date'),
    meetingType: MeetingTypes,
    presiding: z.string().min(6, 'Presiding must be at least 6 characters long').optional(),
    conducting: z.string().min(6, 'Conducting must be at least 6 characters long').optional(),
    announcements: z.array(z.string().min(6, 'Announcement must be at least 6 characters long')).optional(),
    openingHymn: HymnSchema.optional(),
    openingPrayer: z.string().min(6, 'Opening Prayer must be at least 6 characters long').optional(),
    wardBusiness: z.array(WardBusinessItemSchema).optional(),
    stakeBusiness: z.boolean(),
    sacramentHymn: HymnSchema.optional(),
    speakers: z.array(SpeakerItemSchema).optional(),
    closingHymn: HymnSchema.optional(),
    closingPrayer: z.string().min(6, 'Closing Prayer must be at least 6 characters long').optional()
});

export type State = {
    errors?: {
        date?: string[];
        meetingType?: string[];
        presiding?: string[];
        conducting?: string[];
        announcements?: string[];
        openingHymn?: string[];
        openingPrayer?: string[];
        wardBusiness?: string[];
        stakeBusiness?: string[];
        sacramentHymn?: string[];
        speakers?: string[];
        closingHymn?: string[];
        closingPrayer?: string[];
    };
    message?: string | null;
};

export async function createMeetingAction(prevState: State, formData: FormData): Promise<State> {
    const rawData = {
        date: formData.get('date'),
        meetingType: formData.get('meetingType'),
        presiding: formData.get('presiding'),
        conducting: formData.get('conducting'),
        announcements: formData.getAll('announcements'),
        openingHymn: {
            number: Number(formData.get('openingHymnNumber')),
            title: formData.get('openingHymnTitle') as string,
        },
        openingPrayer: formData.get('openingPrayer'),
        wardBusiness: formData.getAll('wardBusiness').map(description => ({ description })),
        stakeBusiness: formData.get('stakeBusiness') === 'yes',
        sacramentHymn: {
            number: Number(formData.get('sacramentHymnNumber')),
            title: formData.get('sacramentHymnTitle') as string,
        },
        speakers: (() => {
            const speakerNames = formData.getAll('speakerName');
            const speakerTopics = formData.getAll('speakerTopic');
            const speakerTypes = formData.getAll('speakerType');
            return speakerNames.map((name, i) => ({
                name,
                topic: speakerTopics[i] as string,
                type: speakerTypes[i] as string,
            }));
        })(),
        closingHymn: {
            number: Number(formData.get('closingHymnNumber')),
            title: formData.get('closingHymnTitle') as string,
        },
        closingPrayer: formData.get('closingPrayer'),
    };
    const parsed = MeetingFormSchema.omit({ id: true }).safeParse(rawData);
if (!parsed.success) {
    console.error('Failed to create meeting:', parsed.error);
    return {
        errors: parsed.error.flatten().fieldErrors,
        message: 'Please fix the errors above.',
    };
}   
    let meeting;
    try {
        meeting = await createMeeting(parsed.data);
        revalidatePath(`/meetings/${meeting.id}`);
    } catch (error) {
        console.error('Failed to create meeting:', error);
        throw new Error('Failed to create meeting. Please try again later');
    }
    revalidatePath(`/meetings/${meeting.id}`);
    redirect(`/meetings/${meeting.id}`);
}

export async function updateMeetingAction(id: number, prevState: State, formData: FormData): Promise<State> {
    const rawData = {
        date: formData.get('date'),
        meetingType: formData.get('meetingType'),
        presiding: formData.get('presiding'),
        conducting: formData.get('conducting'),
        announcements: formData.getAll('announcements'),
        openingHymn: {
            number: Number(formData.get('openingHymnNumber')),
            title: formData.get('openingHymnTitle') as string,
        },
        openingPrayer: formData.get('openingPrayer'),
        wardBusiness: formData.getAll('wardBusiness').map(description => ({ description })),
        stakeBusiness: formData.get('stakeBusiness') === 'yes',
        sacramentHymn: {
            number: Number(formData.get('sacramentHymnNumber')),
            title: formData.get('sacramentHymnTitle') as string,
        },
        speakers: (() => {
            const speakerNames = formData.getAll('speakerName');
            const speakerTopics = formData.getAll('speakerTopic');
            const speakerTypes = formData.getAll('speakerType');
            return speakerNames.map((name, i) => ({
                name,
                topic: speakerTopics[i] as string,
                type: speakerTypes[i] as string,
            }));
        })(),
        closingHymn: {
            number: Number(formData.get('closingHymnNumber')),
            title: formData.get('closingHymnTitle') as string,
        },
        closingPrayer: formData.get('closingPrayer'),
    };
    const parsed = MeetingFormSchema.omit({ id: true }).safeParse(rawData);
    if (!parsed.success) {
        console.error('Failed to create meeting:', parsed.error);
        return {
            errors: parsed.error.flatten().fieldErrors,
            message: 'Please fix the errors above.',
        };
    }
    let meeting;
    try {
        meeting = await updateMeeting(id, parsed.data);
        revalidatePath(`/meetings/${meeting.id}`);
    } catch (error) {
        console.error('Failed to update meeting:', error);
        throw new Error('Failed to update meeting. Please try again later');
    }
    revalidatePath(`/meetings/${meeting.id}`);
    redirect(`/meetings/${meeting.id}`);    
}

export async function deleteMeetingAction(id: number, formData: FormData): Promise<void> {
    try {
        await deleteMeeting(id);
        revalidatePath(`/meetings`);
    } catch (error) {
        console.error('Failed to delete meeting:', error);
        throw new Error('Failed to delete meeting. Please try again later');
    }
    revalidatePath(`/meetings`);
    redirect(`/meetings`);
}