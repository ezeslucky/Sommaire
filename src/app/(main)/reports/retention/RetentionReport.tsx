/* eslint-disable prettier/prettier */
import RetentionTable from './RetentionTable';
import RetentionParameters from './RetentionParameters';
import Report from '../[reportId]/Report';
import ReportHeader from '../[reportId]/ReportHeader';
import ReportMenu from '../[reportId]/ReportMenu';
import ReportBody from '../[reportId]/ReportBody';
import Magnet from '@/assets/magnet.svg';
import { REPORT_TYPES } from '@/lib/constants';
import { parseDateRange } from '@/lib/date';
import { endOfMonth, startOfMonth } from 'date-fns';

const defaultParameters = {
  type: REPORT_TYPES.retention,
  parameters: {
    dateRange: parseDateRange(
      `range:${startOfMonth(new Date()).getTime()}:${endOfMonth(new Date()).getTime()}`,
    ),
  },
};

export default function RetentionReport({ reportId }: { reportId?: string }) {
  return (
    <Report reportId={reportId} defaultParameters={defaultParameters}>
      <ReportHeader icon={<Magnet />} />
      <ReportMenu>
        <div className="flex flex-col justify-between border border-base400 rounded-[var(--border-radius)] leading-[32px] p-2.5 overflow-hidden">
          <RetentionParameters />
        </div>
      </ReportMenu>
      <ReportBody>
        <RetentionTable />
      </ReportBody>
    </Report>
  );
}
