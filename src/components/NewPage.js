import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Markdown from "markdown-to-jsx";
import {New} from "../api/new";

function NewPage() {
    const [isLoading, setIsLoading] = useState(true),
        [data, setData] = useState(),
        {path} = useParams();

    useEffect(() => {
        new New(path).get()
            .then(res => {
                setData(res);
                setIsLoading(false);
            })
            .catch(err => console.log(err));

    }, [path]);

    return (
        <>
            {!isLoading &&
                <>
                    <h1>{data.data.title}</h1>
                    <span>{data.data.desc}</span>
                    <div>
                        <Markdown>{data.content}</Markdown>
                    </div>
                </> 
            }
        </>
    );
}

export {NewPage}