import { startTransition, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Pannellum } from "pannellum-react";

import './style.css';

const Page2 = () => {
    let navigate = useNavigate();
    const [yaw, setYaw] = useState(0);
    const [pitch, setPitch] = useState(0);
    const [image] = useState('https://pannellum.org/images/jfk.jpg');
    const [hotspots] = useState([
        {
            name: "page1",
            type: "custom",
            pitch: 2.7,
            yaw: 122.7,
            navigate: "/",
        },
        {
            name: "page3",
            type: "custom",
            pitch: 0.7,
            yaw: -151,
            navigate: "/page3",
        },
        {
            name: "info1",
            type: "info",
            pitch: 3.13,
            yaw: -13.7,
            navigate: "",
        },
    ])
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
                {
                    hotspots.map((hotspot, index) => {
                        const { name, type, pitch, yaw } = hotspot;
                        return (
                            <Pannellum.Hotspot
                                name = {name}
                                // @ts-ignore
                                type = {type}
                                pitch = {pitch}
                                yaw = {yaw}
                                handleClick = {
                                    () => type === 'custom' && startTransition(() => navigate(hotspot.navigate))
                                }
                                text = {name}
                                key = {index}
                            />
                        )
                    })
                }
            </Pannellum>
        </div>
    )
}

export default Page2;