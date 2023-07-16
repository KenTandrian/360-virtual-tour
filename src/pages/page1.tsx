import { startTransition, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Pannellum } from "pannellum-react";

import './style.css';

const Page1 = () => {
    let navigate = useNavigate();
    const [yaw, setYaw] = useState(0);
    const [pitch, setPitch] = useState(0);
    const [ image ] = useState('https://pannellum.org/images/alma.jpg');
    const panImage = useRef<any>(null);

    return (
        <div>
            <div className="pitch-yaw">
                <p className="pitch-yaw-text"> Pitch: {pitch} </p>
                <p className="pitch-yaw-text"> Yaw: {yaw} </p>
                <h5 className="pitch-yaw-text">© Alterra Academy</h5>
            </div>
            <Pannellum
                width='100%'
                height='100vh'
                image={image}
                title='360 Virtual Tour'
                previewTitle ="360 Virtual Tour"
                author="Ken Tandrian"
                previewAuthor="Ken Tandrian"
                // @ts-ignore
                authorURL="https://github.com/KenTandrian"
                pitch={10}
                yaw={180}
                hfov={110}
                autoRotate={2}
                autoLoad
                compass
                disableKeyboardCtrl
                ref={panImage}
                onMouseup = {(event: any) => {
                    setPitch(panImage.current.getViewer().mouseEventToCoords(event)[0]);
                    setYaw(panImage.current.getViewer().mouseEventToCoords(event)[1]);
                }}
            >
                <Pannellum.Hotspot
                    type='custom'
                    pitch={-1.4}
                    yaw={113.6}
                    handleClick={() => startTransition(() => navigate('/page2'))}
                    // @ts-ignore
                    name='image info'
                />
                <Pannellum.Hotspot
                    type='info'
                    pitch={12}
                    yaw={114.5}
                    text='Go To Page 2'
                />
                <Pannellum.Hotspot
                    type='info'
                    pitch={75}
                    yaw={75}
                    text='SUN'
                />
            </Pannellum>
        </div>
    )
}

export default Page1;