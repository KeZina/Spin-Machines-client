import io from 'socket.io-client';
import { useState, useEffect } from 'react';

const useSocket = () => {
    const [socket, setSocket] = useState(null);

    const [matrix, setMatrix] = useState(new Array(3).fill([]));
    const [quests, setQuests] = useState([]);

    const getProgress = () => socket.emit('getProgress');

    useEffect(() => {
        setSocket(io('http://localhost:3003'));
    }, [])

    useEffect(() => {
        if(socket) {
            socket.on('quests', data => {
                const {quests, matrix} = data.progress;

                setMatrix(m => matrix || m);
                setQuests(quests);
            })
        }
    }, [socket])

    return {
        matrix,
        quests,
        getProgress
    }
}

export default useSocket;