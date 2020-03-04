import io from 'socket.io-client';
import { useState, useEffect } from 'react';

const useSocket = () => {
    const [socket, setSocket] = useState(null);

    const [matrix, setMatrix] = useState([]);
    const [progress, setProgress] = useState([]);

    const getMatrixAndProgress = () => {
        socket.emit('quests', {type: 'getMatrixAndProgress'});
    }

    useEffect(() => {
        setSocket(io('http://localhost:3003'));
    }, [])

    useEffect(() => {
        if(socket) {
            socket.on('quests', data => {
                const {type, payload} = data;

                if(type === 'progress') setProgress(payload);
                else if(type === 'matrix') setMatrix(payload);
            })
        }
    }, [socket])

    return {
        matrix,
        progress,
        getMatrixAndProgress
    }
}

export default useSocket;