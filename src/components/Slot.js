import React from 'react';

const Slot = () => {
    return (
        <div id = 'slot'>
            <div id = 'display'>
                <div id = 'quests'>
                    <div>
                      <span>Do Spin:</span>
                      <span>0/0</span>
                    </div>
                    <div>
                        <span>Spent Money:</span>
                        <span>0/0</span>
                    </div>
                    <div>
                        <span>3 Symbol In Row:</span>
                        <span>0/0</span>
                    </div>
                   <div>
                       <span>Rare Sybmol:</span>
                       <span>0/0</span>
                   </div>
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