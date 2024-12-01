import { DateRange } from "react-day-picker";

export interface IDateRangePickerProps extends React.ComponentProps<'div'> {
  date: DateRange | undefined;
  onDateChange: (date: DateRange | undefined) => void;
}