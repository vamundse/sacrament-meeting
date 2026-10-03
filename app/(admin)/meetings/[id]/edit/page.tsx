import { getMeetingById } from '@/lib/meetings_db';
import EditMeetingForm from './editForm';

export default async function EditMeetingPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const meetingId = Number(id);
  const meeting = await getMeetingById(meetingId);

  if (!meeting) {
    return <p>Meeting not found.</p>;
  }

  return <EditMeetingForm meeting={meeting} />;
}