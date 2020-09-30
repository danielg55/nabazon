import React, {useState} from "react";
import Paper from '@material-ui/core/Paper';
import { ViewState } from '@devexpress/dx-react-scheduler';
import {
    Scheduler,
    DayView,
    WeekView,
    MonthView,
    Appointments,
    AppointmentTooltip,
    AppointmentForm,
    Toolbar,
    DateNavigator,
    ViewSwitcher,
} from '@devexpress/dx-react-scheduler-material-ui';

export default function Calendar(props) {
    const [appointments, setAppointments] = useState(props.appointments == null ? [] : props.appointments);

    return (
        <Paper>
            <Scheduler data={appointments}>
                <ViewState
                    defaultCurrentViewName="Week"
                />

                <DayView
                    startDayHour={8}
                    endDayHour={13}
                />
                <WeekView
                    startDayHour={10}
                    endDayHour={19}
                />
                <MonthView/>

                <Appointments />
                <AppointmentTooltip
                    showCloseButton
                    showOpenButton
                />
                <AppointmentForm
                    readOnly
                />

                <Toolbar />
                <DateNavigator />
                <ViewSwitcher />
            </Scheduler>
        </Paper>
    );
}
