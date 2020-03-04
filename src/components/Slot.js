import React, { useContext } from 'react';
import { QuestsContext } from '../utils/context';

const Slot = () => {
    const quests = useContext(QuestsContext);
    
    console.log(quests)

    const progress = quests.progress.map(quest => {
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

    return (
        <div id = 'slot'>
            <div id = 'display'>
                <div id = 'quests'>
                   {progress}
                </div>
                <div id = 'spin'>
                    <div>
                        <span>0</span>
                        <span>0</span>
                        <span>0</span>
                    </div>
                    <div>
                        <span>0</span>
                        <span>0</span>
                        <span>0</span>
                    </div>
                    <div>
                        <span>0</span>
                        <span>0</span>
                        <span>0</span>
                    </div>
                    <div>
                        <span>0</span>
                        <span>0</span>
                        <span>0</span>
                    </div>
                    <div>
                        <span>0</span>
                        <span>0</span>
                        <span>0</span>
                    </div>
                </div>
                <button id = 'shy-button'>
                    Spin!
                </button>
            </div>
        </div>
    )
}

export default Slot;