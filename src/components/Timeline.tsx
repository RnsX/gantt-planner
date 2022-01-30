import React from 'react';

const Timeline = () => {

    const monthlyCalendar = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    
    const renderTimelineGrid = () => {

        return (
            monthlyCalendar.map((month, idx) => (
                <div style={{
                    textAlign: 'center', color: 'lightgray', borderLeft: '1px solid lightgray', minWidth: '100px', marginTop: '1em', flex: '0'
                }}>
                    {month}
                </div>
            ))
        )

    }

    return (
        <div className='userSelectionSettings' style={{width: '100%', paddingLeft: '224px', position: 'absolute', height: '100%', display: 'flex', overflow: 'hidden', fontSize: 'medium'}}>
            {renderTimelineGrid()}
            <style>
                {`
                    .userSelectionSettings {
                        user-select: none;
                        -moz-user-select: none;
                        -webkit-user-select: none;
                        -ms-user-select: none;
                    }
                `}
            </style>
        </div>
    )
};

export default Timeline;


// <div style={{display: 'flex', marginBottom: '0.25em'}}>
//     <div style={{marginLeft: '260px', color: '#afafaf', borderLeft: '1px solid lightgray', paddingLeft: '0.5em'}}>
//     January
//     </div>
//     <div style={{marginLeft: '100px', color: '#afafaf', borderLeft: '1px solid lightgray', paddingLeft: '0.5em'}}>
//     February
//     </div>
//     <div style={{marginLeft: '100px', color: '#afafaf', borderLeft: '1px solid lightgray', paddingLeft: '0.5em'}}>
//     March
//     </div>
//     <div style={{marginLeft: '100px', color: '#afafaf', borderLeft: '1px solid lightgray', paddingLeft: '0.5em'}}>
//     April
//     </div>
//     <div style={{marginLeft: '100px', color: '#afafaf', borderLeft: '1px solid lightgray', paddingLeft: '0.5em'}}>
//     June
//     </div>
// </div>