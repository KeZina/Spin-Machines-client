import io from 'socket.io-client';
import { useEffect } from 'react';

const useSocket = () => {
    const [socket, setSocket] = useState({});

    const [goal, setGoal] = useState([]);
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

                if(type === 'goal') setGoal(payload);
                else if(type === 'matrix') setMatrix(payload);
                else if(type === 'progress') setProgress(payload);
            })
        }
    }, [socket])

    return {
        goal,
        matrix,
        progress,
        getMatrixAndProgress
    }
}

export default useSocket;