export const dynamic = 'force-dynamic';
import { createMeetingAction } from '@/lib/actions';

export default function NewMeetingPage() {
  return (
    <div>
      <form action={createMeetingAction}>
        
        <button type="submit">Create Meeting</button>
      </form>
    </div>
  )
}