'use client';

import { createMeetingAction, type State } from '@/lib/actions';
import { RepeatebleField, SpeakersField } from '@/components/RepeatableField';
import { useActionState } from 'react';

const initialState: State = { message: null, errors: {} };

const labelClass = "text-sm font-bold text-blue-800 dark:text-blue-300";
const inputClass =
  "rounded-md border-2 border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring focus:ring-blue-200 dark:bg-mist-800 dark:border-mist-600 dark:text-gray-100";

export default function NewMeetingForm() {

  const [state, formAction, isPending] = useActionState(createMeetingAction, initialState);

  return (
    <div className="max-w-2xl mx-auto p-4 m-4 rounded-lg shadow-md bg-gradient-to-b from-white to-mist-100 dark:from-mist-800 dark:to-mist-900">
      <h1 className="text-lg font-bold mb-4 capitalize">New Meeting</h1>
      <form
        className="flex flex-col gap-4"
        action={formAction}>
          <label className={labelClass} htmlFor="date">Date:</label>
          <input
            className={inputClass}
            type="date"
            id="date"
            name="date"
            required
            aria-describedby="date-error"
          />
          <div id="date-error" aria-live="polite" aria-atomic="true">
          {state.errors?.date?.map((error) => (
            <p key={error} className="mt-1 text-sm text-red-600">
              {error}
            </p>
          ))}
          </div>

          <label className={labelClass} htmlFor="meetingType">Meeting Type:</label>
          <select
            className={inputClass}
            id="meetingType"
            name="meetingType"
            required
            aria-describedby="meetingType-error"
          >
            <option value="regular">Regular</option>
            <option value="testimony">Testimony</option>
            <option value="stake">Stake</option>
            <option value="general">General</option>
          </select>
          <div id="meetingType-error" aria-live="polite" aria-atomic="true">
          {state.errors?.meetingType?.map((error) => (
            <p key={error} className="mt-1 text-sm text-red-600">
              {error}
            </p>
          ))}
          </div>

          <label className={labelClass} htmlFor="presiding">Presiding:</label>
          <input
            className={inputClass}
            type="text"
            id="presiding"
            name="presiding"
            aria-describedby="presiding-error"
          />
          <div id="presiding-error" aria-live="polite" aria-atomic="true">
          {state.errors?.presiding?.map((error) => (
            <p key={error} className="mt-1 text-sm text-red-600">
              {error}
            </p>
          ))}
          </div>

          <label className={labelClass} htmlFor="conducting">Conducting:</label>      
          <input
            className={inputClass}
            type="text"
            id="conducting"
            name="conducting"
            aria-describedby="conducting-error"
          />
          <div id="conducting-error" aria-live="polite" aria-atomic="true">
          {state.errors?.conducting?.map((error) => (
            <p key={error} className="mt-1 text-sm text-red-600">
              {error}
            </p>
          ))}
          </div>

          <RepeatebleField name="announcements" label="Announcements:" />
          <div id="announcements-error" aria-live="polite" aria-atomic="true">
          {state.errors?.announcements?.map((error) => (
            <p key={error} className="mt-1 text-sm text-red-600">
              {error}
            </p>
          ))}
          </div>
          
          <p className={labelClass}>Opening Hymn:</p>
          <div className="grid grid-cols-1 sm:grid-cols-[auto_1fr] gap-3 p-3 rounded-md border border-gray-300 dark:border-mist-600">
              <div className="flex flex-col gap-1">
                  <label className={labelClass} htmlFor="openingHymnNumber">Number</label>
                  <input
                    className={inputClass + " w-20"}
                    type="text"
                    id="openingHymnNumber"
                    name="openingHymnNumber"
                    aria-describedby="openingHymnNumber-error"
                  />
              </div>
              <div className="flex flex-col gap-1">
                  <label className={labelClass} htmlFor="openingHymnTitle">Title</label>
                  <input
                    className={inputClass}
                    type="text"
                    id="openingHymnTitle"
                    name="openingHymnTitle"
                    aria-describedby="openingHymnTitle-error"
                  />
              </div>
          </div>
          <div id="openingHymn-error" aria-live="polite" aria-atomic="true">
          {state.errors?.openingHymn?.map((error) => (
            <p key={error} className="mt-1 text-sm text-red-600">
              {error}
            </p>
          ))}
          </div>

          <label className={labelClass} htmlFor="openingPrayer">Opening Prayer:</label>
          <input
            className={inputClass}
            type="text"
            id="openingPrayer"
            name="openingPrayer"
            aria-describedby="openingPrayer-error"
          />
          <div id="openingPrayer-error" aria-live="polite" aria-atomic="true">
          {state.errors?.openingPrayer?.map((error) => (
            <p key={error} className="mt-1 text-sm text-red-600">
              {error}
            </p>
          ))}
          </div>

          <RepeatebleField name="wardBusiness" label="Ward Business:" />
          <div id="wardBusiness-error" aria-live="polite" aria-atomic="true">
          {state.errors?.wardBusiness?.map((error) => (
            <p key={error} className="mt-1 text-sm text-red-600">
              {error}
            </p>
          ))}
          </div>

          <label className={labelClass} htmlFor="stakeBusiness">Stake Business:</label>
          <select className={inputClass} id="stakeBusiness" name="stakeBusiness" >
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
          <div id="stakeBusiness-error" aria-live="polite" aria-atomic="true">
          {state.errors?.stakeBusiness?.map((error) => (
            <p key={error} className="mt-1 text-sm text-red-600">
              {error}
            </p>
          ))}
          </div>

          <p className={labelClass}>Sacrament Hymn:</p>
          <div className="grid grid-cols-1 sm:grid-cols-[auto_1fr] gap-3 p-3 rounded-md border border-gray-300 dark:border-mist-600">
              <div className="flex flex-col gap-1">
                  <label className={labelClass} htmlFor="sacramentHymnNumber">Number</label>
                  <input
                    className={inputClass + " w-20"}
                    type="text"
                    id="sacramentHymnNumber"
                    name="sacramentHymnNumber"
                    aria-describedby="sacramentHymnNumber-error"
                  />
              </div>
              <div className="flex flex-col gap-1">
                  <label className={labelClass} htmlFor="sacramentHymnTitle">Title</label>
                  <input
                    className={inputClass}
                    type="text"
                    id="sacramentHymnTitle"
                    name="sacramentHymnTitle"
                    aria-describedby="sacramentHymnTitle-error"
                  />
              </div>
          </div>
          <div id="sacramentHymn-error" aria-live="polite" aria-atomic="true">
          {state.errors?.sacramentHymn?.map((error) => (
            <p key={error} className="mt-1 text-sm text-red-600">
              {error}
            </p>
          ))}
          </div>

          <SpeakersField />
          <div id="speakers-error" aria-live="polite" aria-atomic="true">
          {state.errors?.speakers?.map((error) => (
            <p key={error} className="mt-1 text-sm text-red-600">
              {error}
            </p>
          ))}
          </div>

          <p className={labelClass}>Closing Hymn:</p>
          <div className="grid grid-cols-1 sm:grid-cols-[auto_1fr] gap-3 p-3 rounded-md border border-gray-300 dark:border-mist-600">
              <div className="flex flex-col gap-1">
                  <label className={labelClass} htmlFor="closingHymnNumber">Number</label>
                  <input
                    className={inputClass + " w-20"}
                    type="text"
                    id="closingHymnNumber"
                    name="closingHymnNumber"
                    aria-describedby="closingHymnNumber-error"
                  />
              </div>
              <div className="flex flex-col gap-1">
                  <label className={labelClass} htmlFor="closingHymnTitle">Title</label>
                  <input
                    className={inputClass}
                    type="text"
                    id="closingHymnTitle"
                    name="closingHymnTitle"
                    aria-describedby="closingHymnTitle-error"
                  />
              </div>
          </div>
          <div id="closingHymn-error" aria-live="polite" aria-atomic="true">
          {state.errors?.closingHymn?.map((error) => (
            <p key={error} className="mt-1 text-sm text-red-600">
              {error}
            </p>
          ))}
          </div>

          <label className={labelClass} htmlFor="closingPrayer">Closing Prayer:</label>
          <input
            className={inputClass}
            type="text"
            id="closingPrayer"
            name="closingPrayer"
            aria-describedby="closingPrayer-error"
          />
          <div id="closingPrayer-error" aria-live="polite" aria-atomic="true">
          {state.errors?.closingPrayer?.map((error) => (
            <p key={error} className="mt-1 text-sm text-red-600">
              {error}
            </p>
          ))}
          </div>

          {state.message ? <p className="text-sm text-red-600">{state.message}</p> : null}

        <button
          type="submit"
          disabled={isPending}
          className="mt-2 px-4 py-2 bg-sky-900 text-white rounded hover:bg-blue-700 transition-all hover:cursor-pointer"
        >
          {isPending ? 'Creating...' : 'Create Meeting'}
        </button>
      </form>
    </div>
  )
}