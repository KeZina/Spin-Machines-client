import React, { useContext } from 'react';
import { SpinContext } from '../utils/context';

const Slot = () => {
    const spin = useContext(SpinContext);
    
    const quests = spin.quests.map(quest => {
        return (
            <div>
                <span>{`${quest.questType.replace('_', ' ').toUpperCase()}:`}</span>
                {
                    quest.isCompleted
                    ?
                    <span>Done</span>
                    :
                    <span>{`${quest.userQuestValue}/${quest.questValue}`}</span>
                }
            </div>
        )
    })

    const drum = spin.matrix.map(arr => {
        return (
            <div>
                <span>{arr[0] || 0}</span>
                <span>{arr[1] || 0}</span>
                <span>{arr[2] || 0}</span>
                <span>{arr[3] || 0}</span>
                <span>{arr[4] || 0}</span>
            </div>
        )
    })

    return (
        <div id = 'slot'>
            <div id = 'display'>
                <div id = 'quests'>
                   {quests}
                </div>
                <div id = 'spin'>
                    {drum}
                </div>
                <button id = 'shy-button' onClick = {spin.getProgress}>
                    Spin!
                </button>
            </div>
        </div>
    )
}

export default Slot;