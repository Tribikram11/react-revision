import useToggle from "../hooks/useToggle"

function CollapsePanel() {
    const [expand, control] = useToggle(false);

    return (<>
        <button onClick={control}>{expand ? 'hide' : 'show'}</button>
        {expand &&
            <p>tutu</p>

        }
    </>)
}

export default CollapsePanel