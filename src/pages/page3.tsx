import { startTransition, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Pannellum } from "pannellum-react";

import './style.css';

const Page3 = () => {
    let navigate = useNavigate();
    const [yaw, setYaw] = useState(0);
    const [pitch, setPitch] = useState(0);
    const [image] = useState("https://pannellum.org/images/cerro-toco-0.jpg");
    const [hotspots] = useState([
        {
            name: "page2",
            type: "custom",
            pitch: -2.5,
            yaw: 164.6,
            navigate: "/page2",
        },
        {
            name: "INI AKU",
            type: "info",
            pitch: 1.6,
            yaw: 177,
            navigate: "",
        },
    ]);
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
                    hotspots.map((hotspot, idx) => {
                        const { name, type, pitch, yaw } = hotspot;
                        return(
                            <Pannellum.Hotspot 
                                name={name}
                                // @ts-ignore
                                type={type}
                                pitch={pitch}
                                yaw = {yaw}
                                handleClick={() => type === 'custom' && startTransition(() => navigate(hotspot.navigate))}
                                text={name}
                                key={idx}
                            />
                        )
                    })
                }
            </Pannellum>
        </div>
    )
}

export default Page3;